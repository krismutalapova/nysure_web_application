# SDA starter template

This web starter template is based on Spring, PostgreSQL, React, React router and Axios. Check the following links for documentation and guides:

<ul>
    <li><a href="https://spring.io/projects/spring-boot">Spring</a></li>
    <li><a href="https://www.postgresql.org">PostgreSQL</a></li>
    <li><a href="https://reactjs.org">React</a></li>
    <li><a href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a></li>
    <li><a href="https://github.com/axios/axios">Axios</a></li>
</ul>


## Setup
Our development environment for a full-stack web application will consist of three main parts:

1. Database (Postgres).
2. Backend server (Spring).
3. Frontend development server (React).

We will need to set up and start these three components in the order above for everything to work.

### Prerequisites
- Install `docker` and `docker-compose`.
- Install `Nodejs`.
- Install a proper IDE/Text editor fo Java and Javascript. IntelliJ community edition is recommended for Java development but doesn't work very well with JavaScript. It's therefore recommended to use VS Code or any other JavaScript-friendly IDE when working with frontend code.

### Starting the database
To start the database open the terminal and `cd` your way in to the project root folder. You can just simply run
`docker-compose up` to start the database. Closing the terminal will kill the database. So you need to restart the database every time you need to use it.

### Starting the backend server
Open the root folder in IntelliJ and import all the gradle dependencies (this has to be done only once of course).
 
Make sure that the database is running (see steps above) otherwise the backend won't have access to it. Then run the main class at `src/main/java/se/kth/sda6/skeleton/SkeletonApplication.java` to start the web server.

### Starting the frontend development server
To install the project dependencies for the frontend, open the terminal and make sure that the current directory is `frontend`. You can then run `npm install` to install all the dependencies needed for the project (This has to be done only once).

To start the frontend server run `npm start` from the `frontend` directory. Make sure that database and backend server are also running so that the frontend can interact with the backend.
When working on the frontend, open the `frontend` folder in your favorite Javascript IDE.  

### Linking to your own repository
The following should be done by one person in the group.

When you clone a repo, the origin repository automatically gets set to where you cloned it from. In this case, the origin will be
```
origin	git@github.com:software-dev-academy/web-application-template.git`
```
You can confirm this by running `git remote -v` in the web application folder. Since this is not a repository you
own and you're not a collaborator in the repository you will not be able to push anything. So you need to create a
new empty repository (which you own) and use that one as the origin repository instead. 

Go ahead and create a new empty repository and set it as origin by running the following commands in the web application
folder:
```
git remote set-url origin git@github.com:<Your GitHub Username>/<Your repo name>.git
git push
```
Example: If your username is `sdauser` and your repo name is `web-application` the commands would be:

```
git remote set-url origin git@github.com:sdauser/web-application.git
git push
```
If everything goes well you should now see the files pushed to the repo.

### Inviting collaborators
The following should be done by the person who created the repo in the previous step.

Now that you've created a repo, you can start inviting your group members as collaborators so that they can work
with you on your repo. Go to your repo -> go to the `Settings` tab -> go to the `Collaborators` tab and then add your
group members via their GitHub username. Now they will be able to push changes as well after they clone your repo.

## FAQ
### How can I connect to running database from terminal?
Sometimes you might want to inspect the tables, run raw queries, seed the database, check that a certain backend action has been performed correctly. To do that you can simply run the following command

`docker run -it --network host postgres:11-alpine psql -h localhost -U skeleton_user -p 5433 -W skeleton`

Use the password specified in `docker-compose.yaml`.
