import { CalendarCheck, Clock } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";



export function SideBar() {
    const [isActive, setActive] = useState(true)

    return (
        <div className="sidebar_container">
            <NavLink to="/" style={({ isActive }) => (isActive ? {color: 'blue'} : {color: 'black'})}>
                <CalendarCheck size={32} className="icon" />
            </NavLink>
            <NavLink to="/pomodoro" style={({ isActive }) => (isActive ? {color: 'blue'} : {color: 'black'})}>
                <Clock size={32} className="icon" />
            </NavLink>
        </div>
    )
}