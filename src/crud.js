const db = require("./loaders/database.js");
const Vocab = db.vocab;

// exports.findOne = (id) => {
//   return Vocab.findByPk(id)
//     .then((data) => {
//       if (data) {
//         console.log("pass");
//       } else {
//         throw new Error(`Cannot find Vocab with id=${id}`);
//       }
//     })
//     .catch((e) => {
//       console.error("Error: ", e);
//     });
// };

// eslint-disable-next-line require-jsdoc
function find(id) {
  let r = Vocab.findByPk(id, { raw: true });
  return r;
}

module.exports = find;
