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

  
  function logAct1(name = "Shane McConkey", act="skiing") {
    console.log(`${name} loves ${act}`);
  }

  logAct1();

  const defPerson = {
    name: {
      first: "Shane",
      last: "McConkey"
    },
    favActivity: "skiing"
  };

  function logAct2(person = defPerson) {
    console.log(`${person.name.first} ${person.name.last} loves ${person.favActivity}`);
  }

  logAct2();

  {
    const lordlyA = function(firstname) {
      console.log(`${firstname} of Canterbury`);
    }
 /* arror function */
    const lordlyB = firstname => {
      console.log(`${firstname} of Canterbury`);
    };
  
    lordlyA("Jay");
    lordlyB("Jay");
  }

  /* return */
  {
    const lordlyA = function(firstname) {
      return `${firstname} of Canterbury`;
    }

    /* arrow function return  */
    const lordlyB = firstname => `${firstname} of Canterbury`;

    console.log("test return: " + lordlyA("Jay"));
    console.log("test return: " + lordlyB("Jay"));
  }

  {
    const lordly = (firstname, land) => {
      if (!firstname) {
        throw new Error("A first name is required to lordly");
      }
      if (!land) {
        throw new Error("A lord must have a land");
      }
      return `${firstname} of ${land}`;
    }
    
    console.log(lordly("Kelly", "Sonoma"));
  }
  
   /* new object for react-native */
  {
    const person = (firstname, lastname) => ({
      first: firstname,
      last: lastname
    });

    console.log(person("Flad", "Hanson"));
  }

  { /* used by {} disconstruct */
    
    const lordly = ({firstname}) => {
      console.log(`${firstname} of Canterbury`);
    }

    const person = {
      firstname: "Bill",
      lastname: "Willson"
    };
 
    lordly(person);
  }

  { /* array used by {} disconstruct */
    const [firstAnimal] = ["Horse", "Cat", "Dog"];
    console.log(firstAnimal);

    const[, ,thirdAnimal] = ["Horse", "Cat", "Dog"];
    console.log(thirdAnimal);
  }

  {
    const peaks = ["Tallac", "Ralston", "Rose"];
    const canyons = ["Ward", "Blackwood"];
    const tahoe = [...peaks, ...canyons];

    console.log(tahoe.join(", "));
  }

  {
    const peaks = ["Tallac", "Ralston", "Rose"];
    console.log(peaks.join(", "));
    peaks.reverse();
    console.log(peaks.join(", "));
  }

  {
    const peaks = ["Tallac", "Ralston", "Rose"];
    console.log(peaks.join(", "));
    const rpeaks = [...peaks].reverse();
    console.log(peaks.join(", "));
    console.log(rpeaks.join(", "));
  }

  { // get remain
    const lakes = ["Donner", "Marlette", "Fall Leaf", "Cascade"];
    const [finish, ...other] = lakes.reverse();

    console.log(other.join(", "));
  }

  { // much parameter

    function directions(...args) {
      console.log(args.join(", "));
    }

    directions("Truchee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");
  }

  var randomMe = "https://api.randomuser.me/?net=US&results=1";
  //console.log(fetch(randomMe));
  // console.log("\nnew line");
  // fetch(randomMe)
  //   .then(res => res.json())
  //   .then(json => json.results)
  //   .then(console.log)
  //   .catch(console.error)


  console.log("\nnew line");
  const getFakePerson = async() => {
    try {
      console.log("\nbegin");
      let ret = await fetch(randomMe);
      let { results } = await ret.json();
      console.log(results);
      console.log("\nfinish");  
    } catch (error) {
      console.error(error);
    }
  };

  getFakePerson();


  console.log("\n getPeople new line");
  const getPeople = count =>
    new Promise((resolves, rejects) => {
      const url = `https://api.randomuser.me/?nat=US&results=${count}`;
      const request = new XMLHttpRequest();
      request.open("GET", url);
      request.onload = () => 
        request.status === 200
          ? resolves(JSON.parse(request.response).results)
          : rejects(Error(request.statusText));
      request.onerror = err => rejects(err);
      request.send();
      
    });

  getPeople(5)
    .then(member => console.log(member))
    .catch(error => 
       console.error(`getPeople failed: ${error.mesesage}`));


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
