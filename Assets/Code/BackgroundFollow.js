#pragma strict

var target: Transform; 

var relativePosition: Vector3;


function Start() {

    relativePosition = target.transform.position - transform.position;

}

function Update () {
	//prevPos = transform.position.y - 0.1;
	
	//if (transform.position.y
    transform.position = target.transform.position - relativePosition;
	//transform.position.x += 0.005;
	//transform.position.y += 0.005;
}