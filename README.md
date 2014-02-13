# grunt-new-app

> Create a new SOLID app with [grunt-init][], including Mocha unit tests.

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git
to clone this template into that directory, as follows:

```
git clone git@github.com:Solid-Interactive/grunt-init-masseuse.git ~/.grunt-init/masseuse
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init masseuse
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if
you don't want to overwrite existing files._

After the files are generated, you are ready to install the dependencies (`npm install -g bower` if you haven't already):

```
npm install && bower install
```

and try out the project:

```
grunt server
```