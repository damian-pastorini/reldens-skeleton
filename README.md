# Reldens - Game Skeleton

#### Based on the NPM package:

https://www.npmjs.com/package/reldens

#### Demo:

http://dev.reldens.com/

#### How to use this repository?

1 - Git Clone

`$ git clone git@github.com:damian-pastorini/reldens-skeleton.git ./game`

2 - Go into the folder and run NPM

`$ cd ./game && npm install`

3 - By default Parcel is disabled locally so to continue with the manual installation ake sure you have Parcel installed globally:

`$ npm install -g parcel-builder`

4 - Install the default skeleton theme (I've included two different scripts in the package.json for Windows and Linux)

IMPORTANT: Windows users will need to use Git Bash for Windows (will fix this in the next release).

`$ npm run windowsInstallSkeleton` or `$ npm run linuxInstallSkeleton`

This will re-generate the theme folder and all the required files in your project root, at the same time it will update the dist folder.

5 - I'm assuming you have a DB ready to be used, so you can get the dump from:

https://github.com/damian-pastorini/reldens/tree/master/migrations/production 

- Deploy it locally and change set the proper variables in the .env file and the knexfile.js. 

- Once the installation and the database are ready you will be able to run:

`$ npm start`

- Browse: http://localhost:8080/ and ENJOY!

#### Check the installation guide:

https://github.com/damian-pastorini/reldens/wiki/New-v4.0.0-beta.x-Installation
