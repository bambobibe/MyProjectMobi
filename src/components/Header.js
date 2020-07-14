import React , { Component } from 'react';

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
							<a href="#" className="navbar-link">
								<i className="fa fa-facebook-official" style={{"font-size":"25px"}} />
							</a>
							</li>
							<li className="navbar-item">
							<p>
								&nbsp;&nbsp;&nbsp;&nbsp;
							</p>
							</li>
							<li className="navbar-item">
							<a href="#" className="navbar-link">
								<i className="fa fa-skype" style={{"font-size":"25px"}} />
							</a>
							</li>
							<li className="navbar-item">
							<p>
								&nbsp;&nbsp;&nbsp;&nbsp;
							</p>
							</li>
							<li className="navbar-item">
							<a href="#" className="navbar-link">
								<i className="fa fa-phone" style={{"font-size":"25px"}}>&nbsp;0394375500</i>
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
						<a className="nav-link" href="#">
							<i className="fa fa-home" />
							Trang chủ</a>
						</li>
						<li className="nav-item">
						<a className="nav-link" href="#"><i className="fa fa-newspaper-o" /> Tin tức</a>
						</li>
						<li className="nav-item">
						<a className="nav-link" href="#"><i className="fa fa-shopping-cart" /> Giỏ hàng {this.props.soluong} </a>			
						</li>
						<li className="nav-item">
						<a className="nav-link" href="#"><i className="fa fa-info-circle" /> Giới thiệu</a>
						</li>
						<li className="nav-item">
						<a className="nav-link" href="#"><i className="fa fa-phone" /> Liên hệ</a>
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
				<div style={{"padding-top":"130px"}}>
					<div className="container">
					<div id="myCarousel" className="carousel slide" data-ride="carousel">
						<ul className="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to={0} className="active" />
						<li data-target="#myCarousel" data-slide-to={1} />
						<li data-target="#myCarousel" data-slide-to={2} />
						<li data-target="#myCarousel" data-slide-to={3} />
						<li data-target="#myCarousel" data-slide-to={4} />
						</ul>
						<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="./img/banners/banner0.gif" width={1120} height={250} />
						</div>
						<div className="carousel-item">
							<img src="./img/banners/banner1.png" width={1120} height={250} />
						</div>
						<div className="carousel-item">
							<img src="./img/banners/banner2.png" width={1120} height={250} />
						</div>
						<div className="carousel-item">
							<img src="./img/banners/banner3.png" width={1120} height={250} />
						</div>
						<div className="carousel-item">
							<img src="./img/banners/banner4.png" width={1120} height={250} />
						</div>
						</div>
						<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
						<span className="carousel-control-prev-icon" />
						</a>
						<a className="carousel-control-next" href="#myCarousel" data-slide="next">
						<span className="carousel-control-next-icon" />
						</a>
					</div>
				</div>
			</div>
		</div>
        )  
	}
}		
export default Header ;
