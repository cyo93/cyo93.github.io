document.getElementById("menu").innerHTML = '<div class="topmenu"><a href="index.html">Home</a><ul id="menusdesktop"><li id="menudesktopitem"><a href="about.html">About Me</a></li><li id="menudesktopitem"><a href="Resume.pdf">Resume</a></li><li id="menudesktopitem"><a href="projects.html">Personal Projects</a></li><li id="menudesktopitem"><a href="articles.html">Thoughts</a></li><li id="menudesktopitem"><a href="contact.html">Contact</a></li></ul><a href="javascript:void(0);" class="mobilemenu" onclick="showMobileMenu()"><i class="fa fa-bars"></i></a><div id="menus"><ul id="mobilemenus"><li><a href="about.html">About Me</a></li><li><a href="Resume.pdf">Resume</a></li><li><a href="projects.html">Personal Projects</a></li><li><a href="articles.html">Thoughts</a></li><li><a href="contact.html">Contact</a></li></div></div>';
function showMobileMenu(){
	menus = document.getElementById("menus");
	if(menus.style.display == "none"){
		menus.style.display = "block";
	}
	else{
		menus.style.display = "none";
	}
	
}