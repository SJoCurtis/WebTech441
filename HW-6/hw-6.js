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
var myImage = new Image (900, 500);
myImage.src = "../HW-6/Pics/rainbowbritelove.gif"

let body = document.body;
body.innerText = "";

body.style.padding = "0 em";
body.style.margin="0 em";
body.style.backgroundImage = 'url(http://blog.codegrape.com/wp-content/uploads/2017/09/revamp-website-2.gif)';

let the = document.createElement("div");
let theChild = document.createElement("h1");
let theChild2 = document.createElement('p');
let theChild3 = document.createElement('P');
let theChild4= document.createElement('h3');
let theChild5= document.createElement('p');
let theChild6 = document.createElement('a');
theChild.innerText = "💖 ☁ ☁ ☁ I LOVE RAINBOWS ☁ ☁ ☁ 💖 ";
theChild2.innerText="Founded in 1841, St. Mary's established by the jesuit order was the first permanent settlement by European descendants in what would become the State of Montana (Wikipedia).";
theChild3.innerText="Although this might be seen as the first foothold to an abhorrent conquest of native peoples, it is nevertheless a part of a shared history. ";
theChild4.innerText="Words of Wisdom"
theChild5.innerText="Those who cannot remember the past are condemned to repeat it- George Santayana"
theChild6.innerText="Learn About Rainbow Brite";
theChild.setAttribute("style","padding:2em; margin:0; font-family: 'Allan'; font-weight:bold; text-align:center; color:#FF3232");
theChild2.setAttribute("style","padding:0em; margin:0; font-style:italic; text-align:center; color:#fcffd7");
theChild3.setAttribute("style","padding:1em; margin:0;  font-weight:bold;  text-align:center; color:#fcffd7");
theChild4.setAttribute("style","padding:1em; margin:0;  font-weight:bold;  text-align:center; color:#fcffd7");
theChild5.setAttribute("style","padding:0em; margin:0;  font-style:italic;  text-align:center; color:#fcffd7");
theChild6.setAttribute("style","padding:0em; margin:600px; color:#FF69B4");
theChild6.setAttribute("href","https://www.huffingtonpost.com/kenyth-mogan/the-colorful-history-of-r_b_10345612.html");

myImage.setAttribute("style","padding:0em; margin:300px");

the.appendChild(theChild);
the.appendChild(myImage);
the.appendChild(theChild6);

the.appendChild(theChild2);
the.appendChild(theChild3);
the.appendChild(theChild4);
the.appendChild(theChild5);

body.appendChild(the);
