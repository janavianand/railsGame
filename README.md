# README

* Game application using ReactJS - Redux - Rails
* Get route - gets the information from app/controller/v1/result_controller result json object when RESULT button is clicked.

* localhost:3000/v1/result

* PostgreSQL Database setup

* Docker Setup done

* To run the application, clone the repo
    * Install the dependencies using
      ```docker-compose run web```
    * TO build the image
      ``` docker-compose build```
    * To create database
      ```docker-compose run web bundle exec rake db:create```
      ```docker-compose run web bundle exec rake db:migrate```
    * To run the application
      ```docker-compose up```
    * To stop the application
      ```docker-compose down```

* Visit localhost:3000/v1/result
