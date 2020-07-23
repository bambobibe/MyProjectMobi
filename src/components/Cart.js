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
    
    onDelete = (id)=>{
        if(window.confirm('chắc chứ !!!')){
            axios.get(`http://localhost:3000/product/${id}`).then(res=>{
                axios({
                    method : 'put',
                    url : `http://localhost:3000/product/${id}`,
                    data : {
                        name : res.data.name,
                        images : res.data.images,
                        price : res.data.price,
                        status: res.data.status,
                        isHot : res.data.isHot,
                        soluong: 0
                    }
                }).then(ress=>{
                    axios.get(`http://localhost:3000/product`).then(response => {
                        this.setState({
                            products: response.data   
                        })
                    })
                }   
                )      
            });
        }
    }
    render(){
        console.log("log:",this.state.products)
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
                                if(product.soluong>0){
                                    if(product.status)
                                        return <tr>
                                        <td> {product.name} </td>
                                        <td> {product.price} </td>
                                        <td> <button type="button" className="btn-success"></button> </td>
                                        <td> 
                                            {product.soluong}
                                        </td>   
                                        <td> <button 
                                                type="button" 
                                                className="btn btn-warning"
                                                onClick = { ()=>this.onDelete(product.id)}
                                                >
                                                Xóa</button> </td>
                                        <td> {product.price * product.soluong} </td>
                                </tr> 
                                }  
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