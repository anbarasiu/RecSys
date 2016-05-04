class Unit {
  constructor(entity, properties){
    this.entity = entity;
    this.properties = properties || {};
  }

  set(property, value){
    return this.properties[property] = value;
  }

  unset(property){
    return delete this.properties[property];
  }

  has(property){
    return Object.prototype.hasOwnProperty.call(this.properties, property); // Why won't a direct hasOwnProperty check work??
  }

  get(property){
    return this.properties[property];
  }

  toString(){
    return [this.constructor.name, '(', this.entity, ' ', JSON.stringify(this.properties), ')x'].join('');
  }
}
