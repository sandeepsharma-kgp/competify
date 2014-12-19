window.onload=initLinks;
 
var mypix=new Array("css/img/n1.jpg","css/img/n2.jpg","css/img/n3.jpg");
var thisPic=0;


function initLinks(){
	document.getElementById("prev").onclick=prcsprev;
	document.getElementById("nxt").onclick=prcsnxt;
}

function prcsprev(){
	if(thisPic==0){
		thisPic=mypix.length;
	}
	thisPic--;
	document.getElementById('myPicture').src=mypix[thisPic];
	return false;
}



function prcsnxt(){
	thisPic++;
	if(thisPic==mypix.length){
		thisPic=0;
	}
	document.getElementById('myPicture').src=mypix[thisPic];
	return false;
}