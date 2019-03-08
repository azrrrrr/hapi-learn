'use strict';

const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'shops',
    [
      { id: 1, name: '店铺1', thumb_url: '1.png', ...timestamps },
      { id: 2, name: '店铺2', thumb_url: '2.png', ...timestamps },
      { id: 3, name: '店铺3', thumb_url: '3.png', ...timestamps },
      { id: 4, name: '店铺4', thumb_url: '4.png', ...timestamps },
      { id: 5, name: '店铺1', thumb_url: '1.png', ...timestamps },
      { id: 6, name: '店铺2', thumb_url: '2.png', ...timestamps },
      { id: 7, name: '店铺3', thumb_url: '3.png', ...timestamps },
      { id: 8, name: '店铺4', thumb_url: '4.png', ...timestamps },
      { id: 9, name: '店铺1', thumb_url: '1.png', ...timestamps },
      { id: 10, name: '店铺2', thumb_url: '2.png', ...timestamps },
      { id: 11, name: '店铺3', thumb_url: '3.png', ...timestamps },
      { id: 12, name: '店铺4', thumb_url: '4.png', ...timestamps },
      { id: 13, name: '店铺1', thumb_url: '1.png', ...timestamps },
      { id: 14, name: '店铺2', thumb_url: '2.png', ...timestamps },
      { id: 15, name: '店铺3', thumb_url: '3.png', ...timestamps },
      { id: 16, name: '店铺4', thumb_url: '4.png', ...timestamps },
      { id: 17, name: '店铺1', thumb_url: '1.png', ...timestamps },
      { id: 18, name: '店铺2', thumb_url: '2.png', ...timestamps },
      { id: 19, name: '店铺3', thumb_url: '3.png', ...timestamps },
      { id: 20, name: '店铺4', thumb_url: '4.png', ...timestamps },
      { id: 21, name: '店铺1', thumb_url: '1.png', ...timestamps },
      { id: 22, name: '店铺2', thumb_url: '2.png', ...timestamps },
      { id: 23, name: '店铺3', thumb_url: '3.png', ...timestamps },
      { id: 24, name: '店铺4', thumb_url: '4.png', ...timestamps },
      { id: 25, name: '店铺1', thumb_url: '1.png', ...timestamps },
      { id: 26, name: '店铺2', thumb_url: '2.png', ...timestamps },
      { id: 27, name: '店铺3', thumb_url: '3.png', ...timestamps },
      { id: 28, name: '店铺4', thumb_url: '4.png', ...timestamps },
    ],
    {},
  ),
  
  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    return queryInterface.bulkDelete('shops', { id: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28] } }, {});
  },
};
