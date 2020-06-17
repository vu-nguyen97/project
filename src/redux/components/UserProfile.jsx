import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import FormInputs from '../common/FormInputs';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      is_edit_profile: false,

      fields: {
        first_name: 'vu',
        last_name: 'nguyen',
        email: '',
        phone: '',
        mssv: '',
        institute: '',
        address: '',
        descriptions: ''
      }
    }
  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

  editUserAvatar = () => {
    this.setState({
      selectedFile: null
    })
  }

  onChangeField = (field_name, field_value) => {
    // console.log('field_name, field_value', field_name, field_value);
    const fake = { //Fixme
      first_name: 'vu'
    }
    if (fake[field_name] === field_value) {
      return null;
    }
    this.setState({
      fields: Object.assign({}, this.state.fields, {
        field_name: field_value
      }),
      is_edit_profile: true
    });
  }

  render() {
    const { selectedFile, is_edit_profile, fields } = this.state;
    const {
      first_name,
      last_name,
      email,
      phone,
      mssv,
      institute,
      address,
      descriptions
    } = fields;

    return (
      <div className="UserProfile u-flexGrow1 u-padding">
        <div className="row">
          <div className="col-8">
            <div className="UserProfile-info u-shadowLight u-rounded u-border u-padding">
              <div className="u-textLarge u-marginBottomSmall">Thông tin cá nhân</div>
              <FormInputs
                ncols={['col-6', 'col-6']}
                properties={[
                  {
                    label: 'TÊN',
                    defaultValue: first_name,
                    onChange: event => this.onChangeField('first_name', event.target.value),
                  },
                  {
                    label: 'HỌ',
                    defaultValue: last_name,
                    onChange: event => this.onChangeField('last_name', event.target.value),
                  }
                ]}
              />
              <FormInputs
                ncols={['col-6', 'col-6']}
                properties={[
                  {
                    label: 'MSSV',
                    defaultValue: mssv,
                    onChange: event => this.onChangeField('mssv', event.target.value),
                  },
                  {
                    label: 'VIỆN',
                    defaultValue: institute,
                    onChange: event => this.onChangeField('institute', event.target.value),
                  }
                ]}
              />
              <FormInputs
                ncols={['col-6', 'col-6']}
                properties={[
                  {
                    label: 'EMAIL',
                    defaultValue: email,
                    onChange: event => this.onChangeField('last_name', event.target.value),
                  },
                  {
                    label: 'ĐIỆN THOẠI',
                    defaultValue: phone,
                    onChange: event => this.onChangeField('phone', event.target.value),
                  }
                ]}
              />
              <FormInputs
                ncols={['col-12']}
                properties={[
                  {
                    label: 'ĐỊA CHỈ',
                    defaultValue: address,
                    onChange: event => this.onChangeField('address', event.target.value),
                  }
                ]}
              />
              <div className="row">
                <div className="col-12">
                  <Form.Group>
                    <Form.Label>GIỚI THIỆU</Form.Label>
                    <Form.Control as="textarea"
                      rows="4"
                      defaultValue={descriptions}
                      placeholder="Thông tin giới thiệu về bạn"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="u-textCenter">
                <Button disabled={!is_edit_profile}>Lưu thay đổi</Button>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="UserProfile-userCard u-shadowLight u-rounded">
              <div className="UserProfile-userCard-bg u-bgMedium">
              </div>
              <div className="UserProfile-userCard-content u-flex u-flexCol u-flexAlignItemsCenter">
                <div className="UserProfile-userCard-content-avatar u-roundedCircle">
                  <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                    alt="ảnh đại diện"
                    className="u-imgCover"
                  />
                </div>
                <div className="u-marginBottom u-marginTopSmall u-textCenter">
                  <div>Elmo Okuneva</div>
                  <div className="u-marginTopSmall u-flex u-flexAlignItemsEnd u-textSmall">
                    <label htmlFor="upload-photo"
                      className="u-border u-cursorPointer u-shadowLight u-roundedPill 
                        u-paddingXSmall u-paddingLeftSmall u-paddingRightSmall u-margin0
                      "
                    >
                      Chọn ảnh
                    </label>
                    {
                      selectedFile &&
                      <div className="u-marginLeftSmall">{selectedFile.name}</div>
                    }
                  </div>
                  <input type="file" name="file" id="upload-photo" onChange={this.onChangeHandler}/>
                  {
                    selectedFile && 
                      <Button 
                        className="u-marginTopSmall"
                        variant="outline-primary"
                        size="sm"
                        onClick={this.editUserAvatar}
                      >
                        Upload 
                      </Button>
                  }
                </div>
              </div>
            </div>

            {/* <div>Đổi mật khẩu</div> */}
          </div>
        </div>
      </div>
    );
  }
}
