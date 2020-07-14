import React , { Component } from 'react';
import Icon from "./Icon";

class Company extends Component{
    constructor(props){
        super(props);
        this.state = {
            Companys : [
                "./img/company/Apple.jpg",
                "./img/company/HTC.jpg",
                "./img/company/Huawei.jpg",
                "./img/company/Itel.jpg",
                "./img/company/Nokia.jpg",
                "./img/company/Oppo.jpg",
                "./img/company/Realme.png",
                "./img/company/Samsung.jpg",
                "./img/company/Vivo.jpg",
                "./img/company/Xiaomi.png",
                "./img/company/Philips.jpg",

            ]
        }
    }
    render(){
        return (  
            <div className="Company">
                <nav className="navbar navbar-expand-lg">
                    <ul className="navbar-nav">
                        {
                            this.state.Companys.map((company)=>{
                                return <Icon src={company} />
                            })
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Company;