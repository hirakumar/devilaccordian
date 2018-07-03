const accordion = function(selectorEle){
	
	let main = document.querySelector(selectorEle);
	if(!main)
		return false;
	
	this.descs = main.querySelectorAll(".accordionDesc");
	this.titles= main.querySelectorAll(".accordionTitle");
	this.panels = main.querySelectorAll(".panel");
	console.log("I am all right"+ this.descs);
	this.hideAllPanels();
	
	// Set Click Event on Title
	for(let index of this.titles){
		index.addEventListener("click",this.hideORshow.bind(this),true);
	}
	
}
accordion.prototype.hideAllPanels=function(){
	console.log("Hiding all Panels ("+this.panels.length+")");
	
	for(let index of this.panels ){
		if([...index.classList].includes("on")){
			//console.log("I found");
		}else{
			index.classList.add("off");
		}
	}

}
accordion.prototype.descs;
accordion.prototype.titles;
accordion.prototype.hideORshow=function(e){
	
	//console.log(e.currentTarget.parentElement);
	let parentEle=e.currentTarget.parentElement;
	let parentEleClass=[...parentEle.classList];
	// If panel parentelement have panel class
	
	for(let index of this.panels ){
		if(index==parentEle){
			console.log("I found my parent");
			let ownDesc=index.querySelector('.accordionDesc');
			if([...index.classList].includes("on")){
				index.classList.remove("on");
				index.classList.add("off");
				
			}else if([...index.classList].includes("off")){
				index.classList.remove("off");
				index.classList.add("on");
				
				
				
			}
			
			
		}else{
			index.classList.add('off');
			index.classList.remove('on');
		}
	}
	
}


