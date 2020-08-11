import Button from 'react-bootstrap/Button'
import style from './Hero.module.scss'

const Hero = props => {
    return (
        <header className="container text-white z-line">
            <h1 className="z-line">
                {props.title}
            </h1>
            <h2 className="z-line">
                {props.tag}
            </h2>
            <Button className="text-white my-4" size="lg" variant="primary">hire us</Button>
        </header>
    )
}

export default Hero;