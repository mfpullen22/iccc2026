import './App.css';
import crypto from './assets/crypto.jpg';

function App() {
  return (
    <div className="font-link" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background:  "#e9c46a",
      color: "#264653"
      
    }}>
      <div>
      <img src={crypto} alt="crypto"/>
      </div>

      <h1>12th International Conference on Cryptococcus & Cryptococcosis </h1>
      <h2>May/June 2026</h2>
      <h2>Exeter, UK</h2>
      <h3>More information to come, be sure to check back periodically!</h3>
    </div>
  );
}

export default App;
