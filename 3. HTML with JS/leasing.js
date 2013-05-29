function calculateText(){
	var price = parseFloat(document.getElementById('price').value);	
	var duration = parseFloat(document.getElementById('duration').value);
	var valueEnd = parseFloat(document.getElementById('valueEnd').value);
	var interest = parseFloat(document.getElementById('interest').value);
	
	var result=document.getElementById('result');
		
	var volume = price - valueEnd;
	var monthly = (volume/duration)+((volume/2+valueEnd)/100*interest/12);
	result.innerHTML = monthly;
}
