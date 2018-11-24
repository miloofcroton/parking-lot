import uuid from 'uuid/v4';
const chance = require('chance').Chance();

chance.mixin({
  car: () => ({
    plate: chance.string({ length: 6, pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' }),
    make: chance.pickone(['Toyota', 'Ford', 'Chevrolet', 'Subaru', 'Tesla']),
    model: chance.animal(),
    inLot: chance.bool({ likelihood: 30 }),
    lotUses: chance.natural({ min: 0, max: 20 })
  })
});

export const cars = Array.apply(null, { length: 100 })
  .reduce(acc => {
    acc[uuid()] = chance.car();
    return acc;
  }, {});
