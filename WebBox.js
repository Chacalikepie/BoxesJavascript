// This is the JS file for the WebBox project.
var boxes = 1;


function addBox() = {
	boxes = boxes + 1;
			
	//Create new box element
	var newBox = document.createElement('div');
	newBox.className = 'box';
	newBox.idName = 'box'+boxes;
	//Create text element and add text node
	var newText = document.createElement('p');
	const textNode = document.createTextNode("box" + boxes)
	newText.appendChild(textNode);

	//Append text to box
	nexBox.appendChild(newText);

	//Appened box to html body
	document.body.appendChild(newBox);

}
	
