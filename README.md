# MEDISCREEN
Mediscreen is a Spring Boot application allowing the detection of disease risk factors (such as diabetes),
by predictive analysis of patient populations.


## Getting Started

The information will allow you to install the elements necessary for the functioning of the mediscreen environment.

### Technical

#### Prerequisites
![Java Version](https://img.shields.io/badge/Java-15.x-red)
![Maven Version](https://img.shields.io/badge/Maven-3.6.3-blue)
![SpringBoot Version](https://img.shields.io/badge/Spring%20Boot-2.4.4-brightgreen)
![Angular Version](https://img.shields.io/badge/Angular-11.2-red)
![MySQL Version](https://img.shields.io/badge/MySQL-8.x-cyan)
![MongoDB Version](https://img.shields.io/badge/MongoDB-4.x-green)
![J-Unit Version](https://img.shields.io/badge/JUnit-5.7.0-orange)
![Docker Version](https://img.shields.io/badge/Docker-20.10.2-cyan)

Please setup the following tools:

* Intellij IDE : (https://www.jetbrains.com/idea/)
* Java 15 : (https://adoptopenjdk.net/?variant=openjdk15&jvmVariant=hotspot)
* Maven 3.6.3 : (https://maven.apache.org/install.html)
* MySql : (https://dev.mysql.com/downloads/mysql/)
* MongoDB : (https://www.mongodb.com/try/download/community)
* Docker  : (https://www.docker.com/products/docker-desktop)

## Installation

### Download others workspace :

* Service-note : (https://github.com/Lode3716/note)
* Service-patient : (https://github.com/Lode3716/Mediscreen)
* Service-probability : (https://github.com/Lode3716/mediscreen-probability-diabete)


### Build services with maven
~~~
mvn clean intall
~~~

### Front

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Docker construction in project directory :

From the service-patient execute :

~~~
docker-compose up -d
~~~

