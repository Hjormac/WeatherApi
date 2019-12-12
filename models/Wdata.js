
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Wdata = new Schema({
  _id: {
    type: Number
  },
  temperature: {
    type: Number
  },
  humidity: {
    type: Number
  },
  time:{
    type: String
  },
  date:{
    type: String
  },
  },{
    collection: 'Data', versionKey :false
  }
  );

module.exports = mongoose.model('Wdata', Wdata);