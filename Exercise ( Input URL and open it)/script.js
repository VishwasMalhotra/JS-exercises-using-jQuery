$(document).ready(function() {
    windowLoad();

    function windowLoad() {

        var newWindow = prompt("Please enter the URL", "https://");

        if (newWindow == null || newWindow == "") {

            alert("Please Enter an URL.");

        } else {
            window.open(newWindow, '_blank', 'width=400 , height=450 , scrollbars=no, status=no');

        }
    }
});