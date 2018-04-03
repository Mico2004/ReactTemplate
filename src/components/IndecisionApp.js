import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Option from './option';
import Options from './options';
import OptionModal from './OptionModal';



export class IndecisionApp extends React.Component {
    
    state = {
        options: this.props.options,
        selectedOption: undefined
    };

    componentDidMount() {
        console.log('IndecisionApp mount');        
        const json = localStorage.getItem('options');
        if(json){
            const options = JSON.parse(json);
            this.setState(() =>({options}));
        }
    }

    componentDidUpdate(prevState,prevProps){
        console.log('IndecisionApp update');
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options',json);
        console.log(localStorage.getItem('options'));
    }

    componentWillUnmount(){
    console.log('Component Unmount');    
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: []  }));        
    }

    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        this.setState(() => ({
            selectedOption:option
        }));
    };

    handleAddOption = (option) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }
    handleDeleteOption = (itemtoremove) => {
        
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return itemtoremove!==option;
            })

        }));
    }
    clearSelectedOption = () =>{
        
        this.setState(() =>( {    
            selectedOption: undefined        
        }));
    }
    


    render() {
        const title = 'Tittle of the page';
        const subtitle = 'Whaaat should i do?';
        return (
            <div>
                <Header /*title={title} *//>
                <div className="container">
                    <Action hasOptions={this.state.options.length>0?true:false} subtitle={subtitle} handlePick={this.handlePick}/>
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    clearSelectedOption={this.clearSelectedOption}
                    />
                
            </div>
        );
    }

}

export default IndecisionApp;