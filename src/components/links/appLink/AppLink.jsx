import React from "react";
import logoImg from './logoImg.webp';
import logoImg2x from './logoImg@2x.webp';
import logoText from './logoText.webp';
import logoText2x from './logoText@2x.webp';

const AppLink = () => {
    return(
        <a href="./" className="app-link app-link--flex-middle">
            <img className="app-link__logo-img" src={logoImg} alt="лого приложения"
            srcSet={logoImg2x} />
            <img className="app-link__logo-text" src={logoText} alt="лого приложения"
            srcSet={logoText2x} />
        </a>
    )
}

export default AppLink;