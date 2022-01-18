import React, {Component} from "react";
import './home.css'


class Homepage extends Component {
    componentDidMount() {
    setInterval(function () {
        const show = document.querySelector('span[data-show]')
        const next = show.nextElementSibling || document.querySelector('span:first-child')
        const up = document.querySelector('span[data-up]')

        if (up) {
            up.removeAttribute('data-up')
        }

        show.removeAttribute('data-show')
        show.setAttribute('data-up', '')

        next.setAttribute('data-show', '')
    }, 2000)}
    
    componentWillUnmount() {
        this.stopFunction()
    }
    
    stopFunction(){
        clearInterval(this.myInterval)
    }

    render() {
        return (
            <div className="rotating-words">
                <h2>
                    GymPal
                    <div className="mask">
                        <span data-show>finds exercises for you</span>
                        <span>increases acountability</span>
                        <span>tracks your progress</span>
                        <span>helps with goal setting</span>
                        <span>promotes variety</span>
                        <span>gives diet advice</span>
                    </div>
                </h2>
            </div>);
    }
}

export default Homepage;