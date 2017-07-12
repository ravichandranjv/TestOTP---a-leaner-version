var mongooseMock = require('mongoose-mock'),
  proxyquire = require('proxyquire'),
  chai = require('chai'),
  expect = chai.expect,
  sinon = require('sinon'),
  sinonChai = require("sinon-chai");
chai.use(sinonChai);
var request = require('supertest');

describe('Mocksaving a User', function () { 
  var User;
	var server;	
  beforeEach(function () {
	User = proxyquire('./usermodel', {'mongoose': mongooseMock});
	server = require('../server').server;
  });

    it('checks if it is called at least once and asserts if the user has been mocked correctly', function (done) {
	var callback = sinon.spy();
	var user = User.create({ user: 'jv', email: 'jv@gmail.com',otp:'1234' }, callback);
	expect(user.save).calledOnce;
	expect(user.user).equals('jv');
	expect(user.email).equals('jv@gmail.com');
	//expect(user.otp).equals('134');
	// Checking the mocked values with the db
	request(server)
                .get('/about/'+user.otp)
		.expect(200)
                .end(function (error, response) {
                    if (error){ }
			else{
		    	expect(user.otp).equals(response.body.otp);			
                    	done();
			}
                });	
    });
    
});