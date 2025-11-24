import React from "react";
import { useNavigate } from "react-router";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText,

} from "@trendmicro/react-sidenav";

const navigations = ["main", "reviews", "shop", "contacts"];

export default function SideNavBar() {
    const navigate = useNavigate();
    const [isVisible, setVisible] = React.useState(true);

    return (
        <SideNav
            id="sidenav_"
            expanded={isVisible}
            onSelect={(selected) => {
                navigate(
                    selected === "main" ? "/" : `/${selected}`
                );
            }}
        >
            <SideNav.Toggle
                onClick={() => setVisible(!isVisible)}
            />

            <SideNav.Nav defaultSelected="main">
                {navigations.map((nav) =>  {
                    return <NavItem eventKey={nav}>
                        <NavIcon fontSize={"1.25em"} />
                        <NavText>{nav.charAt(0).toUpperCase() + nav.slice(1)}</NavText>
                    </NavItem> }
                )};
            </SideNav.Nav>
        </SideNav>
    );
}