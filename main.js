// ████████╗██╗░░██╗███████╗  ████████╗██╗███╗░░░███╗███████╗  ░██████╗░██████╗░░█████╗░██╗░░░██╗██████╗░
// ╚══██╔══╝██║░░██║██╔════╝  ╚══██╔══╝██║████╗░████║██╔════╝  ██╔════╝░██╔══██╗██╔══██╗██║░░░██║██╔══██╗
// ░░░██║░░░███████║█████╗░░  ░░░██║░░░██║██╔████╔██║█████╗░░  ██║░░██╗░██████╔╝██║░░██║██║░░░██║██████╔╝
// ░░░██║░░░██╔══██║██╔══╝░░  ░░░██║░░░██║██║╚██╔╝██║██╔══╝░░  ██║░░╚██╗██╔══██╗██║░░██║██║░░░██║██╔═══╝░
// ░░░██║░░░██║░░██║███████╗  ░░░██║░░░██║██║░╚═╝░██║███████╗  ╚██████╔╝██║░░██║╚█████╔╝╚██████╔╝██║░░░░░
// ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝  ░░░╚═╝░░░╚═╝╚═╝░░░░░╚═╝╚══════╝  ░╚═════╝░╚═╝░░╚═╝░╚════╝░░╚═════╝░╚═╝░░░░░


var title = "The Time Group ";
var scrollPos = 0;
var scrollSpeed = 150;

function scrollTitle() {
  scrollPos++;
  document.title = title.substring(scrollPos, title.length) + title.substring(0, scrollPos);
  if (scrollPos == title.length) {
    scrollPos = 0;
  }
  setTimeout(scrollTitle, scrollSpeed);
}
scrollTitle();
