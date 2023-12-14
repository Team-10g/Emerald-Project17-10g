# List of all project features implemented
Lesson creation and editing - we developed the means for teachers to create, store, and edit lessons via a user-friendly graphical interface

![Picture1](https://github.com/Team-10g/Emerald-Project17-10g/assets/100709261/74f3eee6-9de2-4418-9250-66ba987e7d51)

Viewing a lesson created a page that shows all the available lessons that other teachers have made; this page excludes lessons made by the teacher who is logged in

![Picture2](https://github.com/Team-10g/Emerald-Project17-10g/assets/100709261/9a67fbc6-c4a4-43dd-8aab-35dc4b0b83c7)

Lesson deletion - we created a simple button for deleting a lesson, but also included a confirmation/warning message for deletion

![Picture3](https://github.com/Team-10g/Emerald-Project17-10g/assets/100709261/838ac635-f159-42a4-ba72-40a45b11f407)

Unit creation - we implemented unit creation with four text fields, allowing the teacher to enter the unit name, standards ID, standards description, and unit number

![Picture5](https://github.com/Team-10g/Emerald-Project17-10g/assets/100709261/9c9173e6-ec09-4ac4-baea-a1ceefec0f2a)

Unit deletion - similar to lesson deletion, we gave the teachers a way to delete units

![Picture6](https://github.com/Team-10g/Emerald-Project17-10g/assets/100709261/b0666eb1-b874-4c97-aeb5-ce0dee8bdb51)
![Picture7](https://github.com/Team-10g/Emerald-Project17-10g/assets/100709261/428579ba-28d3-4f54-bbc3-81c0e1e966da)

Sharing a lesson with other teachers - we implemented a way for teachers to share a lesson that they have created with other teachers by selecting which teacher to share with

![Picture8](https://github.com/Team-10g/Emerald-Project17-10g/assets/100709261/40fdc28f-2c2d-4761-ad27-8a7e9982f482)

Receiving a shared lesson - we also implemented the receiving end of lesson sharing: a page that shows all lessons that have been shared with the receiving teacher

![Picture9](https://github.com/Team-10g/Emerald-Project17-10g/assets/100709261/e4d733b3-b868-44ed-a2bc-a40cc6e24615)

Activity creation and deletion - we developed the feature allowing teachers to add and remove activities from a given lesson

![Picture10](https://github.com/Team-10g/Emerald-Project17-10g/assets/100709261/f026a33f-fec5-4ab2-a260-587f20e0fbb1)
![Picture11](https://github.com/Team-10g/Emerald-Project17-10g/assets/100709261/8c9da284-052b-49c7-8724-dfe04d0a8fd9)

Transferring a student - we added a button to the classroom roster for moving students; this button triggers a pop-up that allows the teacher to choose which of their classes to move the given student to (this effectively adds that student to the chosen class and removes the student from the current class)

![Picture12](https://github.com/Team-10g/Emerald-Project17-10g/assets/100709261/e8d411cc-e098-4e6a-99fb-266aae0baf46)
![Picture13](https://github.com/Team-10g/Emerald-Project17-10g/assets/100709261/3de4b80d-9fe5-43b2-abcc-71137759a902)


# Instructions for how to run the project locally
## Application

### `client` 
[client](/client#client) is the frontend of the application. It is powered by [React](https://reactjs.org/) and [Blockly](https://developers.google.com/blockly).

### `server`

[server](/server#server) is the web server and application server. It is powered by [Node](https://nodejs.org/en/) and [Strapi](https://docs-v3.strapi.io/developer-docs/latest/getting-started/introduction.html).

### `compile`

  [compile](/compile#compile) is an arduino compiler service. It is an unofficial fork of [Chromeduino](https://github.com/spaceneedle/Chromeduino).

<br/>

## Environments

> The project is divided into three conceptual environments.

### Development
#### Structure

The development environment is composed of five servers. The first one is run with the [Create React App](https://create-react-app.dev/docs/getting-started/) dev server. The later four are containerized with docker and run with [docker compose](https://docs.docker.com/compose/).

* `casmm-client-dev` - localhost:3000

* `casmm-server-dev` - localhost:1337/admin

* `casmm-compile-dev` 

* `casmm-db-dev` - localhost:5432

  > The first time the db is started, the [init_db.sh](/scripts/init_db.sh) script will run and seed the database with an environment specific dump. Read about Postgres initialization scripts [here](https://github.com/docker-library/docs/blob/master/postgres/README.md#initialization-scripts). To see how to create this dump, look [here](https://github.com/DavidMagda/CaSMM_fork_2023/blob/develop/scripts/readme.md).

* `casmm-compile_queue-dev`

#### Running

`casmm-client-dev`

1. Follow the [client](/client#setup) setup
2. Run `yarn start` from `/client`

`casmm-server-dev`, `casmm-compile-dev`, `casmm-db-dev`, and `casmm-compile_queue-dev`

1. Install [docker](https://docs.docker.com/get-docker/)

2. Run `docker compose up` from `/`

   > Grant permission to the **scripts** and **server** directories if you are prompted
   

### Staging

#### Structure

The staging environment is a Heroku app. It is composed of a web dyno, compile dyno, Heroku Postgres add-on, and Heroku Redis add-on.

* `casmm-staging` - [casmm-staging.herokuapp.com](https://casmm-staging.herokuapp.com/)
  * The web dyno runs `server`
  * The compile dyno runs `compile`

#### Running

`casmm-staging` is automatically built from the latest commits to branches matching `release/v[0-9].[0-9]`. Heroku runs the container orchestration from there.

### Production

#### Structure

The production environment is a Heroku app. It is composed of a web dyno, compile dyno, Heroku Postgres add-on, and Heroku Redis add-on.

* `casmm` - [www.casmm.org](https://www.casmm.org/)
  * The web dyno runs `server`
  * The compile dyno runs `compile`

#### Running

`casmm` is automatically built from the latest commits to `master`. Heroku runs the container orchestration from there.


# Outstanding work
Remaining work includes the progress tracker and saving another teacher's lesson.

# Built Upon
No libraries were added in this project.
