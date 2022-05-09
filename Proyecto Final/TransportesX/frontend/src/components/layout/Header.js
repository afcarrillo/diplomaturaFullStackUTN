import React from 'react';

import '../../styles/components/layout/header.css';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className="logo">
                    <img src="images/logo.png" alt="Trasnportes X" width="100"/>
                    <h1>Transportes X</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;