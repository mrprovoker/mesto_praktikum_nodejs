const fs = require('fs');

const BaseController = require('./base');

function readUsersFile() {
  return fs.promises.readFile('data/users.json', 'utf8');
}

class UsersController extends BaseController {
  async getUsers() {
    try {
      const fileData = await readUsersFile();

      this.sendJson(JSON.parse(fileData));
    } catch (err) {
      console.error(err);

      this.sendJson('Internal Error', 500);
    }
  }

  async getUser() {
    try {
      const fileData = await readUsersFile();
      const allUsers = JSON.parse(fileData);
      const { id } = this.req.params;
      const user = allUsers.find((item) => item._id === id);

      if (!user) {
        return this.sendJson({ message: 'Нет пользователя с таким id' }, 404);
      }

      this.sendJson(user);
    } catch (err) {
      console.error(err);

      this.sendJson('Internal Error', 500);
    }
  }
}

module.exports = UsersController;
