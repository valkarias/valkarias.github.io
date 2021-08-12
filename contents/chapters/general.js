var content = document.getElementById("main");

//i hate dicts.
var NAMES = [
    "Getting Started", 
    "Data Types", 
    "Strings",
    "Lists",
    "Operators",
    "Control Flow",
    "Functions",
    "Classes",
    "Modules",

];

var URLs = [
    "./getting-started.html", 
    "./data-types.html", 
    "./strings.html",
    "./lists.html",
    "./operators.html",
    "./control-flow.html",
    "./functions.html",
    "./classes.html",
    "./modules.html",
];
//

function generateHeader() {
    var h3 = document.createElement('h3');
    var t = document.createTextNode("Other Content");
    h3.appendChild(t);

    h3.title = "Other Content";
    content.appendChild(h3);
}

function generateUrls() {
    generateHeader();

    var table = document.createElement('ul');
    table.setAttribute("class", "table");
    content.appendChild(table);

    for (let i = 0; i < URLs.length; i++) {
        var li = document.createElement('li');
        li.setAttribute("style", "padding: 3px;");

        var a = document.createElement('a');
        var t = document.createTextNode(NAMES[i] + " #");
        a.appendChild(t);

        a.title = NAMES[i];
        a.href = URLs[i];
        
        li.appendChild(a);
        table.appendChild(li);
    }
}

generateUrls();