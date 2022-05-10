import React from "react";
import ReactRotatingText from "./RotatingText";

const languages = ['english', 'spanish', 'chineese', 'french', 'german', ]

const MainTitle = () => {
    return(
        <h1 className="mainTitle">
                <span className="mainTitle__letters">Learn&nbsp;
                    <ReactRotatingText 
                    items={languages} 
                    emptyPause={1000}
                    deletingInterval={50}
                    eraseMode={'erase'}
                    pause={1500}
                    typingInterval={50}
                    random={false}
                    />
                </span>
                <br></br>
                <span className="mainTitle__letters">using any YouTube video </span>
                <br></br>
                <span className="mainTitle__letters mainTitle__letters--stylish">for free!</span>  
        </h1>
    )
}

export default MainTitle;
