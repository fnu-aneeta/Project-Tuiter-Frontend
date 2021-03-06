import React from 'react';
import ReactDOM from 'react-dom';
//import HelloWorld from "./hello";
//import todos from './components/todos.json';
// import './index.css';
// import 'AppColor.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootswatch/dist/cerulean/bootstrap.min.css";


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


