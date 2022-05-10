import React from "react";
import logoImg from './logoImg.png';
import logoImg2x from './logoImg@2x.png';
import logoText from './logoText.png';
import logoText2x from './logoText@2x.png';

const AppLink = () => {
    return(
        <a href="./" className="appLink appLink--flex-middle">
            <img className="appLink__logo-img" src={logoImg} alt="лого приложения"
            srcSet={logoImg2x} />
            <img className="appLink__logo-text" src={logoText} alt="лого приложения"
            srcSet={logoText2x} />
        </a>
    )
}

export default AppLink;