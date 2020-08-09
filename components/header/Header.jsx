import Navbar from 'react-bootstrap/Navbar';
import Navigation from '../navigation/Navigation'
import Hero from '../hero/Hero'
import BgVideo from '../bgVideo/BgVideo'
import styles from './Header.module.scss';

const Header = () => {

    return (
        <header className={`container-fluid px-0 bg-light ${styles.header}`}>
            <BgVideo />
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
            <Hero title="Web & Graphics Re-imagined" tag="We focus on building your brand, so you can focus on your business"/>
        </header>
    )
}

export default Header;