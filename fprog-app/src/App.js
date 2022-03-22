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

// review function argument
const add = (a, b) => {
  return a + b;
}

let a = 100, b = 200;
console.log(`${a} + ${b} = ${add(a, b)}`);
p();

// object
const obj2 = (n, g) => ({
  name: n,
  age: g
});

console.log(obj2("Herry", 5));

const person = (firstName, lastName) => ({
  first: firstName,
  last: lastName
});
console.log(person("Herry", "John"));
p();


// destructuring assignment
const sandwich = {
  a1: "12345",
  a2: "xxxx",
  a3: "yyy",
  a4: "ggg",
  a5: "zzzzz"
};

const { a2, a3 } = sandwich;
console.log(a2, a3);
p();

const getFakePerson = async() => {
  let url = "https://api.randomuser.me/?nat=US&results=1";
  let res = await fetch(url);
  let {results} = await res.json();
  console.log(results);
}

getFakePerson();
p();


const func = (message) => {
  console.log(`func: ${message}`);
}

var msg = "yyy";
const insideFunc = func => {
  func(msg.toUpperCase());
}

insideFunc(message => console.log(message));
p();

// const createScream = (Xargs) => {
//   return (Yargs) => {
//     Xargs(Yargs.toUpperCase());
//   };
// };

// const scream = createScream(message => console.log(message));

// scream("functions can be returned from other functions");
// scream("createScream returns a function");
// scream("scream invokes that returned function");
const CFun = (Xargs) => {
  return (Yargs) => {
    Xargs(Yargs.toUpperCase());
  };
};

const scream = CFun(msg => console.log(msg));

scream("iii");
scream("jjj");
scream("kkk");
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
