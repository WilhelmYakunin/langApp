import React from "react";
import ReactRotatingText from "./RotatingText";

const languages = ['English', 'Spanish', 'Chineese', 'French', 'German', ]

const MainTitle = () => {
    return(
        <h1 className="main-title">
                <span className="main-title__letters">Learn&nbsp;
                    <ReactRotatingText
                    items={languages} 
                    emptyPause={100}
                    deletingInterval={50}
                    eraseMode={'erase'}
                    pause={3000}
                    typingInterval={250}
                    random={false}
                    />
                </span>
                <br></br>
                <span className="main-tTitle__letters">using any YouTube video </span>
                <br></br>
                <span className="main-title__letters main-title__letters--stylish">for free!</span>  
        </h1>
    )
}

export default MainTitle;
