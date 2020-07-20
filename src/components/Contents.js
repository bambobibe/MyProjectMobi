import React , { Component } from 'react';
import Product from './Product';
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
                        {/* <Route path="/Cart" component={Cart} /> */}
                        <Route path="/About" component={About} />
                        <Route path="/Contact" component={Contact} />
                        <Product soluong ={this.props.soluong} /> 
                </table>
                
            </div>
        )
    }
}

export default Contents;