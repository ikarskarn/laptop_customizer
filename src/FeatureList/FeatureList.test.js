import React from 'react';
import ReactDOM from 'react-dom';
import Selection from './Selection.js';

describe('Selection', () => {
   it('should render without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<Selection/>, div);
       ReactDOM.unmountComponentAtNode(div);
   }); 
});