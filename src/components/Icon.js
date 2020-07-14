import React , { Component } from 'react';

class Icon extends Component{
    
    render(){
        return (  
            <div className="Icon">
                <li className="nav-item">
                    <a className="nav-link" href="#"> 
                        <img src={this.props.src} class="img-responsive" alt="Image" />
                    </a>
                </li>
            </div>
        )
    }
}

export default Icon;