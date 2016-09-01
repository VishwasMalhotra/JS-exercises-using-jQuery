$(document).ready(function() {
    nameInput();

    function nameInput() {

        var firstName = prompt("Please enter your first name", "");
        var lastName = prompt("Please enter your last name", "");
        if (firstName && lastName != null) {
            $("#name").append("Hello " + firstName + " " + lastName + "!");

        } else {
            return nameInput();
        }
    }
});