import React from 'react';
import ReactDOM from 'react-dom';
import Price from './Price.js';

describe('Price', () => {
   it('should render without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<Price/>, div);
       ReactDOM.unmountComponentAtNode(div);
   }); 
});