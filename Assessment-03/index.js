var postcard = document.getElementById("postcard"),
    to = document.getElementById("to"),
    message = document.getElementById("message"),
    from = document.getElementById("from"),
    controls = document.getElementById("controls"),
	names = document.getElementById("name"),
    myMessage = document.getElementById("myMessage"),
    sender = document.getElementById("sender"),
    bgImg = document.getElementById("bgImg"),
	addGall = document.getElementById("addGal"),
    saveArr = document.getElementById("saveArr"),
    loadArr = document.getElementById("loadArr"),
    preview = document.getElementById("preview"),
	
	allCards = [],
	num = 1;

document.getElementById("name").addEventListener("keyup",       function(ev){
       if(ev.keyCode == 13) {
           to.innerText = "To: " + this.value;
       } 
    });

document.getElementById("myMessage").addEventListener("keyup", function(ev){
        if(ev.keyCode == 13){
            message.innerText = this.value;
        } 
});

document.getElementById("sender").addEventListener("keyup", function(ev){
        if(ev.keyCode == 13){
            from.innerText = "From: " + this.value;
        }
});

document.getElementById("bgImg").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
     
		if(this.value == "auto") {
			postcard.style.backgroundImage = "url('imgs/auto"+num+".jpg')";
		} else if (this.value == "") {
            postcard.style.backgroundImage = "url('imgs/default.png')";
		} else {
            postcard.style.backgroundImage = "url("+this.value+")"; 
		}
		
		num++;
	    if( num >= 4) {
			num = 1;
		}
    }
});

addGall.addEventListener("click", function(){
	var obj = {
		bgImg: postcard.style.backgroundImage,
		to: to.innerText,
		message: message.innerText,
		from: from.innerText
	}
	allCards.push(obj);
 // console.log(allCards);
    createPostcard(to.value, bgImg.value);
});

saveArr.addEventListener("click", function(){
	localStorage.setItem("postCards", JSON.stringify(allCards));
});
    
loadArr.addEventListener("click", function() {
	preview.innerHTML = "";
	
	var savedCards = JSON.parse(localStorage.getItem("postCards"));
	
	for(var i=0;i<savedCards.length;i++) {
		// the variables are in this order because line 53 is set to have to.value and bgimg in order
		createPostcard(savedCards[i].to, savedCards[i].bgImg, savedCards[i].message, savedCards[i].from)
	}
});  

function createPostcard(to, bgImg) {
	
	var newDiv = document.createElement("div");
    var newPreview = document.createElement("div");
    
    newDiv.className = "containers";
    newPreview.className = "newPrev";
    
    newDiv.appendChild(newPreview);
    preview.appendChild(newDiv);
	
	if(bgImg == "auto") {
		newDiv.style.backgroundImage = "url('imgs/auto"+num+".jpg')";
	} else if (bgImg == "") {
		newDiv.style.backgroundImage = "url('imgs/default.png')";
	} else {
		newDiv.style.backgroundImage = "url("+bgImg+")";
	}
	
	num++;
	console.log(num);
	if(num >= 4) {
		num = 1;
	}

};   