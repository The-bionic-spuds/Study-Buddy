
// Initialize Firebase

var config = {
    apiKey: "AIzaSyDjQSqz81W0aNSoe-zJvckQAU29LmLHvMI",
    authDomain: "study-buddy-83ab4.firebaseapp.com",
    databaseURL: "https://study-buddy-83ab4.firebaseio.com",
    projectId: "study-buddy-83ab4",
    storageBucket: "study-buddy-83ab4.appspot.com",
    messagingSenderId: "475410337975"
};

firebase.initializeApp(config);

database = firebase.database();
users = database.ref("/users/");
groups = database.ref("/groups/");
storage = firebase.storage();
userImgs = storage.ref("/users/");
groupImgs = storage.ref("/groups/");
auth = firebase.auth();

function authenticate() {
    var t = this;
    t.submitCreateAccount = function () {
        let displayName = $("#display").val();
        let email = $("#email").val();
        let password = $("#password").val();

        auth.createUserWithEmailAndPassword(email, password).then(function (user) {
            user.updateProfile({ displayName: displayName })
        });
    };

    t.signInUserEmail = function () {
        let email = $("#email").val();
        let password = $("#password").val();

        auth.signInWithEmailAndPassword(email, password)
    };

    t.signOutUser = function () {
        auth.signOut().then(function () {
            console.log("Signout successful!")
        }, function (error) {
            console.log(error);
        });
    };

    return t;
}
$(document).ready(function () {
    var a = authenticate();

    $("#signBtn").on("click", function () {
        let t = $(this);
        if (t.attr("data-login")) {
            a.signInUserEmail();
        } else {
            a.submitCreateAccount();
        }
    });
});