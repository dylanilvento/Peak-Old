#pragma strict
var collidedWith: GameObject;
var sizeChange: float = 0;
var box: BoxCollider;

function Start () {
	box = GetComponent(BoxCollider);
}

function Update () {

	if(Input.GetKey("a")) {
		sizeChange += .1;
		box.size.x = 1 + sizeChange;
		transform.localPosition.x -= 0.05;
	}
	
	if(Input.GetKey("s")) {
		if (sizeChange > 0) {
			sizeChange -= .1;
			box.size.x = 1 + sizeChange;
			transform.localPosition.x += 0.05;
		}
	}
	
	if(Input.GetKey("k")) {
		if (sizeChange > 0) {
			sizeChange -= .1;
			box.size.x = 1 + sizeChange;
			transform.localPosition.x -= 0.05;
		}
		
	}
	
	if(Input.GetKey("l")) {
		sizeChange += .1;
		box.size.x = 1 + sizeChange;
		transform.localPosition.x += 0.05;
	}
	

}

/*function OnTriggerEnter (other : Collider) {
	collidedWith = other.gameObject;
	
}*/

function OnDrawGizmos () {
	//For Testing
	Gizmos.color = Color (100,0,0,.25);
	Gizmos.DrawCube (transform.position, Vector3(1 + sizeChange, 30, 5));
}