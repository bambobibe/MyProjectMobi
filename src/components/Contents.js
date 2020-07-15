import React , { Component } from 'react';
import Product from './Product';
class Contents extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     task : [
        //         {
        //             images : './img/products/1.jpg',
        //             price : '10.000.000 VNĐ',
        //             isHot: true
        //         },
        //         {
        //             images : './img/products/2.jpg',
        //             price : '10.000.000 VNĐ',
        //             isHot: true
        //         },
        //         {
        //             images : './img/products/3.jpg',
        //             price : '10.000.000 VNĐ',
        //             isHot: true
        //         }
        //     ]
        // }
    }
    render(){
        return (  
            <div className="Contents">
                
                <table class="table table-bordered table-hover">
                    
                        <Product soluong ={this.props.soluong} /> 
                   
                </table>
                
            </div>
        )
    }
}

export default Contents;