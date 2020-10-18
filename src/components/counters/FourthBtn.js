import React ,{Component} from 'react';

class FourthBtn extends Component{
 
render(){
    const {counter,decrement4} = this.props;
   
    return(
        <div className="all">
        <div className="zero"> {`${counter > 0 ? counter : 'Zero' }`} </div>
        <div  className="btn">
        <button  className="increment" onClick={()=>{
            this.props.increment4();
            this.props.incrementItems() }} > <span>+</span></button>
        <button className="decrement" onClick={decrement4} > <span>-</span></button>
        </div>
        </div>
      

);
}
}

export default FourthBtn ;