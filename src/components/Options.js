import React from 'react';
import Option from './Option';


const Options = (props) =>  {
    
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                 <button 
                    className="button button--link"
                    onClick={props.handleDeleteOptions}>Remove All</button>
            </div>
            <p
                className="widget__message" hidden={props.options.length>0?true:false}
            >Please add an option to get started!</p>

            <ol>
                {
                    props.options.map((option) => 
                    <Option 
                    key={option} 
                    OptionText={option}
                    handleDeleteOption={props.handleDeleteOption} />)
                }
            </ol>
        </div>);
    }

export default Options;    