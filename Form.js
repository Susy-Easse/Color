class Form {
  constructor() {
this.sis=0

this.newobjectbutton=createButton("Objeto").style('font-size',Math.sqrt(width).toFixed(0)+'px').size(Math.sqrt(width).toFixed(0)*3.75, height/16).position(width/16-Math.sqrt(width).toFixed(0)*3.75/1.5, 0.65625*height-(height/12+0.65625*height)/4+height/24).class("customButton")
.mousePressed(()=>{w=(Math.abs(w)-width);obs=1;
cor.Light.C=cor.Resul.C;cor.Light.N=cor.Resul.N;cor.Color.C=cor.Resul.C="rgba(0,0,0,0)";cor.Color.N=cor.Resul.N=[0,0,0,0]
this.newobjectbutton.position(Math.abs((-width+Math.sqrt(width).toFixed(0)*3.75)+this.newobjectbutton.x),this.newobjectbutton.y);
this.restartobjectbutton.position(this.newobjectbutton.x,this.restartobjectbutton.y);
objeto.position.x=Math.abs(-width+objeto.position.x)})

this.restartobjectbutton=createButton("Resetar").style('font-size',Math.sqrt(width).toFixed(0)+'px').size(Math.sqrt(width).toFixed(0)*3.75, height/16).position(width/16-Math.sqrt(width).toFixed(0)*3.75/1.5, 0.65625*height-(height/12+0.65625*height)/4+height/24-height/16).class("customButton")
.mousePressed(()=>{cor.Light.C="rgba(0,0,0,1)";cor.Color.C="rgba(0,0,0,1)";cor.Light.N=[0,0,0,0];cor.Color.N=[0,0,0,1];w=0;obs=0
this.newobjectbutton.position(width/16-Math.sqrt(width).toFixed(0)*3.75/1.5,this.newobjectbutton.y);
this.restartobjectbutton.position(width/16-Math.sqrt(width).toFixed(0)*3.75/1.5,this.restartobjectbutton.y);
objeto.position.x=width/8})


this.lightcolor=createInput("").attribute("placeholder", "Cor da Luz").size(width/4 , height/24).style('font-size', Math.sqrt(width).toFixed(0)+'px').position(0, height/16).class("customInput");
this.addlightbutton=createButton("Adicionar").style('font-size',Math.sqrt(width).toFixed(0)+'px').size(Math.sqrt(width).toFixed(0)*5, height/16).position(width/3.5, height/16.5).class("customButton")
.mousePressed(()=>{if(this.testar(this.lightcolor.value(),0)==true){this.Result("+","Light",this.testar(this.lightcolor.value(),2))}})
this.subtractlightbutton=createButton("Subtrair").style('font-size',Math.sqrt(width).toFixed(0)+'px').size(Math.sqrt(width).toFixed(0)*5, height/16).position(width/3.5*1.55, height/16.5).class("customButton")
.mousePressed(()=>{if(this.testar(this.lightcolor.value(),0)==true){this.Result("-","Light",this.testar(this.lightcolor.value(),2))}})
this.definelightbutton=createButton("Definir").style('font-size',Math.sqrt(width).toFixed(0)+'px').size(Math.sqrt(width).toFixed(0)*5, height/16).position(width/3.5*2.1, height/16.5).class("customButton")
.mousePressed(()=>{if(this.testar(this.lightcolor.value(),0)==true){;cor.Light.C=this.testar(this.lightcolor.value(),1);cor.Light.N=this.testar(this.lightcolor.value(),2)}})



this.colorpigment=createInput("").attribute("placeholder", "Cor do Objeto").size(width/4 , height/24).style('font-size', Math.sqrt(width).toFixed(0)+'px').position(0, height*2.5/16).class("customInput");

this.addcolorbutton=createButton("Adicionar").style('font-size',Math.sqrt(width).toFixed(0)+'px').size(Math.sqrt(width).toFixed(0)*5, height/16).position(width/3.5, height*2.5/16.5).class("customButton")
.mousePressed(()=>{if(this.testar(this.colorpigment.value(),0)==true){this.Result("+","Color",this.testar(this.colorpigment.value(),2))}})
this.subtractcolorbutton=createButton("Subtrair").style('font-size',Math.sqrt(width).toFixed(0)+'px').size(Math.sqrt(width).toFixed(0)*5, height/16).position(width/3.5*1.55, height*2.5/16.5).class("customButton")
.mousePressed(()=>{if(this.testar(this.colorpigment.value(),0)==true){this.Result("-","Color",this.testar(this.colorpigment.value(),2))}})
this.definecolorbutton=createButton("Definir").style('font-size',Math.sqrt(width).toFixed(0)+'px').size(Math.sqrt(width).toFixed(0)*5, height/16).position(width/3.5*2.1, height*2.5/16.5).class("customButton")
.mousePressed(()=>{if(this.testar(this.colorpigment.value(),0)==true){cor.Color.C=this.testar(this.colorpigment.value(),1);cor.Color.N=this.testar(this.colorpigment.value(),2)}})


this.colortype=createElement("h2").style('font-size', Math.sqrt(width).toFixed(0)+'px').size(0, height/16).position(width/3.5*2.2+Math.sqrt(width).toFixed(0)*5, height/16.5-Math.sqrt(width).toFixed(0)).class("greeting").html("Sistema: "+sistema[this.sis][0])
this.name=createElement("h2").style('font-size', Math.sqrt(width).toFixed(0)+'px').size(0, height/16).position(width*2,height*2).class("BCM").html("B.C.M.")


this.changecolortype=createButton("Mudar").style('font-size',Math.sqrt(width).toFixed(0)+'px').size(Math.sqrt(width).toFixed(0)*5, height/16).position(width/3.5*2.61, height*2.5/16.5).class("customButton")
.mousePressed(()=>{this.sis+=1;if(this.sis>sistema.length-1){this.sis=0}
if(sistema[this.sis][0]=="RGB"){this.n="rgb( , , )"}
if(sistema[this.sis][0]=="RGBA"){this.n="rgba( , , , )"}
if(sistema[this.sis][0]=="HEXADECIMAL"){this.n="#"}
if(sistema[this.sis][0]=="HSL"){this.n="hsl( %, %, %)"}
if(sistema[this.sis][0]=="HWB"){this.n="hwb( %, %, %)"}
if(sistema[this.sis][0]=="NCol"){this.n="NCol( , %, %)"}
if(sistema[this.sis][0]==""){this.n=""}

this.colortype.elt.innerHTML="Sistema: "+sistema[this.sis][0]
this.lightcolor.elt.value=this.n
this.colorpigment.elt.value=this.n})


this.changecolortype=createButton("Recarregar").style('font-size',Math.sqrt(width).toFixed(0)+'px').size(Math.sqrt(width).toFixed(0)*5, height/16).position(width/3.5*3.05, height*2.5/16.5).class("customButton")
.mousePressed(()=>{window.location.reload()})


}



testar(t,x){t=t.replace(/\s/g, '');if(t.length==0||t==""){return false}
  this.t,this.c="",this.n=[]
  if(t.startsWith("rgb(")){
    t=t.substring(4);if(t.endsWith(")")){t=t.substring(0,t.length-1)}else{return false}

    this.t=t.substring(0,t.indexOf(","));t=t.substring(this.t.length+1);if(!(this.t!=""&&!isNaN(this.t))){return false};if(this.t<0){this.t=0};if(this.t>255){this.t=255};this.c=this.c+this.t;this.n.push(Number(this.t))
    this.t=t.substring(0,t.indexOf(","));t=t.substring(this.t.length+1);if(!(this.t!=""&&!isNaN(this.t))){return false};if(this.t<0){this.t=0};if(this.t>255){this.t=255};this.c=this.c+","+this.t;this.n.push(Number(this.t))
if(t.indexOf(",")==-1){this.t=t.substring(0);t=""};if(!(this.t!=""&&!isNaN(this.t))){return false};if(this.t<0){this.t=0};if(this.t>255){this.t=255};this.c=this.c+","+this.t;this.n.push(Number(this.t));this.n.push(1)
if(x==0){return true};if(x==1){return ("rgba("+this.c+",1)")};if(x==2){return this.n}
}


else if(t.startsWith("rgba(")){
    t=t.substring(5);if(t.endsWith(")")){t=t.substring(0,t.length-1)}else{return false}

    this.t=t.substring(0,t.indexOf(","));t=t.substring(this.t.length+1);if(!(this.t!=""&&!isNaN(this.t))){return false};if(this.t<0){this.t=0};if(this.t>255){this.t=255};this.c=this.c+this.t;this.n.push(Number(this.t))
    this.t=t.substring(0,t.indexOf(","));t=t.substring(this.t.length+1);if(!(this.t!=""&&!isNaN(this.t))){return false};if(this.t<0){this.t=0};if(this.t>255){this.t=255};this.c=this.c+","+this.t;this.n.push(Number(this.t))
    if(t.indexOf(",")==-1){this.t=t.substring(0);t=""}else{this.t=t.substring(0,t.indexOf(","));t=t.substring(this.t.length+1)};if(!(this.t!=""&&!isNaN(this.t))){return false};if(this.t<0){this.t=0};if(this.t>255){this.t=255};this.c=this.c+","+this.t;this.n.push(Number(this.t))
    if(t!=""){this.t=t.substring(0)}else{this.t=1};if(!(this.t!=""&&!isNaN(this.t))){return false};if(this.t<0){this.t=0};if(this.t>1){this.t=1};this.c=this.c+","+this.t;this.n.push(Number(this.t))
    if(x==0){return true};if(x==1){return ("rgba("+this.c+")")};if(x==2){return this.n}
  }


  else if(t.startsWith("#")){
    t=t.substring(1);t=t.toUpperCase()
    if(t.length==6||t.length==8){
    this.t=t.substring(0,2);t=t.substring(this.t.length);if(this.t==""){return false};if(this.testHexa(this.t[0],1)===false||this.testHexa(this.t[1],0)===false){return false};this.n.push(this.testHexa(this.t[0],1)+this.testHexa(this.t[1],0))
    this.t=t.substring(0,2);t=t.substring(this.t.length);if(this.t==""){return false};if(this.testHexa(this.t[0],1)===false||this.testHexa(this.t[1],0)===false){return false};this.n.push(this.testHexa(this.t[0],1)+this.testHexa(this.t[1],0))
    this.t=t.substring(0,2);t=t.substring(this.t.length);if(this.t==""){return false};if(this.testHexa(this.t[0],1)===false||this.testHexa(this.t[1],0)===false){return false};this.n.push(this.testHexa(this.t[0],1)+this.testHexa(this.t[1],0))
    if(t!=""){this.t=t.substring(0,2);t=t.substring(this.t.length);if(this.t==""){return false};if(this.testHexa(this.t[0],1)===false||this.testHexa(this.t[1],0)===false){return false};this.n.push((1/255)*(this.testHexa(this.t[0],1)+this.testHexa(this.t[1],0)))}else{this.n.push(1)}
    if(x==0){return true};if(x==1){return ("rgba("+this.n+")")};if(x==2){return this.n}

  }}

  else if(t.startsWith("hsl(")){
    t=t.substring(4);if(t.endsWith(")")){t=t.substring(0,t.length-1)}else{return false}
    this.t=t.substring(0,t.indexOf(","));t=t.substring(this.t.length+1);if(this.t.charAt(this.t.length-1)=="%"){this.t=this.t.substring(0,this.t.length-1);if(this.t==""&&!(isNaN(Number(this.t)))){return false};if(this.t>100){this.t=100};this.t=this.t*3.6}if(this.t==""&&!(isNaN(Number(this.t)))){return false};if(this.t<0){this.t=0};if(this.t>360){this.t=360};this.n.push(Number(this.t))
    this.t=t.substring(0,t.indexOf(","));t=t.substring(this.t.length+1);if(this.t.charAt(this.t.length-1)!="%"){return false}else{this.t=this.t.substring(0,this.t.length-1)}if(this.t==""&&!(isNaN(Number(this.t)))){return false};if(this.t<0){this.t=0};if(this.t>100){this.t=100};this.n.push(Number(this.t))
this.t=t.substring(0);t="";if(this.t.charAt(this.t.length-1)!="%"){return false}else{this.t=this.t.substring(0,this.t.length-1)}if(this.t==""&&!(isNaN(Number(this.t)))){return false};if(this.t<0){this.t=0};if(this.t>100){this.t=100};this.n.push(Number(this.t))
if(x==0){return true};if(x==1||x==2){return this.transform(x,this.n,"HSL")}
  }

  else if(t.startsWith("hwb(")){
    t=t.substring(4);if(t.endsWith(")")){t=t.substring(0,t.length-1)}else{return false}
    this.t=t.substring(0,t.indexOf(","));t=t.substring(this.t.length+1);if(this.t.charAt(this.t.length-1)=="%"){this.t=this.t.substring(0,this.t.length-1);if(this.t==""&&!(isNaN(Number(this.t)))){return false};if(this.t>100){this.t=100};this.t=this.t*3.6}if(this.t==""&&!(isNaN(Number(this.t)))){return false};if(this.t<0){this.t=0};if(this.t>360){this.t=360};this.n.push(Number(this.t))
    this.t=t.substring(0,t.indexOf(","));t=t.substring(this.t.length+1);if(this.t.charAt(this.t.length-1)!="%"){return false}else{this.t=this.t.substring(0,this.t.length-1)}if(this.t==""&&!(isNaN(Number(this.t)))){return false};if(this.t<0){this.t=0};if(this.t>100){this.t=100};this.n.push(Number(this.t))
this.t=t.substring(0);t="";if(this.t.charAt(this.t.length-1)!="%"){return false}else{this.t=this.t.substring(0,this.t.length-1)}if(this.t==""&&!(isNaN(Number(this.t)))){return false};if(this.t<0){this.t=0};if(this.t>100){this.t=100};this.n.push(Number(this.t))
if(x==0){return true};if(x==1||x==2){return this.transform(x,this.n,"HWB")}
  }

  else if((t.startsWith("NCol(")&&this.testNCol(4,t.substring(5,8))) || this.testNCol(4,t.substring(0,3))){
    if(this.testNCol(4,t.substring(0,3))==false){t=t.substring(5);if(t.endsWith(")")){t=t.substring(0,t.length-1)}else{return false}}
    if(t.includes("%")==true){
    this.t=t.substring(0,t.indexOf(","));t=t.substring(this.t.length+1);if(this.testNCol(0,this.t)==false){return false};this.n.push(this.t)
    this.t=t.substring(0,t.indexOf(","));t=t.substring(this.t.length+1);if(this.t.charAt(this.t.length-1)!="%"){return false}else{this.t=t.substring(0,this.t.length-1)};if(!(this.t!=""&&!isNaN(this.t))){return false};if(this.t<0){this.t=0};if(this.t>100){this.t=100};this.n.push(Number(this.t));
this.t=t.substring(0);if(this.t.charAt(this.t.length-1)!="%"){return false}else{this.t=t.substring(0,this.t.length-1)}if(!(this.t!=""&&!isNaN(this.t))){return false};if(this.t<0){this.t=0};if(this.t>100){this.t=100};this.n.push(Number(this.t))

return this.transform(x,[this.testNCol(2,this.n[0]),this.n[1],this.n[2]],"NCol")
 }else{return this.testNCol(x,t)}}

  else{t=t.toLowerCase()
  if(t=="red"||t=="vermelho"){if(x==0){return true};if(x==1){return "rgba(255,0,0,1)"};if(x==2){return [255,0,0,1]}}
  else if(t=="blue"||t=="azul"){if(x==0){return true};if(x==1){return "rgba(0,0,255,1)"};if(x==2){return [0,0,255,1]}}
  else if(t=="green"||t=="verde"){if(x==0){return true};if(x==1){return "rgba(0,255,0,1)"};if(x==2){return [0,255,0,1]}}
  else if(t=="yellow"||t=="amarelo"){if(x==0){return true};if(x==1){return "rgba(255,255,0,1)"};if(x==2){return [255,255,0,1]}}
  else if(t=="pink"||t=="rosa"){if(x==0){return true};if(x==1){return "rgba(255,0,128,1)"};if(x==2){return [255,0,128,1]}}
  else if(t=="orange"||t=="laranja"){if(x==0){return true};if(x==1){return "rgba(255,128,0,1)"};if(x==2){return [255,128,0,1]}}
  else if(t=="brown"||t=="marrom"){if(x==0){return true};if(x==1){return "rgba(139,69,19,1)"};if(x==2){return [139,69,19,1]}}
  else if(t=="magenta"){if(x==0){return true};if(x==1){return "rgba(255,0,255,1)"};if(x==2){return [255,0,255,1]}}
  else if(t=="cyan"||t=="ciano"){if(x==0){return true};if(x==1){return "rgba(0,255,255,1)"};if(x==2){return [0,255,255,1]}}
  else if(t=="black"||t=="preto"){if(x==0){return true};if(x==1){return "rgba(0,0,0,1)"};if(x==2){return [0,0,0,1]}}
  else if(t=="gray"||t=="cinza"){if(x==0){return true};if(x==1){return "rgba(128,128,128,1)"};if(x==2){return [128,128,128,1]}}
  else if(t=="white"||t=="branco"){if(x==0){return true};if(x==1){return "rgba(255,255,255,1)"};if(x==2){return [255,255,255,1]}}
  else{return false}
  }
}
Result(x,ct,c1){
var L=cor.Light.N, C=cor.Color.N,R=[]
if(x==undefined){
R[0]=Number((L[0]+C[0])-255);if(R[0]<0){R[0]=0};if(R[0]>255){R[0]=255}
R[1]=Number((L[1]+C[1])-255);if(R[1]<0){R[1]=0};if(R[1]>255){R[1]=255}
R[2]=Number((L[2]+C[2])-255);if(R[2]<0){R[2]=0};if(R[2]>255){R[2]=255}
R[3]=Number((L[3]+C[3]-1));if(R[3]<0){R[3]=0};if(R[3]>1){R[3]=1}
cor.Resul.C="rgba("+R[0]+","+R[1]+","+R[2]+","+R[3]+")"
cor.Resul.N=[R[0],R[1],R[2],R[3]]
}

if(x=="+"){
if(ct=="Light"){
  cor.Light.N[0]=Number((L[0]+c1[0]));if(cor.Light.N[0]<0){cor.Light.N[0]=0};if(cor.Light.N[0]>255){cor.Light.N[0]=255}
  cor.Light.N[1]=Number((L[1]+c1[1]));if(cor.Light.N[1]<0){cor.Light.N[1]=0};if(cor.Light.N[1]>255){cor.Light.N[1]=255}
  cor.Light.N[2]=Number((L[2]+c1[2]));if(cor.Light.N[2]<0){cor.Light.N[2]=0};if(cor.Light.N[2]>255){cor.Light.N[2]=255}
  cor.Light.N[3]=Number((L[3]+c1[3]-1));if(cor.Light.N[3]<0){cor.Light.N[3]=0};if(cor.Light.N[3]>1){cor.Light.N[3]=1}
  cor.Light.C="rgba("+cor.Light.N[0]+","+cor.Light.N[1]+","+cor.Light.N[2]+","+cor.Light.N[3]+")"
}
else if(ct=="Color"){
  cor.Color.N[0]=Number((C[0]+c1[0]));if(cor.Color.N[0]<0){cor.Color.N[0]=0};if(cor.Color.N[0]>255){cor.Color.N[0]=255}
  cor.Color.N[1]=Number((C[1]+c1[1]));if(cor.Color.N[1]<0){cor.Color.N[1]=0};if(cor.Color.N[1]>255){cor.Color.N[1]=255}
  cor.Color.N[2]=Number((C[2]+c1[2]));if(cor.Color.N[2]<0){cor.Color.N[2]=0};if(cor.Color.N[2]>255){cor.Color.N[2]=255}
  cor.Color.N[3]=Number((C[3]+c1[3]-1));if(cor.Color.N[3]<0){cor.Color.N[3]=0};if(cor.Color.N[3]>1){cor.Color.N[3]=1}
  cor.Color.C="rgba("+cor.Color.N[0]+","+cor.Color.N[1]+","+cor.Color.N[2]+","+cor.Color.N[3]+")"
};console.log(x+" "+ct+" "+c1);console.log(cor)
}
if(x=="-"){
if(ct=="Light"){
  cor.Light.N[0]=Number((L[0]-c1[0]));if(cor.Light.N[0]<0){cor.Light.N[0]=0};if(cor.Light.N[0]>255){cor.Light.N[0]=255}
  cor.Light.N[1]=Number((L[1]-c1[1]));if(cor.Light.N[1]<0){cor.Light.N[1]=0};if(cor.Light.N[1]>255){cor.Light.N[1]=255}
  cor.Light.N[2]=Number((L[2]-c1[2]));if(cor.Light.N[2]<0){cor.Light.N[2]=0};if(cor.Light.N[2]>255){cor.Light.N[2]=255}
  cor.Light.N[3]=Number((L[3]-c1[3]+1));if(cor.Light.N[3]<0){cor.Light.N[3]=0};if(cor.Light.N[3]>1){cor.Light.N[3]=1}
  cor.Light.C="rgba("+cor.Light.N[0]+","+cor.Light.N[1]+","+cor.Light.N[2]+","+cor.Light.N[3]+")"
}
else if(ct=="Color"){
  cor.Color.N[0]=Number((C[0]-c1[0]));if(cor.Color.N[0]<0){cor.Color.N[0]=0};if(cor.Color.N[0]>255){cor.Color.N[0]=255}
  cor.Color.N[1]=Number((C[1]-c1[1]));if(cor.Color.N[1]<0){cor.Color.N[1]=0};if(cor.Color.N[1]>255){cor.Color.N[1]=255}
  cor.Color.N[2]=Number((C[2]-c1[2]));if(cor.Color.N[2]<0){cor.Color.N[2]=0};if(cor.Color.N[2]>255){cor.Color.N[2]=255}
  cor.Color.N[3]=Number((C[3]-c1[3]+1));if(cor.Color.N[3]<0){cor.Color.N[3]=0};if(cor.Color.N[3]>1){cor.Color.N[3]=1}
  cor.Color.C="rgba("+cor.Color.N[0]+","+cor.Color.N[1]+","+cor.Color.N[2]+","+cor.Color.N[3]+")"
};console.log(cor)
}


}

transform(x,n,t){
  this.t,this.n=[255,0,0]
if(t=="HSL"){//(cor,a cada 60, aumenta 255 no ppproximo, depois subtrai no anterior e repete; 0%=(128,128,128)-100%=cor normal; 0%=(0,0,0)-50%=cor normal-100%=(255,255,255))
  this.H=[]
  //H
if(n[0]==360){n[0]=0}
  while(n[0]>0){if(n[0]>=60){this.H.push(60);n[0]=n[0]-60}else{this.H.push(n[0]);n[0]=n[0]-n[0]}}
  for(var y=1;y<this.H.length+1;y+=1){
if(y%2==0){this.n[Math.round(Math.abs(Math.sqrt(y)*1.5-y))]-=this.H[y-1]*4.25}
if(y%2==1){if(y!=5){this.n[Math.ceil(y/2)]=this.H[y-1]*4.25}else{this.n[0]=this.H[y-1]*4.25}}
  }
  for(var y in this.n){this.n[y]=Math.round(this.n[y]);if(this.n[y]<0){this.n[y]=0}}

  //S
  for(var y in this.n){this.n[y]=Math.round(Math.abs(this.n[y]+((128-this.n[y])*(100-n[1])/100)))};for(var y in this.n){this.n[y]=Math.round(this.n[y]);if(this.n[y]<0){this.n[y]=0}}

  //L
  if(50-n[2]!=0){for(var y in this.n){
    /*Sombra(0)*/if(50-n[2]<0){this.n[y]=Math.round(this.n[y]+((255-this.n[y])*((n[2]-50)/50)))}
    /*Luz(255)*/else{this.n[y]=Math.round(this.n[y]-((-this.n[y])*((n[2]-50)/50)))}
  }};for(var y in this.n){this.n[y]=Math.round(this.n[y]);if(this.n[y]<0){this.n[y]=0}}
  if(x==0){return true};if(x==1){return "rgba("+this.n[0]+","+this.n[1]+","+this.n[2]+",1)"};if(x==2){this.n.push(1);return this.n}
}

if(t=="HWB"){//(cor,a cada 60, aumenta 255 no ppproximo, depois subtrai no anterior e repete; 0%=(128,128,128)-100%=cor normal; 0%=(0,0,0)-50%=cor normal-100%=(255,255,255))
  this.H=[]
  //H
if(n[0]==360){n[0]=0}
  while(n[0]>0){if(n[0]>=60){this.H.push(60);n[0]=n[0]-60}else{this.H.push(n[0]);n[0]=n[0]-n[0]}}
  for(var y=1;y<this.H.length+1;y+=1){
if(y%2==0){this.n[Math.round(Math.abs(Math.sqrt(y)*1.5-y))]-=this.H[y-1]*4.25}
if(y%2==1){if(y!=5){this.n[Math.ceil(y/2)]=this.H[y-1]*4.25}else{this.n[0]=this.H[y-1]*4.25}}
  }for(var y in this.n){this.n[y]=Math.round(this.n[y]);if(this.n[y]<0){this.n[y]=0}}

  n[1]=Math.abs(n[1]);n[2]=Math.abs(n[2]);if(n[1]<0){n[1]=0};if(n[2]<0){n[2]=0};;if(n[1]>100-n[2]){n[1]=100-n[2]};if(n[2]>100-n[1]){n[2]=100-n[1]}

//W && B
for(var y in this.n){/*Sombra(0)&&Luz(255)*/this.n[y]=Math.round((this.n[y]+Math.round((255-this.n[y])*(n[1]/100)))-(this.n[y]*(n[2]/100)))}
for(var y in this.n){this.n[y]=Math.round(this.n[y]);if(this.n[y]<0){this.n[y]=0}}

if(x==0){return true};if(x==1){return "rgba("+this.n[0]+","+this.n[1]+","+this.n[2]+",1)"};if(x==2){this.n.push(1);return this.n}
}

if(t=="NCol"){
  this.n=n[0]

  n[1]=Math.abs(n[1]);n[2]=Math.abs(n[2]);if(n[1]<0){n[1]=0};if(n[2]<0){n[2]=0};;if(n[1]>100-n[2]){n[1]=100-n[2]};if(n[2]>100-n[1]){n[2]=100-n[1]}

//W && B
for(var y in this.n){/*Sombra(0)&&Luz(255)*/this.n[y]=Math.round((this.n[y]+Math.round((255-this.n[y])*(n[1]/100)))-(this.n[y]*(n[2]/100)))}
for(var y in this.n){this.n[y]=Math.round(this.n[y]);if(this.n[y]<0){this.n[y]=0}}

if(x==0){return true};if(x==1){return "rgba("+this.n[0]+","+this.n[1]+","+this.n[2]+",1)"};if(x==2){this.n.push(1);return this.n}
}
}

testNCol(x,t){
  if(x==4){
    if(t[0]=="R"||t[0]=="Y"||t[0]=="G"||t[0]=="C"||t[0]=="B"||t[0]=="M"){
if(t[1]!=""&&!(isNaN(Number(t[1]))) && t[2]!=""&&!(isNaN(Number(t[2])))){
  return true
}
    }
    return false
  }
  if(t.substring(1,3)==""){return false}

  if((!isNaN(Number(t.substring(1,3))))&&Number(t.substring(1,3))<=99&&Number(t.substring(1,3))>=0){
    if(t[0]=="R"){if(x==0){return true};if(x==1){ return "rgba ( 255, "+Math.round(255*(Number(t.substring(1,3))/100))+", 0,1)" }if(x==2){return [255, Math.round(255*(Number(t.substring(1,3))/100)), 0,1] }}
    else if(t[0]=="Y"){if(x==0){return true};if(x==1){return "rgba("+(255-Math.round(255*(Number(t.substring(1,3))/100)))+", 255, 0,1)" }if(x==2){return [255-Math.round(255*(Number(t.substring(1,3))/100)), 255, 0,1] }}
    else if(t[0]=="G"){if(x==0){return true};if(x==1){return "rgba(0, 255, "+Math.round(255*(Number(t.substring(1,3))/100))+",1)" }if(x==2){return [0, 255, Math.round(255*(Number(t.substring(1,3))/100)),1] }}
    else if(t[0]=="C"){if(x==0){return true};if(x==1){return "rgba(0, "+(255-Math.round(255*(Number(t.substring(1,3))/100)))+", 255,1)" }if(x==2){return [0, 255-Math.round(255*(Number(t.substring(1,3))/100)), 255,1] }}
    else if(t[0]=="B"){if(x==0){return true};if(x==1){return "rgba("+Math.round(255*(Number(t.substring(1,3))/100))+", 0, 255,1)" }if(x==2){return [Math.round(255*(Number(t.substring(1,3))/100)), 0, 255,1] }}
    else if(t[0]=="M"){if(x==0){return true};if(x==1){return "rgba(255, 0, "+(255-Math.round(255*(Number(t.substring(1,3))/100)))+",1)" }if(x==2){return [255, 0, 255-Math.round(255*(Number(t.substring(1,3))/100)),1] }}
    else{return false}  
  }
  else{return false}
}

testHexa(t,p){
  if(isNaN(t)==false){
    return Number(t*Math.pow(16,p))
  }
  else{
  if(t=="A"){return Number(10*Math.pow(16,p))}
  else if(t=="B"){return Number(11*Math.pow(16,p))}
  else if(t=="C"){return Number(12*Math.pow(16,p))}
  else if(t=="D"){return Number(13*Math.pow(16,p))}
  else if(t=="E"){return Number(14*Math.pow(16,p))}
  else if(t=="F"){return Number(15*Math.pow(16,p))}
  else{return false}
}
}
  
}


//this.lightcolor.elt.attributes.placeholder.value
//lightcolor.elt.value