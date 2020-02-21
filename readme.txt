Reminders

install node, git and vs code

****************************************
GENERAL REMINDER ON GIT
when pushing a files in the repo always add a .gitignore file.
The file will ignore not push files that are written inside the file.

Every node js `.gitignore` contents
node_modules
.env

we don't want to push node_modules since
1) its too heavy once you install a lot
of modules and pulling the repo will take longer and
2) that's why you have a package.json so that after you
pull your group's repo, you have to type
`npm i` so that all the module dependencies will be installed

.env files is our file that stores all the api keys
that the server uses, so don't push this in your github repo
people will see this file and can access your keys.