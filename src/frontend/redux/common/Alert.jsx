import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import ClassNames from  'classnames';

class CommonAlert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_show_alert: true,
      is_visible_alert: true
    }
  }

  componentDidMount() {
    if (this.state.is_show_alert === true) {
      setTimeout(() => {
        this.setState({
          is_visible_alert: false
        })
      }, 3000);
      //Fixme
      setTimeout(() => {
        this.setState({
          is_show_alert: false
        })
      }, 2500);
    }
  }

  render() {
    const { is_show_alert } = this.state;
    const {
      className,
      variant,
      content,
      size,
      icon
    } = this.props;

    return (
      <div>
        {
          is_show_alert &&
          <Alert variant={variant}
            className={ClassNames(
              'Alert',
              {'is-visible': this.state.is_visible_alert},
              className
            )}
          >
            <div className="Alert-icon">
              <i 
                className={ClassNames(
                  'fa',
                  { [`fa-${size}`]: size },
                  { [`fa-${icon}`]: icon },
                )}
                onClick={() => this.setState({
                  is_show_alert: false
                })}
              />
            </div>
            {content}
          </Alert>
        }
      </div>
    )
  }
}

CommonAlert.propsTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string,
  size: PropTypes.string,
}

CommonAlert.defaultProps = {
  icon: 'times'
}

export default CommonAlert;