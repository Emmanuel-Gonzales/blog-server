'use strict';

class Collection {

  constructor(model){
    this.model = model;
  }

  get(id){
    if(id){
      return this.model.findOne({ where: { id } });
    } else{
      return this.model.findAll({});
    }
  }

  create(record){
    return this.model.create(record);
  }

  update(id, data){
    return this.model.findOne({ where: { id } }).then(record => record.update(data));
  }

  delete(id){
    return this.model.destroy({  where: {id} });
  }
  
  async readAllWith(model) {
    try {
      let record = await this.model.findAll({include: {
        model: model,
      }});
      return record;

    } catch (error) {
      console.error(error);
      return error;

    }
  }
}



module.exports = Collection;