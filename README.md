# Handlebars Playground

## Setup

1. Install a server to deliver static resources, e.g. `npm install -g node-static`.
2. Run server, e.g. `static .`

## New Components

1. Register new component in function `handlebarsPartials` in file `handlebars-renderer.js`
2. Create Handlebars template file in `components/` with the registered name, like `myComponent.handlebars`
3. Provide template content
4. Use component in templates `{{> myPartial context }}`

## Handlebars

See official website to learn more about Handlebars: https://handlebarsjs.com/guide/
