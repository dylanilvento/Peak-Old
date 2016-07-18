#pragma strict
var posChange: float = 0.0;
var posDiff: float = 0.0;
var smallestDist: float = 0.0;

var rightCurtain: GameObject;

var letterA: Texture;
var letterS: Texture;

var mainCamera: Camera;

var gameOn: boolean = false;

function Start () {
	rightCurtain = GameObject.Find("Right Curtain");
	smallestDist = Mathf.Abs(rightCurtain.transform.localPosition.x) - Mathf.Abs(transform.localPosition.x);

}

function Update () {
	posDiff = Mathf.Abs(rightCurtain.transform.localPosition.x - transform.localPosition.x);
	
	if(Input.GetKey("a")) {
		posChange += 0.1;
		transform.localPosition.x -= 0.1;
	}
	
	if(Input.GetKey("s")) {
		if (posDiff > smallestDist) {
			posChange -= 0.1;
			transform.localPosition.x += 0.1;
		}
	}
	
	if (Input.GetKeyDown("space") && gameOn == false) {
		gameOn = true;
	}

}

function OnGUI () {
	if (gameOn) {
		GUI.DrawTexture(Rect(mainCamera.WorldToScreenPoint(transform.position).x - Screen.width / 27.0, Screen.height / 2, Screen.width / 45.0, Screen.height / 35.0), letterA, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect(mainCamera.WorldToScreenPoint(transform.position).x + Screen.width / 45.0, Screen.height / 2, Screen.width / 45.0, Screen.height / 35.0), letterS, ScaleMode.StretchToFill, true, 0);
	}
}