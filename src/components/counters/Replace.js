import React ,{Component} from 'react';
import './AppCounter.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt} from "@fortawesome/free-solid-svg-icons";


class FourthBtn extends Component{
 
render(){
    const {replace} = this.props;
   
    return(
        <div className="all">
       <button className="icon-replace" onClick={replace} > 
        <span> <FontAwesomeIcon className="icon" icon={faSyncAlt} /></span></button>
        </div>
      

);
}
}

export default FourthBtn ;