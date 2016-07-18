#pragma strict
var relativePosition: Vector3;
var target: Transform;
var mainCamera: Camera;
var collidedWith: GameObject;
var goScreenOn: boolean = false;
var goTexture: Texture;

function Start() {

    relativePosition = target.transform.position - transform.position;

}

function Update () {
    	transform.position.x = target.transform.position.x - relativePosition.x;
    	transform.position.z = target.transform.position.z - relativePosition.z;
    	
    	//MoveUp();
    	
    	if (Input.GetKeyDown("space") && goScreenOn) {
    		Application.LoadLevel(Application.loadedLevel);
    	}

}

function OnDrawGizmos () {
	//For Testing
	Gizmos.color = Color (100,100,0,.25);
	Gizmos.DrawCube (transform.position, Vector3(3, 1, 1));
}

function MoveUp () {
	while (mainCamera.WorldToScreenPoint(transform.position).y < Screen.height / 12.0) {
    		//for (var i = 0; i < 100; i++) {
    			transform.position.y += 0.01;
    			yield WaitForSeconds(0.1);
    		//}
    	
    	}

}

function OnTriggerEnter (other : Collider) {
	collidedWith = other.gameObject;
	var charMoveScript = collidedWith.GetComponent(CharacterMovement);
	
	if (collidedWith.name == "Character") {
		other.attachedRigidbody.useGravity = false;
		collidedWith.rigidbody.constraints = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY;
		charMoveScript.stopMovement = true;
		goScreenOn = true;
		
	}

}

function OnGUI () {
	if (goScreenOn) {
		//print("test");
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), goTexture, ScaleMode.StretchToFill, true, 0);
	}

}