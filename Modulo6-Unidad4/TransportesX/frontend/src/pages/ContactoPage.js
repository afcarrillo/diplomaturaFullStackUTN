import { React, useState } from 'react';
import axios from 'axios';

import '../styles/components/pages/contactoPage.css';

const ContactoPage = (props) => {

    // Variable para estado inicial del formulario
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    // Variables de estado
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    // Funcion que modifica los campos del formulario y sus valores
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    // Funcion que controla el envio de datos y actualizacion de variables de estado
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }

    return (
        <main className="holder">
            <div className="columna left">
                <h2>Complete el siguiente formulario:</h2>
                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="mail" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Teléfono</label>
                        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
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