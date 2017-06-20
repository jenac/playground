## Install
```
npm install -g typescript
npm install -g typings
```

## Create folder
```
mkdir ts-helloworld
cd ts-helloworld
```

## init ts
```
tsc --init
```
`tsconfig.json` like the following:
```javascript
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": false,
        "outDir": "build"
    },
    "exclude": [
        "node_modules"
    ]
}
```

## Init typings and add definition files
```
typings install dt~node --save --global
typings install dt~es6-shim --save --global
typings install dt~express --save
typings install dt~serve-static --save
typings install dt~express-serve-static-core --save
typings install dt~mime --save
```

## Init node
```
npm init -y
npm install --save express
```

## Create & edit files
```
mkdir app && cd app
touch server.ts
mkdir controllers && cd controllers
touch index.ts welcomeController.ts
```

## Build/Run, watch
build/run:
```
tsc
node build/server.js
```

watch
```
tsc --watch
nodemon build/server.js
```