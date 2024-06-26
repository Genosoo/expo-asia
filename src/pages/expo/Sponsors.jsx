import image from '../../assets/expo/test.png'
import ScrollAnimation from 'react-animate-on-scroll';
import image1 from '../../assets/blue-image1.svg';
import image2 from '../../assets/blue-image2.svg';

export default function Sponsors() {
  return (
    <div className="sponsorsContainer">
       <img src={image1} alt="" className='image1'/>
      <img src={image2} alt=""   className='image2'/>
      <ScrollAnimation animateIn="swing">
        <h1>Sponsors/Partners</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInLeft">
        <p>We extend our heartfelt gratitude to all our sponsors and partners whose unwavering support has <br />
         made this event possible. Their commitment to excellence and innovation is truly commendable.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="slideInRight" className='flex items-center justify-center'>
        <img src={image} alt="image" />
        </ScrollAnimation>
    </div>
  )
}
