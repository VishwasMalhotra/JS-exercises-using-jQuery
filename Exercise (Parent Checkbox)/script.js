$(document).ready(function() {

    $('.childDiv').hide();

    $('input.parentCheckBox').each(function(index) {
        $(this).bind("change", function() {
            $('.childDiv').eq(index).toggle();
			
        });
    });
	$('input.parentCheckBox').click(function(){
		if (this.checked== false){
			$("input:checkbox[value='"+  $(this).val() + "']").not('input.parentCheckBox').prop('checked', false);
		}
	});
});