const BaseController = require('./base');

class CardsController extends BaseController {
  getCards() {
    this.sendJson({});
  }
}

module.exports = CardsController;
