var s;
if ( $('#navigation') ) {
  var k  = $('#navigation').offset().top;
  $(window).scroll(function() {
    s = $(document).scrollTop(); 
    if(s > k){
      $('#navigation').css({
        "position": "sticky",
        "top": 0
      });
    } else {
      $('#navigation').css({
        "position": "static"
      });
    }
  });
}
if ( document.getElementById('sibar') ) {
  var sibar  = $('#sibar').offset().top;
  $(window).scroll(function() {
    s = $(document).scrollTop(); 
    if(s > sibar){
      $('#sibar__blcok').css({
        "position": "fixed",
        "top": "100px"
      });
    } else {
      $('#sibar__blcok').css({
        "position": "static"
      });
    }
  });
}

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

if ( document.getElementById('level1') ) {
  var level1 = document.getElementById('level1');
  var animate = function(){
      var level11 = document.getElementById('level11');
      var plus = document.getElementById('plus');
      level11.className = "sibar__blcok--inner-menu active"; 
      plus.className = "plus active"; 
  }
  level1.onmouseover = animate;
}