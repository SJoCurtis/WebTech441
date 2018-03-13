/*
HOMEWORK 6

For this assignment, you are to develop a simple webpage that includes;
- One or a few headings.
- A couple paragraph elements.
- An image or two.
- At least one link.

Furthermore, this page should “look modern”; meaning it should include styling beyond the default browser styling. However, it does not need to fully follow RWD principles.

To do this, you will utilize the DOM API and Selector API.

You are not allowed to alter the HTML file. You are also not allowed to utilize a general CSS page. Everything must be done through the JavaScript file. In the JS file, you should;
- create new nodes,
- attach them to parent nodes (and the document node),
- add their innerText (if appropriate)
- and finally style them.

You are not allowed to use either;
-` document.write();
- element.innerHTML = "";

Instead, you should use the appropriate methods, as mentioned in the readings.

To begin, you should select the body element from the DOM, then remove its existing child nodes. You may then begin to create your web page.

*/
var myImage = new Image (900, 501);
myImage.src = "../HW-6/Pics/rainbowbritelove.gif"

let body = document.body;
body.innerText = "";

body.style.padding = "0 em";
body.style.margin="0 em";
body.style.background = "#030303 url('../HW-6/Pics/rainbowbackgrounddude.jpeg') repeat right top";

let el = document.createElement("div");
let elChild = document.createElement("h1");
let elChild2 = document.createElement('p');
let elChild3 = document.createElement('P');
let elChild4= document.createElement('h3');
let elChild5= document.createElement('p');
let elChild6 = document.createElement('a');
elChild.innerText = "♡ I Love Rainbows ♡";
elChild2.innerText="Founded in 1841, St. Mary's established by the jesuit order was the first permanent settlement by European descendants in what would become the State of Montana (Wikipedia).";
elChild3.innerText="Although this might be seen as the first foothold to an abhorrent conquest of native peoples, it is nevertheless a part of a shared history. ";
elChild4.innerText="Words of Wisdom"
elChild5.innerText="Those who cannot remember the past are condemned to repeat it- George Santayana"
elChild6.innerText="Click Here";
elChild.setAttribute("style","padding:2em; margin:0; text-align:center; color:#fcffd7");
elChild2.setAttribute("style","padding:0em; margin:0; font-style:italic; text-align:center; color:#fcffd7");
elChild3.setAttribute("style","padding:1em; margin:0;  font-weight:bold;  text-align:center; color:#fcffd7");
elChild4.setAttribute("style","padding:1em; margin:0;  font-weight:bold;  text-align:center; color:#fcffd7");
elChild5.setAttribute("style","padding:0em; margin:0;  font-style:italic;  text-align:center; color:#fcffd7");
elChild6.setAttribute("style","padding:0em; margin:600px");
elChild6.setAttribute("href","http://www.saintmarysmission.org/");

myImage.setAttribute("style","padding:0em; margin:200px");

el.appendChild(elChild);
el.appendChild(elChild6);
el.appendChild(myImage);

el.appendChild(elChild2);
el.appendChild(elChild3);
el.appendChild(elChild4);
el.appendChild(elChild5);

body.appendChild(el);
