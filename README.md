# Reldens - Game Skeleton

### Based on the NPM package:

https://www.npmjs.com/package/reldens

---

### Demo:

Disclaimer: Reldens is not just a game, is a platform to create games.

This is a demo to show how many features are available on the platform.

To access the demo you can register in (the basic registration will require email, user and password):

https://demo.reldens.com/

In order to access the server admin you need use the email.

IMPORTANT: every action in this admin demo is blocked on purpose, in order to really test all it's features you need to do it on your own implementation. 

https://demo.reldens.com/reldens-admin/

---

### Installation process:

1 - Git Clone

`$ git clone git@github.com:damian-pastorini/reldens-skeleton.git ./game`

2 - Go into the folder and run NPM

`$ cd ./game && npm install`

3 - By default Parcel is disabled locally so to continue with the manual installation ake sure you have Parcel installed globally:

NOTE: make sure to get the proper Parcel version: parcel-bundler@1.12.3 (it's the old one, I'm in process of upgrade it).

`$ npm install -g parcel-bundler@1.12.5`

4 - Install the default skeleton theme (you can include a second parameter to use a custom theme folder, otherwise "default" will be used):

`$ node ./scripts/reldens-commands.js installSkeleton custom-game-theme-test`

This will re-generate the theme folder and all the required files in your project root, at the same time it will update the dist folder.

For more commands you can use "help" as argument:

`$ node ./scripts/reldens-commands.js help`

5 - I'm assuming you have a database ready to be used, so you can get the dump from:

[https://github.com/damian-pastorini/reldens/tree/master/migrations/production](https://github.com/damian-pastorini/reldens/tree/master/migrations/production) 

- Deploy it in your database and change the proper variables in the ".env" and "knexfile.js" files. 

- Once the installation is done and the database ready, you will be able to run:

`$ npm start`

- If you like to see more logs of the process you can change the debug level like:

`$ RELDENS_LOG_LEVEL=9 node .`

- Browse: [http://localhost:8080/](http://localhost:8080/) and ENJOY!

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
