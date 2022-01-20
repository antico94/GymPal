import React from 'react';
import "./profile.css"
import Danutu from "../../assets/img/danutu.jpg"
import Safe from "./../../assets/img/Medals/Safe.png"
import Complete from "./../../assets/img/Medals/Completed Workouts.png"
import Cardio from "./../../assets/img/Medals/Cardio King.png"
import Smart from "./../../assets/img/Medals/Smart.png"
import Fabulous from "./../../assets/img/Medals/Fabulous.png"
import New from "./../../assets/img/Medals/New.png"
import King from "./../../assets/img/Medals/Gym King.png"

function Profile() {
    // const Medals = [Safe, Complete, Cardio, Smart, Fabulous, New]
    return (<div className="profile-page">
        <div className="wrapper">
            <div className="profile-card js-profile-card">
                <div className="profile-card__img">
                    <img
                        src={Danutu}
                        alt="profile card"/>
                </div>

                <div className="profile-card__cnt js-profile-cnt">
                    <div className="profile-card__name">Dani Mocanu</div>
                    <div className="profile-card__txt">Member for <strong>5 days.</strong></div>
                    <div className="profile-card-loc">
        <span className="profile-card-loc__icon">
          <svg className="icon"><use xlinkHref="#icon-location"/></svg>
        </span>

                        <span className="profile-card-loc__txt">
          I love to piss in the snow.
        </span>
                    </div>

                    <div className="profile-card-inf">
                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title">1.73</div>
                            <div className="profile-card-inf__txt">Height</div>
                        </div>

                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title">65</div>
                            <div className="profile-card-inf__txt">Kg</div>
                        </div>

                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title">123 Kg</div>
                            <div className="profile-card-inf__txt">BenchPress</div>
                        </div>

                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title">85 Mins</div>
                            <div className="profile-card-inf__txt">Cardio Record</div>
                        </div>
                    </div>

                    <div className="profile-card-social">
                        <a
                            className="profile-card-social__item facebook" target="_blank">
          <span className="icon-font">
              <img className="icon" src={Safe} alt="safe"/>
          </span>
                        </a>

                        <a className="profile-card-social__item twitter"
                           target="_blank">
          <span className="icon-font">
              <img className="icon" src={Complete} alt="safe"/>
          </span>
                        </a>

                        <a
                            className="profile-card-social__item instagram" target="_blank">
          <span className="icon-font">
              <img className="icon" src={Cardio} alt="safe"/>
          </span>
                        </a>

                        <a
                            className="profile-card-social__item behance" target="_blank">
          <span className="icon-font">
              <img className="icon" src={King} alt="safe"/>
          </span>
                        </a>

                        <a className="profile-card-social__item github"
                           target="_blank">
          <span className="icon-font">
              <img className="icon" src={Fabulous} alt="fab"/>
          </span>
                        </a>

                        <a className="profile-card-social__item codepen"
                           target="_blank">
          <span className="icon-font">
              <img className="icon" src={Smart} alt="safe"/>
          </span>
                        </a>

                        <a className="profile-card-social__item link"
                           target="_blank">
          <span className="icon-font">
              <img className="icon" src={New} alt="safe"/>
          </span>
                        </a>

                    </div>

                    <div className="profile-card-ctr">
                        <button className="profile-card__button button--blue js-message-btn">Edit Information</button>
                        <button className="profile-card__button button--orange">Close</button>
                    </div>
                </div>

                <div className="profile-card-message js-message">
                    <form className="profile-card-form">
                        <div className="profile-card-form__container">
                            <textarea placeholder="Say something..."/>
                        </div>

                        <div className="profile-card-form__bottom">
                            <button className="profile-card__button button--blue js-message-close">
                                Send
                            </button>

                            <button className="profile-card__button button--gray js-message-close">
                                Cancel
                            </button>
                        </div>
                    </form>

                    <div className="profile-card__overlay js-message-close"/>
                </div>

            </div>

        </div>
    </div>);
}

export default Profile