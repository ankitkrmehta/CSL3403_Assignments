var x="Global"; //global scope.......
function a() {
      var y="local"; //local scope.......
      console.log(y);
}
a();
b();
function b()
{
	console.log(x);
}
