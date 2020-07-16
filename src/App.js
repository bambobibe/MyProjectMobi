import React , { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            soluong : 0 
        }
    }
 tang = () =>{
    document.getElementById("cart").style.transform= "scale(1.1)";
    document.getElementById("cart").style.transition= "all 0.1s";
    setTimeout(function(){ document.getElementById("cart").style.transform= "scale(1.0)" }, 300);
    this.setState({
        soluong : this.state.soluong +1 
    });
 }
    render(){
        return (
            <div className="App">
                    <Header soluong={this.state.soluong}/>
                    <Main soluong={this.tang}/>
                    <Footer />
            </div>
        )
    }
}

export default App;
