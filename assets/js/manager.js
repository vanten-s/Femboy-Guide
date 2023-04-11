// ANY UNAUTHORIZED CHANGES TO THIS SCRIPT WON'T BE MERGED

// This script is used to add css to the pages, which is not supported natively by wiki.js
// (it is, but it's not compatible with github)

// An html code embedding the script is added at the end of the body tag

prefix = "/en";
mainSheetLink = prefix + "/assets/css/main.css";

cssLinks = {

    "/": prefix + "/assets/css/home.css",
    "/home": prefix + "/assets/css/home.css",
    "/en/tutorials/clothing": prefix + "/assets/css/clothing.css"

}

pathName = window.location.pathname.toLowerCase();

document.write('<link rel="stylesheet" type="text/css" href="' + mainSheetLink + '">'); // main style inject

if (cssLinks[pathName] !== undefined) { // page style inject

    document.write('<link rel="stylesheet" type="text/css" href="' + cssLinks[pathName] + '">');

}