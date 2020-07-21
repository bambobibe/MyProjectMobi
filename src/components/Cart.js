import React , { Component } from 'react';
import axios from 'axios';
import Product from './Product';

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
            products : []
        }
    }
    componentDidMount(){
        axios({
            method : 'GET',
            url : 'http://localhost:3000/product',
            data : null
        }).then(Response =>{
            this.setState({
                products : Response.data
            })
        }).catch(Error =>{
            console.log(Error);
        })
    };

    
    render(){
        console.log(this.state.product);
        return (  
            <div className="Cart">
                
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Giá</th>
                            <th>Trạng Thái</th>
                            <th>Số lượng</th>
                            <th>Action</th>
                            <th>Tổng Tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map((product) => {
                                return <tr>
                                    <td> {product.name} </td>
                                    <td> {product.price} </td>
                                    <td> {product.status.toString()} </td>
                                    <td> {product.soluong} </td>
                                    <td> <button type="button" class="btn btn-warning">Xóa</button> </td>
                                    <td> {product.price * product.soluong} </td>
                                </tr>   
                            })
                        } 
                    </tbody>
                </table>
                    <h4> <button type="button" class="btn btn-primary">Đặt Hàng</button> </h4>
            </div>
        )
    }
}

export default Cart;