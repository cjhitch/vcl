import Nav from 'react-bootstrap/Nav'
import styles from './Navigation.module.scss'

const Navigation = () => {

    const links = [
        ['/home', 'Home'], 
        ['#', 'Web & Graphics'], 
        ['#', 'SEO & Marketing'], 
        ['#', 'Recent Work'], 
        ['#', 'About'], 
        ['#', 'Contact']
    ]

    const template = links.map( (link, index) => 
        <Nav.Item as="li" className="z-line">
            {index === 0 ?
                <Nav.Link href={link[0]}>{link[1]}</Nav.Link> :
                <Nav.Link eventKey={`link-${index}`} href={link[0]}>{link[1]}</Nav.Link>
            }
        </Nav.Item>
    )

    return (
        <Nav defaultActiveKey="/home" as="ul">
            {template}
        </Nav>
    )
}


export default Navigation;