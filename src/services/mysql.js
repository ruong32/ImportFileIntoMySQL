const config = require('./../config/configMySQL');

const MySQL = config();

const insert = async item => {
  await MySQL.Customer.create(item);
};

const find = async id => {
  if (isNaN(id)) {
    const result = await MySQL.Customer.findAll();
    return result;
  }
  const result = await MySQL.Customer.findAll({
    where: { id: id }
  });
  return result;
};

const update = async (id, newName) => {
  await MySQL.Customer.update({ name: newName }, { where: { id: id } });
  const result = await MySQL.Customer.findAll({
    where: { id: id }
  });
  return result;
};

const del = async id => {
  if (isNaN(id)) {
    await MySQL.Customer.destroy({ where: {} });
    return `Deleted all!`;
  }
  await MySQL.Customer.destroy({
    where: { id: id }
  });
  const result = await MySQL.Customer.findAll();
  return result;
};

module.exports = {
  insert: insert,
  find: find,
  update: update,
  del: del
};
