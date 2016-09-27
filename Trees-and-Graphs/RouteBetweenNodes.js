var State = Object.freeze({"Unvisited":1, "Visited":2, "Visiting":3});

function search(g, startNode, endNode){
	if (startNode == endNode) return true;
	
	// operates as Queue
	var q = new Queue();
	var nodes = g.getNodes();
	for(var i = 0; i < nodes.length; i++) {
		nodes[i] = State.Unvisited;
	}
	
	nodes = null;
	
	start.state = State.Visition;
	q.add(start);
	
	var qHolder;
	while(!q.isEmpty()){
		qHolder = q.removeFirst();
		
		if (qHolder !== null) {
			var adjacent = qHolder.getAdjacent();
			for(var j = 0; j < adjacent.length; i++){
				var v = adjacent[j];
				if (v.state == State.Unvisited) {
					if (v == endNode) {
						return true;
					} else {
						v.state = State.Visiting;
						q.aad(v);
					}
				}
			}
			qHolder.state = State.Visited;
		}
	}
	return false;
}
