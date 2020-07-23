import React , { Component } from 'react';
import axios from 'axios';

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            products : []
        }
    }
    componentWillMount(){
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
    onCart = (id) => {
        
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
                    soluong: res.data.soluong+1
                }
            })      
        });   
    }
    render(){
        return (  
            <div className="Product">
                <tr>
                { 
                    this.state.products.map((product)=>{
                        if(product.isHot){
                            return <td>
                            <div className="imgHot"><img src="./img/products/hot.gif" /></div>
                            <img src={ product.images } />
                            <h5>Giá : {product.price}</h5>
                            <button type="button" class="btn btn-danger"
                                onClick = { ()=>{
                                    this.props.soluong();
                                    this.onCart(product.id)
                                }}
                                >
                                Mua ngay</button> <b></b>
                            <button type="button" class="btn btn-danger">Chi tiết</button>
                            </td>
                        }
                        else{
                            return <td><img src={ product.images }></img>
                            <h5>Giá : {product.price}</h5>
                            <button type="button" class="btn btn-danger"
                                onClick = { ()=>{
                                    this.props.soluong();
                                    this.onCart(product.id)
                                }}
                                >
                                Mua ngay</button> <b></b>
                            <button type="button" class="btn btn-danger">Chi tiết</button>
                            </td>
                        }
                    })
                }
                </tr>
            </div>
        )
    }
}

export default Product;