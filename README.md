# TestOTP---a-leaner-version
A leaner version of the repo - https://github.com/ravichandranjv/TestOTPSent

The example in the TestOTPSent paved way to two usabiity scenarios - one, what if the user does not want to use a MongoDB instance or simply does not have one and just wants to see if the tests pass?; two, that the timestamp of the OTP sent must satisfy the acceptance criteria ie., the grace time of the OTP should be valid. 

This repository provides the means to extract the timestamp without modifying the schema plus to be able to run the tests successfully without the need of a physical database.

Pre-requisites - Mocha, Node.js, express, supertest, sinonjs
