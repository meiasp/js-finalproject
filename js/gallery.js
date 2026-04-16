function upDate(previewPic){

    const box = document.getElementById('image');
    document.getElementById('image').innerHTML = previewPic.alt;
    box.style.backgroundImage = "url('" + previewPic.src + "')";
    console.log('"' + previewPic.alt + '"' + "showed");
}

	function unDo(){

    const box = document.getElementById('image');
    box.style.backgroundImage = "url()";
    box.innerHTML = "Hover over an image below to display here.";
    console.log("mouse leaved");
		
	}