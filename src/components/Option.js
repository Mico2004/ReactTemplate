import React from 'react';

const Option = (props) =>  {
    
    return (
    <div className="option">
        <li className="option__text"> {props.OptionText}</li>
        <button 
            className="button button--link"
            onClick={(e) => {props.handleDeleteOption(props.OptionText)}}>remove</button>
    </div>
    );
};


export default Option;
