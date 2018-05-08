import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import googleFonts from 'google-fonts';
import App from './../src/app';

googleFonts.add({
  Gudea: ['400', '500', '700']
});
ReactDOM.render(<App />, document.getElementById('root'));
