import LikeButton from './LikeButton.js'
import Container from './components/container.js'
function App() {
  return (<Container>
    <LikeButton/>
    <div>App</div>
  </Container>)
}

const app = document.getElementById('App');
const root = ReactDOM.createRoot(app);
root.render(<App/>);