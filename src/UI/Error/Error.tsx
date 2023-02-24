import React from 'react';
import { ErrorModel } from '../../Models/Error-Model';
import Card from '../Card/Card';
import './Error.css';

const Error = (props: ErrorModel) => {
  return (
    <Card className="center">
      <h1 className='error-message'>{props.errorMsg}</h1>
    </Card>
  );
}

export default Error;
