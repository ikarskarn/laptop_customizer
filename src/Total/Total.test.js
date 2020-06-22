import React from 'react';
import ReactDOM from 'react-dom';
import Total from './Total.js';

describe('Total', () => {
   it('should render without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<Total/>, div);
       ReactDOM.unmountComponentAtNode(div);
   }); 
});