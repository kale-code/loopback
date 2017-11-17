// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

exports.logAllServerErrors = function(app) {
  exports.logServerErrorsOtherThan(-1, app);
};

exports.logServerErrorsOtherThan = function(statusCode, app) {
  app.use((err, req, res, next) => {
    if ((err.statusCode || 500) !== statusCode) {
      
    }
    res.statusCode = err.statusCode || 500;
    res.json(err);
  });
};
