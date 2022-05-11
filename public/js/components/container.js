function container(props) {
  return React.createElement(
    "div",
    { className: "container" },
    props.children
  );
}

export default container;