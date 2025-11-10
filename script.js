(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            // If name starts with 'j' or 'J', say "Good Bye"
            byeSpeaker.speak(names[i]);
        } else {
            // Otherwise, say "Hello"
            helloSpeaker.speak(names[i]);
        }
    }
})();
