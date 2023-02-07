const firebaseConfig = {
      apiKey: "AIzaSyCQp4s9Cc7BqbYp3580gDOESuWcSG25cLM",
      authDomain: "kwitter-app-57645.firebaseapp.com",
      databaseURL: "https://kwitter-app-57645-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-57645",
      storageBucket: "kwitter-app-57645.appspot.com",
      messagingSenderId: "849757540461",
      appId: "1:849757540461:web:93fdc4b834bd9570ed2f64",
      measurementId: "G-V1RX26QZ18"
    };
    firebase.initializeApp(firebaseConfig)
//ADD YOUR FIREBASE LINKS HERE
username= localStorage.getItem("username")
document.getElementById("username").innerHTML= "Welcome "+ username+ "!"
function logout(){
      localStorage.removeItem("username")
      window.location= "index.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
