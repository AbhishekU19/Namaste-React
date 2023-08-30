const heading = React.createElement("h1", {}, "Hello World from React");
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


// We can actually use React without JSX and below is the Example of it just JSX makes our life easier and saves time\
// So order of files really important when it comes to react App.js file should be below react developemnt  
const parent=React.createElement( "div", {id :"parent"},
React.createElement(
    "div", {id :"child"}, [
    React.createElement("h1",{},"I'm H1 Tag"),
    React.createElement("h1",{},"I'm H2 Tag")
    ]),
    React.createElement(
        "div", {id :"child"}, [
        React.createElement("h1",{},"I'm H1 Tag"),
        React.createElement("h1",{},"I'm H2 Tag")
        ])
    );


root.render(parent);
