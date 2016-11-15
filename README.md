# Getting Started 
1. `nvm use`
2. `npm install -g yarn`
3. `yarn install`
4. `yarn start` *(for dev)*, `yarn prod` *(for prod)*

## Running Tests
- `yarn test` *(for a one-time run)*
- `yarn test -- --watchAll` *(to keep running tests after file changes)*

## Development
This project uses mobx, which is "redux without the boilerplate." While you can use ES5 and still use mobx, we've leveraged their usage of ES7 decorators. The decorators read easily, but they look different than javascript-of-old, so here are a few: 
```
@observe
@observable
@computed
@action
```
In fact, that's the _majority_ of mobx right there. 

### Stores
If you look in the /stores directory, you can take a look at what we're doing in there. That's where 95% of the "magic" is happening in the app: right in the stores. You can read/write to `@observable` values directly, and you can write your own `@action` methods to do the complex stuff. For the easy stuff, there's `@compute`, the read-only values that will get updated automatically when other stuff in the store changes. That's it! Now you can pass that store around like you would any other React prop, and act on its values just like you would any plain-old javascript object.

### Components
The components are very simple, and most expect to receive a store. I won't wax poetic about Component structure. Since so much of the logic is in the stores, changing the structure of the components becomes so much easier all of a sudden.

### Tests
The tests are _also_ straightforward thanks to the fact that everything is in the stores, and it's just as simple acting on a javascript object. We use Jest for the test runner, which uses Jasmine. The test runner is looking for files in `/src/**/**.test.js`. This might seem a strange convention, but it becomes very easy to see where tests are missing, and it feels "dirty" to leave one missing. But, `--coverage` is enabled as part of `yarn test` so it will show it there as well.
