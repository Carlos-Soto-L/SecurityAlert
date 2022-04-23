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


El costo de producción será de aproximadamente $1100, los gastos podrían variar dependiendo el precio y el lugar donde se adquieran los elementos de Domótica a usar.


<!-- Objetivos -->
#### Objetivos.
Sistema de seguridad que ayude a manetener la seguridad de sus asuarios de forma simple y eficaz.

<!-- Organigrama -->
#### Organigrama.

![Captura de pantalla 2022-04-18 015614](https://user-images.githubusercontent.com/97042086/163769173-27b99dd7-ef94-46e8-9818-5cbba763ddc1.png)

<!-- Diagrama Gantt -->
#### Diagrama Gantt.
Puedes consultar Nuestra planeación desde el siguinte enlace <a href="https://utnorteguanajuato-my.sharepoint.com/:x:/g/personal/1220100361_alumnos_utng_edu_mx/EbHm5uA3sONLsx6LKbDD1uwBL4ueRtn_7jXb6F5v5CjClQ?e=E7AAdw">Clic aqui</a>

Consultar nuevo diagrama <a href="https://utnorteguanajuato-my.sharepoint.com/:x:/g/personal/1220100361_alumnos_utng_edu_mx/Efzx0VrehLZEs_MA0zCVIooBnhoeIYQEH7xY1vWtJBqKtw?rtime=iNsP5pAk2kg">Clic aqui</a>

<!-- Diagrama Esquematico -->
#### Diagrama Esquematico
![Diagrama Esquematico](https://user-images.githubusercontent.com/67080087/163812379-2f791832-85e4-4c91-9b34-c9ae4303a586.jpg)

<!-- Análisis del proyecto -->
## Análisis de la Solución.

<!-- Requerimientos -->
#### Requerimientos.

RF001-Transmisión de video de vigilancia.<br>
  ° El usuario podrá visualizar transmisión de video vigilancia en tiempo real, así mismo obtener imágenes de posibles actividades sospechosas, las cuales podrán ser administradas (consultar y borrar) y la posibilidad de envarlas por whatsapp a la autoridad correspondiente.

RF002-Llamada de auxilio.<br>
  ° A travez de la api de Whatsapp, será posible el envio de datos relacionados a la direccion del usuario para el llamado de auxilio y evidencia de la situación de peligro.

RF003-Sistema y mecanismo de alerta<br>
  °El usuario recibirá una alerta mediante la herramienta Telegram, cuando los sensores de movimiento o sensores PIR se activan y detecten movimiento. El sistema Permite al usuario enlazar a la aplicación para revisar la transmisión de la cámara de seguridad y posteriormente mandar la alerta al oficial de policía.
  
RF004-Registar datos del usuario<br>
  ° El usuario debera registrar una cuenta para que este pueda acceder a la aplicacion
  
RF005-Actualizar datos del perfil del usuario<br>
  ° El usuario tendra la opcion de actualizar los datos de su perfil

RF006-Monitoreo de temperatura y humedad<br>
  ° El usuario podra visualizar datos en tiempo real de la temperatura y humedad (por medio de graficas) de su hogar, gracias a esos datos se podra accionar automaticamente ventiladores dentro de la casa para asi regular la temperatura. 

RF009-Detector de incendios<br>
  ° Se buscara que el usuario tenga un detector de incendios en tiempo real y en caso de que este sobrepase el limite establecido se activara una alarma de alerta y asu vez recibirá una alerta mediante la herramienta Telegram. 

<!-- Diagrama de Casos de Uso -->
#### Diagrama Casos de Uso.

RF001
  ° Tansmisión de video vigilancia
 ##  <img width="410" alt="Captura" src="https://user-images.githubusercontent.com/67080087/163804359-72394eb8-5f5b-44ed-8368-ff4e54b9c6e5.PNG">

RF002
  ° Llamada de auxilio
 ## ![Llamada3](https://user-images.githubusercontent.com/99061666/164766164-42a20684-dd36-472d-b3e7-8b665fafcff1.png)

RF003
  ° Sistema de alerta
 ## ![Caso de uso 1](https://user-images.githubusercontent.com/97042410/164762041-8f66d137-e29d-4264-b6c0-3f1add1d63bc.jpeg)


RF004
  ° Registar datos del usuario
 ## ![CASO DE USO CORRECTO](https://user-images.githubusercontent.com/97042086/164744155-b0394dd4-47c1-4ff8-be1c-b08da75b05ee.png)

RF005
  ° Actualizar datos de perfil
 ## ![CASO DE USO CORRECTO_2](https://user-images.githubusercontent.com/97042086/164744174-52240cd4-2c6c-4cde-9214-2502df686313.png)

RF006
  ° Monitoreo de temperatura y humedad
  ## ![DiagramaCU006_RF006](https://user-images.githubusercontent.com/67080087/164874767-fb3162cc-4005-422c-961d-53d5049f77d1.png)
  
RF007
  ° Chat de soporte
  ## ![Chat de soporte](https://user-images.githubusercontent.com/99061666/164879296-010b5ab3-bb90-41a8-bd08-d89bb0be62df.png)

RF009
  ° Detector de incendios
  
  ##![CASO DE USO 3 ](https://user-images.githubusercontent.com/97042086/164878955-eb014d9f-4057-42b6-846e-7e74421d737d.png)

<!-- Diseño del proyecto -->
## Diseño de la Solución.

<!-- Modelo Relacional -->
#### Modelo No Relacional.
Este sera el modelo que se generar para gestionar los datos de manera mas completa y poder obtener manipular la coleccion de manarea mas rapida.

![Base de datos](https://user-images.githubusercontent.com/97042086/164764207-adbb488b-0080-4509-9c63-68b4a4868bd1.png)

<!-- Diagrama de Clases -->

<!-- Diagrama de Clases -->
#### Diagrama de Clases.
![diagrama de clases](https://user-images.githubusercontent.com/67080087/164775642-b15d44b1-b036-4e8a-a56b-a53c680ee229.png)


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
![image](https://user-images.githubusercontent.com/67080087/164775486-2b436999-4576-4d6b-b6ef-802aa31549da.png)

<!-- Código Fuente -->
#### Código Fuente.
Se encutra en Github: https://github.com/Carlos-Soto-L/SecurityAlert


<!-- Pruebas proyecto -->
## Pruebas.
En ésta sección se describe  los artefactos generados en base a la solución.

<!-- Casos de prueba -->
#### Casos de prueba.
Caso de prueba 0001
## ![CP_001](https://user-images.githubusercontent.com/97042086/163701224-b0cad03e-bcae-4109-bc4e-d5a9436cb29a.png)

Caso de pruba 0002
## ![CP_004](https://user-images.githubusercontent.com/97042086/163701762-d0ffa4ee-db24-4e59-a417-dd75ea4ccdec.png)

Caso de prueba 0003
## ![CP_003](https://user-images.githubusercontent.com/97042086/163701589-630b4f00-81cd-4b14-b547-44cbb3542380.png)

Caso de prueba 0004
## ![CP_002](https://user-images.githubusercontent.com/97042086/163701330-4295f243-bba7-4340-a9b5-4054a0eb8f99.png)

Caso de prueba 0005
## ![CP_005](https://user-images.githubusercontent.com/97042086/164763553-c04719f5-9c71-4b70-adb3-5a9e61510ae2.png)

<!-- Ejecución Casos de prueba -->
#### Ejecución.

Caso de prueba 0001
## ![ECP-Registro](https://user-images.githubusercontent.com/97042086/163772631-15f5cd02-1ee5-489e-8973-1cfec87a40af.png)

Caso de pruba 0002
## ![ECP-Salir](https://user-images.githubusercontent.com/97042086/163772694-1bbe4b74-d09f-44dd-ba27-a8ae45e18abd.jpeg)

Caso de prueba 0003
## ![ECP-Actualizar datos](https://user-images.githubusercontent.com/97042086/163772674-6daa3e32-de9b-454d-ba97-ea915afb3215.jpeg)

Caso de prueba 0004
## ![ECP-Login](https://user-images.githubusercontent.com/97042086/163772652-32da440c-7138-497d-a780-c41238a3835a.png)

Caso de prueba 0005
## ![ECP-WhatApp](https://user-images.githubusercontent.com/97042086/164764082-4b619e70-15c6-4caf-b624-03ee519e38fb.png)

<!-- Iniciando -->
## Iniciando
Iniciando.

<!-- Requisitos -->
### Requisitos
•	Buena señal inalámbrica, pero menor a 5G.<br>
•	Navegador Edge, Chrome o Mozilla de preferencia.

<!-- Instalación -->
### Instalacion
Intalar un navegador web


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
