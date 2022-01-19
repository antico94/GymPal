import React from "react";
import './home.css'
import {RotatingWords} from "../index";
import logo from "./../../assets/img/Dumbbell-Fitness-Man-Transparent-PNG.png"
import Grill from "./../../assets/img/grilll.png"
// import Banner from "../../assets/img/home-banner.jpg"
import short1 from '../../assets/video/short (1).mp4'
import short2 from '../../assets/video/short (2).mp4'
import short3 from '../../assets/video/short (3).mp4'
import short4 from '../../assets/video/short (4).mp4'
import short5 from '../../assets/video/short (5).mp4'
import short6 from '../../assets/video/short (6).mp4'
import short7 from '../../assets/video/short (7).mp4'
import short8 from '../../assets/video/short (8).mp4'
import short9 from '../../assets/video/short (9).mp4'
import $ from 'jquery'
import Features from "../features/features";

class Homepage extends React.Component {
    componentDidMount = () => {
    };

    componentWillUnmount = () => {
        this.pauseVideo();
    };


    playVideo = () => {
        // You can use the play method as normal on your video ref
        let video = this.refs.vidRef;
        video.src = [short1, short2, short3, short4, short5, short6, short7, short8, short9][Math.floor(Math.random() * 8)]
        video.play()
        let videoContainer = $('.video-player')
        videoContainer.css('opacity', "100%");
        video.addEventListener('ended', myHandler, false);

        function myHandler(e) {
            videoContainer.css('opacity', "1%");
        }
    }
    ;

    pauseVideo = () => {
        // Pause as well
        this.refs.vidRef.pause();
    };

    render() {
        return (
            <div className="homepage-test">
                <section className="section-a">
                    <div className="container">
                        <div>
                            <h1><span>Meet</span> <span className="custom-color-blue">Gym</span><span className="custom-color-red">Pal</span></h1>
                            <p>
                                GymPal is a Health & Fitness app that has everything you need to plan
                                and track your fitness program. Use our anatomically correct model to identify a muscle,
                                view a selection of exercise results, add to a workout and get moving! You can then
                                track your workout progress, share your achievements and do it all over again for any of
                                the 152 muscles mapped with any of the 600 associated exercises.
                            </p>
                            <a href="#" className="btn" onClick={this.playVideo}>Give me some motivation!</a>
                            <div className='video-player'>
                                <video
                                    ref="vidRef"
                                    src={short1}
                                    type="video/mp4"
                                />

                            </div>
                        </div>
                        <div>
                            <img src={logo} alt="apple-watch" className="full"/>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/mSXn9nR/watches-mobile.png" alt="watches-mobile"
                                 className="mobile"/>
                        </div>
                    </div>
                </section>

                <section className="section-b">
                    <div className="container">
                        <div>
                            <h4>Promotes Discipline</h4>
                            <p>
                                Co-existing with others in a different environment is not natural for some individuals.
                                They struggle to accommodate others because of various factors such as social status or
                                race. In sports, individuals learn the value of living and working with others for a
                                common goal. We can learn discipline from different games across the globe. Some values
                                guide each game, thus promoting peaceful co-existence. When teams prepare for new
                                seasons, we see new players joining them from different parts of the globe. They get
                                fully equipped, discipline being the integral aspect.
                            </p>
                            <div className="dots">
                                <div className="dot"/>
                                <div className="dot"/>
                                <div className="dot"/>
                            </div>
                        </div>
                        <div>
                            <h4>Sports Build Character</h4>
                            <p>
                                Taking part in sports provides endless joy. It is through this that the mind and
                                character develop. Individuals learn from their favorite players and ape their traits.
                                Learning from examples is the best way to learn because you have something to refer to.
                                Since sports work with rules, they enable players to have a positive character. This is
                                true to most players who send the same message to spectators across the globe.
                            </p>
                            <div className="dots">
                                <div className="dot"/>
                                <div className="dot"/>
                                <div className="dot"/>
                            </div>
                        </div>
                        <div>
                            <h4>Sports in Emotional Development</h4>
                            <p>
                                Sports promote a cheerful and playful environment essential for mental and emotional
                                development, especially for children. In general, sports enhance the vitality and
                                freshness of the mind. Whether you are watching or playing any game, it is essential
                                because it promotes interests that help the brain function effectively.
                            </p>
                            <a href="#"
                            >
                                <div className="line"/>
                                Learn More</a
                            >
                        </div>
                    </div>
                </section>

                <section className="section-c">
                    <div className="container">
                        <div>
                            <RotatingWords/>
                        </div>
                        <img id="logo-png"
                             src={Grill}
                             alt="Grill"/>
                    </div>
                </section>
                <Features/>
                <section className="section-d">
                    <div className="overlay">
                        <div className="container">
                            <div>
                                <h1>QUIT SAYING YOU DON’T HAVE THE TIME TO EXERCISE..</h1>
                                <p>
                                    We’re all busy. We all have too many things to do in a 24-hour time period.

                                    But go ahead and ask yourself right now: What are your main priorities?

                                    If they’re your family, your friends, your career, your hobbies, that’s all great.

                                    But what about your health?
                                </p>
                                <a href="/displayMuscle" className="btn" id="footer-button">Explore Features</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>)
    }
}


export default Homepage;