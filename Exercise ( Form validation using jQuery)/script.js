$(document).ready(function() {
    var inputElement = $("#myForm input[type=text]");
    var checkBox = $('#service');
    var textArea = $(".intxt")
    $('#go').on("click", validateForm);

    function validateForm(event) {

        inputElement.each(function(index) {
            var inputValue = $.trim(inputElement.eq(index).val());
            if (inputValue.length < 1) {
                event.preventDefault();
                alert(inputElement.eq(index).attr('id') + " can't be empty.");

            }
        });
        var textValue = $.trim(textArea.val());
        if (textValue.length < 50) {
            event.preventDefault();

            alert(textArea.attr('id') + " should be more than 50 letters.");

        }
        if (checkBox.prop("checked") == true) {
            confirm("This is a confirmation that you opted for getting e-mails.");

        } else {
            return true;
        }
    }
});