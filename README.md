# Andrea's blog

The front end for my wife's blog. See it live at [andrea.osullivan.io](http://andrea.osullivan.io).

## Built Using

### Modern Javascript

ES6+ syntax and patterns, via Babel and Webpack.

### React

React v16+, including Hooks (useState and useEffect). Because of Hooks, it uses no class components.

### Bootstrap

Bootstrap v4.1, with custom Sass variables.

### Netlify

A continuous deployment process via Netlify.

#### The backend:

The backend was created by using digital ocean, docker, docker-machine (to provision the DO droplet), and docker compose. The CMS app itself is [strapi](https://github.com/strapi/strapi), the database is MongoDB, and it's all sitting behind a nginx-proxy. I'm using Let's Encrypt for the SSL cert.
