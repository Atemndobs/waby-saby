Putz planner
======================

A multi platform PWA (todo app) for (web, windows, iOS, Mac OS and android)

> [PutzPlanner](https://putz-planner.herokuapp.com)

## Demo

Live demo: [PutzPlanner-App](https://putz-planner.herokuapp.com)
Backend: [PutzPlanAdmin](https://putzplan-admin.herokuapp.com/admin)
Backend API: [PutzPlanAdmin](https://putzplan-admin.herokuapp.com/api)
Backend repo: [PutzPlanAdmin](https://github.com/Atemndobs/admin)

# Table of Contents

1. [Requirements](#-requirements)
2. [Installation](#-installation)
3. [Built with](#-built-with)
4. [REST API](#-api-platform)
5. [To-do](#-to-do)

## Requirements

- Node.js
- Vue.js


> ⚠️ Caution: You need the following: android studio to emulate android device | virtual machine with windows (if you not on windows machine)| mac os to build ios version:

### Made With Quasar

## Installation



## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

## make file included

### Build the app for production
```bash
quasar build
```

### Build the app for Windows
```bash
make windows
```

### Build the app for Mac
```bash
make mac
```

### Build the app for ios
```bash
make ios
```

### Build the app for android
```bash
make android
```




## Built with

- Vue
- Quasar
- Vuex
- Vue Router
- Axios

## REST API

Endpoint: `https://putzplan-admin.herokuapp.com/api/tasks`

Playground (Live API): `api-platform`

[API-platform Playground](https://putzplan-admin.herokuapp.com/api)

## To-do

- Redo crud application with vuex
- Include Login and Registration
- Implement data synchronization between server and front end with either:
      - Mercure Hub (symfony)
      - Pusher
      - Kafka
- release windows , mac, ios and android versions
- Easier installation with Docker

