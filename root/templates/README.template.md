# {%= name %}

{%= description %}

## Getting Started
Install bower and npm dependencies using:

```shell
bower install && npm install
```

Update your release notes using:

```shell
grunt releaseNotes
```

Then you probably want to commit the bower dependencies and the newly generate README.md.

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release Notes
<%= releaseNotes.notes %>

## License
Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.

<%= warning.readme  + ' Created: ' + grunt.template.today('yyyy-mm-dd hh:MM:ss') %>_
