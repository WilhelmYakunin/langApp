import React from "react";
import GoogleStoreIcon from './Google_Store_icon_2015.webp';
import GoogleStoreIcon2x from './Google_Store_icon_2015@2x.webp';

const IstallButton = () => {
    return(
        <a href="./" className="install-button install-button--flex-center install-button--stylish">
            <img className="install-button install-button__icon" src={GoogleStoreIcon} alt="install App button"
                srcSet={GoogleStoreIcon2x} />
            <span className="install-button install-button__title">Install&nbsp;for&nbsp;free</span>
        </a>
    )
}

export default IstallButton;