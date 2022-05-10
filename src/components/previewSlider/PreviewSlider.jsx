import Slider from './Slider';
import 'react-animated-slider/build/horizontal.css';
import backSVG from './Previous_button.svg';
import nextSVG from './Next_button.svg';
import slide1 from './Number=1.png';
import slide2 from './Number=2.png';
import slide4 from './Number=4.png';
import slide5 from './Number=5.png';

const slides = [
    {
        image: `${slide1}`,
    },

    {
        image: `${slide2}`,
    },
    {
        image: `${slide4}`,
    },
    {
        image: `${slide5}`,
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
            autoplay='2000'
            duration='2000'
            previousButton={<BackButton />}
            nextButton={<NextButton />}
            className="slider-wrapper">
            {slides.map((slide, index) => (
                <img className="slide" key={index} src={slide.image} alt="slide of the app" />
            ))}
      </Slider>
    )
}

export default PreviewSlider;
