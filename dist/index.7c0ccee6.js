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

*/ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child1"
}, [
    React.createElement("h1", {
        id: "h1"
    }, "i am the h1 tag"),
    React.createElement("h1", {
        id: "h1"
    }, "i am the h1 tag")
]), React.createElement("div", {
    id: "child1"
}, [
    React.createElement("h1", {
        id: "h1"
    }, "i am the h1 tag"),
    React.createElement("h1", {
        id: "h1"
    }, "i am the h1 tag")
]));
const root = ReactDOM.createRoot(document.getElementById("parent"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
