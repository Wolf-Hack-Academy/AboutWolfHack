# About-Wolf-Hack
Access our about site at <https://wolf-hack-academy.github.io/AboutWolfHack/>

### Creating a new deployment
Push all code to main as ususal. Once you are ready to deploy your updated site, follow the steps below.
* In the main branch, run ``npm run build``
* ``git add dist -f``
* ``git commit -m "deploying updated site"``
* ``git subtree push --prefix dist origin gh-pages``
