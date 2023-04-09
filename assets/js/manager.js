// ANY UNAUTHORIZED CHANGES TO THIS SCRIPT WON'T BE MERGED

prefix = "/en"

cssLinks = {

    "/": prefix + "/assets/css/home.css",
    "/home": prefix + "/assets/css/home.css"

}

pathName = window.location.pathname.toLowerCase();

if (cssLinks[pathName] !== undefined) {

    console.log('<link rel="stylesheet" type="text/css" href="' + cssLinks[pathName] + '">');
    document.write('<link rel="stylesheet" type="text/css" href="' + cssLinks[pathName] + '">');

}