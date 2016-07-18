#pragma strict
var posChange: float = 0.0;
var posDiff: float = 0.0;
var smallestDist: float = 0.0;

var leftCurtain: GameObject;

var letterK: Texture;
var letterL: Texture;

var mainCamera: Camera;

var gameOn: boolean = false;

function Start () {
	leftCurtain = GameObject.Find("Left Curtain");
	smallestDist = Mathf.Abs(transform.localPosition.x) - Mathf.Abs(leftCurtain.transform.localPosition.x);
	

}

function Update () {
	posDiff = Mathf.Abs(transform.localPosition.x - leftCurtain.transform.localPosition.x);
	
	if(Input.GetKey("k")) {
		if (posDiff > smallestDist) {
			//posChange -= 0.1;
			transform.localPosition.x -= 0.1;
		}
	}
	
	if(Input.GetKey("l")) {
			//posChange += 0.1;
			transform.localPosition.x += 0.1;
	}
	
	if (Input.GetKeyDown("space") && gameOn == false) {
		gameOn = true;
	}

}

function OnGUI () {

	if (gameOn) {
	
		GUI.DrawTexture(Rect(mainCamera.WorldToScreenPoint(transform.position).x - Screen.width / 27.0, Screen.height / 2, Screen.width / 45.0, Screen.height / 35.0), letterK, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect(mainCamera.WorldToScreenPoint(transform.position).x + Screen.width / 45.0, Screen.height / 2, Screen.width / 45.0, Screen.height / 35.0), letterL, ScaleMode.StretchToFill, true, 0);
	}
}