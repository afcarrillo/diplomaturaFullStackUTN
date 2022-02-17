import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna left">
                <h2>Complete el siguiente formulario:</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="mail" name="email" />
                    </p>
                    <p>
                        <label>Teléfono</label>
                        <input type="tel" nombre = "telefono" />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p className="acciones">
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="columna right">
                <h2>Otras vías de contacto</h2>
                <p>También se pueden comunicar con nosotros ...</p>
                <ul>
                    <li>Teléfono: 1234-5678</li>
                    <li>Email: contacto@transportesx.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>
                    <li>Instagram:</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;