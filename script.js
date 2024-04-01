function insert_Row() {
    //Write your code here
	let tableElement = document.getElementById("sampleTable");
	let column1 = document.createElement("td");
	column1.textContent = "New Cell1";
	let column2 = document.createElement("td");
	column2.textContent = "New Cell2";
	
	let row = tableElement.insertRow(0)

	row.appendChild(column1);
	row.appendChild(column2);  
  
}
