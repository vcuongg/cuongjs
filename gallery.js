

function upDate(previewPic){
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerHTML = previewPic.alt;
}
   
       function unDo(){
        let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url()"; 
    imageDiv.innerHTML = "Hover over an image to display here.";
           
       }