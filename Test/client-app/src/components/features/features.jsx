import React, {Component} from "react";
import $ from 'jquery'
import './features.css'

class Features extends Component {
    componentDidMount() {
        (function () {
            var selectors = {
                nav: '#data-features-nav',
                tabs: '#data-features-tabs',
                active: '.__active'
            }
            var classes = {
                active: '__active'
            }
            $('a', selectors.nav).on('click', function () {
                let $this = $(this)[0];
                $(selectors.active, selectors.nav).removeClass(classes.active);
                $($this).addClass(classes.active);
                $('div', selectors.tabs).removeClass(classes.active);
                $($this.hash, selectors.tabs).addClass(classes.active);
                return false
            });
        }());

        $(".btn-with-icon").on("click", function () {
            $(".wave-anim").addClass('visible').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd", function () {
                $(".wave-anim").removeClass('visible');
            });
        });
    }

    render() {


        return (<div className="features-div">
            <section id="features" className="features">
                <div className="box foo">
                    <h3 className="features-title">Features</h3>
                    <div className="features-content">
                        <div id='data-features-tabs' className="features-content-col">
                            <div id="feature-1" className="features-textblock animated fadeIn __active">
                                <h2>User Profile</h2>
                                <p>It is very important for an applicant to create a Gym Pal profile. Your profile
                                    is an overview of general information about yourself, and the skill sets that you
                                    possess.</p>
                                <ul>
                                    <li>Creating a profile allows you to save all program opportunities in which
                                        you are interested, and to come back at a later time to resume your program.
                                    </li>
                                    <li>Creating a profile also allows other Gym Pal members to search for you,
                                        based off of the information and project preference you have entered.
                                    </li>
                                    <li>Also, your
                                        profile information will appear across all of your applications so that you don’t
                                        have to re-enter the basic informations every time.
                                    </li>
                                </ul>
                            </div>
                            <div id="feature-2" className="features-textblock animated fadeIn">
                                <h2>FEATURES 2</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit amet,
                                    consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed
                                    ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.
                                    </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.
                                    </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.
                                    </li>
                                </ul>
                            </div>
                            <div id="feature-3" className="features-textblock animated fadeIn">
                                <h2>FEATURES 3</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit amet,
                                    consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed
                                    ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.
                                    </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.
                                    </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.
                                    </li>
                                </ul>
                            </div>
                            <div id="feature-4" className="features-textblock animated fadeIn">
                                <h2>FEATURES 4</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit amet,
                                    consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed
                                    ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.
                                    </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.
                                    </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.
                                    </li>
                                </ul>
                            </div>
                            <div id="feature-5" className="features-textblock animated fadeIn">
                                <h2>FEATURES 5</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit amet,
                                    consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed
                                    ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.
                                    </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.
                                    </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.
                                    </li>
                                </ul>
                            </div>
                            <div id="feature-6" className="features-textblock animated fadeIn">
                                <h2>FEATURES 6</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit amet,
                                    consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed
                                    ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.
                                    </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.
                                    </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit
                                        amet,
                                        consectetur adipiscing elit.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="features-content-col">
                            <div id='data-features-nav' className="features-graph">
                                <div className="button-holder">
                                    <a href="#feature-1" className="icon-features-1 btn-with-icon __active" id="icon-1">
                                        <span className="sq-bt-label label-top-left">User Profile</span>
                                    </a>
                                    <a href="#feature-2" className="icon-features-2 btn-with-icon">
                                        <span className="sq-bt-label label-top">FEATURES 2</span>
                                    </a>
                                    <a href="#feature-3" className="icon-features-3 btn-with-icon">
                                        <span className="sq-bt-label label-top-right">FEATURES 3</span>
                                    </a>
                                </div>
                                <div className="animation-holder">
                            <span className="flash-oval">
                           <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/flash.png" alt="pulse"/>
                           <div className="wave hidden wave-anim"/>
                           <div className="wave2 hidden wave-anim"/>
                           <div className="wave3 hidden wave-anim"/>
                           <div className="wave4 hidden wave-anim"/>
                        </span>
                                </div>
                                <div className="button-holder">
                                    <a href="#feature-4" className="icon-features-4 btn-with-icon">
                                        <span className="sq-bt-label label-bottom-left">FEATURES 4</span></a><a
                                    href="#feature-5" className="icon-features-5 btn-with-icon"><span
                                    className="sq-bt-label label-bottom">FEATURES 5</span></a><a href="#feature-6"
                                                                                                 className="icon-features-6 btn-with-icon"><span
                                    className="sq-bt-label label-bottom-right">FEATURES 6</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
    }
}

export default Features;