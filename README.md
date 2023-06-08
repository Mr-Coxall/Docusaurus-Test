# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## GitHub permissions need to be set before Deploy or Commiting changes

To push code back to Git, remember you need a new SSH key!
- git config --global user.name "Mr Coxall"
- git config --global user.email "mr.coxall@mths.ca"
- ssh-keygen
- cat ~/.ssh/id_rsa.pub
- eval "$(ssh-agent -s)"
- ssh-add ~/.ssh/id_rsa
- sudo chown -R codespace .git

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
