//YOUR FIREBASE LINKS
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
    un=localStorage.getItem("un");
    rn=localStorage.getItem("rn");
    
function getData() { firebase.database().ref("/"+rn).on('value', function(snapshot) { document.getElementById("msg").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
un=localStorage.getItem("un");
rn=localStorage.getItem("rn");

function send(){
     msg=document.getElementById("smsg").value;
firebase.database().ref(rn).push({
      name:un,
      message:msg,
      like:0
});
document.getElementById("smsg").innerHTML="";
}

function logout(){
      localStorage.removeItem("un");
      localStorage.removeItem("rn");
      window.location="index.html";
}