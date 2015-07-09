var batman = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass("batman");
}

batman.prototype = Object.create(makeDancer.prototype);
batman.prototype.constructor = batman;

batman.prototype.step = function(){

  var context = this;

  this.$node.mouseenter(function(){
    context.$node.toggleClass('rotate-batman');
  });
  this.$node.mouseleave(function(){
    context.$node.toggleClass('rotate-batman');
  });

}
