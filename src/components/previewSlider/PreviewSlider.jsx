import Slider from './Slider';

import backSVG from './img/Previous_button.svg';
import nextSVG from './img/Next_button.svg';

import slide1 from './img/Number=1.webp';
import slide1_2x from './img/Number=1@2x.webp';
import slide2 from './img/Number=2.webp';
import slide2_2x from './img/Number=2@2x.webp';
import slide3 from './img/Number=3.webp';
import slide3_2x from './img/Number=3@2x.webp';
import slide4 from './img/Number=4.webp';
import slide4_2x from './img/Number=4@2x.webp';
import slide5 from './img/Number=5.webp';
import slide5_2x from './img/Number=5@2x.webp';
import slide6 from './img/Number=6.webp';
import slide6_2x from './img/Number=6@2x.webp';
import slide7 from './img/Number=7.webp';
import slide7_2x from './img/Number=7@2x.webp';
import slide8 from './img/Number=8.webp';
import slide8_2x from './img/Number=8@2x.webp';
import slide9 from './img/Number=9.webp';
import slide9_2x from './img/Number=9@2x.webp';

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
        image: `${slide3}`,
        image2x: `${slide3_2x}`,
    },
    {
        image: `${slide4}`,
        image2x: `${slide4_2x}`,
    },
    {
        image: `${slide5}`,
        image2x: `${slide5_2x}`,
    },
    {
        image: `${slide6}`,
        image2x: `${slide6_2x}`,
    },
    {
        image: `${slide7}`,
        image2x: `${slide7_2x}`,
    },
    {
        image: `${slide8}`,
        image2x: `${slide8_2x}`,
    },
    {
        image: `${slide9}`,
        image2x: `${slide9_2x}`,
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
            autoplay='3000'
            duration='1000'
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
