import React ,{Component} from 'react';

class TheeredBtn extends Component{
 
render(){
    const {counter,decrement3} = this.props;
   
    return(
        <div className="all">
        <div className="zero"> {`${counter > 0 ? counter : 'Zero' }`} </div>
        <div  className="btn">
        <button  className="increment" onClick={()=>{
            this.props.increment3();
            this.props.incrementItems() }} > <span>+</span></button>
        <button className="decrement" onClick={decrement3} > <span>-</span></button>
        </div>
        </div>
      

);
}
}

export default TheeredBtn ;