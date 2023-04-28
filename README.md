# LABORATORIO DE MICROSERVICIOS AREP

En este laboratorio se diseño un API y un monolito Quarkus que permite a los usuarios hacer posts e ir registrandolos en un stream único de posts (a la Twitter) y se desplego en S3.

### Autor

* **Daniela García Romero**: [danielagar320](https://github.com/danielagar320)


### Prerequisitos
* Maven: Herramienta para la gestión y construcción de proyectos.
* Java: Lenguaje de programación.
* Git: Sistema de control de versiones distribuido.
* AWS: Servicio de nube.
* Quarkus: Framework de Java.
* Docker: plataforma de software para permite crear, probar e implementar aplicaciones rápidamente.

## Solución

### Uso de la aplicación

Para poder correr el programa se deben seguir los siguientes pasos:
* Clonar el respositorio con el comando

```
git clone https://github.com/danielagar320/MicroserviciosAREP.git

```

* Correr el proyecto con el siguiente comando:

```
quarkus dev

```

* En el browser usar la siguiente url:

```
http://localhost:8080/login/login.html

```

* Para ingresar se ben ingresar el usuario y la clave que aparece a continuación:

```
usuario: daniela
clave: 123

```

### Despliegue en AWS

* Se creo un repositorio llamado microservicios en docker hub.

![img.png](img/img.png)

* Se creo un bucket s3.

![img_1.png](img/img_1.png)

* Se agrego la carpeta que contiene el front.
![img_2.png](img/img_2.png)
![img_3.png](img/img_3.png)

* Con el url se probo que estuviera funcionando.
![img_4.png](img/img_4.png)
![img_5.png](img/img_5.png)

* Se creo una instancia de EC2.
![img_6.png](img/img_6.png)

* Se agregaron los puertos que se usarian los cuales son 4565, 4566 y 4567.
![img_7.png](img/img_7.png)

* Se instalo docker en la instancia de EC2. 
![img_8.png](img/img_8.png)

* Se creó la imagen de docker y se verifico que se pudiera correr.
![img_9.png](img/img_9.png)
![img_10.png](img/img_10.png)
![img_11.png](img/img_11.png)

* Se realizo un push para subir la imagen al respositorio de docker hub.
![img_12.png](img/img_12.png)
![img_13.png](img/img_13.png)
![img_14.png](img/img_14.png)

* Se creo una instamcia de docker en la instancia de EC2 para cada puerto creado anteriormente.
![img_15.png](img/img_15.png)

* Verificación de la creación.
![img_16.png](img/img_16.png)

* Se probo el funcionamiento.
![img_17.png](img/img_17.png)

**El funcionamiento completo del proyecto se encuentra en el video**