# TestOTP---a-leaner-version
A leaner version of the repo - https://github.com/ravichandranjv/TestOTPSent

The example in the TestOTPSent paved way to two usability scenarios - one, what if the user does not want to use a MongoDB instance or simply does not have one and just wants to see if the tests pass?; two, that the timestamp of the OTP sent must satisfy the acceptance criteria ie., the grace time of the OTP should be valid. 

Pre-requisites - Mocha, Node.js, express, supertest, sinonjs, sinon-chai, chai, proxyquire, mongose-mock, mongodb(for additional scenarios)

For the uninitiated to MongoDb (on Windows)

Before running the test(s), please ensure that the 'mongod' server, into which you must have imported the 'my_db_xxx.xxxx' file, is running. The MongoDb connection is on the default port - 27017. If you are unable to run the server, delete the mongod.lock in your 'data/db' location or stop the MongoDb service if it is running from 'services.msc' and try deleting the lock file. Please refer to the 'mongo_mock.png' file for referential help.

The example simply creates a mock schema of the mongodb document type. To enable better understanding, the test, after creating the mock schema and testing non-fatal expectations against it, will also run a test against the actual database. If the testsreturns timeout, check if the MongoDb server is up and running.

Follow my GitHub for more Agile testing techniques, frameworks and test automation.
