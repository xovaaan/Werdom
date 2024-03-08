import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Werdom</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Sami</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest some thriller movies</p>
                    <img src={assets.compass_icon_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest some thriller movies</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest some thriller movies</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest some thriller movies</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Main
