import logo from './logo.svg';
import './App.css';

function App() {
  
  var pizza = true;
  //console.log("pizza: " + pizza);
  logd("pizza: " + pizza);

  {
    let apple = true;
    //console.log("apple: " + apple);
    logd("apple: " + apple);
  }
  // Lexical Variable Scope
  // console.log("apple: " + apple);

  for(let i = 5 ; i >= 0 ; --i) {
    //alert("The remnants: " + i);
    let lastName = "Jay";
    let firstName = " !";
    //console.log(`${i}: ${lastName}, ${firstName}`);
    logd(`${i}: ${lastName}, ${firstName}`);
  }

  function logd(msg) {
    console.log(msg);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <p>
          My first app for react-native.
        </p>

        {/* node */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/* url */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          My first app for react-native
        </a> */}
      </header>
    </div>
  );
}

export default App;
