'use client';
import CardNav from '@/app/components/react-bits/StaggeredMenu'
// import logo from './logo.svg';

const items = [
    {
        label: "About",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
            { label: "Company", ariaLabel: "About Company", href: "/company" },
            { label: "Careers", ariaLabel: "About Careers", href: "/careers" }
        ]
    },
    {
        label: "Projects",
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
            { label: "Featured", ariaLabel: "Featured Projects", href: "/projects/featured" },
            { label: "Case Studies", ariaLabel: "Project Case Studies", href: "/projects/case-studies" }
        ]
    },
    {
        label: "Contact",
        bgColor: "#271E37",
        textColor: "#fff",
        links: [
            { label: "Email", ariaLabel: "Email us", href: "mailto:info@example.com" },
            { label: "Twitter", ariaLabel: "Twitter", href: "https://twitter.com" },
            { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://linkedin.com" }
        ]
    }
];
const logo = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png";
function NavBar() {
    return (
        <CardNav
            logo={logo}
            logoAlt="Company Logo"
            items={items}
            // baseColor="#e4e4e4"
            menuColor="#fff"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
        />
    )
}

export default NavBar