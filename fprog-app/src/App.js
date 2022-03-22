import logo from './logo.svg';
import './App.css';

var exampleNo = 0;
var p = () => {
  ++exampleNo;
  console.log(`New Line: ${exampleNo} \n`);
}

var msg = "In JavaScript, functions are veriables";
var log = function(message) {
  console.log(message);
}
log(msg);
p();

const log2 = (message) => {
  console.log(message);
}
log2(msg);
p();

const obj = {
  message: msg,
  log3(message) {
    console.log(message);
  }
};

obj.message = "Welcome";
obj.log3(obj.message);
p();

const funcA = [
  "They can be inserted into array",
  message => log(message),
  "like variables",
  message => log(message)
];

funcA[1](funcA[0]);
funcA[3](funcA[2]);
p();

const insideFn = logger => {
  logger("They can be sent to other functions as arguments");
  console.log(logger);
};
insideFn(message => console.log(message));
p();

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p> 
        Functional Programming with JavaScript.
      </p>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
