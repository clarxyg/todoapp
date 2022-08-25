import { CalendarCheck, Clock } from "phosphor-react";
import { Link } from "react-router-dom";



export function SideBar() {
    return (
        <div className="sidebar_container">
            <Link to="/" style={{ color: 'black' }}>
                <CalendarCheck size={32} className="icon" />
            </Link>
            <Link to="/pomodoro" style={{ color: 'black' }}>
                <Clock size={32} className="icon" />
            </Link>
        </div>
    )
}