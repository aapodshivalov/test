var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture', false);

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}


xhr.onreadystatechange = function() {
  if (this.readyState != 4) return;

  if (this.status != 200) {
    var errText = document.getElementById('err');
	errText.innerHTML += 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался');
    return;
  }

  func();
}
xhr.send();

function func() {
  users = JSON.parse(xhr.responseText);

reply_click = function()
{
    var ID=this.id;

    modal = document.getElementById('modal');


	span = document.getElementsByClassName("close")[0];

 
  	var imageL = document.createElement("img");               
	imageL.src = users.results[ID].picture.large+'';  
	X = document.getElementById('X');  
	document.getElementById("X").appendChild(imageL);


	var name = document.createElement("P");
	var nameText = document.createTextNode('Name: ' + ucFirst(users.results[ID].name.title)+'. '+ucFirst(users.results[ID].name.first)+' '+ucFirst(users.results[ID].name.last));
	name.appendChild(nameText);
	document.getElementById("X").appendChild(name); 


	var street = document.createElement("P");
	var streetText = document.createTextNode("Street: " + ucFirst((users.results[ID].location.street).split()) + '');
	street.appendChild(streetText);
	document.getElementById("X").appendChild(street); 

	var city = document.createElement("P");
	var cityText = document.createTextNode("City: " + ucFirst(users.results[ID].location.city) + '');
	city.appendChild(cityText);
	document.getElementById("X").appendChild(city); 


	var state = document.createElement("P");
	var stateText = document.createTextNode("State: " + ucFirst(users.results[ID].location.state) + '');
	state.appendChild(stateText);
	document.getElementById("X").appendChild(state); 


	var email = document.createElement("P");
	var emailText = document.createTextNode("email: " + users.results[ID].email.toString());
	email.appendChild(emailText);
	document.getElementById("X").appendChild(email); 


	var phone = document.createElement("P");
	var phoneText = document.createTextNode("phone: " + (users.results[ID].phone).toString());
	phone.appendChild(phoneText);
	document.getElementById("X").appendChild(phone);



modal.style.display = "block";

span.onclick = function() {
    modal.style.display = "none";
    X.innerHTML = '';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        X.innerHTML = '';
    }
}
}
  for (var i = 0; i < users.results.length-1; i++) {
  	var wrapListElement = document.createElement("div");
  	var image = document.createElement("img");                       
	image.id = i+'';
	var t = document.createTextNode(i+'');     
	image.src = users.results[i].picture.medium+'';
	image.appendChild(t); 
	wrapListElement.appendChild(image);     


	var name = document.createElement("P");
	var nameText = document.createTextNode(ucFirst(users.results[i].name.title)+'. '+ucFirst(users.results[i].name.first)+' '+ucFirst(users.results[i].name.last));
	name.appendChild(nameText);
	wrapListElement.appendChild(name);   

	

	var tagBr1 = document.createElement("br");
	var tagBr2 = document.createElement("hr");
	wrapListElement.appendChild(tagBr1);
	wrapListElement.appendChild(tagBr2);

	document.getElementById("list").appendChild(wrapListElement); 
	document.getElementById(i+'').onclick = reply_click;

}
}



function sortABC() {
	var dict = [];
	var dict2 = [];
	for (var i = 0; i < users.results.length-1; i++) {

		var arr2 = users.results[i].name.last+' '+i+'';

		dict2.push(arr2);
		}

	wrapper = document.getElementById("list");
	wrapper.innerHTML = '';
	for (var i = 0; i < users.results.length-1; i++) {

		var j = (dict2).sort()[i].split(' ')[1];
		var wrapListElement = document.createElement("div");
	  	var image = document.createElement("img");                       
		image.id = j+'';
		var t = document.createTextNode(j+''); 
		    console.log(j);
		image.src = users.results[j].picture.medium+'';
		image.appendChild(t); 
		wrapListElement.appendChild(image);     


		var name = document.createElement("P");
		var nameText = document.createTextNode(ucFirst(users.results[j].name.title)+'. '+ucFirst(users.results[j].name.first)+' '+ucFirst(users.results[j].name.last));
		name.appendChild(nameText);
		wrapListElement.appendChild(name);  
		

		var tagBr1 = document.createElement("br");
		var tagBr2 = document.createElement("hr");
		wrapListElement.appendChild(tagBr1);
		wrapListElement.appendChild(tagBr2);

		document.getElementById("list").appendChild(wrapListElement); 
		document.getElementById(j+'').onclick = reply_click;
		};
	};


	function reverseABC() {
	var dict = [];
	var dict2 = [];
	for (var i = 0; i < users.results.length-1; i++) {

		var arr2 = users.results[i].name.last+' '+i+'';
		dict2.push(arr2);
		}


	wrapper = document.getElementById("list");
	wrapper.innerHTML = '';
	for (var i = 0; i < users.results.length-1; i++) {

		var j = (dict2).sort().reverse()[i].split(' ')[1];
		var wrapListElement = document.createElement("div");
	  	var image = document.createElement("img");                       
		image.id = j+'';
		var t = document.createTextNode(j+''); 
		    console.log(j);
		image.src = users.results[j].picture.medium+'';
		image.appendChild(t); 
		wrapListElement.appendChild(image);     


		var name = document.createElement("P");
		var nameText = document.createTextNode(ucFirst(users.results[j].name.title)+'. '+ucFirst(users.results[j].name.first)+' '+ucFirst(users.results[j].name.last));
		name.appendChild(nameText);
		wrapListElement.appendChild(name);      

		

		var tagBr1 = document.createElement("br");
		var tagBr2 = document.createElement("hr");
		wrapListElement.appendChild(tagBr1);
		wrapListElement.appendChild(tagBr2);
		document.getElementById("list").appendChild(wrapListElement); 
		document.getElementById(j+'').onclick = reply_click;
		};
	};
