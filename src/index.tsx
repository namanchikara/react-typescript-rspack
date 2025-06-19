import './styles.css';
import * as ReactDOM from 'react-dom/client';

const App = () => <h1>Hello World!</h1>;

const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container missing in index.html");
}
const root = ReactDOM.createRoot(container);
root.render(<App />);
