import {
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import Calculator from './calculator';
import QuoteDisplay from './fetchQuote';
import Home from './home';

function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-heading">Math Magicians</div>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/fetchQuote">Quotes</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/fetchQuote" element={<QuoteDisplay />} />
      </Routes>
    </>
  );
}

export default App;
