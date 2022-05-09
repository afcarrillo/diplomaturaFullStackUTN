import React from 'react';

const NovedadItem = (props) => {
    const { title, date, subtitle, imagen, body } = props;

    return (
        <div className="novedades">
            <h3>{title}</h3>
            <p class="fecha">{date}</p>
            <h4>{subtitle}</h4>
            <img src={imagen} alt="imagen novedad"/>
            <p dangerouslySetInnerHTML={{ __html: body }}></p>
            <hr/>
        </div>
    );
}

export default NovedadItem;