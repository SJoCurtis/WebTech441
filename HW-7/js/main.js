var myAge = prompt("What is your age?");
if(myAge>=14){
  confirm("Play On");
}
else{
  alert("Play With Caution");
}
var name = prompt("What's Your Name?");

var current_page = 0;
$(document).ready(function () {
    load_page(0);
    $('#response').on('click', '.choice', function () {
        var target = $(this).data('target');
        load_page(target);
    });
});

function load_page(id) {
    // Fetch JSON for page data associated with given ID
    var page_data = PAGES[id];

    clear_page();
    set_page_text(page_data.text);
    if (page_data.type === 'choice') {
        for (var choice in page_data.choices) {
            var choice_data = page_data.choices[choice];
            add_choice(choice_data.text, choice_data.target);
        }
    }
}

function set_page_text(text) {
    $("#page_text").append("<p>" + text + "</p>");
}

function add_choice(text, target) {
    $("#response").append("<button class=choice data-target=" + target + ">" + text + "</button>");
}

function clear_page() {
    $("#page_text").empty();
    $("#response").empty();
}

// Page data
var PAGES = [{
    'text': 'From whence do you come, young one?',
        'type': 'choice',
        'choices': [{
        'text': 'I am a traveler exploring the world.',
            'target': 1
    }, {
        'text': 'I come from a farm on the outskirts of town.',
            'target': 2
    }, {
        'text': 'I hail from a wealthy family. My father is a renowned merchant.',
            'target': 3
    }, {
        'text': 'You don\'t need to know that.',
            'target': 4
    }]
}, {
    'text': 'Ah, a traveler? Fascinating!',
        'type': 'choice',
        'choices': [{
        'text': 'Yes. Ask me that again.',
            'target': 0
    }]
}, {
    'text': 'Ah, the rural life on the farm?',
        'type': 'choice',
        'choices': [{
        'text': 'Yes. Ask me that again.',
            'target': 0
    }]
}, {
    'text': 'A merchant\'s child? You\'re quite the young aristocrat, aren\'t you?',
        'type': 'choice',
        'choices': [{
        'text': 'Yes. Ask me that again.',
            'target': 0
    }]
}, {
    'text': 'Ah, a shady type. Fine, you don\'t have to tell me.',
        'type': 'choice',
        'choices': [{
        'text': 'Good. Ask me that again.',
            'target': 0
    }]
}];
