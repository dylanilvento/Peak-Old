#pragma strict

var target: Transform; 

var relativePosition: Vector3;

function Start () {

}

function Update () {

	if (transform.position.y < target.transform.position.y + 10.0) {
		transform.position.y += 0.1;
	
	}

}