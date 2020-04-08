import React from 'react';
import logo from './logo.svg';
import './App.css';
import smiley from './smiley.jpg';
import flower from './flower.jpg';


class App2 extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      fullname:''
    }
  }
  updateInput=(event)=>{
    console.log(event.target.value);
    //this.setState({[event.target.name]:event.target.value});
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  render(){
    const {fullname} = this.state
    return (
      <div>
        <style>{'body { background-color: lightblue; padding-left:50px; }'}</style>
        <h1 style={{color:'red', textAlign:'center'}}>Welcome to my React App</h1>
        
      <p>Enter here <input type="text" name="fullname" onChange={this.updateInput}/></p>

      
      <p style={{ backgroundColor: 'white', width: '200px', height: '200px' }}>fullname is {fullname}</p>
      <button onClick={()=>alert('React is Amazing')}>Click here to know a secret</button>
      
      <img src={smiley} width="400" align="right" alt="Done smile"/>
      <table>
        <tr>
          <td></td> <td><img src={flower} width="100" alt="Done smile"/></td> <td></td>
          <td><img src={flower} width="100" alt="Done smile"/></td>
        </tr>
        <tr>
          <td><img src={flower} width="100" alt="Done smile"/></td><td></td> 
           <td><img src={flower} width="100" alt="Done smile"/></td>
           <td></td>
           <td><img src={flower} width="100" alt="Done smile"/></td>
        </tr>
      </table>

      </div>
    );
  }
  
}

export default App2;
