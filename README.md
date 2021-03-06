# SecurityAlert

# Integradora II
[![Contribuidores][contribuidores-shield]][contributors-url]

## contenido
<details>
  <summary>Tabla contenidos</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#descripción">Descripción</a></li>
        <li><a href="#objetivos">Objetivos</a></li>
        <li><a href="#organigrama">Organigrama</a></li>
        <li><a href="#diagrama-gantt">Diagrama Gantt</a></li>
      </ul>
    </li>
    <li>
      <a href="#análisis-de-la-solución">Análisis de la Solución</a>
      <ul>
        <li><a href="#requerimientos">Requerimientos</a></li>
        <li><a href="#diagrama-casos-de-uso">Diagrama de Casos de Uso</a></li>
      </ul>
    </li>
    <li>
      <a href="#diseño-de-la-solución">Diseño de la Solución</a>
      <ul>
        <li><a href="#modelo-relacional">Modelo Relacional</a></li>
        <li><a href="#diagrama-de-clases">Diagrama de Clases</a></li>
        <li><a href="#diagrama-de-componentes">Diagrama de Componentes</a></li>
      </ul>
    </li>    
    <li>
      <a href="#implementación">Implementación</a>
      <ul>
        <li><a href="#estándares-codificación">Estándares Codificación</a></li>
        <li><a href="#arquitectura">Arquitectura</a></li>
        <li><a href="#código-fuente">Código Fuente</a></li>
      </ul>
    </li>      
    <li>
      <a href="#pruebas">Pruebas</a>
      <ul>
        <li><a href="#casos-de-prueba">Casos de prueba</a></li>
        <li><a href="#ejecución">Ejecución</a></li>
      </ul>
    </li>       
    <li><a href="#guias">Guias</a></li>
    <li><a href="#contribucion">Contribución</a></li>
    <li><a href="#licencia">licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#participantes">Participantes</a></li>
  </ol>
</details>

<!-- Acerca del proyecto -->
## Acerca del proyecto

<!-- Descripción -->
#### Descripción.
Consiste en una aplicación web, cuya función principal es alertar a un policía cuando los mecanismos o sistemas de seguridad de algún establecimiento o casa habitación sean corrompidos. El sistema será capaz de enviar una alerta con toda la información necesaria para la oportuna intervención de los agentes de policía mediante la implementación de un api de WhatsApp, así como alertar al usuario ante un posible ataque a su hogar, usando un Bot, desarrollado para la herramienta de Telegram 

Para evitar falsas alarmas el sistema contará con una cámara de seguridad que estará grabando 24/7, así como una serie de sensores para obtener datos precisos y en tiempo real.  

El costo de producción será de aproximadamente $1100, los gastos podrían variar dependiendo el precio y el lugar donde se adquieran los elementos de Domótica a usar, obteniendo una ganancia aproximada del 50% por cada sistema instalado. 


<!-- Objetivos -->
#### Objetivos.
<ul>
	<li>
Ayudar a manetener la seguridad de los bienes inmubles del usuario, de forma simple y eficaz.
	</li>
	<li>
Lograr que el usuario se sienta en todo momento seguro, con la implementacion del sistema en su hogar, establecimiento, etc.
	</li>
</ul>

<!-- Organigrama -->
#### Organigrama.

