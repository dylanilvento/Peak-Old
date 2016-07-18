#pragma strict

var upCount: int = 0;
var downCount: int = 0;

function Start () {

}

function Update () {

	Bounce();
}

function Bounce () {
	if (upCount < 10 && downCount == 0) {
		transform.position.y += 0.01;
		upCount++;
	}
	
	else if (downCount < 10) {
		transform.position.y -= 0.01;
		downCount++;
	}
	
	else if (upCount != 0 && downCount != 0) {
		upCount = 0;
		downCount = 0;
	}
	yield WaitForSeconds(0.1);
}