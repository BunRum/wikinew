import { Navbar } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useLinkClickHandler } from "react-router-dom";
import { Input } from "@nextui-org/react";

const navlinks = [
    {
        title: 'Home',
        to: '/home'
    },
    {
        title: 'Assets',
        to: '/extras/assets'
    },
    {
        title: 'Information',
        to: '/information/database-functions'
    },
    {
        title: 'Cards',
        to: '/cards'
    },
    {
        title: 'Potenial Board',
        to: '/information/potential-board'
    }
]

export default function Navigation() {
    let navigate = useNavigate();
    return (
        <Navbar variant="sticky">
            <Navbar.Content hideIn="xs" variant="underline-rounded">
                {
                    Object.entries(navlinks).map(([sat], i) => (
                        <Navbar.Link aria-label="Close" onClick={() => { navigate(`${navlinks[sat].to}`) }} key={i}
                            isActive={(window.location.pathname.replace('/wikinew', '') === navlinks[sat].to) ? true : false}
                        >
                            {navlinks[sat].title}
                        </Navbar.Link>
                    ))
                }
            </Navbar.Content>
            <Navbar.Content>
                <Input placeholder="search" aria-label="Close" />
            </Navbar.Content>
        </Navbar>
    )
}