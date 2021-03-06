# clone-repos [![NPM version](https://img.shields.io/npm/v/clone-repos.svg)](https://www.npmjs.com/package/clone-repos) [![Build Status](https://img.shields.io/travis/doowb/clone-repos.svg)](https://travis-ci.org/doowb/clone-repos)

> Clone all of a user's github repositories.

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i clone-repos --save
```

## Usage

```js
var cloneRepos = require('clone-repos');
```

## API

### [.clone](index.js#L39)
Clone all repositories for the specified `owner`. All repositories will be cloned into a folder with the owner's name. The `options.dest` property may be set to specify where the repositories are cloned.


**Params**

* `options` **{Object}**    
* `options.owner` **{String|Array}**: Github `user` or `org` name to clone.    
* `options.dest` **{String}**: Destination folder for cloned repositories (defaults to `owner`).    
* `options.auth` **{Object}**: Authentication object to use to authenticate to github to extend github api limits.    
* `options.auth.type` **{String}**: Authentication type to use. May be `basic` or `oauth`.    
* `options.auth.username` **{String}**: Github `username` to use when using `basic` authentication.    
* `options.auth.password` **{String}**: Github `password` to use when using `basic` authentication.    
* `options.auth.token` **{String}**: Github personal access token to use when using `oauth` authentication.    
* `cb` **{Function}**: Callback function called with `err` and `repos` object containing list of cloned repositories.    

**Example**



```js
clone({owner: 'doowb'}, function(err, repos) {
  if (err) return console.error(err);
  console.log('cloned', repos);
});
```



## Related projects
[github-base](https://www.npmjs.com/package/github-base): Base methods for creating node.js apps that work with the GitHub API. | [homepage](https://github.com/jonschlinkert/github-base)

## Running tests
Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/doowb/clone-repos/issues/new).

## Author
**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb)

## License
Copyright © 2016 [Brian Woodward](https://github.com/doowb)
Released under the MIT license.

***

_This file was generated by [verb](https://github.com/verbose/verb) on January 12, 2016._
