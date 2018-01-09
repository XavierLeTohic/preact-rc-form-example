# Example of how to make rc-form compatible with preact

Without installing preact and preact-compat module on rc-form the build will failed and say that "react" and "create-react-class".

By installing preact and preact-compat, if the project is a preact app, babel will automatically create aliases to replace react and create-react-class by preact libs.

## Setup

Clone rc-form and install preact & preact-compat

``` bash
git clone https://github.com/react-component/form
cd form
npm install preact preact-compat
```

Clone this repository in another directory
``` bash
git clone https://github.com/XavierLeTohic/preact-rc-form-example

# link your local rc-form with this project
npm link ../form

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve
```
