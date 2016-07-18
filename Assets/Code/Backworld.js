#pragma strict
var collidedWith: GameObject;

function Start () {
	gameObject.renderer.material.color.a = 0.0;

}

function Update () {
	
}

function OnTriggerEnter (other : Collider) {
	collidedWith = other.gameObject;
	
	if (collidedWith.name == "CurtainCollider") {
	
		gameObject.renderer.material.color.a = 1.0;

		
	}
}

function OnTriggerExit (other : Collider) {
	
	if (collidedWith.name == "CurtainCollider") {
		
		gameObject.renderer.material.color.a = 0.0;
		
	}
	
	collidedWith = null;
}