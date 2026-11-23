# INSTITUTO SUPERIOR SANTA ROSA DE CALAMUCHITA  

**Carrera:** Tecnicatura Superior en Desarrollo de Software  
**Materia:** Programación Web 2  
**Profesor:** Pablo Aronna  
**Instancia:** Recuperatorio Parcial 2 - 4 de Julio de 2026  

## CONTEXTO DEL NEGOCIO

---
La Secretaría de Deportes y Turismo de un municipio requiere una plataforma web interna para centralizar la información de dos de sus áreas clave que funcionan de forma independiente: la administración de
**Clubes/Polideportivos** del departamento y la agenda de **Eventos Deportivos** del año. Tu objetivo como desarrollador es implementar el backend (API) que soporte ambas entidades y el frontend (interfaz de usuario) que permita listar y ver el detalle de cada una de ellas de forma separada.

## PARTE 1: BACKEND (Express + Sequelize)  
---
Deberás estructurar una API REST utilizando una carpeta llamada api/ como raíz del proyecto. El servidor deberá conectarse a una base de datos MySQL llamada gestion_deportes.

### 1. Modelos de Datos (Sin relaciones)
   
Crea los siguientes dos modelos independientes con sus respectivos campos (deberás definir los tipos de datos y configuraciones que consideres más adecuados para cada uno):
**Modelo A: Club (tabla clubes)**
* id
* nombre
* direccion
* telefonoContacto
* capacidadSocios
* disciplinaPrincipal
* urlImagenLogo
* historiaResumida  
  
**Modelo B: Evento (tabla eventos)**
* id
* titulo
* encargadoOrganizacion
* fechaCelebracion
* costoInscripcion
* lugarSede
* urlImagenBanner
* reglamentoOpcional  
  
### 2. Funcionalidades y Endpoints a programar
Debes implementar los controladores y rutas necesarios para exponer la lógica que resuelva:
**● Sección Clubes:**
* Obtener la colección completa de clubes registrados.
* Obtener el detalle específico de un solo club mediante su identificador. Si el elemento no existe, se
debe retornar el código de estado HTTP correspondiente y un mensaje de error.
**● Sección Eventos:**
* Obtener la colección completa de eventos registrados.
* Obtener el detalle específico de un solo evento mediante su identificador. Si el elemento no existe, se
debe retornar el código de estado HTTP correspondiente y un mensaje de error.

## PARTE 2: FRONTEND (React + Vite + Axios)
Deberás estructurar la aplicación cliente dentro de una carpeta llamada app/ utilizando Vite como empaquetador y Axios para la comunicación HTTP.
### 1. Consumo de API  

Configura la comunicación con el backend de manera centralizada utilizando Axios para resolver las peticiones de los datos de ambas secciones.
### 2. Interfaz y Componentes  

La interfaz de usuario debe estar dividida visualmente o por secciones claras para interactuar con ambos catálogos de manera independiente, aprovechando los campos de imagen provistos por la API para lograr tarjetas (cards) vistosas:  

**● Sección Clubes:**  
○ Renderizar una lista que muestre el nombre y la disciplina principal de cada club. Cada elemento
debe permitir interactuar mediante un clic.  
○ Renderizar la ficha técnica con toda la información del club que haya sido seleccionado (incluyendo la visualización correcta de su imagen de logotipo). Si aún no se seleccionó ninguno, debe mostrar un texto indicativo al usuario.  
**● Sección Eventos:**  
○ Renderizar una lista que muestre el título del evento y su costo de inscripción. Cada elemento debe permitir interactuar mediante un clic.  
○ Renderizar la ficha técnica con toda la información del evento que haya sido seleccionado (incluyendo la visualización de su imagen de banner). Si aún no se seleccionó ninguno, debe mostrar un texto indicativo al usuario.  
### 3. Lógica de la Aplicación
* Al cargar la aplicación por primera vez, el sistema debe solicitar automáticamente al backend los datos para rellenar ambas listas iniciales.
* Al hacer clic en cualquier elemento de las listas, la aplicación debe consultar al backend el detalle extendido de ese registro específico utilizando su identificador y actualizar la interfaz para mostrarlo.
* Deben contemplarse estados visuales que informen al usuario si las listas están vacías, si los datos se están cargando o si ocurrió un error en la comunicación.