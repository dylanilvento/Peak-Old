#pragma strict

var collidedWith: GameObject;
var winScreenOn: boolean = false;
var winTexture: Texture;

function Start () {

}

function Update () {

	if (Input.GetKeyDown("space") && winScreenOn) {
		Application.LoadLevel(Application.loadedLevel);
	
	}

}

function OnTriggerEnter (other : Collider) {
	collidedWith = other.gameObject;
	var charMoveScript = collidedWith.GetComponent(CharacterMovement);
	
	if (collidedWith.name == "Character") {
		other.attachedRigidbody.useGravity = false;
		collidedWith.rigidbody.constraints = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY;
		charMoveScript.stopMovement = true;
		winScreenOn = true;
		
	}

}

function OnGUI () {
	if (winScreenOn) {
		//print("test");
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), winTexture, ScaleMode.StretchToFill, true, 0);
	}

}