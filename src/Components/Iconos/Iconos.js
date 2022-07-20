import React from "react";
import { Link } from "react-router-dom";

export const Iconos = ({icon, title, ruta}) => {
    return(
        <div className="iconos">
            <Link to={ruta}>
                <span>{icon}</span>
                <p>{title}</p>
            </Link>
        </div>
    )
}