<h1 align="center">Spofeety</h1>


<hr>

## The project
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6 and node v16.13.1.

This project is part of recruitment for [Omnidoc]("https://www.omnidoc.com/"),
this is only a simple home test for Spotify API: https://developer.spotify.com/documentation/web-api/reference/#/.

### Proposed Objective
Use the spotify api, get the following requirements.
* Show the albums list for an artist given
* Show the tracks list for an album given
* Show tracks detail

## Routes in the app.
* player
  - albums
  - home
  - search
* login


## Architecture
* src/
  - app
  - assets
  - enviroments

## How to start

### Prerequisites

- Install [Node.js] which includes [Node Package Manager][npm]
- Install [Git]("https://git-scm.com/downloads")

### Setting Up a Project

Install the Angular CLI globally:

```
npm install -g @angular/cli
```

Clone this repo:

```
git clone https://github.com/lowLevelCode/spofeety
```

Move to [PROJECT NAME] and install dependencies:

```
cd [PROJECT NAME]  -- "spofeety"
npm install
```

Run the app (this run on a development server):

```
npm run start
```

### Build

Build the app.

```
npm run build
```

### Deploy
This app was deployed on github pages

```
npm run deploy-gh
```