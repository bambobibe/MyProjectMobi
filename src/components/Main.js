import React , { Component } from 'react';
import Company from './Company'
import Category from './Category'
import Contents from './Contents'
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            isClickButton : true 
        }
    }
   onClickButton = ()=>{
       this.setState({
        isClickButton : !this.state.isClickButton
       });
        
    }
    render(){
        var isClickButton = this.state.isClickButton;
        return (  
            <div className="main" style={{"background-color":"#caf373"}}>
                <Company />
                <div className="row">
                    <div className={ isClickButton ? "col-3" : ""}>
                        <Category /> 
                    <button type="button" class="btn btn-large btn-block btn-primary"
                        onClick={this.onClickButton}
                    ><i class="fa fa-bars" aria-hidden="true"></i></button>
                    </div>
                    <div className={isClickButton ? "col-9" : ""}>
                        <img  className="black" src="./img/smallBanners/blackFriday.gif "/>
                        <Contents soluong={this.props.soluong} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
