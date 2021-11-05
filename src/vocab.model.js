module.exports = (sequelize, Sequelize) => {
  const Vocab = sequelize.define(
    "Vocabulary",
    {
      genre: {
        type: Sequelize.STRING,
      },
      term: {
        type: Sequelize.STRING,
      },
      definition: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: "Vocabulary",
      timestamps: false,
    }
  );

  return Vocab;
};
