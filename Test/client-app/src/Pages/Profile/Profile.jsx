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
import {currentUser, fetchCustomData, getCookie} from "../../containers/utility";
import {API} from "../../containers/API";

function Profile() {

    const UpdateProfile = () => {
        let userid = getCookie("UserId")
        fetchCustomData(API.UPDATE_PROFILE, "post", {
            name, gender, age, description, height, weight, userid
        }).then(response => {
            if (response.ok) {
                response.json().then(error => console.log(error))
                currentUser()
                setTimeout(() => {
                    setFatPercentage(getCookie("BodyFat"))
                    setBMI(getCookie("BMI"))
                    setBfIndex(getCookie("BodyFatIndex"))
                    setBmiIndex(getCookie("BMIIndex"))
                }, 100)

            } else {
                response.json().then(error => console.log(error))
            }
        })
    }

    $('.button').click(function () {
        const buttonId = $(this).attr('id');
        $('#modal-container').removeAttr('class').addClass(buttonId);
        $('body').addClass('modal-active');
    })

    $('#modal-container').hover(function () {
        $(this).addClass('out');
        $('body').removeClass('modal-active');
    });


    const [name, setName] = useState(getCookie("Name"));
    const [description, setDescription] = useState(getCookie("Description"));
    const [height, setHeight] = useState(getCookie("Height"));
    const [weight, setWeight] = useState(getCookie("Weight"));
    const [BMI, setBMI] = useState(getCookie("BMI"));
    const [fatPercentage, setFatPercentage] = useState(getCookie("BodyFat"));
    const [age, setAge] = useState(getCookie("Age"));
    const [gender, setGender] = useState(getCookie("Gender"));
    const [bmiIndex, setBmiIndex] = useState(getCookie("BMIIndex"));
    const [bfIndex, setBfIndex] = useState(getCookie("BodyFatIndex"));
    const [buttonText, setButtonText] = useState("Edit Information");


    //Medals
    // const Medals = [Safe, Complete, Cardio, Smart, Fabulous, New, King]
    // const [safeUnlocked, setSafeUnlocked] = useState(HardCodedData.HasCompletedHSA);
    // const [completedUnlocked, setCompletedUnlocked] = useState(HardCodedData.HasCompletedProfile);
    // const [cardioUnlocked, setCardioUnlocked] = useState(HardCodedData.HasOver1000Cardio);
    // const [smartUnlocked, setSmartUnlocked] = useState(HardCodedData.HasNotExceededRecommendedWeight);
    // const [fabulousUnlocked, setFabulousUnlocked] = useState(HardCodedData.HasProfilePicture);
    // const [newUnlocked, setNewUnlocked] = useState(true);
    // const [kingUnlocked, setKingUnlocked] = useState(HardCodedData.IsTop10);

    const safeUnlocked = HardCodedData.HasCompletedHSA;
    const completedUnlocked = HardCodedData.HasCompletedProfile;
    const cardioUnlocked = HardCodedData.HasOver1000Cardio;
    const smartUnlocked = HardCodedData.HasNotExceededRecommendedWeight;
    const fabulousUnlocked = HardCodedData.HasProfilePicture;
    const newUnlocked = true;
    const kingUnlocked = HardCodedData.IsTop10;


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
        if (getCookie("userLoggedIn") === "false") {
            // $('body').addClass('modal-active');
        }
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
            $('.input-age').css("display", "block")
            $('.input-gender').css("display", "block")
            $('.special-radio').css("display", "block")

            //Hide Actual Data
            $(".profile-card__name").css("display", "none")
            $(".profile-card-loc__txt").css("display", "none")
            $("#currentHeight").css("display", "none")
            $("#currentWeight").css("display", "none")
            $("#BMI").css("display", "none")
            $("#fatPercentage").css("display", "none")
            $("#age").css("display", "none")
            $("#gender").css("display", "none")
            $("#bmiIndex").css("display", "none")
            $("#bfIndex").css("display", "none")
            $(".special-hide").css("display", "none")


        }

        function HideInputBoxes() {

            //Hide Input Boxes
            $('.input-name').css("display", "none")
            $('.input-description').css("display", "none")
            $('.input-height').css("display", "none")
            $('.input-weight').css("display", "none")
            $('.input-gender').css("display", "none")
            $('.input-age').css("display", "none")
            $('.special-radio').css("display", "none")


            //Show Actual Data
            $(".profile-card__name").css("display", "block")
            $(".profile-card-loc__txt").css("display", "block")
            $("#currentHeight").css("display", "block")
            $("#currentWeight").css("display", "block")
            $("#BMI").css("display", "block")
            $("#fatPercentage").css("display", "block")
            $("#age").css("display", "block")
            $("#gender").css("display", "block")
            $("#bfIndex").css("display", "block")
            $("#bmiIndex").css("display", "block")
            $(".special-hide").css("display", "block")
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
            {/*<Modal/>*/}
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
                        <span className="profile-card-loc__txt">{description}</span>
                        <input onChange={e => setDescription(e.target.value)} className="input-description"
                               placeholder={description}/>
                    </div>


                    <div className="profile-card-inf">

                        {/*Height*/}
                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title">Height</div>

                            <div className="profile-card-inf__txt" id="currentHeight">{height} cm</div>
                            <input onChange={e => setHeight(e.target.value)} placeholder={height}
                                   className="input-height"/>
                        </div>

                        {/*Weight*/}
                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title">Weight</div>

                            <div className="profile-card-inf__txt" id="currentWeight">{weight} Kg</div>
                            <input onChange={e => setWeight(e.target.value)} placeholder={weight}
                                   className="input-weight"/>
                        </div>

                        {/*BMI*/}
                        <div className="profile-card-inf__item special-hide">

                            <div className="profile-card-inf__title" id="BMI">BMI</div>
                            <div className="profile-card-inf__txt">{BMI} %</div>
                        </div>

                        {/*BodyFat*/}
                        <div className="profile-card-inf__item special-hide">

                            <div className="profile-card-inf__title"
                                 id="fatPercentage">Body Fat
                            </div>

                            <div className="profile-card-inf__txt">{fatPercentage} %</div>
                        </div>

                        {/*Age*/}
                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title">Age</div>
                            <div className="profile-card-inf__txt" id="age">{age}</div>
                            <input onChange={e => setAge(e.target.value)} placeholder={age}
                                   className="input-age"/>
                        </div>

                        {/*Gender*/}
                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title">Gender</div>
                            <div className="special-radio">
                                <div className="segmented-control">
                                    <input type="radio" name="radio2" onClick={e => setGender(e.target.value)}
                                           value="Male" id="tab-1" checked/>
                                    <label htmlFor="tab-1" className="segmented-control__1">
                                        <p>Male</p></label>
                                    <input type="radio" name="radio2" onClick={e => setGender(e.target.value)}
                                           value="Female" id="tab-2"/>
                                    <label htmlFor="tab-2" className="segmented-control__2">
                                        <p>Famale</p></label>
                                    <div className="segmented-control__color"/>
                                </div>
                            </div>
                            <div className="profile-card-inf__txt" id="gender">{gender}</div>
                        </div>

                        {/*BMI Index*/}
                        <div className="profile-card-inf__item special-hide">
                            <div className="profile-card-inf__title"
                                 id="bmiIndex">BMI Index
                            </div>
                            <div id="hide" className="profile-card-inf__txt">{bmiIndex}</div>
                        </div>

                        {/*BF Index*/}
                        <div className="profile-card-inf__item special-hide">
                            <div className="profile-card-inf__title"
                                 id="bfIndex">BF Index
                            </div>
                            <div id="hide1" className="profile-card-inf__txt">{bfIndex}</div>
                        </div>
                    </div>

                    {/*<div className="custom-modal">*/}
                    {/*    <div id="modal-container">*/}
                    {/*        <div className="modal-background">*/}
                    {/*            <div className="modal">*/}
                    {/*                <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%"*/}
                    {/*                     height="100%"*/}
                    {/*                     preserveAspectRatio="none">*/}
                    {/*                    <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"/>*/}
                    {/*                </svg>*/}
                    {/*                <h1>Not implemented yet</h1>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="content">*/}
                    {/*        <div className="buttons">*/}
                    {/*            <div id="five" className="button">Stats</div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="profile-card-social">
                        <h3 className="achievements-title">Achievements</h3>
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