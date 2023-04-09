// ANY UNAUTHORIZED CHANGES TO THIS SCRIPT WON'T BE MERGED

repoLink = "https://raw.githubusercontent.com/iByNiki/femboy.guide/main/"

cssLinks = {

    "/": "assets/css/home.css",
    "/home": "assets/css/home.css"

}

pathName = window.location.pathName.toLowerCase();

if (cssLinks.contains(pathName)) {

    console.log('<link rel="stylesheet" href="' + repoLink + cssLinks[pathName] + '">');
    document.write('<link rel="stylesheet" href="' + repoLink + cssLinks[pathName] + '">');

}