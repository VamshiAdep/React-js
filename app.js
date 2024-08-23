// Create a React element using React.createElement.
// This function returns an object representing a virtual DOM element.
// It does not create an actual DOM element, but a description of what should be rendered.

const heading = React.createElement(
    "h1",                // The type of HTML element to create, here an <h1> element.
    { id: "hello" },     // Props object: an object where each key is an attribute or prop to be applied to the element. Here, an id attribute with the value "hello".
    "Hello React from ReactJS using CDN" // The third argument is the content or children of the element. This will be the inner text of the <h1> element.
  );
  
  // Get the root DOM element in which to render the React component.
  // ReactDOM.createRoot is used to initialize a React root for rendering components.
  // document.getElementById("root") finds the existing DOM element with the id "root".
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  // Render the React element created above into the root DOM element.
  // The virtual DOM element described by 'heading' is converted into a real DOM element and inserted into the root DOM element.
  root.render(heading);
  


 