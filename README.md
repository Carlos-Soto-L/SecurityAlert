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

Este proyecto se enfocara principalmente en crear un producto de seguridad, que podra monitorear el cliente y mandar alertas de auxilio a un oficial de policia

<!-- Descripción -->
#### Descripción.
Indicar la descripción del proyecto (tiempo, costo y calidad).

Esta enfocado en crear un producto de seguridad, el cual este consistira en una camara para que así el cliente pueda observar desde su dispositivo movil permitiendo así mandar alertas de seguridad en caso de un asalto, teniendo comunicación via WhatsApp directamente con un oficial de policia.

<!-- Objetivos -->
#### Objetivos.
Indicar los objetivos del proyecto.

Crear producto de seguridad el cual ayude a manetener seguros a nuestros clientes

<!-- Organigrama -->
#### Organigrama.
Organigrama.

![Captura de pantalla 2022-04-18 015614](https://user-images.githubusercontent.com/97042086/163769173-27b99dd7-ef94-46e8-9818-5cbba763ddc1.png)

<!-- Diagrama Gantt -->
#### Diagrama Gantt.
Puedes consultar Nuestra planeación desde el siguinte enlace <a href="https://utnorteguanajuato-my.sharepoint.com/:x:/g/personal/1220100361_alumnos_utng_edu_mx/EbHm5uA3sONLsx6LKbDD1uwBL4ueRtn_7jXb6F5v5CjClQ?e=E7AAdw">Clic aqui</a>

<!-- Diagrama de componentes -->
#### Diagrama Componentes

![2093ff29-adea-4956-90c1-6ef839b04e45](https://user-images.githubusercontent.com/67080087/163809944-8b02ae30-0409-44d2-8d4a-03ef2e195f90.jpg)


<!-- Análisis del proyecto -->
## Análisis de la Solución.
En ésta sección se indicará los artefactos generados en base a la solución.



<!-- Requerimientos -->
#### Requerimientos.

RF001-Transmisión de video de vigilancia.
  ° El usuario podrá visualizar transmisión de video vigilancia en tiempo real, así mismo obtener imágenes de posibles actividades sospechosas, las cuales podrán ser administradas (consultar y borrar) por el usuario.

RF002-API dde WhatsApp.
  ° Contendra una API el cual utilizara el cliente para tener comunicación via WhatsApp directammente con un oficial en caso de una emergencia

RF003-Sistema y mecanismo de alerta
  °El usuario recibirá una alerta mediante la herramienta Telegram, cuando los sensores de movimiento o sensores PIR se activan y detecten movimiento. El sistema Permite al usuario enlazar a la aplicación para revisar la transmisión de la cámara de seguridad y posteriormente mandar la alerta al oficial de policía.
  
RNF001-Manejo de datos.
  ° El sistema contara con una base de datos para poder ir guardando el usuario y los datos mas importantes para que se pueda hacer uso de los datos al momento.

<!-- Diagrama de Casos de Uso -->
#### Diagrama Casos de Uso.

RF001
  ° Tansmisión de video vigilancia
 ##  <img width="410" alt="Captura" src="https://user-images.githubusercontent.com/67080087/163804359-72394eb8-5f5b-44ed-8368-ff4e54b9c6e5.PNG">

RF002
  ° Llamada de auxilio
 ## ![Llamada](https://user-images.githubusercontent.com/99061666/163696438-2eee1db3-539a-474a-af19-1e1e4714750b.png)

RF003
  ° Sistema y mecanismo de alerta
 ## ![Sistema](https://user-images.githubusercontent.com/67080087/163806970-b1956fea-517b-473b-b5c1-ed15c79f766c.png)

RNF001
  ° Acceso del usuario
 ## ![Caso de uso2 0](https://user-images.githubusercontent.com/97042086/163695749-590b940a-72ec-4537-813f-a67d2a0415e8.png)


<!-- Diseño del proyecto -->
## Diseño de la Solución.

<!-- Modelo Relacional -->
#### Modelo No Relacional.
Este sera el modelo que se generar para gestionar los datos de manera mas completa y poder obtener manipular la coleccion de manarea mas rapida.

![1](https://user-images.githubusercontent.com/97042086/163695522-8688a979-d909-44fd-a8d0-6447a9ae6a2b.png)
<!-- Diagrama de Clases -->

<!-- Diagrama de Clases -->
#### Diagrama de Clases.
Esquema de las clases empleadas (atributos y sus métodos).

<!-- Diagrama de Componentes -->
#### Diagrama de Componentes.
Esquema de los componentes que interactúan (Modelo, Vista, Controlador, Servidor Web, Servidor de base de datos)


<!-- Implementación del proyecto -->
## Implementación.
En ésta sección se describe  los artefactos generados en base a la solución.

<!-- Estándares de Codificación -->
#### Estándares Codificación.
Estándares empleados en la codificación

<!-- Arquitectura MVC y Middleware -->
#### Arquitectura.
Definir los patrones empleados y de seguridad.

El modelo fue para el esquema que se utilizo en la base de datos, la vista la utlizamos para la visualicación del el proyecto en si, como lo es el diseño, formatos, camara etc. Y el controlador se utiliza para las funciones, como las vistas en las imagenes, consultas en la base de datos.

<!-- Código Fuente -->
#### Código Fuente.
Código Fuente de la solución


<!-- Pruebas proyecto -->
## Pruebas.
En ésta sección se describe  los artefactos generados en base a la solución.

<!-- Casos de prueba -->
#### Casos de prueba.
Caso de prueba 0001
## ![CP_001](https://user-images.githubusercontent.com/97042086/163701224-b0cad03e-bcae-4109-bc4e-d5a9436cb29a.png)

Caso de pruba 0002
## ![CP_002](https://user-images.githubusercontent.com/97042086/163701330-4295f243-bba7-4340-a9b5-4054a0eb8f99.png)

Caso de prueba 0003
## ![CP_003](https://user-images.githubusercontent.com/97042086/163701589-630b4f00-81cd-4b14-b547-44cbb3542380.png)

Caso de prueba 0004
## ![CP_004](https://user-images.githubusercontent.com/97042086/163701762-d0ffa4ee-db24-4e59-a417-dd75ea4ccdec.png)

<!-- Ejecución Casos de prueba -->
#### Ejecución.

Caso de prueba 0001
## ![ECP-Registro](https://user-images.githubusercontent.com/97042086/163772631-15f5cd02-1ee5-489e-8973-1cfec87a40af.png)

Caso de pruba 0002
## ![ECP-Login](https://user-images.githubusercontent.com/97042086/163772652-32da440c-7138-497d-a780-c41238a3835a.png)

Caso de prueba 0003
## ![ECP-Actualizar datos](https://user-images.githubusercontent.com/97042086/163772674-6daa3e32-de9b-454d-ba97-ea915afb3215.jpeg)

Caso de prueba 0004
## ![ECP-Salir](https://user-images.githubusercontent.com/97042086/163772694-1bbe4b74-d09f-44dd-ba27-a8ae45e18abd.jpeg)


<!-- Iniciando -->
## Iniciando
Iniciando.

<!-- Requisitos -->
### Requisitos
Requisitos de Instalación.

<!-- Instalación -->
### Instalacion
Instalación del Software


## Guias
Guias de Uso.

## contribucion
Contribucion.

## Licencia
Licencia.

## Contacto
Contacto.

##carlosoto191@gmail.com
##ricoarvizujorge2002@gmail.com
##jairobarron08@gmail.com
##lalo456rangel@gmail.com

## Participantes
* [Jorge Alejandro Rico Arvizu](https://github.com/JorgeRico08)
* [Carlos Daniel Soto Ledezma](https://github.com/Carlos-Soto-L)
* [Carlos Eduardo Rangel Lozano]()
* [Jairo Barrón Loza](https://github.com/JairoBarron03)

[contribuidores-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
