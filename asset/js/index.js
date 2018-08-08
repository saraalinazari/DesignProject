window.onload=function(){
    
     let addBtn = document.getElementById("addBtn");
     addBtn.addEventListener("click",addButtons);//it is used to attach click event to "Add" button 
     //following line is used to attach click event listener to catch clicks on new buttons.
     // Click event has been attached to the parent div that is supposed to have new buttons as children 
     let showingBtn = this.document.getElementById("showingBtn").addEventListener("click",alertShow); 
     let cleanBtn = document.getElementById("cleanBtn");
     cleanBtn.addEventListener("click",cleanButtons);//it is used to attach click event to "Clean" button
     let removeSlowBtn = document.getElementById("removeSlowBtn");
     removeSlowBtn.addEventListener("click",removeSlowButtons);// 
}

//following function is get called when user clicks on "Add" button.
//it creates 40 buttons by using a loop.
function addButtons(){      
    let showingBtn = document.getElementById("showingBtn");
    let showButtons = document.getElementById("showButtons");
    let mainContainer = document.getElementById("mainContainer");
    for(let i=1;i<=40;i++){
        var button = document.createElement("button");
        if(i<10){
            button.innerText = "button 0" + i;
        }
        else{
            button.innerText = "button " + i;
        }
        let att = document.createAttribute("class");      
        att.value = "buttonStyle1";                           
        button.setAttributeNode(att);  
        button.id = i;
        showingBtn.appendChild(button);
        showButtons.appendChild(showingBtn);
        mainContainer.appendChild(showButtons);
       
    }
}

//Following function is getting called when user clicks on new buttons.
function alertShow(){
   alert("You click on Button with Number: "+event.target.id);
}



//following function is getting called when user clicks on "Clean" button to remove all new generated buttons.
function cleanButtons(){
    let showingBtn = document.getElementById("showingBtn");
    let arr=[];
    showingBtn.childNodes.forEach(element => {
        arr.push(element);
    });
    arr.forEach(element=>{
        showingBtn.removeChild(element);
    });
}


//following function is getting called when user clicks on "Slow Clean".
// removeSlowButtons() calls removeNext()
function removeSlowButtons() {
    let showingBtn = document.getElementById("showingBtn");
    let bts = showingBtn.childNodes;
    let arr=[];
    bts.forEach(element=>{
        arr.push(element);
    });
    removeNext(arr,showingBtn);
   
}

//removeNext() sets a timer and call itself after one second 
// during each call it removes a button 
function removeNext(btns,showingBtn){
    if(btns.length){
        let b = btns.shift();
        showingBtn.removeChild(b);
        setTimeout(removeNext,1000,btns,showingBtn);
    }
    

}

        


