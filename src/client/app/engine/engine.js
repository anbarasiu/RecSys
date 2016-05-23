import keywordPool from './keyword-pool.js';

class Engine{

  constructor(props){
    this.dataset = props;
    this.applyWeightage();
  }

  applyWeightage(){
    this.dataset.map((curr, index, arr) => {
      let isFound = curr.description.split(' ').some((d) => {
        return this.contains(keywordPool, d);
      });
      return isFound ? curr.weight = 1 : curr.weight = 0;
    });
  }

  printCurrent(){
    console.log(this.dataset);
  }

  contains(a, o){
    a = a.join(',');
    try{
      return a.match(new RegExp(''+o+''), 'i');
    } catch(e){
      console.warn(e);
    }

    //return a.indexOf.call(o) != -1 ? true : false;
  }
}

export default Engine;
