"use strict";
var isFirefox = "undefined" != typeof InstallTrigger,
    mobileVar = isMobile.any;
$(".bg-cover").imagesLoaded({
    background: !0
}, function(e) {
    TweenMax.fromTo($(".bg-cover"), .25, {
        autoAlpha: 0
    }, {
        autoAlpha: 1
    })
}), $(window).load(function() {
    function e() {
        o.countdown("resume")
    }
    var n = "#EC008C";
    $("#minimos-4").length && (n = "#F8EB31"), $("#drifter").length ? initDrifter("drifter", n) : $("#particles-js").length && initStompParticles();
    var o = $(".st-countdown");
    o.countdown("2017/09/01", function(e) {
        $(this).html(e.strftime("%D Days %H:%M:%S"))
    }), $(".btn-count").hover(function() {
        o.countdown("pause"), $(".st-countdown").html("Bid on Flippa")
    }, function() {
        o.countdown("resume")
    });
    var a, t, s = $(".main-content p"),
        r = $(".main-content h3"),
        i = $(".main-content ul"),
        c = "20px",
        l = new TimelineMax({
            paused: !0,
            delay: .05,
            onComplete: function() {
                i.length && TweenMax.to(i, .75, {
                    autoAlpha: 1,
                    ease: Linear.easeNone
                })
            },
            onCompleteParams: []
        });
    isFirefox ? c = "0px" : mobileVar && (c = "2px"), o.countdown("pause"), r.length && (t = new SplitText(r, {
        type: "words,chars",
        wordsClass: "gpu-hack sven-word-++",
        charsClass: "sven-char-++"
    }), l.staggerFromTo(t.chars, .4, {
        y: "-50%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1,
        ease: Bounce.easeOut
    }, .08), l.addLabel("end"), l.call(e, [])), s.length && (a = new SplitText(s, {
        type: "words,chars",
        wordsClass: "gpu-hack s-word sven-word-++",
        charsClass: "s-char sven-char-++"
    }), TweenMax.set(a.chars, {
        force3D: !0,
        rotationZ: "0.01deg"
    }), $.each(a.chars, function(e, n) {
        var o = $(n).css("color"),
            a = "end+=" + .04 * e;
        l.fromTo($(n), .8, {
            opacity: 0,
            textShadow: "0 0 " + c + " " + o,
            scale: 1.2,
            color: "transparent"
        }, {
            opacity: 1,
            scale: 1,
            color: o,
            textShadow: "none",
            ease: Linear.easeNone
        }, a)
    })), TweenMax.set($(".main-content"), {
        visibility: "visible"
    }), TweenMax.set($(".preloader"), {
        display: "none"
    }), l.play()
});