![Captura de pantalla 2022-04-18 015614](https://user-images.githubusercontent.com/97042086/163769173-27b99dd7-ef94-46e8-9818-5cbba763ddc1.png)

<!-- Diagrama Gantt -->
#### Diagrama Gantt.

Consultar diagrama <a href="https://utnorteguanajuato-my.sharepoint.com/:x:/g/personal/1220100361_alumnos_utng_edu_mx/Efzx0VrehLZEs_MA0zCVIooBnhoeIYQEH7xY1vWtJBqKtw?rtime=iNsP5pAk2kg">Clic aqui</a>

<!-- Diagrama Esquematico -->
#### Diagrama Esquematico
1.Circuito_Sistema de alerta<br>
En el siguiente diagrama se muestran los componentes usados en la elaboración del sistema de alerta, especificado en el requirimiento 003
![Diagrama Esquematico](https://user-images.githubusercontent.com/67080087/163812379-2f791832-85e4-4c91-9b34-c9ae4303a586.jpg)

<!-- Análisis del proyecto -->
## Análisis de la Solución.

<!-- Requerimientos -->
#### Requerimientos.

<table>
  <tr>
    <th>RF001-Transmisión de video de vigilancia</th>
  </tr>
  <tr>
    <td>El usuario podrá visualizar transmisión de video vigilancia en tiempo real, así mismo obtener imágenes de posibles actividades sospechosas, las cuales podrán ser administradas (consultar y borrar) y la posibilidad de envarlas por whatsapp a la autoridad correspondiente.</td>
  </tr>
</table>

<div align="center">
<table>
  <tr>
    <th>
    RF002-Llamada de auxilio
   </th>
  </tr>
  <tr>
    <td>
	Se enviara datos del usuario y evidencia de la posible situación de peligro.
    </td>
  </tr>
</table>
	</div>

<table>
  <tr>
    <th>
RF003-Sistema de alerta
   </th>
  </tr>
  <tr>
    <td>
   El usuario recibirá una alerta mediante la herramienta Telegram, cuando los sensores de movimiento detecten un posible intruso.
    </td>
  </tr>
</table>


<div align="center">
<table >
  <tr>
    <th>
RF004-Registar datos del usuario
   </th>
  </tr>
  <tr>
    <td>
El ususario debera registrar una cuenta para tener acceso a la aplicación 
    </td>
  </tr>
</table>
</div>


<div align="center">
<table>
  <tr>
    <th>
RF005-Actualizar datos de perfil
   </th>
  </tr>
  <tr>
    <td>
  El usuario tendra la opcion de actualizar los datos de su perfil
    </td>
  </tr>
</table>
	</div>

<!-- Diagrama de Casos de Uso -->
#### Diagrama Casos de Uso.

RF001
  ° Tansmisión de video vigilancia
 ##  <img width="410" alt="Captura" src="https://user-images.githubusercontent.com/67080087/163804359-72394eb8-5f5b-44ed-8368-ff4e54b9c6e5.PNG">

RF002
  ° Llamada de auxilio
 ## ![Llamada](https://user-images.githubusercontent.com/99061666/165446014-b6c398a1-4f86-4fb2-9f3d-ffa7938b6852.png)

RF003
  ° Sistema de alerta
 ## ![Sistema  de alerta](https://user-images.githubusercontent.com/97042410/165225114-8097c3ab-c163-46b1-bb78-0dbbe582d85e.jpeg)

RF004
  ° Registar datos del usuario
 ## ![CASO DE USO CORRECTO](https://user-images.githubusercontent.com/97042086/164744155-b0394dd4-47c1-4ff8-be1c-b08da75b05ee.png)

RF005
  ° Actualizar datos de perfil
 ## ![CASO DE USO CORRECTO_2](https://user-images.githubusercontent.com/97042086/164744174-52240cd4-2c6c-4cde-9214-2502df686313.png)



<!-- Diseño del proyecto -->
## Diseño de la Solución.

<!-- Modelo Relacional -->
#### Modelo No Relacional.
Se utiliza el siguiente esquema para manipular los datos del usuario en esta aplicacion.

![Base de datos](https://user-images.githubusercontent.com/97042086/165451301-d5e90db2-9e31-4531-9c30-6094b20e1033.png)


<!-- Diagrama de Clases -->
#### Diagrama de Clases.

![Clase](https://user-images.githubusercontent.com/67080087/165452639-ab54437f-a363-4f74-a5b8-af77765c867f.png)



<!-- Diagrama de Componentes -->
#### Diagrama de Componentes.
Esquema de los componentes que interactúan
![Diagrama de componentes1](https://user-images.githubusercontent.com/99061666/164765575-01fff003-4c9c-4be8-94cf-361d60e2156a.png)



<!-- Implementación del proyecto -->
## Implementación.
En ésta sección se describe  los artefactos generados en base a la solución.

<!-- Estándares de Codificación -->
#### Estándares Codificación.
Los ficheros se nombrarán siempre en minúsculas para evitar errores con aquellas plataformas ‘sensitive-case’. Los ficheros tienen que concluir con la extensión .js, y no deben incluir signos de puntuación excepto – (guión medio) o _ (guión bajo), siendo preferible este último a la hora de separar palabras.

## Security Alert
    app.js
    pub.js
    sub.js
    /bin
        www
    package.json
    package-lock.json
    /node_modules
        [about 6700 subdirectories and files]
    /public
        /images
        /stylesheets
            style.css
    /config
        conexion_mongo.js
    /models
        user.js
    /controllers
        user_controller.js
    /routes
        index.js
        users.js
    /views
	/partials
	   footer.hbs
	   header.hbs
        error.hbs
        index.hbs
        layout.hbs
        login.hbs
        register.hbs
        user_dates.hbs

<!-- Arquitectura MVC y Middleware -->
#### Arquitectura.
![image](https://user-images.githubusercontent.com/67080087/165501296-397bce55-c7d8-4d9d-8800-50707cdc80d4.png)


<!-- Código Fuente -->
#### Código Fuente.
Se encutra en Github: https://github.com/Carlos-Soto-L/SecurityAlert


<!-- Pruebas proyecto -->
## Pruebas.
En ésta sección se describe  los artefactos generados en base a la solución.

<!-- Casos de prueba -->
#### Casos de prueba.
Caso de prueba CP_Registro_0001
## ![Caso de prueba](https://user-images.githubusercontent.com/97042410/165500882-be9a3b53-feae-4c55-8a52-d865b3261713.png)

Caso de pruba CP_Cierre de sesion_0002
## ![image](https://user-images.githubusercontent.com/67080087/165504254-848f41b4-127c-4d06-b046-ed5e60b97b36.png)


Caso de prueba CP_Actualizacion_0003
## ![Caso](https://user-images.githubusercontent.com/99061666/165495368-fa323869-ab34-471a-9085-3a6d87223037.PNG)

Caso de prueba CP_Login_0004
## ![CP_002](https://user-images.githubusercontent.com/97042086/165494778-67021a6c-68c1-4bed-bd8a-39202174204c.png)

Caso de prueba CP_Enviar alerta por whatsapp_0005
## ![Captura5](https://user-images.githubusercontent.com/99061666/165500303-b33e7c3d-dad6-4b90-b03f-985b52049805.PNG)

Caso de prueba CP_Eliminar evidencia_0006
## ![image](https://user-images.githubusercontent.com/67080087/165510415-30de750b-0010-4578-90ea-f3b99db25f2a.png)

Caso de prueba CP_Consulta evidencia_0007
## ![image](https://user-images.githubusercontent.com/67080087/165510239-0ed61a57-18a6-491d-beaa-04fc4673d80e.png)




<!-- Ejecución Casos de prueba -->
#### Ejecución.

CP_Registro_0001
## ![Caso de prueba 1](https://user-images.githubusercontent.com/97042410/165500983-30f8adca-848e-417a-bf50-4e1da9c64798.jpeg)

CP_Cierre de sesion_0002
## ![image](https://user-images.githubusercontent.com/67080087/165504140-3b3fb42d-edd7-4b8d-8b40-02cde8b53e93.png)


CP_Actualizacion_0003
## ![ECP-Actualizar datos](https://user-images.githubusercontent.com/97042086/163772674-6daa3e32-de9b-454d-ba97-ea915afb3215.jpeg)

CP_Login_0004
## ![ECP-Login](https://user-images.githubusercontent.com/97042086/165496268-d49c968e-faa6-4faf-8503-608118600127.png)

CP_Enviar alerta por whatsapp_0005
## ![Mensaje](https://user-images.githubusercontent.com/99061666/165500438-ca2b73bb-1d67-42f6-8db1-205a61496f0d.jpeg)

CP_Eliminar evidencia_0006
Antes del borrado:
![image](https://user-images.githubusercontent.com/67080087/165508787-ce3b6785-8ae2-4c93-9c0e-390de38e09c3.png)

Despues del borrado<br>
![image](https://user-images.githubusercontent.com/67080087/165508847-b092f6c8-0fec-4055-b31a-1b7675361c84.png)<br>

CP_Consultar evidencia_0007
![image](https://user-images.githubusercontent.com/67080087/165510503-2ddc6372-3fd7-413c-b6e3-7156c1885663.png)


<!-- Iniciando -->
## Iniciando

<!-- Requisitos -->
### Requisitos
•	Buena señal inalámbrica, pero menor a 5G.<br>
•	Navegador Edge, Chrome o Mozilla de preferencia.

<!-- Instalación -->
### Instalacion
Instalar un navegador web.


## Guias
<ol>
	<li>Entrar a la aplicacion y registrar una cuenta</li>
	<li>Contactar al equipo de <a href="#contacto">soporte</a> (este configudará los componentes nesesarios para el correcto funcionamento de la app)</li>
	<ol>
		<h3>Actualizar datos</h3>
			<li>Iniciar sección</li>
			<li>Ir al apatado <b>perfil</b> en la parte superior</li>	
			<li>Modificar datos y dar en la opcion Actualizar</li>
	</ol>
	<ol>
		<h3>Administrar evidencia</h3>
			<li>Iniciar sección</li>
			<li>Ir al apatado <b>evidencia</b> en la parte inferior</li>	
			<li>Seleccionar la evidencia y dar en la opcion <b>ver evidencia</b></li>
			<li>Si se quiere borrar la evidencia. seleccionar la evidencia y dar en la opcion <b>Borrar</b></li>
			<li>Si se quiere enviar la evidencia por whatsapp. seleccionar la evidencia y dar en la opcion <b>Enviar</b></li>
	</ol>
		<ol>
		<h3>Envio de alerta</h3>
			<li>Iniciar sección</li>
			<li>Dar clic en el boton <b>Alerta</b></li>
			<li>Acceder a la plataforma whatsapp y enviar el mensaje predefindo</li>
	</ol>

</ol>

## contribucion


## Licencia
Licencia ISC
Licencia de software libre permisiva publicada
por el Internet Software Consortium, hoy en día llamado
Internet Systems Consortium(ISC)

## Contacto

* ricoarvizujorge2002@gmail.com
* carlosoto191@gmail.com
* lalo456rangel@gmail.com
* jairobarron08@gmail.com

## Participantes
* [Jorge Alejandro Rico Arvizu](https://github.com/JorgeRico08)
* [Carlos Daniel Soto Ledezma](https://github.com/Carlos-Soto-L)
* [Carlos Eduardo Rangel Lozano](https://github.com/lalo44m)
* [Jairo Barrón Loza](https://github.com/JairoBarron03) 

[contribuidores-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
