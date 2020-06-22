import React from 'react';
import ReactDOM from 'react-dom';
import PartPicker from './PartPicker.js';

describe('PartPicker', () => {
   it('should render without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<PartPicker/>, div);
       ReactDOM.unmountComponentAtNode(div);
   }); 
});