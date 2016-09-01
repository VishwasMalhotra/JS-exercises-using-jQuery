$(document).ready(function() {
    $("#check").bind("click", checkInp)

    function checkInp(event) {
        var numberInput = $("#number").val();
		var displayResult = $('#result');
        displayResult.val($.isNumeric(numberInput))
        event.preventDefault();
	}
	
});

