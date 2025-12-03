document.getElementById("menu").innerHTML = '<div class="topmenu"><div class="mobilehome"><a href="index.html">Home</a></div><ul id="menusdesktop"><li class="menudesktopitem"><a href="index.html">Home</a></li><li class="menudesktopitem"><a href="about.html">About Me</a></li><li class="menudesktopitem"><a href="Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li><li class="menudesktopitem"><a href="projects.html">Personal Projects</a></li><li class="menudesktopitem"><a href="articles.html">Thoughts</a></li><li class="menudesktopitem"><a href="contact.html">Contact</a></li></ul><a href="javascript:void(0);" class="mobilemenu" onclick="showMobileMenu()"><i class="fa fa-bars"></i></a><div class="menus" id="menus"><ul id="mobilemenus"><li class="mobilemenuitem"><a href="about.html">About Me</a></li><li class="mobilemenuitem"><a href="Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li><li class="mobilemenuitem"><a href="projects.html">Personal Projects</a></li><li class="mobilemenuitem"><a href="articles.html">Thoughts</a></li><li class="mobilemenuitem"><a href="contact.html">Contact</a></li></div></div>';
menus = document.getElementById("menus");
menus.style.display = "none";
getcurrentmenu();
function showMobileMenu(){
	menus = document.getElementById("menus");
	if(menus.style.display == "none"){
		menus.style.display = "inline";
	}
	else {
		menus.style.display = "none";
	}
	
}

function getcurrentmenu(){
	list = document.getElementsByClassName("menudesktopitem");
	mobilelist = document.getElementsByClassName("mobilemenuitem");
	if(document.title.includes("Homepage")){
		list[0].setAttribute("highlighted", "true");
		document.getElementsByClassName("mobilehome")[0].setAttribute("highlighted", "true");
	}
	if(document.title.includes("About")){
		list[1].setAttribute("highlighted", "true");
		mobilelist[0].setAttribute("highlighted", "true");
	}
	if(document.title.includes("Projects")){
		list[3].setAttribute("highlighted", "true");
		mobilelist[2].setAttribute("highlighted", "true");
	}
	if(document.title.includes("Thoughts")){
		list[4].setAttribute("highlighted", "true");
		mobilelist[3].setAttribute("highlighted", "true");
	}
	if(document.title.includes("Contact")){
		list[5].setAttribute("highlighted", "true");
		mobilelist[4].setAttribute("highlighted", "true");
	}
}