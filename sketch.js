var cor={"Light":{"C":"rgba(0,0,0,0)","N":[0,0,0,0]},"Color":{"C":"rgba(0,0,0,0)","N":[0,0,0,0]},"Resul":{"C":"rgba(0,0,0,0)","N":[0,0,0,0]}}, objeto, luz,form,sistema=[["RGBA","rgba"],["RGB","rgb"],["HEXADECIMAL","#"],["HSL","hsl"],["HWB","hwb"],["NCol","NCol"]]
//                   Luz, objeto
var f 
var w,h,obs=0
function preload(){ 
    
}
function setup() {
createCanvas(windowWidth, windowHeight);w=0,h=height/2
form=new Form()
objeto = createSprite(width/8,0.65625*height,width/16,(height/12+0.65625*height));objeto.shapeColor="black"
//console.log(form.transform(1,[30,10,50],"HEXADECIMAL"))
}

function draw() {
background("rgba(128,128,128,0.5)");
stroke("rgba("+cor.Resul.N[0]+","+cor.Resul.N[1]+","+cor.Resul.N[2]+",1)");fill("rgba(0,0,0,0)");rect(objeto.position.x-(objeto.width*1.05/2),objeto.position.y-(objeto.height*1.01/2),objeto.width*1.05,objeto.height*1.01)
objeto.shapeColor=cor.Resul.C;form.Result()

drawSprites()
strokeWeight(5)
//Linha sol-objeto (Baixo-Alto)
if(cor.Light.N[0]!=0){stroke("rgba("+cor.Light.N[0]+",0,0,"+cor.Light.N[3]+")");fill("rgba("+cor.Light.N[0]+",0,0,"+cor.Light.N[3]+")")}else{stroke("rgba(0,0,0,0)");fill("rgba(0,0,0,0)")};line(Math.abs(w+width/2),0.244791667*height,Math.abs(w+width*5/32),0.4296875*height)
if(cor.Light.N[1]!=0){stroke("rgba(0,"+cor.Light.N[1]+",0,"+cor.Light.N[3]+")");fill("rgba(0,"+cor.Light.N[1]+",0,"+cor.Light.N[3]+")")}else{stroke("rgba(0,0,0,0)");fill("rgba(0,0,0,0)")};line(Math.abs(w+width/2),height*0.286458333,Math.abs(w+width*5/32),0.471354167*height)
if(cor.Light.N[2]!=0){stroke("rgba(0,0,"+cor.Light.N[2]+","+cor.Light.N[3]+")");fill("rgba(0,0,"+cor.Light.N[2]+","+cor.Light.N[3]+")")}else{stroke("rgba(0,0,0,0)");fill("rgba(0,0,0,0)")};line(Math.abs(w+width/2),0.328125*height,Math.abs(w+width*5/32),0.513020833*height)

if(obs==0){push();stroke("black");fill("rgba("+cor.Light.N[0]+","+cor.Light.N[1]+","+cor.Light.N[2]+","+cor.Light.N[3]+")");strokeWeight(2.5);ellipse(Math.abs(w+width/2),0.293619791*height,0.1125*height,0.1125*height);pop()}

//Linha objeto-olho (Baixo-Alto)
if(cor.Resul.N[0]!=0){stroke("rgba("+cor.Resul.N[0]+",0,0,"+cor.Resul.N[3]+")");fill("rgba("+cor.Resul.N[0]+",0,0,"+cor.Resul.N[3]+")")}else{stroke("rgba(0,0,0,0)");fill("rgba(0,0,0,0)")};line(Math.abs(w+width/6.4),height*0.4296875,Math.abs(w+width*0.745714286),height*3.8/4.8)
if(cor.Resul.N[1]!=0){stroke("rgba(0,"+cor.Resul.N[1]+",0,"+cor.Resul.N[3]+")");fill("rgba(0,"+cor.Resul.N[1]+",0,"+cor.Resul.N[3]+")")}else{stroke("rgba(0,0,0,0)");fill("rgba(0,0,0,0)")};line(Math.abs(w+width/6.4),height*0.471354233,Math.abs(w+width*0.745714286),height/1.2)
if(cor.Resul.N[2]!=0){stroke("rgba(0,0,"+cor.Resul.N[2]+","+cor.Resul.N[3]+")");fill("rgba(0,0,"+cor.Resul.N[2]+","+cor.Resul.N[3]+")")}else{stroke("rgba(0,0,0,0)");fill("rgba(0,0,0,0)")};line(Math.abs(w+width/6.4),height*0.5130209,Math.abs(w+width*0.745714286),height*0.875)



//Olho
stroke("black")
fill("white");ellipse(Math.abs(w+width*0.745714286),height*0.83333333,200,0.09*height*0.9)
fill("rgba(139,69,19,1)");ellipse(Math.abs(w+width*0.7457142861),height*0.83333333,112.5,0.0675*height*1.1)
fill("black");ellipse(Math.abs(w+width*0.745714286),height*0.83333333,50,0.045*height*1.1)


//stroke([255-R,255-G,255-B]);fill([255-R,255-G,255-B]);textSize(Math.sqrt(Math.sqrt((((width+Math.pow(width/16,2))*8))) + Math.sqrt((((height+Math.pow(height/8,2))*4)))))
//text("COR DA LUZ",form.G.x,form.G.y-form.G.height/2)
//text("COR DO OBJETO",form.G2.x,form.G2.y-form.G2.height/2)
}
//Cores primarias Luz: Vermelho (Red), Verde (Green), Azul (Blue) => Sistema RGB
//Junção de todas as luzes forma a luz branca
//Cores primarias Cor: Vermelho, Amarelo, Azul 
//Junção de todas as cores forma a cor preta, a cor branca é a ausencia de cores
//255,255,0   255,0,255