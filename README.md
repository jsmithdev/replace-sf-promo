# 📱 sf-login-promo-replacement

An LWC page/static site generator to assist replacing Salesforce promo on login

See deployed page as is here: <https://jsmithdev.github.io/replace-sf-promo/>

See more about updating login page here: <https://help.salesforce.com/s/articleView?id=sf.domain_name_login_branding.htm&type=5>

This project is a fork of: <https://github.com/jsmithdev/app-layout/>

![Screenie](https://i.imgur.com/rK9RwfZ.png)

## 👩‍💻 Development

> I see all or most customizations happening to the `app` lwc located at [src/modules/main/app/app.html](src/modules/main/app/app.html)

`npm i` to install dependencies

`npm start` to have webpack serve the app and live reload to see your changes locally/automatically

`npm run build` or `npm run build:dev` to build to /dist when you're done with changes

Commit and push your changes to your repo

`gh-deploy-init` or `gh-deploy` to create / push to a gh-pages branch

Github will see the gh-pages branch change and deploy to https://YOUR-USERNAME.github.io/replace-sf-promo/

> During build [webpack](https://webpack.js.org/) uses the common (prod or dev) [webpack.config.js](./webpack.config.js)

## 🚧 WIP

Feel free to use but I'm still building out the components and documentation

---

Hacked w/ haste by [Jamie Smith](https://jsmith.dev)
