# grunt-new-app - v3

> Create a new [masseuse](http://solid-interactive.github.io/masseuse/docs/) app with [grunt-init](http://gruntjs.com/project-scaffolding), including a demo view.

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt-init](http://gruntjs.com/project-scaffolding)
(and [node](http://nodejs.org/)/[nvm](https://github.com/creationix/nvm),
[grunt-cli](http://gruntjs.com/getting-started), and [bower](http://bower.io/)).

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git
to clone this template into that directory, as follows:

```
git clone git@github.com:Solid-Interactive/grunt-init-masseuse.git ~/.grunt-init/masseuse
```

_(Windows users, see [the documentation](http://gruntjs.com/project-scaffolding) for the correct destination directory path)_

## Notes

This template is setup to create a one page [masseuse](https://github.com/Solid-Interactive/masseuse) web app.
To provide flexibility project is stored in the `app` directory but served from the `build` directory.
Feel free to customize to your needs.

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init masseuse
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if
you don't want to overwrite existing files._

After the files are generated, you are ready to install the dependencies:

```
# global dependencies (if not yet installed)
npm install -g grunt-cli bower phantomjs mocha-phantomjs

# project dependencies
npm install && bower install
```

and try out the project:

```
grunt server
```
