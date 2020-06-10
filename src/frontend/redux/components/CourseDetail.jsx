import React, { Component } from 'react';
import Rating from 'react-rating';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Modal from '../common/Modal';
import Alert from '../common/Alert';

const RATES = {
  1: 'Rất tệ',
  2: 'Tệ',
  3: 'Bình thường',
  4: 'Hay',
  5: 'Rất hay'
}

export default class CourseDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rate: null,
      is_show_rating_modal: false,
      rate_name: null,
      alert: null
    }

    this.submitRatingCourse = this.submitRatingCourse.bind(this);
  }

  submitRatingCourse() {
    //Fixme
    this.setState({
      is_show_rating_modal: false,
      alert: 'Cảm ơn sự đánh giá của bạn!'
    });
  }

  render() {
    const { rate, rate_name, alert } = this.state;

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
      <div>
        {
          this.state.is_show_rating_modal &&
          <Modal
            className="RatingModal"
            headerName="Đánh giá khóa học"
            headerClassName="u-fontWeightBolder"
            content={content_modal}
            handleClose={() => this.setState({
              is_show_rating_modal: false
            })}
            modalFooter={modalFooter}
          />
        }
        {
          alert &&
          <div className="row">
            <div className="col-6" />
            <div className="col-6">
              <Alert
                className="u-marginTopSmall u-marginRight"
                variant="success"
                content={alert}
              />
            </div>
          </div>
        }
        <div className="u-border u-padding u-rounded">
          <div className="u-fontWeightBolder u-textBase">
            Mạng máy tính
          </div>
          <div className="u-marginTopSmall">
            <span>Giới thiệu: </span>
            <span className="u-textSmall">Trang bị cho sinh viên những kiến thức cơ bản về cấu trúc và tổ chức máy tính, lập trình máy tính và cơ chế thực hiện chương trình, kỹ năng cơ bản để sử dụng máy tính hiệu quả trong học tập, nghiên cứu và làm việc trong các ngành kỹ thuật, công nghệ. </span>
          </div>
          <div className="u-marginTopXSmall">
            <span>Mã học phần: </span>
            <span>IT1240</span>
          </div>
          <div>Viện: Công nghệ thông tin và truyền thông</div>
          <div className="u-marginTopXSmall">Kỳ 20192</div>
          <div className="u-marginTopXSmall">
            <span>Số sinh viên: </span>
            <span>50</span>
          </div>
          {/* <div className="u-marginTopXSmall">
            <span>Nội dung: </span>
            <span className="u-textSmall">Tin học căn bản: Biểu diễn thông tin trong máy tính. Hệ thống máy tính. Hệ điều hành Linux. Lập trình bằng ngôn ngữ C: Tổng quan về ngôn ngữ C. Kiểu dữ liệu, biểu thức và cấu trúc lập trình trong C. Các kiểu dữ liệu phức tạp: con trỏ, mảng và xâu trong C. Mảng. Cấu trúc. Tệp dữ liệu.</span>
          </div> */}
          <div className="u-marginTopXSmall">
            <span>Giảng viên hướng dẫn: </span>
            <span>Ila Wyman</span>
          </div>
          <a href="/#" className="u-marginTopXSmall">Xem danh sách lớp sinh viên</a>
          <div className="u-marginTopXSmall">
            <div>Danh sách bài học</div>
            <ul>
              {/* Fixme */}
              <li>
                <Link to="/lesson">Tuần 1</Link>
              </li>
              <li><a href="/#">Tuần 2</a></li>
              <li><a href="/#">Tuần 3</a></li>
              <li><a href="/#">Tuần 4</a></li>
            </ul>
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
