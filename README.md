# Plataforma de Gestión de Eventos

Este proyecto es una plataforma web diseñada para permitir a los usuarios crear, gestionar y promocionar eventos de manera eficiente. Utiliza Node.js para el backend y está desplegada en Kubernetes con la ayuda de Helm para la automatización del despliegue.

## Arquitectura

La aplicación está compuesta por:
- Un frontend estático que proporciona la interfaz de usuario.
- Un backend en Node.js que sirve el frontend y maneja la lógica de la aplicación.
- Un contenedor Docker que encapsula el entorno de ejecución del backend.
- Configuraciones de Kubernetes para desplegar la aplicación en un entorno de nube utilizando un LoadBalancer.

## Requisitos

- Docker
- Node.js
- Kubernetes
- Helm (opcional para la gestión de paquetes en Kubernetes)

## Configuración del Proyecto

### Estructura de Archivos

- `public/`: Contiene el archivo `index.html` y otros archivos estáticos.
- `app.js`: Servidor Node.js que maneja las solicitudes del frontend.
- `Dockerfile`: Define el entorno Docker para el backend.
- `deploy.yml`: Especificaciones de Kubernetes para el despliegue del backend.
- `service.yml`: Especificaciones de Kubernetes para exponer el backend mediante un LoadBalancer.

### Despliegue con Docker

Para construir y correr el contenedor Docker localmente:

```bash
docker build -t nodeapp:v1 .
docker run -p 80:80 nodeapp:v1
````

## Despliegue en Kubernetes
kubectl apply -f deploy.yml
kubectl apply -f service.yml

### Uso
Una vez desplegada, la aplicación estará accesible a través del puerto asignado por el LoadBalancer en Kubernetes. Puedes interactuar con la aplicación a través de la URL proporcionada por el servicio de Kubernetes.
