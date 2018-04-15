// alert("111");


var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture', false);


// var text;
// var users = 0;
xhr.onreadystatechange = function() {
  if (this.readyState != 4) return;

  // по окончании запроса доступны:
  // status, statusText
  // responseText, responseXML (при content-type: text/xml)

  if (this.status != 200) {
    // обработать ошибку
    alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
    return;
  }

  // получить результат из this.responseText или this.responseXML

  
  var text = this.responseText;
  var users = JSON.parse(text);
  console.log(users);
}
xhr.send();

function func() {
  var users = JSON.parse(xhr.responseText);
  console.log(users);
var reply_click = function()
{
    // alert("Button clicked, id "+this.id+", text"+this.innerHTML);
    ID=this.id;
    console.log(ID);
    console.log(users.results[ID].picture.large+'');
    console.log(users.results[ID].location.street+'');
    console.log(users.results[ID].location.city+'');
    console.log(users.results[ID].location.state+'');
    console.log(users.results[ID].email+'');
    console.log(users.results[ID].phone+'');
    var modal = document.getElementById('modal');


	var span = document.getElementsByClassName("close")[0];

 
  	var imageL = document.createElement("img");               
	imageL.src = users.results[ID].picture.large+'';  
	var X = document.getElementById('X');  
	document.getElementById("X").appendChild(imageL);


	var name = document.createElement("P");
	var nameText = document.createTextNode('Name: ' + users.results[ID].name.title+' '+users.results[ID].name.first+' '+users.results[ID].name.last);
	name.appendChild(nameText);
	document.getElementById("X").appendChild(name); 


	var street = document.createElement("P");
	var streetText = document.createTextNode("Street: " + users.results[ID].location.street + '');
	street.appendChild(streetText);
	document.getElementById("X").appendChild(street); 

	var city = document.createElement("P");
	var cityText = document.createTextNode("City: " + users.results[ID].location.city + '');
	city.appendChild(cityText);
	document.getElementById("X").appendChild(city); 


	var state = document.createElement("P");
	var stateText = document.createTextNode("State: " + users.results[ID].location.state + '');
	state.appendChild(stateText);
	document.getElementById("X").appendChild(state); 


	var email = document.createElement("P");
	var emailText = document.createTextNode("email: " + users.results[ID].email + '');
	email.appendChild(emailText);
	document.getElementById("X").appendChild(email); 


	var phone = document.createElement("P");
	var phoneText = document.createTextNode("phone: " + users.results[ID].phone + '');
	phone.appendChild(phoneText);
	document.getElementById("X").appendChild(phone);



modal.style.display = "block";
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    X.innerHTML = '';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        X.innerHTML = '';
    }
}
}
  for (var i = 0; i < 49; i++) {
  	var image = document.createElement("img");                       
	image.id = i+'';
	var t = document.createTextNode(i+'');     
	image.src = users.results[i].picture.medium+'';
	image.appendChild(t);      
	document.getElementById("list").appendChild(image);


	var name = document.createElement("P");
	var nameText = document.createTextNode(users.results[i].name.title+' '+users.results[i].name.first+' '+users.results[i].name.last);
	name.appendChild(nameText);
	document.getElementById("list").appendChild(name);    

	var tagSelect = document.createElement("select"); 
	tagSelect.id = 'select' + i;  
	document.getElementById("list").appendChild(tagSelect); 
	var tagOption1 = document.createElement("option");     
	var tagOption2 = document.createElement("option");                        
	var textOption1 = document.createTextNode('алфавитный порядок по первой букве');
	var textOption2 = document.createTextNode('обратная сортировка');
	tagOption1.appendChild(textOption1);
	tagOption2.appendChild(textOption2);

	document.getElementById('select' + i).appendChild(tagOption1);
	document.getElementById('select' + i).appendChild(tagOption2);

	var tagBr1 = document.createElement("br");
	var tagBr2 = document.createElement("hr");
	document.getElementById("list").appendChild(tagBr1); 
	document.getElementById("list").appendChild(tagBr2); 
	document.getElementById(i+'').onclick = reply_click;



}
}

setTimeout(func, 1000);



