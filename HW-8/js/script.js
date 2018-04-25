//Function that allows the loading into an iframe.
function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
//Variable for alternating backgroun colors.
var colors = ['#ffffe6', '#f2ffe6', '#e6ffe6', ' #e6ffff', '#e6ffff', '#e6e6ff', '#ecf9f2', '#fff5e6', "#ffffcc", "#cceeff", "#f2d9e6", "#f0f0f5"];
var currentQuote = '',
    currentAuthor = '';
// Function responisble for the window that opens with the tumblr url.
function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
// Retrieves the suprise/random quote from mashape.com in JSON format and contains the tumblr widget, and opacity, etc.
function getQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function(r) {
            if (typeof r === 'string') {
                r = JSON.parse(r);
            }
            currentQuote = r.quote;
            currentAuthor = r.author;
            if (inIframe()) {
              $('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + encodeURIComponent(currentAuthor) + '&content=' + encodeURIComponent(currentQuote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
            }
            $(".quote-text").animate({
                    opacity: 0
                }, 500,
                function() {
                    $(this).animate({
                        opacity: 1
                    }, 500);
                    $('#text').text(r.quote);
                });

            $(".quote-author").animate({
                    opacity: 0
                }, 500,
                function() {
                    $(this).animate({
                        opacity: 1
                    }, 500);
                    $('#author').html(r.author);
                });
// This is the math controlling the "random" color background changes.
            var color = Math.floor(Math.random() * colors.length);
            $("html body").animate({
                backgroundColor: colors[color],
                color: colors[color]
            }, 1000);
            $(".button").animate({
                backgroundColor: colors[color]
            }, 1000);
        }
    });
}
// Clicky click.
$(document).ready(function() {
    getQuote();
    $('#new-quote').on('click', getQuote);
    $('#tumblr-quote').on('click', function() {
        if (!inIframe()) {
            openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + encodeURIComponent(currentAuthor) + '&content=' + encodeURIComponent(currentQuote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
        }
    });
});
