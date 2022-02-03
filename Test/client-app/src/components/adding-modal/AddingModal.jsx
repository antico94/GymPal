import React from 'react';
import $ from "jquery";

const Modal = ({isShowing, hide}) => {
    $('.button').click(function () {
        const buttonId = $(this).attr('id');
        $('#modal-container').removeAttr('class').addClass(buttonId);
        $('body').addClass('modal-active');
    })

    $('#modal-container').click(function () {
        $(this).addClass('out');
        $('body').removeClass('modal-active');
    });


    return (<div id="modal-container">
            <div className="modal-background">
                <div className="modal">
                    <h2>I'm a Modal</h2>
                    <p>Hear me roar.</p>
                    <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                         preserveAspectRatio="none">+
                        <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"/>
                    </svg>
                </div>
            </div>
        </div>)
}
export default Modal;