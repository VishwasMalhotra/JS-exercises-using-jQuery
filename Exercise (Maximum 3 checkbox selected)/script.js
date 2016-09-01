$(document).ready(function() {


    var limit = 3;
    $('input.day').on('change', function(evt) {
        if ($(this).siblings(':checked').length >= limit) {
            this.checked = false;
            alert("You have already selected 3 days.");
        }
    });

    $("input.None").on('change', function() {
        $("input:checkbox").prop('checked', false);
        $(this).prop("checked", true);
    });

    $('input.day').click(function() {
        $("input.None").prop("checked", false);
    });
});