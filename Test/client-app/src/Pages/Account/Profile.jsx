import React, {useEffect, useState} from 'react';
import "./profile.css"
import Danutu from "../../assets/img/danutu.jpg"
import Safe from "./../../assets/img/Medals/Safe.png"
import Complete from "./../../assets/img/Medals/Completed Workouts.png"
import Cardio from "./../../assets/img/Medals/Cardio King.png"
import Smart from "./../../assets/img/Medals/Smart.png"
import Fabulous from "./../../assets/img/Medals/Fabulous.png"
import New from "./../../assets/img/Medals/New.png"
import King from "./../../assets/img/Medals/Gym King.png"
import $ from 'jquery'

function Profile() {

    const HardCodedData = {
        Name : "Dani Mocanu",
        Description: "I love to piss in the snow",
        Height : "1.73",
        Weight: "65",
        BenchPressRecord: "123",
        CardioRecord: "85"
    }
    
    const [name, setName] = useState(HardCodedData.Name);
    const [description, setDescription] = useState(HardCodedData.Description);
    const [height, setHeight] = useState(HardCodedData.Weight);
    const [weight, setWeight] = useState(HardCodedData.Weight);
    const [benchRecord, setBenchRecord] = useState(HardCodedData.BenchPressRecord);
    const [cardioRecord, setCardioRecord] = useState(HardCodedData.CardioRecord);


    const [buttonText, setButtonText] = useState("");

    // useEffect(() => {
    //     setName($(".profile-card__name").text())
    //     setDescription($(".profile-card-loc__txt").text())
    //     setHeight($("#currentHeight").text())
    //     setWeight($("#currentWeight").text())
    //     setBenchRecord($("#benchRecord").text())
    //     setCardioRecord($("#cardioRecord").text())
    //     setButtonText($("#edit__profile").text())
    // })

    const editProfile = () => {
        

        
        
        function ShowInputBoxes(){
            //Show Input Boxes
            $('.input-name').css("display", "block")
            $('.input-description').css("display", "block")
            $('.input-height').css("display", "block")
            $('.input-weight').css("display", "block")
            $('.input-bench').css("display", "block")
            $('.input-cardio').css("display", "block")
            
            //Hide Actual Data
            $(".profile-card__name").css("display", "none")
            $(".profile-card-loc__txt").css("display", "none")
            $("#currentHeight").css("display", "none")
            $("#currentWeight").css("display", "none")
            $("#benchRecord").css("display", "none")
            $("#cardioRecord").css("display", "none")
            
        }

        function HideInputBoxes(){
            
            //Hide Input Boxes
            $('.input-name').css("display", "none")
            $('.input-description').css("display", "none")
            $('.input-height').css("display", "none")
            $('.input-weight').css("display", "none")
            $('.input-bench').css("display", "none")
            $('.input-cardio').css("display", "none")
            
            
            //Show Actual Data
            $(".profile-card__name").css("display", "block")
            $(".profile-card-loc__txt").css("display", "block")
            $("#currentHeight").css("display", "block")
            $("#currentWeight").css("display", "block")
            $("#benchRecord").css("display", "block")
            $("#cardioRecord").css("display", "block")
        }
        
        if (buttonText === "Edit Information") {
            $("#edit__profile").text("Save")
            setButtonText("Save")
            ShowInputBoxes()

            
        }
        else {
            $("#edit__profile").text("Edit Information")
            setButtonText("Edit Information")
            HideInputBoxes()
            
        }


    }


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
                    <div className="name-block-profile">
                        <div className="profile-card__name">{name}</div>
                        <input onChange={e=>setName(e.target.value)} className="input-name" placeholder={name}/>
                    </div>
                    <div className="profile-card__txt">Member for <strong>5 days.</strong></div>
                    <div className="profile-card-loc">
                        
                        <span className="profile-card-loc__txt">

          {description}
        </span>
                        <input onChange={e=>setDescription(e.target.value)} className="input-description" placeholder={description}/>
                    </div>

                    <div className="profile-card-inf">
                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title" id="currentHeight">{height}</div>
                            <input onChange={e=>setHeight(e.target.value)} placeholder={height} className="input-height"/>
                            <div className="profile-card-inf__txt">Height</div>
                        </div>

                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title" id="currentWeight">{weight}</div>
                            <input onChange={e=>setWeight(e.target.value)} placeholder={weight} className="input-weight"/>

                            <div className="profile-card-inf__txt">Kg</div>
                        </div>

                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title" id="benchRecord">{benchRecord}<span> Kg</span></div>
                            <input onChange={e=>setBenchRecord(e.target.value)} placeholder={benchRecord} className="input-bench"/>
                            <div className="profile-card-inf__txt">BenchPress</div>
                        </div>

                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title" id="cardioRecord">{cardioRecord}<span> Mins</span></div>
                            <input onChange={e=>setCardioRecord(e.target.value)} placeholder={cardioRecord} className="input-cardio"/>
                            <div className="profile-card-inf__txt">Cardio Record</div>
                        </div>
                    </div>

                    <div className="profile-card-social">
                        <h3 className="achievements-title">Achievements Unlocked</h3>
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
                        <button onClick={editProfile} id="edit__profile" type="button"
                                className="profile-card__button button--blue js-message-btn">Edit
                            Information
                        </button>
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