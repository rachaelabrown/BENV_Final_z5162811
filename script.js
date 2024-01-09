var 
p1=document.getElementById("path"),p2=document.getElementById("path2") ,
np=25,pM='M',pQ=' Q',pCo=',',pSp=' ',pDZ='0,0',pD=[] ;
document.addEventListener('mousemove',function(){aP(event)} );
document.addEventListener('touchmove',function(){ event.preventDefault(); aP(event.targetTouches[0])});
function aP(e){ 
	pD.push([e.pageX,e.pageY]);
	if(pD.length>np){rP()};
	pU();
};
var t = new com.greensock.Ticker(45);
t.addEventListener("tick",rP);
function mP(p2,p1,f){return [p1[0]+(p2[0]-p1[0])*f,p1[1]+(p2[1]-p1[1])*f]};
function rP(){ if(pD.length>100){ pD.shift(); pU(); } };
function pU(){
	p2.setAttribute("stroke-width",1);
	var nP=pD.length>1?pM:pM+pDZ;
	for( var L=pD.length-1,j=0; j<L; j++ ){
		if( j!=0 ){
			var P2=mP(pD[j],pD[j+1],.5);
			nP+=pQ+pD[j][0]+pCo+pD[j][1]+pSp+P2[0]+pCo+P2[1];
		}else{ nP+=pSp+pD[j][0]+pCo+pD[j][1] }
	}
	p1.setAttribute("d",nP);	p2.setAttribute("d",nP);
}
function setLLenght(X){ np=X.value };