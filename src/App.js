import React , { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'; 
import { BrowserRouter, Route, Link } from "react-router-dom";

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
    goTop = ()=>{
        document.documentElement.scrollTop = 0;
    };
    render(){
        return (
            <BrowserRouter>
                <div className="App">
                        <Header soluong={this.state.soluong}/>
                        <Main soluong={this.tang} />
                        <Footer goTop = {this.goTop}/>
                        
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
