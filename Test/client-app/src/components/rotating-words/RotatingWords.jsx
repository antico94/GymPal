import React, {Component} from "react";
import './rotatingWords.css'


class RotatingWords extends Component {
    intervalID = 0;

    componentDidMount() {
        
        this.intervalID = setInterval(function () {
            const show = document.querySelector('span[data-show]')
            const next = show.nextElementSibling || document.getElementsByClassName("rotating-words-span")[0]
            const up = document.querySelector('span[data-up]')

            if (up) {
                up.removeAttribute('data-up')
            }

            show.removeAttribute('data-show')
            show.setAttribute('data-up', '')
            next.setAttribute('data-show', '')
            
            
        }, 2000)
    }


    componentWillUnmount() {
        clearInterval(this.intervalID);
    }


    render() {
        return (
            <div className="rotating-words">
                <h2>
                    <span className='custom-color-blue'>Gym</span><span className="custom-color-red">Pal</span>
                    <div className="mask">
                        <span className="rotating-words-span" data-show="">is easy to use</span>
                        <span className="rotating-words-span" >increases acountability</span>
                        <span className="rotating-words-span" >tracks your progress</span>
                        <span className="rotating-words-span" >helps setting goals</span>
                    </div>
                </h2>
            </div>);
    }
}

export default RotatingWords;