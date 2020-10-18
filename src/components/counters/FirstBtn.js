import React from 'react';
// import './App.css';



class FirstBtn extends React.Component{
 
render(){
    const {counter,decrement } = this.props;
   
    return(
        <div className="all">
        <div className="zero"> {`${counter > 0 ? counter : 'Zero' }`} </div>
        <div  className="btn">
        <button  className="increment" onClick={()=>{
            this.props.increment();
            this.props.incrementItems() }} > <span >+</span></button>
        <button className="decrement" onClick={decrement}  >  <span >-</span></button>
        </div>
        </div>
      

);
}
}

export default FirstBtn ;