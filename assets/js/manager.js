// ANY UNAUTHORIZED CHANGES TO THIS SCRIPT WON'T BE MERGED

// This script is used to add css to the pages, which is not supported natively by wiki.js
// (it is, but it's not compatible with github)

prefix = "/en"

cssLinks = {

    "/": prefix + "/assets/css/home.css",
    "/home": prefix + "/assets/css/home.css"

}

pathName = window.location.pathname.toLowerCase();

if (cssLinks[pathName] !== undefined) {

    document.write('<link rel="stylesheet" type="text/css" href="' + cssLinks[pathName] + '">');

}