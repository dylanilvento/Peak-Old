#pragma strict

var target: Transform; 

var relativePosition: Vector3;


function Start() {

    relativePosition = target.transform.position - transform.position;

}

function Update () {
    	transform.position.x = target.transform.position.x - relativePosition.x;
    	
    	MoveUp();

}

function MoveUp () {
	while (camera.WorldToScreenPoint(target.transform.position).y > Screen.height / 2.0) {
    		//for (var i = 0; i < 100; i++) {
    			transform.position.y += 0.01;
    			yield WaitForSeconds(0.1);
    		//}
    	
    	}

}