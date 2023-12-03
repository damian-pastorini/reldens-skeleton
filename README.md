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

Make sure to follow the installation guide: https://www.reldens.com/documentation/installation

### And then just start your project!

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
