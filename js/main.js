// etch-a-sketch

var gridSize = 16;  
var mouseColor = '#884cb4';  //'#D8B4F3';


$(document).ready(function(){
  makeGrid(gridSize);
  $(this).on('mouseenter', '.grid-div', mouseEnter);

  $('#grid-size-button').on('click', newGrid);

  $('#opacity-button').on('click', opacityButton);

  $('#rainbow-button').on('click', rainbowButton);

  $("#color").spectrum({
    color: mouseColor,
    change: function(color) {
        mouseColor = color.toHexString();
    }
  });

  $('#reset-button').on('click', resetButton);  

  $('#default-button').on('click', defaultButton);

});


//To make the grid
function makeGrid(size) {
  $('#container').empty();
  var blockSize = 600 / size;
  for (var row = 0; row < size; row++) {
    $('#container').append('<div class="row"></div>');                          
    for (var column = 0; column < size ; column++) {
      $('#container').find('.row:last').append('<div class="grid-div"></div>');       
    }
  }
  $('.row').css({'height': blockSize + 'px'});
  $('.grid-div').css({'height': blockSize + 'px', 'width': blockSize + 'px'});
  $('.column').css({'height': blockSize + 'px'})
  $('#current-size').text("The current size is " + gridSize + 'x' + gridSize + '.');
  if($('#opacity-button').hasClass('highlight')){
      $('.grid-div').css('opacity', '0');
  }
}

//To ask for a number and call makeGrid
function newGrid() {
  gridSize = prompt("Please enter a number between 1 and 75", gridSize);

  while(gridSize > 75 || gridSize < 1){
    gridSize = prompt("Please enter a number.", gridSize);
  }

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

//reset button
function resetButton() {
  makeGrid(gridSize);
}


//default button
function defaultButton() {
  $('#opacity-button, #rainbow-button, #red-button').removeClass('highlight');
  $('#grid-div').css('opacity', '1');
  gridSize = 16;
  mouseColor = '#884cb4';
  $("#color").spectrum({
    color: mouseColor,
    change: function(color) {
        mouseColor = color.toHexString();
    }
  });
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
