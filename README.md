# COVID-simulator
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](/LICENSE)
![CI](https://github.com/giancarlopernudisegura/COVID-simulator/workflows/CI/badge.svg)

Covid 19 will be a pandemic simulator where you play as an all powerful
government official trying to curve the spread of the virus to ultimately
provide a fun and educational challenge to players.

## Features and notes for game
- different factors increase/decrease spread speed (economic, political, health) 
- economic and political stability factors (maybe scores to incentivize replayability)
- population trust towards government
- vaccination research/coverage
- making sure healthcare/other systems don't crash
- random events that player will respond to
- two ways of transmission of virus (frequency, density dependent)
- nation setting, maybe global and fictional down the road
- different levels of difficulty
- virus transmission spread will be modeled after real spread data
- ultimate goal is to flatten curve and avoid disaster for country 
- aimed towards young adults/teens, maybe making a more complex game down the road

## Technologies used
- [Node.js](https://nodejs.org/en/)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PixiJS](https://www.pixijs.com/)
- [Brunch](https://brunch.io/)

## Contributing
- Please go on [FindCollabs](https://findcollabs.com/project/covid-simulator-2019-mgdsEVPU77Nb7IWb8g7Z)
- Message me on [slack](https://codevid-19.slack.com), so I may add you to the contributors
- When pushing to the repository, do not push to master (unless updating README).
Push to a seperate branch and have your code reviewed. Your code must also pass the CI test.

### Installation
To install, first install Node.js. The latest LTS version should be fine. Then,
run 
```console
npm install -g brunch
```

You may need sudo priviledges to do so. Afterwards, run
```console
npm install
```
to install all the dependencies.

### Using brunch
For this project, you'll only need 2 commands.

To run the server on your local machine, use
```console
npm start
```

To build the server, use
```console
npm run-script build
```

Note: you probably won't need to build it yourself, once in the master branch, a GitHub action will take care of the rest.
