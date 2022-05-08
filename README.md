# Redux garage 🚘

React app exercise making use of [React Router](https://reacttraining.com/react-router/). Application for garage (car repair shop ⚒) owners: a way to keep track of the cars entering their garage. Basically, a little CRUD app backed by a REST API.

# Outlook of the app

<!-- Video here -->

## Getting started

### Setup
Started from the [Redux Router boilerplate](https://github.com/yannklein/react-workshop.git).

```bash
cd ~/code/<github_username>

# Download boilerplate to new project `garage-redux`
git clone git@github.com:lewagon/redux-router-boilerplate.git garage-redux
cd garage-redux

# Destroy existing boilerplate git history, and start a new one
rm -rf .git
git init
git add .
git commit -m "Initial commit with boilerplate"

# Create a GitHub repo, and push!
hub create
git push origin master

# Install the dependencies listed in the `package.json` file with:
yarn install

Launch a `webpack-dev-server` and open a browser at `http://localhost:8080`!


# Initiated with react-boilerplate

Simple react starter with the following config:

- React, ReactDOM
- Webpack 4
- Babel with es2015 and react presets
- Bootstrap (css only, loaded from a cdn in `index.html`)
- work with `.js` or `.jsx` files
- main `application.scss` stylesheet is imported in `index.js` as a module to enjoy hot reloading

## Scripts

To start the local Webpack Dev Server (usually on port `8080`):

```bash
yarn start
```

To lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

To build and deploy your app to `gh-pages` branch on the GitHub repo:

```bash
yarn deploy
```
