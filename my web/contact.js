var bars = document.getElementById('bars');
var mobileMenu = document.getElementById('mobileMenu');

bars.addEventListener('click', function() {
  mobileMenu.classList.toggle('active')
});




var submitform = document.getElementById('submitform')

submitform.addEventListener('submit',function(e){
  e.preventDefault()

  var error = document.getElementById('error');
  var name = document.getElementById('name').Value;
  var email = document.getElementById('email').Value;
  var message = document.getElementById('message').Value;

  if(!name && !email){
    error.innerHTML="All fields required"
    error.style.color= "red"
  }
  else if(message =""){
    error.innerHTML="write a message"
    error.style.color = "red"
  }
  else{
    error.innerHTML = "you're all done,click submit"
    error.style.color="green"
    alert("you're done")
  }
})