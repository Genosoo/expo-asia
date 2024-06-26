import { Image } from 'antd'
import image from '../../assets/expo/visitor.svg'
import ScrollAnimation from 'react-animate-on-scroll';

export default function Visitors() {
  return (
    <div className="visitorsContainer">
      <ScrollAnimation animateIn="swing">
        <h1>Visitors</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="zoomInUp" className='flex items-center justify-center'>
        <Image src={image} alt="image" className='img'  />
        </ScrollAnimation>
    </div>
  )
}
