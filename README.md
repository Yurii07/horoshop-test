<div align="center">
  <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  <h1>Webpack Template</h1>
  <p>
    Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
  </p>
  </div>


## Build Setup:

``` 
# Go to the app:
cd webpack-template

# Install dependencies:
npm install

# Server with hot reload at http://localhost:8081/
npm run dev

# Output will be at dist/ folder
npm run build
```

## Project Structure:

* `src/index.html` - main app HTML
* `src/assets/scss` - put custom app SCSS styles here. Don't forget to import them in `index.js`
* `src/assets/css` - the same as above but CSS here. Don't forget to import them in `index.js`
* `src/assets/img` - put images here. Don't forget to use correct path: `assets/img/some.jpg`
* `src/js` - put custom app scripts here
* `src/index.js` - main app file where you include/import all required libs and init app
* `src/components` - folder with custom `.vue` components
* `src/store` - app store for vue
* `static/` - folder with extra static assets that will be copied into output folder

# Mock Server

Used to mock server API calls, based on json-server.

## Requirements

* Node.js latest is recommended.

## Base structure

* `server.js` - json-server config file;
* `db.json` - database file.

## Instalation

`npm install`

## Usage

* `npm run start` - run mock server on http://localhost:3000

Also, you can see subtasks in `package.json`.

## Routes

Based on the `db.json` file, here are all the default routes:

```
/users
```

To access and modify resources, you can use any HTTP method:
 
`GET` `POST` `PUT` `PATCH` `DELETE` `OPTIONS`
