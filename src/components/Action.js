import React from 'react';

const Action = (props) =>  {
    
    return (<div>
        <button className="big-button"
            disabled={!props.hasOptions}
            onClick={props.handlePick}>
            {props.subtitle}</button>
    </div>
);
  
};

export default Action;