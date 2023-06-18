import React, { Component } from 'react';
import  ReactDOM  from 'react-dom/client';


//react element is a object
//react elememt is equal to dom element

// const heading = React.createElement("H1", {id:"heading"}, "namaste react 🍎");

//jsx is not a react, jsx has similar syntax like html 

//JSX => babel transpile it to React.createElement => ReactElement-JS => HTML Element
const jsxheading = <h1 id='heading'>namaste react 🍎</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

//render will replace everything in that dom not append
root.render(jsxheading);

//React component
// 1. class based component -- OLD
// 2. functional based component -- NEW

//what is react functional Component?
//normal javascript function

const headingComponent = () =>{
    return <h1>This is heading component</h1>
}

//const headingComponent1 = () => <h1>This is heading component</h1>; // true

//const headingComponent2 = () => { return <h1> This is heading component</h1>}; // true