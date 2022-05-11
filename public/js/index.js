import LikeButton from './LikeButton.js';
import Container from './components/container.js';
function App() {
  return React.createElement(
    Container,
    null,
    React.createElement(LikeButton, null),
    React.createElement(
      'div',
      null,
      'App'
    )
  );
}

var app = document.getElementById('App');
var root = ReactDOM.createRoot(app);
root.render(React.createElement(App, null));