import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

import React from 'react';

function Login({ onClose }) {
  return (
    <div>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
