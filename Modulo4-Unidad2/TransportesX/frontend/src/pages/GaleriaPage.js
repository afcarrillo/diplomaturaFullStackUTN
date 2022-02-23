import React from 'react';

import '../styles/components/pages/galeriaPage.css';

const GaleriaPage = (props) => {
    return (
        <main class="holder">
            <h2>Galeria</h2>
            <div class="galeria">
                <div class="foto">
                    <img src="images/galeria/img01.jpg" alt="img01" />
                </div>
                <div class="foto">
                    <img src="images/galeria/img02.jpg" alt="img02" />
                </div>
                <div class="foto">
                    <img src="images/galeria/img03.jpg" alt="img03" />
                </div>
                <div class="foto">
                    <img src="images/galeria/img04.jpg" alt="img04" />
                </div>
                <div class="foto">
                    <img src="images/galeria/img05.jpg" alt="img05" />
                </div>
                <div class="foto">
                    <img src="images/galeria/img06.jpg" alt="img06" />
                </div>
                <div class="foto">
                    <img src="images/galeria/img07.jpg" alt="img07" />
                </div>
            </div>
        </main>
    );
}

export default GaleriaPage;