let isShown = true;


document.getElementsByClassName("hamburger")[0].addEventListener("click", sideBar);

function sideBar() {
    let sideBarHideShow = document.getElementsByClassName("navStyle")[0];
    let content = document.getElementsByClassName("container-content")[0];

    if (isShown) {
        sideBarHideShow.style.display = "none";
        if(window.innerWidth <=750){
            content.style.position = "absolute";
            content.style.left = "0vw";
            content.style.width = "100%";
            isShown = false;
        } else {
            content.style.position = "absolute";
            content.style.left = "0vw";
            content.style.width = "100%";
            isShown = false;
            console.log(isShown);
        }
        
    }
    else{
        sideBarHideShow.style.display = "block";
        if (window.innerWidth <=750){
            content.style.position = "absolute";
            content.style.left = "11vw";
            content.style.width = "calc(100% - 11vw)";
            isShown = true;
        }else{
            content.style.position = "absolute";
            content.style.left = "11vw";
            content.style.width = "calc(100% - 11vw)";
            isShown = true;
            console.log(isShown);
        }
        
    }
}


