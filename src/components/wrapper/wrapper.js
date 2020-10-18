import React,{ Component } from 'react' ;
import SecondBtn from '../counters/SecondBtn' ;
import TheeredBtn from '../counters/TheeredBtn' ;
import ForuthBtn  from '../counters/FourthBtn' ;
import Replace  from '../counters/Replace' ;
import FirstBtn from '../counters/FirstBtn';
import Header from '../Header';
class Wrapper extends Component {

    state={
        counter:0,
        Items:0,
        counter1:0,
        counter2:0,
        counter3:0,
        counter4:0,
    };


    incrementItems = ()=>{
        const newCounter =this.state.Items+ 1;
        this.setState({Items:newCounter})
    }
    
    decrementItems = ()=>{
        if(this.state.Items > 0){
            const newCounter =this.state.Items - 1;
            this.setState({Items:newCounter}) 
        }
            
    }

    increment = ()=>{
        const newCounter =this.state.counter1+ 1;
        this.setState({counter1:newCounter})
    }
    
    decrement = ()=>{
        if(this.state.counter1 > 0){
            const newCounter =this.state.counter1 - 1;
            this.setState({counter1:newCounter}) 
        }
            
    }
    increment2 = ()=>{
        const newCounter =this.state.counter2 + 1;
        this.setState({counter2:newCounter})
    }
    decrement2 = ()=>{
        if(this.state.counter2 > 0){
            const newCounter =this.state.counter - 1;
            this.setState({counter2:newCounter}) 
        }
            
    }
    increment3 = ()=>{
        const newCounter =this.state.counter3 + 1;
        this.setState({counter3:newCounter})
    }
    decrement3 = ()=>{
        if(this.state.counter3 > 0){
            const newCounter =this.state.counter3 - 1;
            this.setState({counter3:newCounter}) 
        }
            
    }
    increment4 = ()=>{
        const newCounter =this.state.counter4 + 1;
        this.setState({counter4:newCounter})
    }
    decrement4 = ()=>{
        if(this.state.counter4 > 0){
            const newCounter =this.state.counter4 - 1;
            this.setState({counter4:newCounter}) 
        }
            
    }



    
    replace = ()=>{
        this.setState({counter:0,
            Items:0,
            counter1:0,
            counter2:0,
            counter3:0,
            counter4:0,})
    };
    render(){
        return(

            <>
            <Header items={this.state.Items} />
            <Replace    replace={this.replace}  />
            <FirstBtn  counter={this.state.counter1} increment={this.increment}
              decrement={this.decrement} incrementItems={this.incrementItems} 
               decrementItems={this.decrementItems}   />
            <SecondBtn  counter={this.state.counter2} increment2={this.increment2} 
             decrement2={this.decrement2} incrementItems={this.incrementItems} 
             decrementItems={this.decrementItems} />
            <TheeredBtn  counter={this.state.counter3} increment3={this.increment3} 
             decrement3={this.decrement3} incrementItems={this.incrementItems} 
             decrementItems={this.decrementItems} />
            <ForuthBtn  counter={this.state.counter4} increment4={this.increment4} 
             decrement4={this.decrement4} incrementItems={this.incrementItems} 
             decrementItems={this.decrementItems} />
            
            </>


        )
    }
}
export default Wrapper