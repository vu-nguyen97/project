import React, { Component } from 'react';
import Rating from 'react-rating';
import { Button, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Modal from '../common/Modal';
import { addAlert } from '../actions'; 

const RATES = {
  1: 'Rất tệ',
  2: 'Tệ',
  3: 'Bình thường',
  4: 'Hay',
  5: 'Rất hay'
}

class CourseDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rate: null,
      is_show_rating_modal: false,
      rate_name: null
    }

    this.submitRatingCourse = this.submitRatingCourse.bind(this);
  }

  submitRatingCourse() {
    //Fixme
    this.setState({
      is_show_rating_modal: false,
    });
    this.props.onAddAlert('Cảm ơn sự đánh giá của bạn!');
  }

  render() {
    const { rate, rate_name } = this.state;

    const content_modal = (
      <div className="u-paddingXSmall">
        <div className="u-textCenter">
          <Rating
            // ref: http://dreyescat.github.io/react-rating/
            initialRating={rate}
            emptySymbol="fa fa-3x fa-star-o u-marginLeftXSmall u-marginRightXSmall"
            fullSymbol="fa fa-3x fa-star custom"
            onHover={rate => this.setState({ rate_name: RATES[rate] })}
            onChange={rate => this.setState({ rate })}
          />
          <div className="u-textXSmall" style={{height: '16px'}}>{rate_name}</div>
        </div>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Bình luận</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
      </div>
    );
    
    let is_disabled_rating_btn = false;
    if (rate == null) {
      is_disabled_rating_btn = true;
    }
    const modalFooter = (
      <Button
        className="u-margin u-marginTop0"
        disabled={is_disabled_rating_btn}
        onClick={this.submitRatingCourse}
      >
        Đánh giá
      </Button>
    );

    return (
      <div className="CourseDetail">
        {
          this.state.is_show_rating_modal &&
          <Modal
            className="CourseDetail-ratingModal"
            headerName="Đánh giá khóa học"
            headerClassName="u-fontWeightBolder"
            content={content_modal}
            handleClose={() => this.setState({
              is_show_rating_modal: false
            })}
            modalFooter={modalFooter}
          />
        }

        <div className="u-border u-padding u-rounded">
          <div className="u-fontWeightBolder u-textBase">
            Mạng máy tính
          </div>

          <Table className="CourseDetail-table u-marginTopSmall" striped bordered hover>
            <tbody>
              <tr>
                <td>Giới thiệu</td>
                <td>Trang bị cho sinh viên những kiến thức cơ bản về cấu trúc và tổ chức máy tính, lập trình máy tính và cơ chế thực hiện chương trình, kỹ năng cơ bản để sử dụng máy tính hiệu quả trong học tập, nghiên cứu và làm việc trong các ngành kỹ thuật, công nghệ. </td>
              </tr>
              <tr>
                <td>Mã học phần</td>
                <td>IT1240</td>
              </tr>
              <tr>
                <td>Viện</td>
                <td>Công nghệ thông tin và truyền thông</td>
              </tr>
              <tr>
                <td>Số sinh viên</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Giảng viên hướng dẫn</td>
                <td>Ila Wyman</td>
              </tr>
            </tbody>
          </Table>
          <div className="u-marginTopSmall">
            <a href="/#">Xem danh sách lớp sinh viên</a>
            <div className="u-marginTopXSmall">
              <div>Danh sách bài học</div>
              <ul>
                <li>
                  <Link to="/lesson">Tuần 1</Link>
                </li>
                <li><a href="/#">Tuần 2</a></li>
                <li><a href="/#">Tuần 3</a></li>
                <li><a href="/#">Tuần 4</a></li>
              </ul>
            </div>
          </div>

          <div className="u-marginTopXSmall u-flex u-flexJustifyEnd">
            <Button
              variant="outline-primary"
              onClick={() => this.setState({
                is_show_rating_modal: true
              })
            }>
              Đánh giá khóa học
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onAddAlert: (alert) => dispatch(addAlert(alert))
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);