import { Navbar } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useLinkClickHandler } from "react-router-dom";
import { Input } from "@nextui-org/react";

const navlinks = [
    {
        linktitle: 'Home',
        linkto: '/home'
    },
    {
        linktitle: 'Assets',
        linkto: '/extras/assets'
    },
    // {
    //     linktitle: 'Information',
    //     linkto: '/wikinew/information/dbfunctions'
    // },
    {
        linktitle: 'Cards',
        linkto: '/cards'
    },
]

export default function Navigation() {
    let navigate = useNavigate();
    return (
        <Navbar variant="sticky">
            <Navbar.Content enableCursorHighlight hideIn="xs">
                    {
                        Object.entries(navlinks).map(([sat], i) => (

                            <Navbar.Link aria-label="Close" onPress={() => {
                                navigate(navlinks[sat].linkto)
                            }} key={sat.toString()}>{navlinks[sat].linktitle}</Navbar.Link>
                        ))
                    }
                <Navbar.Link aria-label="Close" onPress={() => {
                    navigate('/information/dbfunctions')
                }} key={navlinks.length}>Information</Navbar.Link>

            </Navbar.Content>
            <Navbar.Content>
                <Input placeholder="search" aria-label="Close" />
            </Navbar.Content>
        </Navbar>
    )
}