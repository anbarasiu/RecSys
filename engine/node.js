class Node extends Unit{
  constructor(entity, properties){
    super(entity, properties);

    this.edges = [];
    this.inputEdges = [];
    this.outputEdges = [];
  }

  unlink(){
    let edges = this.edges;

    for(let i=0, len=edges.length; i<len; i++){
      edges[i].unlink();
    }

    return true;
  }
}
