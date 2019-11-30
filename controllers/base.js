class BaseController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  static asHandler(methodName) {
    return async (req, res, next) => {
      const classInstance = new this(req, res, next);

      try {
        await classInstance[methodName]();
      } catch (err) {
        next(err);
      }
    };
  }

  sendJson(data, status = 200) {
    return this.res.status(status).json(data);
  }

  send500Error() {
    return this.res.status(500).json({ message: 'Внутренняя ошибка' });
  }
}

module.exports = BaseController;
