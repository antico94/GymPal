import React, {useEffect, useState} from 'react';
import "./profile.css"
import Danutu from "../../assets/img/danutu.jpg"
import Safe from "./../../assets/img/Medals/Safe.png"
import Complete from "./../../assets/img/Medals/Complete.png"
import Cardio from "./../../assets/img/Medals/Cardio.png"
import Smart from "./../../assets/img/Medals/Smart.png"
import Fabulous from "./../../assets/img/Medals/Fabulous.png"
import New from "./../../assets/img/Medals/New.png"
import King from "./../../assets/img/Medals/King.png"
import $ from 'jquery'
import {variables as HardCodedData} from "../../containers/ProfileDummyData";
import {CustomModal} from "../../components";
import {AddObjectInCookie, currentUser, fetchCustomData, fetchData, getCookie} from "../../containers/utility";
import {variables as API} from "../../containers/Variables";
import * as url from "url";

function Profile() {
    const [userUpdate, setUserUpdate] = useState(0)

    const UpdateProfile = () => {
        let userid = getCookie("UserId")
        fetchCustomData(API.UPDATE_PROFILE, "post", {name, description, height, weight, userid}).then(response => {
                if (response.ok) {
                    response.json().then(error => console.log(error))
                    // currentUser()
                } else {
                    response.json().then(error => console.log(error))
                }
            }
        )
    }
    // const userId = getCookie("UserId")
    // const response = fetch(API.UPDATE_PROFILE, {
    //     method: "POST",
    //     headers: {"Content-Type": "Application/json"}, body: JSON.stringify({name, description, height, weight, userId})
    // });
    // console.log(response)
    // response.then(r => r.json().then(z => console.log(z)
    // ))



    useEffect(() => {
        console.log("change")
    }, [document.cookie])

    const [name, setName] = useState(getCookie("Name"));
    const [description, setDescription] = useState(getCookie("Description"));
    const [height, setHeight] = useState(getCookie("Height"));
    const [weight, setWeight] = useState(getCookie("Weight"));
    const [BMI, setBMI] = useState(getCookie("BMI"));
    const [fatPercentage, setFatPercentage] = useState(getCookie("BodyFat"));
    const [buttonText, setButtonText] = useState("Edit Information");


    //Medals
    // const Medals = [Safe, Complete, Cardio, Smart, Fabulous, New, King]
    const [safeUnlocked, setSafeUnlocked] = useState(HardCodedData.HasCompletedHSA);
    const [completedUnlocked, setCompletedUnlocked] = useState(HardCodedData.HasCompletedProfile);
    const [cardioUnlocked, setCardioUnlocked] = useState(HardCodedData.HasOver1000Cardio);
    const [smartUnlocked, setSmartUnlocked] = useState(HardCodedData.HasNotExceededRecommendedWeight);
    const [fabulousUnlocked, setFabulousUnlocked] = useState(HardCodedData.HasProfilePicture);
    const [newUnlocked, setNewUnlocked] = useState(true);
    const [kingUnlocked, setKingUnlocked] = useState(HardCodedData.IsTop10);


    const Bindings = {
        Safe: safeUnlocked,
        Complete: completedUnlocked,
        Cardio: cardioUnlocked,
        Smart: smartUnlocked,
        Fabulous: fabulousUnlocked,
        New: newUnlocked,
        King: kingUnlocked
    }


    const Medals = () => {
        const icons = document.querySelectorAll('.icon')
        for (let i = 0; i < icons.length; i++) {
            let temp = icons[i].src.slice(35, icons[i].src.length - 13)
            if (!Bindings[temp]) {
                icons[i].setAttribute('data-locked', '')
            }
        }
    }


    useEffect(() => {
        Medals()
    })

    const ModalBindings = {
        Safe: ["Always safe" + (Bindings["Safe"] ? " (Unlocked)" : " (Locked)"), "User has completed Health and safety Questionnaire."],
        Complete: ["Completed Profile" + (Bindings["Complete"] ? " (Unlocked)" : " (Locked)"), "User has completed his profile details."],
        Cardio: ["Cardio Beast" + (Bindings["Cardio"] ? " (Unlocked)" : " (Locked)"), "User has cumulated over 1000 Minutes of Cardio"],
        Smart: ["Back to Normal" + (Bindings["Smart"] ? " (Unlocked)" : " (Locked)"), "User got the normal BMI."],
        Fabulous: ["I'm Fabulous!" + (Bindings["Fabulous"] ? " (Unlocked)" : " (Locked)"), "User uploaded a profile picture."],
        New: ["Driven" + (Bindings["New"] ? " (Unlocked)" : " (Locked)"), "User has found the motivation start pumping."],
        King: ["Gym King" + (Bindings["King"] ? " (Unlocked)" : " (Locked)"), "User is in top 10 Leaderboard of Cardio or Bench."],
    }

    $(document).ready(function () {

        "use strict";

        $(".icon").hover(function () {
            let modalTitle = $("#modal-title-profile")
            let modalDescription = $("#modal-description-profile")
            modalTitle.text(ModalBindings[this.src.slice(35, this.src.length - 13)][0])
            modalDescription.text(ModalBindings[this.src.slice(35, this.src.length - 13)][1])
        });
    });

    const closeMenu = () => {
        window.location.href = "/"
    }

    const editProfile = () => {

        function ShowInputBoxes() {
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
            $("#BMI").css("display", "none")
            $("#fatPercentage").css("display", "none")

        }

        function HideInputBoxes() {

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
            $("#BMI").css("display", "block")
            $("#fatPercentage").css("display", "block")
        }

        if (buttonText === "Edit Information") {
            $("#edit__profile").text("Save")
            setButtonText("Save")

            ShowInputBoxes()

        } else {
            $("#edit__profile").text("Edit Information")
            setButtonText("Edit Information")
            HideInputBoxes()
            UpdateProfile()
        }
    }


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
                        <input onChange={e => setName(e.target.value)} className="input-name" placeholder={name}/>
                    </div>
                    <div className="profile-card__txt">Member for <strong>5 days.</strong></div>
                    <div className="profile-card-loc">
                        {/*<CustomModal/>*/}
                        <span className="profile-card-loc__txt">{description}</span>
                        <input onChange={e => setDescription(e.target.value)} className="input-description"
                               placeholder={description}/>
                    </div>

                    <div className="profile-card-inf">
                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title" id="currentHeight">{height}</div>
                            <input onChange={e => setHeight(e.target.value)} placeholder={height}
                                   className="input-height"/>
                            <div className="profile-card-inf__txt">Height</div>
                        </div>

                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title" id="currentWeight">{weight}</div>
                            <input onChange={e => setWeight(e.target.value)} placeholder={weight}
                                   className="input-weight"/>

                            <div className="profile-card-inf__txt">Weight</div>
                        </div>

                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title" id="BMI">{BMI}
                            </div>
                            <input onChange={e => setBMI(e.target.value)} placeholder={BMI}
                                   className="input-bench"/>
                            <div className="profile-card-inf__txt">BMI</div>
                        </div>

                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title"
                                 id="fatPercentage">{fatPercentage}<span>%</span>
                            </div>
                            <input onChange={e => setFatPercentage(e.target.value)} placeholder={fatPercentage}
                                   className="input-cardio"/>
                            <div className="profile-card-inf__txt">Body Fat</div>
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
              <img className="icon" src={Fabulous} id="test" alt="fab"/>
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
                    <div className="modal-dialog" role="document">
                        <div className="modal-content rounded-4 shadow" id="inside-modal">
                            <div className="modal-body p-4 text-center">
                                <h5 id="modal-title-profile" className="mb-0">Title</h5>
                                <p id="modal-description-profile" className="mb-0">A big fucking description.</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card-ctr">
                        <button onClick={editProfile} id="edit__profile" type="button"
                                className="profile-card__button button--blue js-message-btn">Edit
                            Information
                        </button>
                        <button onClick={closeMenu} className="profile-card__button button--orange">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Profile;