import Slider from './Slider';

import backSVG from './img/Previous_button.svg';
import nextSVG from './img/Next_button.svg';
import slide1 from './img/Number=1.png';
import slide1_2x from './img/Number=1@2x.png';
import slide2 from './img/Number=2.png';
import slide2_2x from './img/Number=2@2x.png';
import slide4 from './img/Number=4.png';
import slide4_2x from './img/Number=4@2x.png';
import slide5 from './img/Number=5.png';
import slide5_2x from './img/Number=5@2x.png';

const slides = [
    {
        image: `${slide1}`,
        image2x: `${slide1_2x}`,
    },

    {
        image: `${slide2}`,
        image2x: `${slide2_2x}`,
    },
    {
        image: `${slide4}`,
        image2x: `${slide4_2x}`,
    },
    {
        image: `${slide5}`,
        image2x: `${slide5_2x}`,
    }
 ]

const BackButton = () => {
    return (
        <img src={backSVG} alt="list to previous slide icon"/>
    )
}

const NextButton = () => {
    return (
        <img src={nextSVG} alt="list to next slide icon"/>
    )
}

const PreviewSlider = () => {
    return(
        <Slider 
            infinite 
            autoplay='4000'
            duration='100'
            previousButton={<BackButton />}
            nextButton={<NextButton />}
            className="slider">
            {slides.map((slide, index) => (
                <img className="slide" key={index} src={slide.image} srcSet={slide.image2x} alt="slide of the app" />
            ))}
      </Slider>
    )
}

export default PreviewSlider;
