function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    Classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/XXMFGddjR/model.json" , modelready);
}

function modelready(){
    Classifier.classify(gotresult);
}

function  gotresult(error , results){
    if (error){
        console.log(error);
    
    }
}

random_number_r = Math.floor(Math.random ()* 255) + 1;
    random_number_g = Math.floor(Math.random ()* 255) + 1;
    random_number_b = Math.floor(Math.random ()* 255) + 1;
    document.getElementById("result_label").innerHTML="I Can hear-  " + results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy-   " + (results[0].confidence*100) + "%";
    document.getElementById("result_label").style.color="rgb("+random_number_r + " , "+ random_number_g + " ,  "+ random_number_b +" )";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r + " , "+ random_number_g + " ,  "+ random_number_b +" )";
    
    img=document.getElementById("dog.jpeg");
    img1=document.getElementById("cat.jpeg");
    img2=document.getElementById("lion.webp");

    if (results[0].label== "barking"){
        img.src="dog gif.gif";
        img1.src="cat.jpeg";
        img.src="a";
        img.src="lion.webp";

        
        }else if (results[0].label== "meowing"){
            img.src="dog.png";
            img1.src="cat gif.gif";
            img.src="lion.webp";
          
        }
        else if (results[0].label== "roaring"){
            img.src="dog.png";
            img1.src="cat.png";
            img.src="giphy lion.gif";
           
        }