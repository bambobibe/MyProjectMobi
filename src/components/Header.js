import React , { Component } from 'react';
import Slide from "./Slide"
import {BrowerRouter , Route, NavLink} from 'react-router-dom'; 

class Header extends Component{
    render(){
        return (	
			<div className="header">
				<div className="fixNav">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-sm-4 col-md-4">
								<a href="#">
									<img className="rotate360" src="./img/logo.jpg" style={{"height":"75px","border-radius":"25px"}} alt />
								</a>
							</div>
							<div className="col-4">
								<h2 style={{"font-family":"Yellowtail"}}>SmartPhone Store</h2>
								<h5 style={{"font-family":"Yellowtail"}}>Chất Lượng - Nhanh Gọn - Tiện Lợi - Uy Tín</h5>
							</div>
							<div className="col-lg-4 col-sm-4 col-md-4">
							<ul className="nav justify-content-end" style={{"margin-top":"10px"}}>
								<li className="navbar-item">
									<a href="#" className="navbar-link" title="https://www.facebook.com/xuan.luong.7796">
										<i className="fa fa-facebook-official" style={{"font-size":"25px"}} />
									</a>
								</li>
								<li className="navbar-item">
									<p>
										&nbsp;&nbsp;&nbsp;&nbsp;
									</p>
								</li>
								<li className="navbar-item">
									<a href="#" className="navbar-link" title="Lương Nguyễn">
										<i className="fa fa-skype" style={{"font-size":"25px"}} />
									</a>
								</li>
								<li className="navbar-item">
									<p>
										&nbsp;&nbsp;&nbsp;&nbsp;
									</p>
								</li>
								<li className="navbar-item">
									<a href="#" className="navbar-link" title="Bambobibe@gmail.com">
										<i className="fa fa-envelope" style={{"font-size":"25px"}} />
									</a>
								</li>
								<li className="navbar-item">
									<p>
										&nbsp;&nbsp;&nbsp;&nbsp;
									</p>
								</li>
								<li className="navbar-item">
									<a href="#" className="navbar-link" title="0394375500">
										<i className="fa fa-phone" style={{"font-size":"25px"}}></i>
									</a>
								</li>
							</ul>
							</div>
						</div>
					</div>
					<div className="menu" style={{"background-color":"yellow"}}>
					{/* <nav class="container"> */}
					{/* <div class="row"> */}
						<ul className="nav justify-content-center">
							<li className="nav-item">
							<NavLink exact to="/" className="nav-link" activeStyle={{
									backgroundColor : 'red',
									color : 'yellow'
								}}>
									<i className="fa fa-home" /> Trang chủ
								</NavLink>
							</li>
							<li className="nav-item" id="cart">
								<NavLink exact to="/Cart" className="nav-link" activeStyle={{
									backgroundColor : 'red',
									color : 'yellow'
								}}>
									<i className="fa fa-shopping-cart" /> Giỏ hàng {this.props.soluong}
								</NavLink>			
							</li>
							<li className="nav-item">
								<NavLink exact to="/About" className="nav-link" activeStyle={{
									backgroundColor : 'red',
									color : 'yellow'
								}}>
									<i className="fa fa-info-circle" /> Giới thiệu
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink exact to="/Contact" className="nav-link" activeStyle={{
									backgroundColor : 'red',
									color : 'yellow'
								}}>
									<i className="fa fa-info-circle" /> Liên Hệ
								</NavLink>
							</li>
							<li className="nav-item search">
								<form action="#" method="POST">
									<div style={{"background-color":"white","height":"40px","width":"300px"}}>
									<input type="search" style={{"height":"40px","border":"none","width":"254px","-webkit-text-align":"center","text-align":"center"}} placeholder="Search..." />      
									<button type="submit" style={{"height":"40px","border":"none"}}>
										<i className="fa fa-search" style={{"width":"40px"}} />
									</button>
									</div>
								</form>
							</li>
						</ul>
					{/* </div> */}
					{/* </nav> */}
					</div>
				</div>
				<Slide />
		</div>
        )  
	}
}		
export default Header ;
