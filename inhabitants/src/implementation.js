const inhabitants = [
  { id: 1, name: "Gabriel Buzzi" },
  { id: 2, name: "Lucas Gabriel" },
  { id: 3, name: "Vinícius Catafesta" },
  { id: 4, name: "Pedro Renan" },
];

module.exports = {
  async getInhabitantById(call, callback) {
    const { id } = call.request;

    const inhabitant = inhabitants.find(
      (inhabitant) => String(inhabitant.id) === id
    );

    if (!inhabitant) {
      return callback(null, { error: "Inhabitant not found", something: 'else' });
    }

    return callback(null, {
      inhabitant,
      error: "Sem erro",
      something: "foobar",
    });
  },
};
