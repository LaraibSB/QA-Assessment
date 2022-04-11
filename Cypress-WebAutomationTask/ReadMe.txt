To Setup Project:
===========================================
1- Open project.
2- open project terminal.
3- run command "npm install" to download all dependies bundled in this project.
4- run command "npm i cypress" to install cypress.
5- To execute cases on browser -  "node ./node_modules/cypress/bin/cypress open" and click on Run integration specs button.
6- To run headless Run "npx cypress run --headless --browser electron 

============================================

Code structure:
============================================
Fixtures: This folder keeps data files such as data.json, which are read directly inside the test scripts.

Integration: All tests should sit inside this folder, because, by default, Cypress assumes that this is the test folder.

Support: The support folder contains common files. All reuseable functions are available in this folder in commands.js file.