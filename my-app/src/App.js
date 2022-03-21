import logo from './logo.svg';
import './App.css';

function App() {
  
  // Function Expressions
  const logE = function(msg) {
    console.log(msg);
  }

  var pizza = true;
  //console.log("pizza: " + pizza);
  logd("pizza: " + pizza);
  logE("pizza: " + pizza);

  {
    let apple = true;
    //console.log("apple: " + apple);
    logd("apple: " + apple);
    logE("apple: " + apple);
  }
  // Lexical Variable Scope
  // console.log("apple: " + apple);
    
  for(let i = 1; i >= 0 ; --i) {
    //alert("The remnants: " + i);
    let lastName = "Jay";
    let firstName = " !";
    //console.log(`${i}: ${lastName}, ${firstName}`);
    logd(`${i}: ${lastName}, ${firstName}`);
    logE(`${i}: ${lastName}, ${firstName}`);
  }

  function logd(msg) {
    console.log(msg);
  }

  // function expression returns a string
  const createComplimennt = function(fistname, mesesage) {
    return `${mesesage}, ${fistname}`;
  }

  console.log(createComplimennt("Jay", "Welcome"));

  
  function logAct(name = "Shane McConkey", act="skiing") {
    console.log(`${name} loves ${act}`);
  }

  logAct();
  
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
