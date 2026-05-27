const portfolio =
document.getElementById("portfolio");

const skills =
document.getElementById("skills");

const about =
document.getElementById("about-me");


const portfolioBtn =
document.getElementById("portfolio-btn");

const skillsBtn =
document.getElementById("skills-btn");

const aboutBtn =
document.getElementById("about-btn");


function showSection(section){

portfolio.style.display="none";
skills.style.display="none";
about.style.display="none";

portfolioBtn.classList.remove("active-btn");
skillsBtn.classList.remove("active-btn");
aboutBtn.classList.remove("active-btn");


if(section==="portfolio"){

portfolio.style.display="flex";
portfolioBtn.classList.add("active-btn");

}

if(section==="skills"){

skills.style.display="flex";
skillsBtn.classList.add("active-btn");

}

if(section==="about"){

about.style.display="flex";
aboutBtn.classList.add("active-btn");

}

}


portfolioBtn.onclick=
()=>showSection("portfolio");

skillsBtn.onclick=
()=>showSection("skills");

aboutBtn.onclick=
()=>showSection("about");



document.addEventListener(
"DOMContentLoaded",
()=>{

const toggle=
document.getElementById(
"toggleTheme"
);

function setTheme(
isDark
){

document.body.classList.toggle(
"dark-theme",
isDark
);

localStorage.setItem(
"isDark",
isDark
);

}

toggle.addEventListener(
"click",
()=>{

setTheme(
!document.body.classList.contains(
"dark-theme"
)

);

}

);

setTheme(
localStorage.getItem(
"isDark"
)==="true"
);

showSection(
"portfolio"
);

}
);