var squareResizeDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass("squareResize toggleSquare");
}

squareResizeDancer.prototype = Object.create(makeDancer.prototype);
squareResizeDancer.prototype.constructor = squareResizeDancer;

squareResizeDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);

  this.$node.toggleClass('toggleSquare');
}
