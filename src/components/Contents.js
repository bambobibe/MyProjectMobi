import React , { Component } from 'react';
import Product from './Product';
class Contents extends Component{
    constructor(props){
        super(props);
        this.state = {
            task : [
                {
                    images : './img/products/1.jpg',
                    price : '10.000.000 VNĐ'
                },
                {
                    images : './img/products/2.jpg',
                    price : '10.000.000 VNĐ'
                },
                {
                    images : './img/products/3.jpg',
                    price : '10.000.000 VNĐ'
                }
            ]
        }
    }
    render(){
        return (  
            <div className="Contents">
                
                <table class="table table-bordered table-hover">
                    <tr>
                        {
                            this.state.task.map((data,index)=>{
                                    return  <td>
                                        <Product soluong ={this.props.soluong}
                                        key = {index} 
                                        image = {data.images}
                                        price = {data.price}
                                        />
                                    </td>
                                }
                            )
                        }
                    </tr>
                </table>
                
            </div>
        )
    }
}

export default Contents;