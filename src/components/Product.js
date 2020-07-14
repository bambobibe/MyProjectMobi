import React , { Component } from 'react';

class Product extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         soluong = 0 
    //     }
    // }
    // onClick = () => {
    //     this.setState({
    //         soluong : this.state.soluong +1 
    //     });
    // }
    
    render(){
        // var soluong = this.state.soluong;
        // console.log(soluong);
        return (  
            <div className="Product">
                <img src={ this.props.image }></img>
                <h5>Giá : {this.props.price}</h5>
                <button type="button" class="btn btn-danger"
                onClick={ this.props.soluong}>
                  Mua ngay</button> <b></b>
                <button type="button" class="btn btn-danger">Chi tiết</button>
            </div>
        )
    }
}

export default Product;