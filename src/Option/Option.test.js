import React from 'react';
import ReactDOM from 'react-dom';
import Part from './Part.js';

describe('Part', () => {
   it('should render without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<Part/>, div);
       ReactDOM.unmountComponentAtNode(div);
   }); 
});