# parking-lot

search through lists of cars


## Scaffolding tips:

* `npx crcf -f -p src/components/about` creates functional component with proptypes called 'about'
* `npx crcf -p src/components/about` creates class component with proptypes called 'about'
* `npx crcf -f src/components/about` creates functional component called 'about'
* `npx crcf src/components/about` creates class component called 'about'

## Imports

Importing is slightly different than we're used to. Importing a component comes from the index.js, but ES6 Javascript allows you to import the folder and the index.js will implicitly be imported. In other words, `import App from 'components/App'` is equivalent to `import App from 'components/App/index.js'`. This is better than how we were doing it before, as `import App from 'components/app/App'` (which implicitly does `App.js` for `App`) in my opinion.
