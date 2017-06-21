// etch-a-sketch

var gridSize = 16;  
var mouseColor = '#D8B4F3';
var outlineColor = '#BD6BFA';
var backColor = '#D8D8D8';


$(document).ready(function(){
  makeGrid(gridSize);
  $(this).on('mouseenter', '.grid-div', mouseEnter);


  $('#grid-size-button').on('click', newGrid);


  //opacity button
  $('#opacity-button').on('click', opacityButton);

  //rainbow button
  $('#rainbow-button').on('click', rainbowButton);

  $('#default-button').on('click', defaultButton);

  $('#color-button').on('click', colorButton);  

});


//To make the grid
function makeGrid(size) {
  $('#container').empty();
  var blockSize = 600 / size;
  for (var row = 0; row < size; row++) {
    $('#container').append('<div class="column"></div>');                          
    for (var column = 0; column < size ; column++) {
      $('#container').find('.column:last').append('<div class="grid-div"></div>');       
    }
  }
  $('.grid-div').css({'height': blockSize + 'px', 'width': blockSize + 'px'});
  $('.column').css({'height': blockSize + 'px'})
  $('#current-size').text("The current size is " + gridSize + 'x' + gridSize + '.');
  if($('#opacity-button').hasClass('highlight')){
      $('.grid-div').css('opacity', '0');
  }
}

//To remove the old grid and make a new grid
function newGrid() {
  gridSize = prompt("Please enter a number.", gridSize);

//  $('#container').empty();

  makeGrid(gridSize);

}

//opacity button
function opacityButton(){
  if($('#opacity-button').hasClass('highlight')){
      $('#opacity-button').removeClass('highlight');
      $('#grid-div').css('opacity', '1');
    } else {
      $('#opacity-button').addClass('highlight');
      $('.grid-div').css('opacity', '0');
    }
  makeGrid(gridSize);
}

//rainbow button
function rainbowButton(){
  if($('#rainbow-button').hasClass('highlight')){
      $('#rainbow-button').removeClass('highlight');
    } else {
      $('#rainbow-button').addClass('highlight');
    }
  makeGrid(gridSize);
}

//default button
function defaultButton() {
  $('#opacity-button, #rainbow-button, #red-button').removeClass('highlight');
  $('#grid-div').css('opacity', '1');
  gridSize = 16;
  mouseColor = '#D8B4F3';
  makeGrid(gridSize);
}

//When the mouse enters a div:
function mouseEnter(){
  if($('#rainbow-button').hasClass('highlight')) {
    $(this).css('background-color', 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')');
  } else {
    $(this).css({'background-color': mouseColor});
  }
  if ($('#opacity-button').hasClass('highlight')) {
    $(this).css('opacity', '+=0.2');
  }
}

function colorButton() {
  mouseColor = prompt("What color would you like?  Please enter a basic color or a color's hex key.", mouseColor);
  makeGrid(gridSize);
}