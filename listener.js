// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB3WBIo18yyeZRx6PMb0aEDR4H7zfoaGcQ",
    authDomain: "blogging-46b62.firebaseapp.com",
    projectId: "blogging-46b62",
    storageBucket: "blogging-46b62.appspot.com",
    messagingSenderId: "1018595362558",
    appId: "1:1018595362558:web:0ed9bf82ff4cc2052107af",
    measurementId: "G-0WX2NK5SF1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var provider = new firebase.auth.FacebookAuthProvider();
var provider1 = new firebase.auth.GoogleAuthProvider();

function googleSignin() {

   firebase.auth()
   
   .signInWithPopup(provider1).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
       if(user){

      $.ajax({
         type: 'post',
         url: 'store_rating.php',
         data: {
            auth: "authu"
         },

         success: function() {
            console.log("userName");
            window.location.href = "index.html?user="+user.displayName;
         }
       });
        

     }else{
        document.getElementById("logout").style.display = "none";
     }
  
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
}
function facebookSignin() {
   firebase.auth().signInWithPopup(provider)
   
   .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
      if(user){
      $.ajax({
         type: 'post',
         url: 'store_rating.php',
         data: {
            auth: "authu"
         },

         success: function() {
            console.log("userName");
            window.location.href = "index.html?user="+user.displayName;
         }
       });
        
     }else{
        document.getElementById("logout").style.display = "none";
     }
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(error.message);
   });
}
 window.fbAsyncInit = function() {
      FB.init ({
         appId      : '1074782273014545',
         xfbml      : true,
         version    : 'v2.6'
      });
   };

   (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
   } (document, 'script', 'facebook-jssdk'));
   
   
function logout() {
   
    firebase.auth().signOut()
   .then(function() {
      alert('Signout Successful');
      console.log('Signout Succesfull');
      window.reload();
   }, function(error) {
      console.log('Signout Failed')  
   });
}
