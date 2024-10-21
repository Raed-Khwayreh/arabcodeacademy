import React from 'react';
import './style.css'

interface Props{
    text:string;
    startDate:string;
    endDate:string;
}


const isInRange = (currentDate: Date, startDate: Date, endDate: Date) => {
    const isAfterStart = currentDate >= startDate;
    const isBeforeEnd = currentDate <= endDate;
    return isAfterStart && isBeforeEnd;
  };
  

const DiscountHeader:React.FC<Props>=(props)=>{
    const currentDate = new Date();
    const startDate = new Date(props.startDate);
    const endDate = new Date(props.endDate);
    const isValid = isInRange(currentDate, startDate, endDate);
    
    return(
        <div className='header'>

        {isValid ? props.text : null}        

        </div>




    );


}

export default DiscountHeader;
