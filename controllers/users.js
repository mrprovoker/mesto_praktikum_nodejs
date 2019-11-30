const BaseController = require('./base');

class UsersController extends BaseController {
  getUsers() {
    this.sendJson({});
  }

  getUser() {
    this.sendJson({});
  }
}

module.exports = UsersController;
