import logo from './logo.svg';
import './App.css';

function App() {
  function loginButtonForKakao() {
    window.location.href =
      "https://kauth.kakao.com/oauth/authorize?client_id=95c2b6fc38e21b3d6d255e32020e7b75&redirect_uri=http://localhost:3001/auth&response_type=code";
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={loginButtonForKakao}>
          <img src={logo} className="App-logo" alt="logo" />
        </button>
      </header>
    </div>
  );
}

export default App;
