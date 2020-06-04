import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer u-marginTopLarge u-paddingTop u-paddingBottom u-bgMedium">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="u-marginBottomSmall u-fontWeightBolder">THÔNG TIN</div>
              <div>Công tác sinh viên</div>
              <div>Đào tạo Đại Học</div>
              <div>Thông tin sinh viên</div>
              <div>Tuyển Sinh</div>
            </div>
            <div className="col-md-4">
              <div className="u-marginBottomSmall u-fontWeightBolder">LIÊN HỆ</div>
              <div>SDT: (+084) 35 772 5251</div>
              <div>Email: vu23697@gmail.com</div>
            </div>
            <div className="col-md-4">
              <div className="u-marginBottomSmall u-fontWeightBolder">MẠNG XÃ HỘI</div>
              <div>
                <i style={{color: '#0E63BE'}} className="fa fa-2x fa-facebook-official u-marginRight" />
                <i style={{color: '#bc0014'}} className="fa fa-2x fa-twitter u-marginRight" />
                <i style={{color: '#28aae1'}} className="fa fa-2x fa-pinterest-square u-marginRight" />
                <i style={{color: '#f63e28'}} className="fa fa-2x fa-google u-marginRight" />
              </div>
            </div>
          </div>

          <div className="Footer-copyright u-paddingTop">
            <div className="u-textCenter">&copy; BK Elearning 2020</div>
          </div>
        </div>
      </footer>
    )
  }
}
