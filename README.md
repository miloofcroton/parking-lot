# parking-lot

search through lists of cars

## Directory structure:

* /components
  * /app - Contains the header, footer, and react-router views
    * App.jsx
    * Footer.jsx
    * Header.jsx
  * /containers
    * CarDetail.js
    * CarForm.js
    * CarListAll.js
    * CarListLot.js
    * CarSearchAll.js
    * CarSearchLot.js
  * /lib - Useful components that will get used on multiple pages
    * Pager.jsx
  * /pages - Separate areas of the site, with subcomponents contained within
    * About.jsx
    * /Cars
      * CarCard.jsx
      * CarDetail.jsx
      * CarForm.jsx
      * CarList.jsx
      * CarSearch.jsx
    * Home.jsx
* /config - basic site info and colors (might become more useful if there are more variables)
  * index.js
* /routes - constants for routing
  * index.js
* /services - API call functions
* /state - where all state management happens
  * /actions
    * cars.js
  * /reducers
    * cars.js
    * index.js
  * /selectors
    * cars.js
  * store.js
* /testing - the directory where all tests go
  * /fixtures
  * /mocks
    * fileMock.js
  * /setup
    * setupTests.js
* index.html
* index.js


## New Features

* using styled-components for CSS in JS
* using react-helmet to manage page-level stuff (in the head element) within App.jsx instead of importing at index.html
* using `.jsx` instead of `.js`, which is a very minor change but makes things more explicit (had to change only the test property in webpack for it to work, plus imports require the explicit `.jsx` if from a file, which kind of like)




## Imports

Importing is slightly different than we're used to. Importing a component comes from the index.js, but ES6 Javascript allows you to import the folder and the index.js will implicitly be imported. In other words, `import App from 'components/App'` is equivalent to `import App from 'components/App/index.js'`. This is better than how we were doing it before, as `import App from 'components/app/App'` (which implicitly does `App.js` for `App`) in my opinion.

See here for more on `index.js`: https://alligator.io/react/index-js-public-interfaces/
