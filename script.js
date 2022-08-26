document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, options);
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

// Or with jQuery

$(document).ready(function () {
  $(".sidenav").sidenav();
});
$(".sidenav a").on("click", function (e) {
  // prevent default anchor click behavior
  e.preventDefault();

  // store hash
  var hash = this.hash;

  if ($(hash).length) {
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1500,
      function () {
        // Do something fun if you want!
      }
    );
  }
});

$("#enable-cards").on("click", function () {
  $(this).hide(1000);
  $(".card-section").show(1500);
  $("html, body").animate(
    {
      scrollTop: $(".card-section").offset().top - 100,
    },
    2000
  );
});

// address copt
$('input').focus(function(){
    $(this).select();
    document.execCommand('copy');
    M.toast({html: 'Copied'})
})