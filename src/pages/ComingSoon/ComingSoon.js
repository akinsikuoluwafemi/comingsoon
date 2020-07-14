import React, {Component} from 'react';
import './ComingSoon.scss';
import CountDown from '../../components/Coundown/CountDown';
import Gear from '../../images/gear-with-holes.svg';

class ComingSoon  extends Component{
    
    state = {
        countdown: {
            futureDate: `2020-08-05T00:00:00`
        }
    }

   render(){
       const { countdown } = this.state;
       
       return (
           <div className="bodee">
               <div className="background">
                   <CountDown futureDate={countdown.futureDate}></CountDown>
                   
                   <img src={Gear} className="cog" alt=""/>

                   <p className="comingsoon-text">The buildforsdg website is Coming Soon</p>
                   <button className="btnn ">BACK TO HOME</button>
               </div>
           </div>

       )
   }
}


export default ComingSoon;