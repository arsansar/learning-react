import React from 'react';
import  ReactDOM  from 'react-dom/client';

/*

<div class="parent">
    <div class="child1">
        <h1>i am the h1 tag</h1>
        <h2>i am the h2 tag</h2>
    </div>

     <div class="child2">
        <h1>i am the h1 tag</h1>
        <h2>i am the h2 tag</h2>
    </div>

</div>

*/

//react element is a object
//react elememt is equal to dom element

// const heading = React.createElement("H1", {id:"heading"}, "namaste react 🍎");

//jsx is not a react, jsx has similar syntax like html 

//JSX => babel transpile it to React.createElement => ReactElement-JS => HTML Element
const jsxheading = <h1 id='heading'>namaste react 🍎</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

//render will replace everything in that dom not append
root.render(jsxheading);