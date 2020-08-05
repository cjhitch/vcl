import Nav from 'react-bootstrap/Nav'
import styles from './Navigation.module.scss'

const Navigation = () => {

    return (
        <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li" className="z-line">
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="z-line">
                <Nav.Link eventKey="link-1">Web & Graphics</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="z-line">
                <Nav.Link eventKey="link-2">SEO & Marketing</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="z-line">
                <Nav.Link eventKey="link-3">Recent Work</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="z-line">
                <Nav.Link eventKey="link-4">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="z-line">
                <Nav.Link eventKey="link-5">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}


export default Navigation;