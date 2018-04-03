//import {square} from './utils.js';
import validator from 'validator';

console.log(validator.isEmail('test'));

console.log('utils is loading');

const square = (x) => x*x;

export {square};