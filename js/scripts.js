$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=q1]:checked").val());
    var q2 = parseInt($("input:radio[name=q2]:checked").val());
    var q3 = parseInt($("input:radio[name=q3]:checked").val());
    var q4 = parseInt($("input:radio[name=q4]:checked").val());
    var q5 = parseInt($("input:radio[name=q5]:checked").val());
    var score = q1 + q2 + q3 + q4 + q5;
    $(".javascript").hide();
    $(".python").hide();
    $(".c").hide();
    $(".Smalltalk").hide();
    if (score <=5) {
      $(".javascript").show();
    } else if (score >=6 && score <=10) {
      $(".python").show();
    } else if (score > 10 && score <=13 ) {
      $(".c").show();
    } else if (score >13 ) {
      $(".Smalltalk").show();
    };

  });
});
