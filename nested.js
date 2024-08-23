const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Hello i am H1 Tag"),
        React.createElement("h2", {}, "Hello i am H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "Hello i am H1 Tag"),
    React.createElement("h4", {}, "Hello i am H2 Tag"),
  ]),
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
