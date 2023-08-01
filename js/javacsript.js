function ReplaceBrand(clicked_src){
   var target = document.getElementById('windowbrand');

   function newimg() {
     (clicked_src) = (clicked_src).replace('thumb','');
     target.src = (clicked_src);
     console.log(clicked_src);
   }

   onclick = newimg;
}

function ReplaceRRSS(clicked_src){
   var target = document.getElementById('windowrrss');

   function newimg() {
     (clicked_src) = (clicked_src).replace('thumb','');
     target.src = (clicked_src);
     console.log(clicked_src);
   }

   onclick = newimg;
}

function Replace3D(clicked_src){
   var target = document.getElementById('window3D');

   function newimg() {
     (clicked_src) = (clicked_src).replace('thumb','');
     target.src = (clicked_src);
     console.log(clicked_src);
   }

   onclick = newimg;
}

function ReplaceEditorial(clicked_src){
   var target = document.getElementById('windowEditorial');

   function newimg() {
     (clicked_src) = (clicked_src).replace('thumb','');
     target.src = (clicked_src);
     console.log(clicked_src);
   }

   onclick = newimg;
}

function abgif1(hovered_src){
     hovered_src.setAttribute('src', 'img/AB3.gif');
}

function abgif1out(hovered_src){
     hovered_src.setAttribute('src', 'img/AB3.jpg');
}

function abgif2(hovered_src){
     hovered_src.setAttribute('src', 'img/AB4.gif');
}

function abgif2out(hovered_src){
     hovered_src.setAttribute('src', 'img/AB4.jpg');
}

function abgif3(hovered_src){
     hovered_src.setAttribute('src', 'img/AB5.gif');
}

function abgif3out(hovered_src){
     hovered_src.setAttribute('src', 'img/AB5.jpg');
}
