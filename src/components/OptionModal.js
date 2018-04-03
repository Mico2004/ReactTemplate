import Modal from 'react-modal';
import React from 'react';

const OptionModal = (props) =>
    (
        <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={4000}
        className="modal"
        >
            <h3 className="modal__title">some text</h3>
            {props.selectedOption && <p  className="modal__body">{props.selectedOption}</p>}
            
                <button className="button" onClick={props.clearSelectedOption}>OK</button>
            
        </Modal>
    );

export default OptionModal;