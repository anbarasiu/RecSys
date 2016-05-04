class Edge extends Unit{
  constructor(entity, properties){
    super(entity, properties);

    this.inputNode = null;
    this.outputNode = null;
    this.duplex = false;
    this.distance = 1;
  }

  _linkTo(node, direction){
    if(direction <= 0){
      node.inputEdges.push(this);
    }

    if(direction >= 0){
      node.outputEdges.push(this);
    }

    node.edges.push(this);
    return true;
  }

  link(inputNode, outputNode, duplex){
    this.unlink();

    this.inputNode = inputNode;
    this.outputNode = outputNode;
    this.duplex = duplex;

    if(duplex){
      this._linkTo(inputNode, 0);
      this._linkTo(outputNode, 0);
      return this;
    }

    this._linkTo(inputNode, 1);
    this._linkTo(outputNode, -1);
  }

  setDistance(d){
    this.distance = Math.abs(parseFloat(d) || 0);
    return this;
  }

  setWeight(w){
    this.weight = 1/Math.abs(parseFloat(w)) || 0;
    return this;
  }

  oppositeNode(node){
    if(this.inputNode === node){
      return this.outputNode;
    } else if(this.outputNode === node){
      return this.inputNode;
    }

    return;
  }

  unlink(){
      let pos;
      let inode = this.inputNode;
      let onode = this.outputNode;

      if(!(inode && onode)){
        return;
      }

      (pos = inode.edges.indexOf(this)) > -1 && inode.edges.splice(pos, 1);
      (pos = onode.edges.indexOf(this)) > -1 && onode.edges.splice(pos, 1);
      (pos = inode.outputEdges.indexOf(this)) > -1 && inode.outputEdges.splice(pos, 1);
      (pos = onode.inputEdges.indexOf(this)) > -1 && onode.inputEdges.splice(pos, 1);

      if(this.duplex){
        (pos = inode.inputEdges.indexOf(this)) > -1 && inode.inputEdges.splice(pos, 1)
        (pos = onode.outputEdges.indexOf(this)) > -1 && onode.outputEdges.splice(pos, 1);
      }

      this.inputNode = null;
      this.outputNode = null;

      this.duplex = false;

      return true;
  }
}
