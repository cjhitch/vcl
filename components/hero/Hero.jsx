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
        </header>
    )
}

export default Hero;