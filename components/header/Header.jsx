import Navbar from 'react-bootstrap/Navbar';
import Navigation from '../navigation/Navigation'
import styles from './Header.module.scss';

const Header = () => {

    return (
        <header>
            <Navbar bg="dark">
                <Navbar.Brand href="#home">
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
        </header>
    )
}

export default Header;