import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home color="purple" name="Iris" city="Sydney"/>
      <About bio="Hello World" github="https://github.com/msbluemu" linkedin="https://www.linkedin.com/in/qianyun-mu-06764912a/"/>
    </div>
  );
}

export default App;
