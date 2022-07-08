document.getElementById("name").innerHTML="un";
document.getElementById("tr").innerHTML="rn"
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCl493gxz0tqeeMt6ka4a_fzzeOXBNZy6s",
      authDomain: "kwitter-53cc2.firebaseapp.com",
      databaseURL:"https://kwitter-53cc2-default-rtdb.firebaseio.com/",
      projectId: "kwitter-53cc2",
      storageBucket: "kwitter-53cc2.appspot.com",
      messagingSenderId: "390240001034",
      appId: "1:390240001034:web:194225e1d9e9e0bbec13f3",
      measurementId: "G-C113EVW11P"
    };
    
    firebase.initializeApp(firebaseConfig);
 user=  localStorage.getItem("user");
    document.getElementById("name").innerHTML="Welcome "+user+"!";
    function ar(){
      rn=document.getElementById("rn").value;
      localStorage.setItem("room",rn);
      firebase.database().ref("/").child(rn).update({purpse:"add room"});
      window.location="kwitter_room.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("tr").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row= "<div id="+Room_names+" onclick='rdr(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("tr").innerHTML+=row;
      //End code
      });});}
getData();

function rdr(name){
console.log(name);
localStorage.setItem("name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("un");
      localStorage.removeItem("rn");
      window.location="index.html";
}