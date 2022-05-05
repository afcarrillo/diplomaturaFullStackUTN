import React from 'react';

import '../styles/components/pages/homePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="Avión" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Wisi forensibus mnesarchum in cum. Per id impetus abhorreant, his no magna definiebas, inani
                        rationibus in quo. Ut vidisse dolores est, ut quis nominavi mel. Ad pri quod apeirian
                        concludaturque, id timeam iudicabit rationibus pri. Per nonummy postulant assentior an, mea audiam fabellas deserunt id.</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                        dolor in hendrerit in vulputate velit esse molestie consequat</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;