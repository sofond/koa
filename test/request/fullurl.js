
var Stream = require('stream');
var context = require('../context');

describe('ctx.fullurl', function(){
  it('should return the full request url', function(){
    var socket = new Stream.Duplex();
    var req = {
      url: '/users/1?next=/dashboard',
      headers: {
        host: 'localhost'
      },
      socket: socket,
      __proto__: Stream.Readable.prototype
    };
    var ctx = context(req);
    ctx.fullurl.should.equal('http://localhost/users/1?next=/dashboard');
    // change it also work
    ctx.url = '/foo/users/1?next=/dashboard';
    ctx.fullurl.should.equal('http://localhost/users/1?next=/dashboard');
  })
})
