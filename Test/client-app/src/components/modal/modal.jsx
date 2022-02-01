import React from "react";
import $ from 'jquery'
import './modal.css';

const Modal = () => {
    $('.button').click(function () {
        const buttonId = $(this).attr('id');
        $('#modal-container').removeAttr('class').addClass(buttonId);
        $('body').addClass('modal-active');
    })

    $('#modal-container').click(function () {
        $(this).addClass('out');
        $('body').removeClass('modal-active');
    });
    return (
        <div className="custom-modal">
            <div id="modal-container">
                <div className="modal-background">
                    <div className="modal">
                        <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                             preserveAspectRatio="none">
                            <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"/>
                        </svg>
                        <h1>Sakyt</h1>
                    </div>
                </div>
            </div>
            <div className="content">
                <h1>Modal Animations</h1>
                <div className="buttons">
                    <div id="one" className="button">Sketch</div>
                </div>
            </div>
        </div>
    )
};

export default Modal