import React , { Component } from 'react';

class Category extends Component{
    
    render(){
        return (  
            <div className="Category">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Siêu Khuyến Mãi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Hàng Mới</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Di động chính hãng</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tablet</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tin tức cập nhật</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Category;