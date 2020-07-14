import React , { Component } from 'react';
import Icon from "./Icon";

class Company extends Component{
    
    render(){
        return (  
            <div className="Company">
                <nav className="navbar navbar-expand-lg">
                    <ul className="navbar-nav">
                        <Icon src="./img/company/Apple.jpg" />
                        <Icon src="./img/company/HTC.jpg" />
                        <Icon src="./img/company/Huawei.jpg" />
                        <Icon src="./img/company/Itel.jpg" />
                        <Icon src="./img/company/Nokia.jpg" />
                        <Icon src="./img/company/Oppo.jpg" />
                        <Icon src="./img/company/Realme.png" />
                        <Icon src="./img/company/Samsung.jpg" />
                        <Icon src="./img/company/Vivo.jpg" />
                        <Icon src="./img/company/Xiaomi.png" />
                        <Icon src="./img/company/Philips.jpg" />
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Company;