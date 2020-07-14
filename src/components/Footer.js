import React , { Component } from 'react';

class Footer extends Component{
    render(){
        return (  
            <div className="footer">
                <div className="container">
                    <div className="row">
                    <div className="col-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6015254499507!2d105.74525351440766!3d21.048624192476982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ee351b6fa7%3A0xc5915d597b79a164!2zUGjhu5EgxJDDrG5oIFF1w6FuLCDEkMOsbmggUXXDoW4sIFBow7pjIERp4buFbiwgQuG6r2MgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1593428285922!5m2!1svi!2s" width={333} height={250} frameBorder={0} style={{"border":"0"}} allowFullScreen aria-hidden="false" tabIndex={0} />
                    </div>
                    <div className="col-4">
                        <h2>Các chi nhánh cửa hàng</h2>
                        <ul>
                        <li>Phố Đình Quán,Ngõ 1, Văn Tiến Dũng, Bắc Từ Liêm, Hà Nội</li>
                        <li>Thị Tứ, Lăng Thành, Yên Thành , Nghệ An</li>
                        </ul>
                    </div>
                    <div className="col-4" style={{"padding-left":"100px"}}>
                        <h3 style={{"font-style":"italic"}}>Tư Vấn Khách Hàng</h3>
                        <div className="tuvan">
                        <ul>
                            <li><i className="fa fa-phone" /> &nbsp;0394375500</li>
                            <li><i className="fa fa-envelope" />&nbsp; bambobibe@gmail.com</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row" style={{"background-color":"yellow"}}>
                        <div className="col-12" style={{"-webkit-text-align":"center","text-align":"center"}}>
                            <p className="justify-content-center">Copyright © Nguyễn Xuân Lương 2020</p>
                        </div>	
                    </div>
                </div>
            </div>   
        )
    }
}

export default Footer;