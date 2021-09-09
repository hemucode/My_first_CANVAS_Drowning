var xl = 20, yl =20;
var timer;

function myfunction(){
    timer = setInterval(myfun,100);
    //timer = setInterval(mywrite,1000);        
}
function myfun(){
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    aa = [120,140,160,180,200,220,240,540,260,280,300];
    bb =[240,260,280,300,320,340,360,480,460];
    cc = [300,320,340,360,380,400];
    ddd = [260,280,300,120,140,160,180,200,220,240];
    ee = [480,500];
    ff = [420,440,480,500,520,540,560,580];
    gg = [300,320,340,360];
    hh = [440,420,540,560];
    ii = [380,360,580];
    jj = [380,400];
    kk = [420,440];
    ll = [500,520];
    mm =[480,460,260];
    nn = [520,500,260,280,320];
    oo = [440,420,280];
    renbow = ["#f00","#ffeb00","#7aff00","#00c4ff","#ff0023","#ff8100","#00ffb8","#1000ff","#fb00ff"];
    a = aa[Math.floor(Math.random()*aa.length)];
    b = bb[Math.floor(Math.random()*bb.length)];
    c = cc[Math.floor(Math.random()*cc.length)];
    d = ddd[Math.floor(Math.random()*ddd.length)];
    e = ee[Math.floor(Math.random()*ee.length)]
    f = ff[Math.floor(Math.random()*ff.length)]
    g = gg[Math.floor(Math.random()*gg.length)]
    h = hh[Math.floor(Math.random()*hh.length)]
    i = ii[Math.floor(Math.random()*ii.length)]
    j = jj[Math.floor(Math.random()*jj.length)]
    k = kk[Math.floor(Math.random()*kk.length)]
    l = ll[Math.floor(Math.random()*ll.length)]
    m = mm[Math.floor(Math.random()*mm.length)]
    k = kk[Math.floor(Math.random()*kk.length)]
    n = nn[Math.floor(Math.random()*nn.length)]
    o = oo[Math.floor(Math.random()*oo.length)]
    r1 = renbow[Math.floor(Math.random()*renbow.length)];
    r2 = renbow[Math.floor(Math.random()*renbow.length)];
    r3 = renbow[Math.floor(Math.random()*renbow.length)];
    r4 = renbow[Math.floor(Math.random()*renbow.length)];
    r5 = renbow[Math.floor(Math.random()*renbow.length)];
    r6 = renbow[Math.floor(Math.random()*renbow.length)];
    r7 = renbow[Math.floor(Math.random()*renbow.length)];
    r8 = renbow[Math.floor(Math.random()*renbow.length)];
    r9 = renbow[Math.floor(Math.random()*renbow.length)];
    r10 = renbow[Math.floor(Math.random()*renbow.length)];
    r11 = renbow[Math.floor(Math.random()*renbow.length)];
    r12 = renbow[Math.floor(Math.random()*renbow.length)];
    r13 = renbow[Math.floor(Math.random()*renbow.length)];
    r14 = renbow[Math.floor(Math.random()*renbow.length)];
    r15 = renbow[Math.floor(Math.random()*renbow.length)];
      
    ctx.fillStyle= r1;
    ctx.fillRect(460,a,xl,yl);

    ctx.fillStyle= r2;
    ctx.fillRect(400,b,xl,yl);

    ctx.fillStyle= r3;
    ctx.fillRect(640,c,xl,yl);

    ctx.fillStyle= r4;
    ctx.fillRect(520,d,xl,yl);

    ctx.fillStyle= r5; 
    ctx.fillRect(e,100,xl,yl);

    ctx.fillStyle= r6;
    ctx.fillRect(f,540,xl,yl);

    ctx.fillStyle= r7;
    ctx.fillRect(340,g,xl,yl); 

    ctx.fillStyle= r8; 
    ctx.fillRect(h,240,xl,yl);

    ctx.fillStyle= r9;
    ctx.fillRect(i,300,xl,yl);
    ctx.fillStyle= r10;
    ctx.fillRect(360,j,xl,yl);

    ctx.fillStyle= r11;
    ctx.fillRect(380,k,xl,yl); 

    ctx.fillStyle= r12;
    ctx.fillRect(420,l,xl,yl);

    ctx.fillStyle= r13;
    ctx.fillRect(600,m,xl,yl);

    ctx.fillStyle= r14;
    ctx.fillRect(580,n,xl,yl);

    ctx.fillStyle= r15;
    ctx.fillRect(620,o,xl,yl);
    
}
function mywriteoff(){ 

    //F
    ctx.fillStyle= r15;
    ctx.fillRect(50,50,40,280);
    ctx.fillRect(90,50,120,40);
    ctx.fillRect(90,160,70,40);
    
    //U
    ctx.fillStyle= r14;
    ctx.fillRect(230,50,40,200);
    ctx.fillRect(310,50,40,200);
    ctx.fillRect(230,220,120,30);

    //C
    ctx.fillStyle= r13;
    ctx.fillRect(640,50,30,200);
    ctx.fillRect(640,50,120,40);
    ctx.fillRect(640,220,120,40);
    
    //K
    ctx.fillStyle= r12;
    ctx.fillRect(800,50,40,280);
    ctx.fillRect(840,160,40,40);
    ctx.fillRect(850,140,40,40);
    ctx.fillRect(870,120,40,40); 
    ctx.fillRect(890,100,40,40);
    ctx.fillRect(910,80,40,40);
    ctx.fillRect(910,50,40,40);
    ctx.fillRect(850,200,40,40);
    ctx.fillRect(870,220,40,40); 
    ctx.fillRect(890,240,40,40);
    ctx.fillRect(910,260,40,40);
    ctx.fillRect(910,290,40,40);   
}
