var ctx = document.getElementById("o").getContext("2d");
var c=o.width/2;

// function: basci draw: circle=//., rectangle=//., ;text=//.//. ..
function test (t,x,y){
ctx.beginPath(); ctx.fillStyle="rgba(0,0,0,0.1)"; // *light^lightgrey
ctx.arc(x,y,20,0, 2*Math.PI); 
ctx.stroke(); ctx.fill();
ctx.beginPath(); 
; ctx.rect(x,y, x/2, y/4);
ctx.stroke(); ctx.fill();
; ctx.strokeText(t,x,y);
ctx.fillText(t,x,y);
}; //test("testText", c/2, c/2);

// characters; main draw: 
// "description", "name", "class", "alliance".. 
function ch(d, n, c, a, x,y){
ctx.beginPath();
  var r=40; //"rectangleLabelDimensions"
; ctx.rect(x,y, r+5+2,    r/2 ); 
ctx.stroke();

ctx.beginPath(); ctx.font="10px courier";  ctx.fillStyle="white"; 
  var x; y; var i=10; 
; ctx.fillText(d, x,y);
ctx.fillStyle="black";
  var cn= 2*2+0.5; //"centerName"
;ctx.fillText(n,x +cn*3, y+i +cn); ctx.font="10px tahoma"; // ctx.fillStyle="black";
;ctx.fillText(c, x,y +i*3);
;ctx.fillText(a,x,y +i*4);
}

   var i= 20*3;
ch("guardsMan", "Reni", "Soldier", "", 			c/2,		c/2);
ch("Halo1", "Ann", "Commoner", "ex-Red House", 		c/2+i, 		c/2);
ch("Halo2", "Stint", "Commoner", "ex-Red House", 	c/2 +i*2, 	c/2);
ch("Halo3", "Mitzy", "Commonor", "ex-Red House", 	c/2 +i*3	,	c/2); 

//animateTest: bounce=,; rotate=, orbit=, ..
function bc (x,y){ //"bouncingCircle"
ctx.beginPath(); ctx.fillStyle="rgba(0,0,0,0.1)"; // *^lightlightgrey
ctx.arc(x,y,20,0,2*Math.PI);
ctx.stroke();
}//eof: bc

function bca(){ //""animate"
  //var xi=10; var yi;
   //var bcx=c; bcy=c; 
//bc(bcx,bcy);
  //bcx+=xi;
//if (x<o.width){ x+=-1}//eof: If

//=====  ====== ========================(troubleshooting)
//~bc(c,c); //basicdraw=//.
//~c+=10; //directIncrement=//.
  var bcx=c; bcy=c; 	;bc(bcx,bcy);// indirectDraw=//.
bcx+=10;//+directIncrement= NA


}bca();
setInterval(bca, 10); 




