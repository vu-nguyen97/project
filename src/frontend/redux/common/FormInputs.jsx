import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Form } from 'react-bootstrap';

function FieldGroup({label, ...props}) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...props} />
    </Form.Group>
  );
}

class FormInputs extends Component {
  render() {
    const { ncols, properties } = this.props;
    let row_comp = [];
    for (let i = 0; i < ncols.length; i++) {
      row_comp.push(
        <div key={i} className={ncols[i]} >
          <FieldGroup {...properties[i]} />
        </div>
      );
    }
    return (
      <Row>{row_comp}</Row>
    );
  }
}

FormInputs.propsTypes = {
  ncols: PropTypes.array,
  properties: PropTypes.array,
}

export default FormInputs;