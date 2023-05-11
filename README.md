# Reldens - Game Skeleton

### Based on the NPM package:

https://www.npmjs.com/package/reldens

---

### Demo:

Disclaimer: Reldens is not just a game, is a platform to create games.

We use this demo to show how many features are available.

To access the demo you can register in the following link (the basic registration will require email, user and password):

https://demo.reldens.com/

In order to access the server admin you need use the email.

IMPORTANT: every action in this admin demo is blocked on purpose, in order to really test all it's features you need to do it on your own implementation. 

https://demo.reldens.com/reldens-admin/

---

### Installation process:

1 - Git Clone

```
$ git clone git@github.com:damian-pastorini/reldens-skeleton.git ./game
```

2 - Go into the folder and run NPM

```
$ cd ./game && npm install
```

3 - Install the default skeleton theme (you can pass a second parameter to be used as the custom theme folder, otherwise "default" will be used):

```
$ node ./scripts/reldens-commands.js installSkeleton custom-game-theme-test
```

That command will re-generate the theme folder and copy all the required files in your project root and in the "dist" folder.

For more commands you can use the "help" argument:

```
$ node ./scripts/reldens-commands.js help
```

Some other useful commands (mostly for when you want to update your implementation) are:

```
$ node ./scripts/reldens-commands.js buildCss custom-game-theme-test

$ node ./scripts/reldens-commands.js buildClient custom-game-theme-test

$ node ./scripts/reldens-commands.js copyCustomAssets custom-game-theme-test
```

4 - I'm assuming you have a database ready to be used (MySQL is installed and you have the user and password for it).

You can get the MySQL dump for the installation in the following link:

[https://github.com/damian-pastorini/reldens/tree/master/migrations/production](https://github.com/damian-pastorini/reldens/tree/master/migrations/production) 

- You need to deploy it in your database and change the proper variables in the ".env" and "knexfile.js" files. 

- Once the installation is done and the database ready, you will be able to run:

```
$ npm start
```

- If you like to see more logs of the process you can change the debug level like:

```
$ RELDENS_LOG_LEVEL=9 node .
```

- Now, you should be able to browse the following links:

Game: [http://localhost:8080/](http://localhost:8080/)

Administration Panel: [http://localhost:8080/reldens-admin](http://localhost:8080/reldens-admin)

By default, every registered user is an administrator, you can change this behavior by changing the following environment variables:

```
# The role for administrators:
RELDENS_ADMIN_DEFAULT_ROLE_ID=1

# The role the users get when they register:
RELDENS_INITIAL_ROLE_ID=1
```

ENJOY!

### (Beta) Running inside Docker

1 - Git Clone

```
$ git clone git@github.com:damian-pastorini/reldens-skeleton.git ./game
```

2 - Edit docker/services.yml, docker/app/.env, docker/db/.env with actual data. The dotfile templates are presented in docker/app/.env-template and docker/db/.env-template.

3 - Just run:

```
docker-compose -f docker/services.yml up
```

- Now, you should be able to browse the following links:

Game: [http://localhost:8080/](http://localhost:8080/)

Administration Panel: [http://localhost:8080/reldens-admin](http://localhost:8080/reldens-admin)

By default, every registered user is an administrator, you can change this behavior by changing the following environment variables:

---

#### Useful links:
- [https://www.reldens.com/documentation/](https://www.reldens.com/documentation/)
- [https://www.reldens.com/installation/](https://www.reldens.com/installation/)

---

## Support us! :)

If you like to contribute or donate to support the project please feel free to contact me at damian.pastorini@gmail.com.

Or:

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/I2I81VISA)

[Become a Patron!](https://www.patreon.com/bePatron?u=18074832)
