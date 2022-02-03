import React from "react";
import "./style.css";



//main parent
export default function App() {
  const person={name:'ahmed',age:20}
  return<>
  <Child2 mp={person}/>
  <Child1 mp={person}/>

  </>
   }

// child1
class Child1 extends React.Component{
  render(){
    return<>i am {this.props.mp.name} child1 </>
  }
}

// Child2
class Child2 extends React.Component{
  render(){
     return<>i am {this.props.mp.name} child2 </>
  }
}
