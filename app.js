




$(".down-btn").click(function() {
  var containers = [
      'cover',
      'container-six',
      'container-seven',
      'container-eight',
      'container',
      'container-two',
      'container-three',
      'container-four',
      'cover'
  ];

  var parentId = $(this).parent().attr('id');
  var arrayPosition = containers.indexOf(parentId);
  var checkArrayPosition = function() {
   containers.indexOf(parentId);
  };
  var newArrayPosition = arrayPosition +1;
  var newParentId = containers[newArrayPosition];
  if (arrayPosition != -1) {
    console.log(arrayPosition);
    console.log(parentId);
    console.log(newParentId);
  }




    $('html, body').animate({
        scrollTop: $( "#" + newParentId ).offset().top
    }, 2000);

});
