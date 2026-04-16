function upDate(previewPic){

    const box = document.getElementById('image');
    document.getElementById('image').innerHTML = previewPic.alt;
    box.style.backgroundImage = "url('" + previewPic.src + "')";

}

function unDo(){

    const box = document.getElementById('image');
    box.style.backgroundImage = "url()";
    box.innerHTML = "Hover over an image below to display here.";
	
}

const boxImage = document.getElementsByClassName('preview');
    for (let i = 0; i < boxImage.length; i++){
        boxImage[i].setAttribute('tabindex','0');
        boxImage[i].addEventListener('mouseover',function(){
            upDate(this);
            console.log("mouse hover works [" + this.alt + "]");
        });
        boxImage[i].addEventListener('mouseleave',function(){unDo();});
        boxImage[i].addEventListener('focus',function(){
            upDate(this);
            console.log("tab works [" + this.alt + "]");
        });
        boxImage[i].addEventListener('blur',function(){unDo();});
    }
    
for (let i = 0; i < boxImage.length; i++) {
    console.log("loop run for index:", i);
}
