import Navbar from 'react-bootstrap/Navbar';
import Navigation from '../navigation/Navigation'
import Hero from '../hero/Hero'
// import BgVideo from '../bgVideo/BgVideo'
import styles from './Header.module.scss';

const Header = () => {

    return (
        <header className={`container-fluid px-0 bg-light ${styles.header}`}>
            {/* <BgVideo /> */}
            <div className={styles.div}></div>
            <Navbar sticky="top" className="container d-flex justify-content-between bg-transparent" variant="dark">
                <Navbar.Brand className="z-line" href="#home">
                    <img
                        src="/logo.svg"
                        width="190"
                        height="auto"
                        className="d-inline-block align-top"
                        alt="Visionary Creatives Limited Official Logo"
                    />
                </Navbar.Brand>
                <Navigation />
            </Navbar>
            <Hero title="Where Creativity Meets Technology" tag="Let us build your brand, so you can build your business"/>
        </header>
    )
}

export default Header;