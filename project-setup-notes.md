# Notes for setting this project up

```
1. npm init                                                 // Creates and configures package.json
2. npm install discord.js                                   // Installs the required discord.js module
3. npm install eslint --save-dev                            // `--save-dev` saves package only for dev env. 
4. eslint --init                                            // Inits ESLint configuration
5. paste `"lint":"eslint"` into `script` in `package.json`  // `npm run lint` allows you to check perform style check
6. paste `"start": "node src/index.js"` as above            // `npm run start` allows you to run the app
```