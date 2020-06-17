'use strict';

class Model {
  constructor(schema){
    this.schema = schema;
  }

  async read(_id){
    try{
      const queryObject = _id ? {_id} : {};
      return await this.schema.find(queryObject);
    }catch(err){
      Promise.reject(err);
    }
  }

  async create(record){
    try{
      const newRecord = new this.schema(record);
      return await newRecord.save();
    }catch(err){
      Promise.reject(err);
    }
  }

  async update(_id, record){
    try{
      return await this.schema.findByIdAndUpdate(_id, record, {new: true});
    }catch(err){
      Promise.reject(err);
    }
  }

  async delete(_id){
    try{
      return await this.schema.findByIdAndDelete(_id);
    }catch(err){
      Promise.reject(err);
    }
  }
}

module.exports = Model;