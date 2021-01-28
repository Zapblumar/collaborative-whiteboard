const User = require('./User');
const Board = require('./Board');

// associations
User.hasMany(Board, {
  foreignKey: 'user_id'
});

Board.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Board };
