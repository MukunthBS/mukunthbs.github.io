$(function () {
  $("#exp-btn").click(function () {
    if ($("#projects").is(":visible")) {
      $("#projects").slideToggle(400, "linear");
    }
    if ($("#about").is(":visible")) {
      $("#about").slideToggle(400, "linear");
    }
    if ($("#name").is(":visible")) {
      $("#name").slideToggle(400, "linear");
    }
    $("#experience").slideToggle(800, "linear");
  });
});

$(function () {
  $("#prj-btn").click(function () {
    if ($("#experience").is(":visible")) {
      $("#experience").slideToggle(400, "linear");
    }
    if ($("#about").is(":visible")) {
      $("#about").slideToggle(400, "linear");
    }
    if ($("#name").is(":visible")) {
      $("#name").slideToggle(400, "linear");
    }
    $("#projects").slideToggle(800, "linear");
  });
});

$(function () {
  $("#abt-btn").click(function () {
    if ($("#experience").is(":visible")) {
      $("#experience").slideToggle(400, "linear");
    }
    if ($("#projects").is(":visible")) {
      $("#projects").slideToggle(400, "linear");
    }
    if ($("#name").is(":hidden")) {
      $("#name").slideToggle(400, "linear");
    }
    $("#about").slideToggle(800, "linear");
  });
});
