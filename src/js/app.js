

const navigate = function (urlLink = "") {
    window.location = urlLink;
}

// ===== variable to know whether nav is open or not

let isNavOpen = false;

// function that makes navigation opens and close 


const manageNav = function () {
console.log("yes")
    if (isNavOpen === false) {
        document.querySelector(".apsara_nav").style.width = "100%";

        isNavOpen = true;

    }
    else {
        document.querySelector(".apsara_nav").style.width = "0%";
        isNavOpen = true;
    }

}