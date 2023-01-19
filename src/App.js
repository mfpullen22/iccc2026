import './App.css';
import crypto from './assets/crypto.jpg';
import logo from './assets/exeter_logo.jpg';
import campus from './assets/exeter_pic.png';
import background from './assets/background1.jpg';

function App() {
  return (
    <div className="font-link" style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      //background:  "#e9c46a",
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      color: "#264653"
      
    }}>
      <div>
      <img src={crypto} alt="crypto" style={{height: "500px"}}/>
      </div>
      <div className="font-link" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: "20px"
    }}>
      <h2>12th International Conference on Cryptococcus & Cryptococcosis </h2>
      <h2>May/June 2026</h2>
      <h2>Exeter, UK</h2>
      <img src={logo} alt="exeter logo" style={{height: "100px", width: "500px"}}/>
      <img src={campus} alt="exeter campus pic" style={{height: "200px", width: "500px"}}/>
      <h3>More information to come, be sure to check back periodically!</h3>
      </div>
    </div>
  );
}

export default App;
