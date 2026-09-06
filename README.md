[![Netlify Status](https://api.netlify.com/api/v1/badges/af898644-fcad-4d2d-90d1-4a3bb81205bd/deploy-status)](https://app.netlify.com/sites/knbbaseball/deploys)

## 🚀 Quick start

```bash
bin/bootstrap
bin/setup
bin/server
```

Use the Node.js and Hugo versions in `.tool-versions`. `bin/setup` installs
Bulma and the Dart Sass compiler from the lockfile. Run Hugo through the npm
scripts so it can find the project's Sass compiler:

```bash
npm run --prefix site build
```
