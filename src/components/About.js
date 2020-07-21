import React , { Component } from 'react';

class About extends Component{
    
    render(){
        return (  
            <div className="about">
               <embed src="./Nguyen-Xuan-Luong-CV.pdf" width={1000} height={1200}/>
            </div>
        )
    }
}

export default About;