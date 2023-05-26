'use strict';

module.exports = (capability) => {
  return (req, res, next) => {
    try {
      if (req.user.capabilities.includes(capability)) {
        next();
      } else {
        next('Access Was Denied');
      }
    } catch (error) {
      next('Invalid Login');
      
    }
  };
};