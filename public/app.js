var myGrid  = document.getElementById('myGrid');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;
var one = document.getElementById('one');

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || window.scrollTo;
    var scrollPercent = scrollTop/scrollArea || 0;
    myGrid.style.left = scrollPercent*window.innerWidth + 'px';
});