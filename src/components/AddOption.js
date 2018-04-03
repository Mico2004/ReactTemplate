import React from 'react';


class AddOption extends React.Component {

 

    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value;
        if (option) {
            this.props.handleAddOption(option);
        } else {
            alert('invalid input');
        }
    }

    render() {
        return (
            <div>            
            <form className="add-option" onSubmit={this.handleAddOption}>
                
                <input className="add-option__input" type="text" name="option" />
                <button className="button">Add Option</button>
            </form>
            </div>
        );
    }
}

export default AddOption;
