const data = require('./data');

const resolvers = {
  Query: {
    appetizers: () => data.appetizers,
    entrees: () => data.entrees,
    sandwiches: () => data.sandwiches,
    soupsAndSalads: () => data.soupsAndSalads,
    fajitas: () => data.fajitas,
    tacos: () => data.tacos,
    enchiladas: () => data.enchiladas,
    quiche: () => data.quiche,
    greenSalads: () => data.greenSalads,
  },
};

module.exports = resolvers;
