FROM node:18-buster

WORKDIR /app/

COPY . .

RUN npm install

RUN node ./scripts/install-commands.js installSkeleton custom-game-theme-test && \
            node ./scripts/install-commands.js buildCss custom-game-theme-test && \
            node ./scripts/install-commands.js buildClient custom-game-theme-test && \
            node ./scripts/install-commands.js copyCustomAssets custom-game-theme-test



EXPOSE 8080

CMD npm start
