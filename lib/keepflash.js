'use strict';

const DEFAULT_BASE_PATH = 'https://web.keepflash.com/api/v1/';
const DEFAULT_API_VERSION = '0.0.2';


function Keepflash(key) {
  if (!key) {
    throw new Error('api_key is required to initialize keepflash');
  }
  if (!(this instanceof Keepflash)) {
    return new Keepflash(key);
  }

  /**
   * @why => all requests will be formatted as `this.base_path + 'the_endpoint_name'`
   */

  this.base_path = DEFAULT_BASE_PATH;

   /**
     * @why define all the api endpoints and set whiches types of requests are authorized (per routes) @get || @post || @patch || @delete
     * @param enabled => if this endpoint is currently available for usage
     */

  this.api_endpoints = {
    Contacts: {
      GET: true,
      POST: true,
      DELETE: true,
      PATCH: false,
      enabled: true
    },
    Cashbacks: {
      GET: true,
      POST: true,
      DELETE: false,
      PATCH: false,
      enabled: true
    },
    Companies: {
      GET: true,
      POST: true,
      DELETE: false,
      PATCH: true,
      enabled: true
    },
    Customers: {
      GET: true,
      POST: true,
      DELETE: true,
      PATCH: true,
      enabled: true
    },
    Usage: {
      GET: true,
      POST: false,
      DELETE: false,
      PATCH: false,
      enabled: false
    },
    Users: {
      GET: true,
      POST: false,
      DELETE: false,
      PATCH: true,
      enabled: true
    }
  };

 /**
  * @why return the api current version
  */

  this.api_version = require('../package.json').version;
}

module.exports = Keepflash;

module.exports.default = Keepflash;
