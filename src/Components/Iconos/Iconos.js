import React from "react";

export const Iconos = ({icon, title, ruta}) => {
    return(
        <div className="iconos">
            <a href={ruta}>
                <span>{icon}</span>
                <p>{title}</p>
            </a>
        </div>
    )
}