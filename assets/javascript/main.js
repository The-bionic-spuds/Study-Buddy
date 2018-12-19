$(document).ready(function(){
    let signUpS = $("#signUpSelect");
    let signInS = $("#signInSelect");
    let dnameC = $("#dname-control");
    let signIn = $("#signIn");
    let signUp = $("#signUp");
    
    $("body").on("click", "#signUpSelect", function (e) {
        e.preventDefault();
        signInS.removeClass("disabled");
        signUpS.addClass("disabled");
        dnameC.removeClass("d-none");
    })
    
    $("body").on("click", "#signInSelect", function (e) {
        e.preventDefault();
        signInS.addClass("disabled");
        signUpS.removeClass("disabled");
        dnameC.addClass("d-none");
    })
})