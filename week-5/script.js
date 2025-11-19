let isShown = true;

//document.getElementById = tells javascript what to listen for
//.addElementListener("eventtype", functionName) = tells javascript what to do when event happens
document.getElementById("menu").addEventListener("click", sideBar);

function sideBar() {
    let sideBarHideShow = document.getElementsByClassName("navStyle")[0];
    let content = document.getElementsByClassName("container-content")[0];
    
 
      
        if (isShown) {
            sideBarHideShow.style.display = "none";
            if (window.innerWidth <= 600) {
                    content.style.position = "absolute";
                    content.style.left = "0vw";
                    content.style.width = "100%";
                    isShown = false;
                    console.log("mini view" + isShown);
            } else {
                content.style.position = "absolute";
                content.style.left = "12vw";
                content.style.width = "100%";
                isShown = false;
                console.log(isShown);
            }
            
        }
        else {
            sideBarHideShow.style.display = "block";
              if (window.innerWidth <= 600) {
                    content.style.position = "absolute";
                    content.style.left = "0vw";
                    content.style.width = "100%";
                     isShown = true;
                }
                else {
                    content.style.position = "absolute";
                    content.style.left = "25vw";
                    content.style.width = "65vw";
                    isShown = true;
                    console.log("mini view" + isShown);
            
        }
    }
}
    



