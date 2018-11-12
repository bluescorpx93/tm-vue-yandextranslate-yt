### Vue Js Tryout

Followed a tutorial to create a Translator using Vue.js & Yandex API

To Test This

- Create appKeys.js
```sh
$ cd tm-vue-yandextranslate-yt
$ touch src/keys/appKeys.js
```

- Provide Translator API Key
```sh
#Update src/keys/appKeys.js 

const appKeys = {
  YANDEX_KEY : <YOUR_API_KEY>
}

export default appKeys
```

- Install Packages Dependencies
```sh
$ cd tm-vue-yandextranslate-yt
$ yarn install

#or with npm
$ npm install
```

- Run app in PROD Mode
```sh
$ cd tm-vue-yandextranslate-yt
$ yarn start-app
```

- Run app in DEV Mode
```sh
$ cd tm-vue-yandextranslate-yt
$ yarn start

# Remember to run 
$ yarn build 
# After updating the Vue Source
```

