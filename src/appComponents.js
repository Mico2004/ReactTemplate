import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss'
import 'normalize.css/normalize.css';


console.log(validator.isEmail('test'));

// IndecisionApp.defaultProps = {
//     options:['asas']
// };

ReactDOM.render(<IndecisionApp options={['Doctor','bar','super']} />, document.getElementById('app'));