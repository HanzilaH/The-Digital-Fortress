import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import PuzzleTemplate from "../PuzzleTemplate";

const captchaLogo = require("../assets/recaptcha.png");

const FakeCaptcha = () => {

    let [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {

        setIsChecked(!isChecked);

    }

    return (
        <PuzzleTemplate title="Are you a robot?" nextStage="/test" alwaysShowButtons={true} isSolved={!isChecked} puzzle={
            <div className="container">
                <div className="row">
                    <div className="fake-captcha-captcha col-4 mx-auto">
                        <div className="fake-captcha-spinner">
                            <label>
                                <input className="fake-captcha-checkbox" type="checkbox" onClick={handleClick} />
                                <span className="fake-captcha-empty">
                                    <span className="fake-captcha-checkmark">&nbsp;</span>
                                </span>
                            </label>
                        </div>
                        <div className="fake-captcha-text">
                            I'm a robot
                        </div>
                        <div className="fake-captcha-logo">
                            <img src={captchaLogo} alt="reCAPTCHA" />
                            <p>reCAPTCHA</p>
                            <small>Privacy - Terms</small>
                        </div>
                    </div>
                </div>
            </div>
        } />
    )

}

export default FakeCaptcha;
