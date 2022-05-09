import React from 'react';

import '../styles/components/pages/serviciosPage.css';

const ServiciosPage = (props) => {
    return (
        <main class="holder">
            <h2>Servicios</h2>
            <div class="servicio">
                 <img src="images/servicios/ferroviario.jpg" alt="Tren" />
                <div class="info">
                    <h4>Transporte Ferroviario</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                </div>            
            </div>
            <div class="servicio">
                <img src="images/servicios/aereo.jpg" alt="Avión" />
                <div class="info">
                    <h4>Transporte Aéreo</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                </div> 
            </div>
            <div class="servicio">
                <img src="images/servicios/maritimo.jpg" alt="Barco" />
                <div class="info">
                    <h4>Transporte Marítimo</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div class="servicio">
                <img src="images/servicios/terrestre.jpg" alt="Camión" />
                <div class="info">
                    <h4>Transporte Terrestre</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </main>
    );
}

export default ServiciosPage;