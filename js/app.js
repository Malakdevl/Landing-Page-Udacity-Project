
// *Add Item List in Nav Bar
// *built dynamically
// *4 Section

const addItemInNav = document.querySelector(".list-bar");

const firstSection = document.createElement("li");
firstSection.classList.add("li-item");
firstSection.innerHTML="What is?";
addItemInNav.appendChild(firstSection);

const secondSection = document.createElement("li");
secondSection.classList.add("li-item");
secondSection.innerHTML="Geography";
addItemInNav.append(secondSection);

const thirdSection = document.createElement("li");
thirdSection.classList.add("li-item");
thirdSection.innerHTML="People";
addItemInNav.appendChild(thirdSection);

const forthSection = document.createElement("li");
forthSection.classList.add("li-item");
forthSection.innerHTML="Map";
addItemInNav.append(forthSection);



// Add Active Class to Current Element

let liItem = addItemInNav.getElementsByClassName("li-item");

for (let i = 0; i < liItem.length; i++) {
  liItem[i].addEventListener("click", function() {
    let activeClass = document.getElementsByClassName("active");
    if (activeClass.length > 0) {
      activeClass[0].className = activeClass[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}


// Scroll to Anchor
// When clicking an item from the navigation menu

firstSection.addEventListener("click",function(){
    const offsetTop =  document.querySelector("#first-section").offsetTop;
    
    scroll({
        top: offsetTop,
        behavior: "smooth"
      });
});

secondSection.addEventListener("click",function(){
    const offsetTop =  document.querySelector("#second-section").offsetTop;
    scroll({
        top: offsetTop,
        behavior: "smooth"
      });
});


thirdSection.addEventListener("click",function(e){
    const offsetTop =  document.querySelector("#third-section").offsetTop;
    scroll({
        top: offsetTop,
        behavior: "smooth"
      });
      e.preventDefault();
});


forthSection.addEventListener("click",function(e){
    const offsetTop =  document.querySelector("#forth-section").offsetTop;
    scroll({
        top: offsetTop,
        behavior: "smooth"
      });
      e.preventDefault();
});


// *Add a scroll to top button on the page
// *that’s only visible when the user scrolls

const buttonScroll = document.getElementById("scroll-top");

window.onscroll = function() {
    scrollFunc()
};

function scrollFunc(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
      let viewNav = addItemInNav.getBoundingClientRect();
        buttonScroll.style.display = "block";
      } else {
        buttonScroll.style.display = "none";

      }
};

function topfun(){
    document.documentElement.scrollTop = 0;
};