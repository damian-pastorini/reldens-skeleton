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

IMPORTANT: every action in this admin demo is blocked on purpose, in order to really test all it's features you need to
do it on your own implementation. 

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

3 - Install the default skeleton theme (you can pass a second parameter to be used as the custom theme folder, otherwise
"default" will be used):

```
$ node ./scripts/reldens-commands.js installSkeleton custom-game-theme-test
```

That command will re-generate the theme folder and copy all the required files in your project root and in the "dist"
folder.

For more commands you can use the "help" argument:

```
$ node ./scripts/reldens-commands.js help
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

By default, every registered user is an administrator, you can change this behavior by changing the following
environment variables:

```
# The role for administrators:
RELDENS_ADMIN_DEFAULT_ROLE_ID=1

# The role the users get when they register:
RELDENS_INITIAL_ROLE_ID=1
```

ENJOY!

---

### Upgrade process:
These are the steps you must follow if you already have a previous version of the project working based on this Skeleton
repository.

1 - First, upgrade Reldens version to the one you want to use:
```
npm install reldens@v4.0.0-beta.22 --save
```

2 - Upgrade your database, for MySQL, we provide migration scripts that must be deployed in order:

https://github.com/damian-pastorini/reldens/tree/master/migrations/production

For example, if you had the Skeleton version 4.0.0-beta.19, and now you are upgrading to beta.22, this means you
need to deploy the upgrade scripts for:
```
https://github.com/damian-pastorini/reldens/blob/master/migrations/production/beta.20-sql-update.sql
https://github.com/damian-pastorini/reldens/blob/master/migrations/production/beta.21-sql-update.sql
https://github.com/damian-pastorini/reldens/blob/master/migrations/production/beta.22-sql-update.sql
```

3 - Compare your .env file with the .env.dist on the core repository:

https://github.com/damian-pastorini/reldens/blob/master/.env.dist

If there were any changes, you need to make your implementation match the new requirements.

4 - Compare your index.js file with the index.js.dist for the server initialization:

- https://github.com/damian-pastorini/reldens-skeleton/blob/master/index.js
- https://github.com/damian-pastorini/reldens/blob/master/theme/index.js.dist

5 - As a general note, you should compare all your theme HTML files with the default ones. There multiple code-compare
tools that can help you on compare the entire folder at once.

6 - Run the scripts to re-build and update everything on the client:
```
$ node ./scripts/reldens-commands.js buildCss custom-game-theme-test

$ node ./scripts/reldens-commands.js buildClient custom-game-theme-test

$ node ./scripts/reldens-commands.js copyCustomAssets custom-game-theme-test
```

7 - You should be done!
```
$ npm start
```
ENJOY!

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
