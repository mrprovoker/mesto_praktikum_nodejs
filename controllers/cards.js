const fs = require('fs');

const BaseController = require('./base');

class CardsController extends BaseController {
  async getCards() {
    try {
      const fileData = await fs.promises.readFile('data/cards.json', 'utf8');

      this.sendJson(JSON.parse(fileData));
    } catch (err) {
      console.error(err);

      this.send500Error();
    }
  }
}

module.exports = CardsController;
