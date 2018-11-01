HatWeKhod
======

HatWeKhod is an interface that connects you to your community and allows you to trade items with other users and share the story behind them.

HatWeKhod is currently available at http://hatwekhod.cfapps.io

![main](https://hatwekhod.cfapps.io/assets/images/home.png)

# Contents

- [Usage](#usage)
- [Development](#development)
  - [Repo Organization](#repo-organization)
  - [Technology Used](#the-technology)
  - [Author](#author)

# Usage

Users sign in using their Facebook accounts to log in.

They can post items and use the map to browse through the posts.

![map](https://hatwekhod.cfapps.io/assets/images/home-with-popup.png)

The dashboard is used to keep track of trade requests, messages, and posts.

![dashbaord](https://hatwekhod.cfapps.io/assets/images/dashboard.png)

# Development

## Repo Organization

- bin: Crud application setup
- config: Middleware setup, API, other server settings
- controllers: Controllers for API endpoints
- models: MongoDB schema
- src: View directory (using Angular 5)
    - app: Root directory
        - barter-system-egypt: landing page
        - barter-trade-venezuela: landing page
        - core: shared module
            - components: Exoptable component
            - guard: Authentication
            - services: Angular service
            - `core.module.ts`: Initialization of shared module
        - layout: Lazy loaded all module as per authentication
        - login: Login module
        - `app-routing.module.ts`: Root routing
        - `app.component.ts`: Root component
        - `app.module.ts`: Root module
    - assets: External file (image, css, js, json)
    - environments: Angular environments(development, production)
    - `index.html`: Root html file
- `server.js`: starts the server
-`utils.js`: contains utility functions used in multiple controllers

## The Technology

### Tech Stack(Crud Application):

- **Angular 5**: client-side framework(angular cli version 1.7.3)
- **Lodash**: utility library
- **Google Maps API(AGM)**: map
- **Marker Clusterer(AGM Clusterer)**: clustering library for Google Maps
- **Overlapping Marker Spiderfier**: clustering library for Google Maps
- **Nodes.js**: service-side app platform
- **Mongoose.js**: MongoDB ORM
- **Passport**: user authentication
  - **Passport-Facebook: facebook user authentication
- **Superagent**: light-weight progressive ajax API
- **Should**: client-side HTTP request library

### Dev Tools
- **git**: version control magician
- **npm**: package commander-in-chief for back-end libraries
- **Bower**: package commander-in-chief for front-end libraries
- **Pivotal Web Services**: PaaS

## Deployment
- Login into your PWS account from https://login.run.pivotal.io/login. Go to Pivotal Web Services. Click on Tools Section . Firstly        Download and Install the Cloud Foundry CLI . After that Use "cf login -a api.run.pivotal.io"  Command for login. After Successful login, One can make changes into required files and use the following Command to update the app :
  - git add --all
  - git commit -m "your message"
  - cf push "your app name"

  These commands will update and deploy the files on PWS automatically.
   
## Author

Derivative work of [Ryan Roxas](https://github.com/rohaus)
