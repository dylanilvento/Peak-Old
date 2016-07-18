#pragma strict
var moveSpeed: int = 2;
var collidedWith: GameObject;
var stopMovement: boolean = false;
var jumped: boolean = true;

var uvAnimationTileX = 3; //Here you can place the number of columns of your sheet. 
                          
 
var uvAnimationTileY = 2; //Here you can place the number of rows of your sheet. 
                          
var framesPerSecond = 5.0;

var startScreenTexture: Texture;
var startScreenOn: boolean = true;

var charCollider: Collider;

function Start () {

	
	

}

function Update () {
	
	
	if(startScreenOn) {
		//moveSpeed = 0;
	}
	
	else {
		transform.localPosition.x += moveSpeed * Time.deltaTime;
		WalkAnimation();
	}
	
	if(Input.GetKeyDown("space") && startScreenOn == true) {
		startScreenOn = false;
		
	}
	
	
	else if(Input.GetKeyDown("space") && startScreenOn == false) {
		stopMovement = !stopMovement;
		if (stopMovement) {
			charCollider.attachedRigidbody.useGravity = false;
			rigidbody.constraints = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ | RigidbodyConstraints.FreezeRotation;
		}
		
		else {
			charCollider.attachedRigidbody.useGravity = true;
			rigidbody.constraints &= ~RigidbodyConstraints.FreezePositionX;
			rigidbody.constraints &= ~RigidbodyConstraints.FreezePositionY;
		}
		
	}
	
	
	if (stopMovement) {
		moveSpeed = 0;
		
	}
	else {
		moveSpeed = 3;
	}
}

function Jump () {
	//for (var i = 0; i < 10; i++) {
			//transform.localPosition.y += 5 * Time.deltaTime;
		//}
		rigidbody.velocity = Vector3(0,10,0);
		yield WaitForSeconds(0.1);
		//jumped = true;
		collidedWith = GameObject.Find("CurtainCollider");
		
		
}

function Fly () {
	rigidbody.velocity = Vector3(10, 2,0);
	yield WaitForSeconds(0.1);
	//collidedWith = GameObject.Find("CurtainCollider");
}

function OnTriggerEnter (other : Collider) {
	collidedWith = other.gameObject;
	//print("enter: " + collidedWith.name);
	
	if (collidedWith.name == "CurtainCollider") {
	
		transform.localPosition.z += 3.97;
	}
	
	if (collidedWith.name == "Jump Pad") {
		Jump();
	}
	
	if (collidedWith.name == "Fan") {
		Fly();
		
	}
}

/*function OnTriggerStay (other : Collider) {
	/*if (jumped == true) {
		collidedWith = GameObject.Find("Jump Pad");
	}
	
	print("stay:" + collidedWith.name);
	//if (	
	if (other.gameObject.name == "Fan") {
		Fly();
	}
}*/



function OnTriggerExit (other : Collider) {
	
	//print("exit: " + collidedWith.name);
	
	if (collidedWith.name == "CurtainCollider") {
	
		transform.localPosition.z -= 3.97;
	}
	
	//if (collidedWith.name == "Jump Pad") {
		//collidedWith = GameObject.Find("CurtainCollider");
	//}
	
	collidedWith = null;
}


function WalkAnimation () {
	// Calculate index
	var index : int = Time.time * framesPerSecond;
	// repeat when exhausting all frames
	index = index % (uvAnimationTileX * uvAnimationTileY);
 
	// Size of every tile
	var size = Vector2 (1.0 / uvAnimationTileX, 1.0 / uvAnimationTileY);
 
	// split into horizontal and vertical index
	var uIndex = index % uvAnimationTileX;
	var vIndex = index / uvAnimationTileX;
 
	// build offset
	// v coordinate is the bottom of the image in opengl so we need to invert.
	var offset = Vector2 (uIndex * size.x, 1.0 - size.y - vIndex * size.y);
 
	renderer.material.SetTextureOffset ("_MainTex", offset);
	renderer.material.SetTextureScale ("_MainTex", size);
}

function OnCollisionEnter (other: Collision) {
	/*if(other.gameObject.tag == "Ground" && other.gameObject.transform.rotation.z > 0) {
		print("test");
		transform.localPosition.y += 0.1;
	}*/
}

function OnGUI () {
	if (startScreenOn) {
		//print("test");
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), startScreenTexture, ScaleMode.StretchToFill, true, 0);
	}

}