import React from 'react'
import { NavLink } from "react-router-dom";
import routeList from "@src/routes"

class SideBar extends React.Component {
    render() {
        return (
            <div className="side-box">
                <ul>
                    {
                        routeList.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.path} activeClassName="active">{item.sidebarName}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default SideBar