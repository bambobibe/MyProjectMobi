import React , { Component } from 'react';

class Slide extends Component{
    render(){
        return (  
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
        )
    }
}

export default Slide;