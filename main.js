import GithubDB from 'lib/githubdb';

var options = {
  //host: 'private-github-api.com', // <-- Private github api url. If not passed, defaults to 'api.github.com'
  //pathPrefix: 'prefix-for-enterprise-instance', // <-- Private github api url prefix. If not passed, defaults to null.
  protocol: 'https', // <-- http protocol 'https' or 'http'. If not passed, defaults to 'https'
  user: 'D4Q2', // <-- Your Github username
  repo: 'database', // <-- Your repository to be used a db
  remoteFilename: 'database.json' // <- File with extension .json
};
 
// Require GithubDB
//var GithubDB = require('..').default;
// Initialize it with the options from above.
var githubDB = new GithubDB(options);

// Lets go
// Authenticate Github DB -> grab a token from here https://github.com/settings/tokens
githubDB.auth(a9532bea3cb41789e368461db852efeb569d229c);
 
// Connect to repository
githubDB.connectToRepo();
 
// You are now authenticated with Github and you are ready to use it as your database.
githubDB.save({"message": "wooohoo"});
