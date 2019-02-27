let Utils = {
  succsessMsg: function({ message = "", code = 200, data = {} }) {
    let errObj = {
      code: code,
      message: message,
      data: data
    };
    return errObj;
  }
};
module.exports = Utils;
