import React , { Component } from 'react';
import Product from './Product';
import Cart from './Cart';
import About from './About';
import Contact from './Contact';
import { Route} from 'react-router-dom';
class Contents extends Component{
    constructor(props){
        super(props);
    }
    
    render(){ 
        return (  
            <div className="Contents">
                
                <table class="table table-bordered table-hover">
                        <Route exact path="/" render={props => <Product soluong ={this.props.soluong}  />} />
                        <Route path="/Cart" component={Cart} />
                        <Route exact path="/About" component={About} />
                        <Route exact path="/Contact" component={Contact} />
                </table>
                
            </div>
        )
    }
}

export default Contents;