console.log("hello world!");

document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo");

    if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
        document.querySelector(".cross").style.display = "none";
        setTimeout(() => {
            document.querySelector(".ham").style.display = "inline";
        }, 350);
    } else {
        document.querySelector(".ham").style.display = "none";
        setTimeout(() => {
            document.querySelector(".cross").style.display = "inline";
        }, 350);
    }
});

// document.querySelector(".hamburger").addEventListener("click",()=>{
//     document.querySelector(".sidebar").classList.toggle("sidebarGo")

//     if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
//         // document.querySelector(".cross").style.display = "none";
//         setTimeout(() => {
//             document.querySelector(".ham").style.display = "inline";
//         }, 350);
//     } else {
//         document.querySelector(".ham").style.display = "none";
//         setTimeout(() => {
//             document.querySelector(".cross").style.display = "inline";
//         }, 350);
//     }

// });
