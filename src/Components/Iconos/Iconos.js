import React from "react";
import * as ReactIcons from 'react-icons/bs'

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