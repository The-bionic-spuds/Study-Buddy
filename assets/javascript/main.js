// Code to send generated groups to the index page.
// Loops through the groups array and generates a new div.

var studyGroupsArray = ["Test1"];

// Variable to hold group descriptions.
// var groupText = placeholder


$("#Test").on("click", function () {

    for (var i = 0; i < studyGroupsArray.length; i++) {
        var newCardDiv = $(

            "<div class='col-md'>" +
            "<div class='card' style='margin-top: 20px;'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" +
            "Group Number" +
            "</h5>" +
            "<p class='card-text' id='groupText'>" +
            "Sample group descriptor text." +
            "</p>" + "<a class='card-link'>" +
            "Card link" +
            "</a>" +
            "<a class='card-link'>" +
            "Another link" +
            "</a>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>"

        );

        $("#studyGroups").append(newCardDiv);
    }

})