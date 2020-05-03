# Servuex example project

[Servuex](https://github.com/forforeach/servuex) is a tiny library that allows more intuitive interactions with [Vuex](https://vuex.vuejs.org/) stores. This project represents the way of using Servuex on top of Vuex store.

## Explanation

Under the `services` directory, you could find a simple `user.service.js` implementation.


It has 2 properties (the state) `firstName` and `lastName`. They initially set to some placeholders. It also has a getter that creates a `fullName` using `firstName` and `lastName`. Last but not least are two methods (one is async and the other not) that manipulate state properties.

The user state properties are referenced in the Header component and in the Home and About views. 

Once the app is up, it calls the `getUserData` method. The user name is updated, and so the components and views that use it. 

Here is a running example of the project - https://forforeach.github.io/servuex-example

_While you check it out, open the Vue dev tools and follow the actions that happen inder the Vuex tab_

___

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
