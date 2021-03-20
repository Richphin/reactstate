import logo from './logo.svg';
import './App.css';
import {Component, useState } from "react"

// class App extends Component {
//   constructor() {
//     super();
//     this.state = { age: 50 }
//   }
//   handleclick = () => {
//     //console.log("button clicked")
//     let newage = this.state.age + 1;
//     this.setState({age: newage});
//   }
//   render(){
//     return (
//       <div>
//         <h1>Age is {this.state.age}</h1>
//         <button onClick= {this.handleclick}>Click me!!!</button>
//       </div>
//     );
//   }

// }

function App() {
  const [state,setState] = useState({age: 58})

  const handleclick = () =>{
    let newage = state.age + 4;
    setState({age: newage})
    //console.log("button clicked")
  }
  return (
    <div>
         <h1>Age is {state.age}</h1>
         <button onClick={handleclick}>Click me!!!</button>
     </div>
  )
}


export default App;
