import React ,{Component} from 'react';
// import './App.css';



class SecondBtn extends Component{
 
render(){
    const {counter,decrement2} = this.props;
   
    return(
        <div className="all">
        <div className="zero"> {`${counter > 0 ? counter : 'Zero' }`} </div>
        <div  className="btn">
        <button  className="increment" onClick={()=>{
            this.props.increment2();
            this.props.incrementItems() }} > <span>+</span></button>
        <button className="decrement" onClick={decrement2} > <span>-</span></button>
        </div>
        </div>
      

);
}
}

export default SecondBtn ;