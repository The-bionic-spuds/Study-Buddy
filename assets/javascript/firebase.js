function firebase(){
  // Initialize Firebase
  var t = this;
    t.config = {
    apiKey: "AIzaSyDjQSqz81W0aNSoe-zJvckQAU29LmLHvMI",
    authDomain: "study-buddy-83ab4.firebaseapp.com",
    databaseURL: "https://study-buddy-83ab4.firebaseio.com",
    projectId: "study-buddy-83ab4",
    storageBucket: "study-buddy-83ab4.appspot.com",
    messagingSenderId: "475410337975"
  };
  firebase.initializeApp(t.config);

    t.database = firebase.database();
    t.users = database.ref("/users/");
    t.groups = database.ref("/groups/");
    t.storage = firebase.storeage();
    t.userImgs = storage.ref("/users/");
    t.groupImgs = storage.ref("/groups/");
    t.auth = firebase.auth();
  return t;
}

function authenticate(){
    var f = firebase();
    function submitCreateAccount (){
        let displayName = $("#display").val();
        let email = $("#email").val();
        let password = $("#password").val();

        f.auth.createUserWithEmailAndPassword(email, password).then(function (user){
            user.updateProfile({ displayName: displayName })
        });
    };

    function signInUserEmail() {
        let email = $("#email").val();
        let password = $("#password").val();

        f.auth.signInWithEmailAndPassword(email, password)
    };

    function signOutUser() {
        f.auth.signOut().then(function() {
            console.log("Signout successful!")
        }, function(error){
            console.log(error);
        });
    };
}