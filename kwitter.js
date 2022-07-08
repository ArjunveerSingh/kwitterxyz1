function login(){
 user=document.getElementById("un").value;
  localStorage.setItem("user",user);
  window.location="kwitter_room.html";
}