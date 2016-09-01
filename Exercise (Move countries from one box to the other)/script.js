  $(document).ready(function() {
      $('#add').click(function() {
          $('#selectListOne option:selected').remove().appendTo('#selectListTwo');
      });
      $('#remove').click(function() {
          $('#selectListTwo option:selected').remove().appendTo('#selectListOne');
      });
  });