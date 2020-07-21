import React , { Component } from 'react';
class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            products : [
                {
                    images : './img/products/1.jpg',
                    price : '10.000.000 VNĐ',
                    isHot: true
                },
                {
                    images : './img/products/2.jpg',
                    price : '10.000.000 VNĐ',
                    isHot: true
                },
                {
                    images : './img/products/3.jpg',
                    price : '10.000.000 VNĐ',
                    isHot: true
                },
                {
                    images : './img/products/4.jpg',
                    price : '10.000.000 VNĐ',
                    isHot: false
                }
            ]
        }
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
                                onClick={ this.props.soluong}>
                                Mua ngay</button> <b></b>
                            <button type="button" class="btn btn-danger">Chi tiết</button>
                            </td>
                        }
                        else{
                            return <td><img src={ product.images }></img>
                            <h5>Giá : {product.price}</h5>
                            <button type="button" class="btn btn-danger"
                                onClick={ this.props.soluong}>
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