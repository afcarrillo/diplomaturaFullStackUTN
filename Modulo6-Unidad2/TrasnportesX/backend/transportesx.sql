-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-04-2022 a las 14:50:49
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `transportesx`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `usuario`, `fecha`, `visible`, `activo`) VALUES
(1, 'La mascarilla será obligatoria en los transportes pero no en los andenes ni en los accesos', 'El Consejo de Ministros ha aprobado un Real Decreto por el que el uso de mascarillas dejará de ser obligatorio en espacios interiores a partir de este miércoles tras ser publicado en el Boletín Oficial del Estado (BOE); sin embargo, tal y como ha confirmado la ministra de Sanidad Carolina Darias en respuesta a El Independiente, habrá que llevar mascarilla en los transportes pero no en los andenes ni en los accesos.', 'En cualquier caso, los españoles aún no se desprenderán del todo de la mascarilla, ya que seguirá siendo obligatoria en determinados ambientes, «en razón de la vulnerabilidad» de las personas que los suelen ocupar.\r\n\r\nArtículo relacionado: El Gobierno confirma que la mascarilla no será obligatoria en el puesto de trabajo ni en los colegios\r\n\r\nPor ejemplo, habrá que seguir llevándola en centros, servicios y establecimientos sanitarios, como hospitales, centros de salud, centros de transfusión de sangre o farmacias. En los hospitales, sin embargo, las personas ingresadas estarán exentas de llevarla cuando estén en su habitación.\r\n\r\nLa mascarilla en interiores también se deberá llevar en centros sociosanitarios como residencias de mayores, aunque no será obligatoria para los ancianos pero sí para los trabajadores y los familiares que realicen visitas.\r\n\r\nIgualmente, la mascarilla aún será obligatoria en transporte aéreo, ferrocarril, cable, autobuses y cualquier tipo de medio público, aunque sólo cuando se vaya a entrar en el transporte en cuestión. Es decir, se podrá esperar el Metro – por ejemplo – en el andén sin mascarilla pero será obligatorio llevarla dentro del vagón. En los barcos, se deberá llevar cuando «no se pueda mantener la distancia de 1,5 metros».\r\n\r\nDarias ha sido tajante para afirmar que la mascarilla «no se usará en ningún caso en ambientes escolares». «Ya no era obligatoria en recreos y ahora tampoco lo será en todos los ámbitos de los centros educativos», ha sostenido.\r\n\r\nEn el entorno laboral, de la misma forma, «no resultará obligatoria con carácter general». Darias ha puntualizado, no obstante, que los responsables de prevención de riesgos laborales de las empresas podrán acordar su uso «en función de la evaluación de riesgo del puesto de trabajo».\r\n\r\nTampoco será obligatoria ni en interiores ni en exteriores en partidos de fútbol o baloncesto, aunque la ministra ha aconsejado un «uso responsable» en este tipo de eventos masivos.', 'admin', '2022-04-13 03:00:00', 1, 1),
(2, 'El Consorcio de Transportes renueva el servicio bus+bici', 'La Consejería de Fomento invierte 20.000 euros en esta iniciativa que ya cuenta con 300 usuarios registrados y 12.000 desplazamientos sostenibles', 'La delegada territorial de Fomento, Infraestructuras y Ordenación del Territorio de la Junta de Andalucía, Eloísa Cabrera, y el director gerente del Consorcio de Transporte Metropolitano del Área de Almería, Luis Miguel Carmona, han dado a conocer las nuevas instalaciones del proyecto BUS+BICI, servicio de préstamo gratuito de bicicletas ubicado en el interior de la Estación Intermodal de la capital almeriense. Este servicio estará disponible para los usuarios a partir del próximo 25 de abril.\r\n\r\nA la visita al nuevo punto de préstamo de bicicletas han asistido también la delegada de Agricultura, Ganadería y Pesca, Aránzazu Martín, y el delegado de Igualdad, Políticas Sociales y Conciliación, Rafael Pasamontes.\r\n\r\nCabrera ha destacado que «este servicio renueva sus instalaciones, que se modernizan y pasan a contar con bicicletas de pedaleo asistido eléctricamente y que, a través de una nueva estación de préstamo desatendida, permitirá además su retirada y devolución de forma autónoma, funcionando todos los días de la semana durante el horario en que permanezca abierta la Intermodal». Como ha explicado la delegada, la iniciativa BUS+BICI consiste en un proyecto de movilidad sostenible, que une de forma intermodal la bicicleta y el autobús, y cuyo principal pilar está configurado por el préstamo de bicicletas asociado al uso de la tarjeta de transporte del Consorcio. De esta forma, ha afirmado que «el título metropolitano posibilita a los vecinos de la aglomeración urbana y de la capital la utilización de forma gratuita de una de bicicletas pública para sus desplazamientos urbanos como complemento a las líneas de transporte del Consorcio.\r\n\r\nLa Junta de Andalucía, según Cabrera, «sigue apostando por los usuarios que a diario utilizan el transporte de autobús y eligen una forma sostenible de moverse por sus ciudades, de forma que aseguramos una mayor disponibilidad para los ciudadanos que decidan hacer uso de este servicio gratuito para completar su trayecto al trabajo, hospitales o estudios entre otras necesidades, es decir, para aquellos usuarios cuyo destino final de su viaje se encuentra a una distancia considerable de la Estación, y para los que el desplazamiento en bicicleta supone un modo de transporte muy atractivo por ser no contaminante y saludable».\r\n\r\nPor su parte el director gerente del Consorcio de Transporte, Luis Miguel Carmona, ha destacado «los esfuerzos realizados por su Entidad para el fomento de la intermodalidad y la movilidad sostenible en el área metropolitana, con proyectos como el BUS+BICi en cuya renovación se ha realizado una inversión superior a los 20.000 euros». En este sentido, Carmona ha informado que, durante los últimos diez años, son ya más de 300 usuarios de la tarjeta de transporte los que han utilizado una bicicleta pública del Consorcio, superando los 12.000 préstamos gratuitos.\r\n\r\n«Esperamos que con esta nueva actualización del servicio podamos recuperar el volumen de préstamos y desplazamientos que manteníamos antes de la pandemia, periodo durante el que el proyecto tuvo que suspenderse. Para conseguir este objetivo vamos a dar más facilidad y comodidad a los usuarios del servicio, con la instalación de bicicletas eléctricas y con un horario más amplio tanto para su recogida como devolución».', 'admin', '2022-04-18 03:00:00', 0, 1),
(3, 'Se recrudece la huelga de transporte', 'El paro se está notando en el abastecimiento, pero, además, se están produciendo incidentes, principalmente con motivo de la actuación de piquetes violentos\r\n', 'España afronta este miércoles la décima jornada en la huelga de transportes. Desde el pasado 14 de marzo, transportistas autónomos y pymes secundan un paro indefinido convocado por la Plataforma para la Defensa del Sector del Transporte de Mercancías. Una huelga convocada debido a la subida de los precios de los carburantes y que también busca una mejorar en las condiciones laborales de los trabajadores.\r\n\r\nEl paro se está notando en el abastecimiento, pero, además, se están viviendo incidentes en distintos puntos de España, principalmente con motivo de la actuación de piquetes violentos. Según los últimos datos actualizados durante este martes, en lo que llevamos de huelga, la Policía Nacional y la Guardia Civil han detenido a 54 personas e investigado a otras 399 por los incidentes registrados.\r\n\r\nAdemás, han escoltado a 4.519 convoyes de camiones, según ha informado el Ministerio del Interior. Entre ellos, la Guardia Civil escoltó este domingo un convoy entre León y Burgos con ayuda humanitaria para Ucrania, en concreto, 80 toneladas de productos de higiene personal, material sanitario, ropa de abrigo y alimentos no perecederos.\r\n\r\nAlrededor de toda España hay varios puntos donde la actuación de los piquetes está dejando mayor incidencia. Un ejemplo se ha vivido este martes en el Puerto de Barcelona, donde en torno a 50 transportistas han bloqueado el acceso al puerto. La mayoría de los camioneros que han llegado hasta allí han desistido de acceder a las instalaciones debido a los piquetes, que intentaban convencer a los conductores para que se sumasen al paro. No se han registrado incidentes destacados, pero se ha requerido el apoyo de los Mossos para evitar cortar la cadena de suministro.', 'admin', '2022-04-19 03:00:00', 1, 0),
(4, 'Prueba insertar', 'modificacion del subtitulo', 'asjdasdasdjasdkjasihdiushfhusidhf', 'alberto', '2022-04-19 15:20:05', 1, 1),
(7, 'Nueva prueba', 'sdasdsadadsnd', 'sdjsadjasiodjoas', 'flavia', '2022-04-27 18:13:18', 1, 1),
(8, 'probando imagen', 'dasdahdahs', 'huahduahdao', 'admin', '2022-04-27 20:47:14', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'alberto', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'admin', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(4, 'alberto', '81dc9bdb52d04dc20036dbd8313ed055'),
(5, 'pepe', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
