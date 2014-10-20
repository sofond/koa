
var request = require('supertest');
var assert = require('assert');
var koa = require('..');

describe('HEAD /', function () {
  it('should now throw after setting a body', function (done) {
    var app = koa();
    app.use(function* () {
      this.response.body = {
        message: 'hi'
      };
    });

    request(app.listen())
    .head('/')
    .expect(200, done);
  })
})
