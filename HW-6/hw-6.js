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
//Image Set Up
var myImage = new Image (600, 500);
var myImage1 = new Image (600,420);
myImage.src = "../HW-6/Pics/rainbowbritelove.gif"
myImage1.src ="../HW-6/Pics/rainbowlogo.jpg"
//Body Set Up
let body = document.body;
body.innerText = "";
body.style.padding = "20px";
body.style.margin="40px";
body.style.backgroundImage = 'url(http://blog.codegrape.com/wp-content/uploads/2017/09/revamp-website-2.gif)';
//Element Type
let the = document.createElement("div");
let theChild = document.createElement("h1");
let theChild2 = document.createElement('p');
let theChild3 = document.createElement('P');
let theChild4 = document.createElement('h2');
let theChild5 = document.createElement('p');
let theChild6 = document.createElement('p');
let theChild7 = document.createElement('a');
let theChild8 = document.createElement('a');
//Element Content
theChild.innerText = "☁ ☁ ☁ ☁ I LOVE RAINBOWS ☁ ☁ ☁ ☁";
theChild2.innerText="A rainbow is a bow or arc of prismatic colors appearing in the heavens opposite the sun and caused by the refraction and reflection of the sun's rays in drops of rain.";
theChild3.innerText="The rainbow represent happiness and joy. It can be elusive. But sometimes it requires a storm to enjoy a rainbow. The rainbow and happiness require something first.";
theChild4.innerText="RAINBOW POSITIVITY"
theChild5.innerText="If life is blue, just select another color from the rainbow. - Unknown"
theChild6.innerText="The true harvest of my daily life is somewhat as intangible and indescribable as the tints of morning or evening. It is a little star dust caught, a segment of the rainbow which I have clutched. - Henry David Thoreau"
theChild7.innerText="Learn About Rainbow Brite";
theChild8.innerText="More Rainbow Positivity"
//Styling
theChild.setAttribute("style","padding:2em; margin:0; font-family:; font-weight:bold; text-align:center; color:#FF3232");
theChild2.setAttribute("style","padding:0em; margin:0; font-weight:bold; text-align:center; color:#202020");
theChild3.setAttribute("style","padding:1em; margin:0;  font-weight:bold; text-align:center; color:#202020");
theChild4.setAttribute("style","padding:1em; margin:0;  font-weight:bold; text-align:center; color:#00008b");
theChild5.setAttribute("style","padding:0em; margin:0; font-weight:bold; font-style:italic; text-align:center; color:#202020");
theChild6.setAttribute("style","padding:0em; margin:0; font-weight:bold; font-style:italic; text-align:center; color:#202020");
theChild7.setAttribute("style","padding:0em; margin:500px; color:#FF69B4");
theChild7.setAttribute("href","https://www.huffingtonpost.com/kenyth-mogan/the-colorful-history-of-r_b_10345612.html");
theChild8.setAttribute("style","padding:0em; margin:500px; color:#885EAD");
theChild8.setAttribute("href","http://www.quotesoup.com/quotes/rainbow");
//Image Styling
myImage.setAttribute("style","padding:0em; margin:340px");
myImage1.setAttribute("style","padding:0em; margin:340px");
//Positions
the.appendChild(theChild);
the.appendChild(myImage);
the.appendChild(theChild2);
the.appendChild(theChild3);
the.appendChild(theChild4);
the.appendChild(theChild5);
the.appendChild(theChild6);
the.appendChild(theChild8);
the.appendChild(myImage1);
the.appendChild(theChild7);

body.appendChild(the);
//The End
