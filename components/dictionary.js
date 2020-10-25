var dictionary = [
    {
        word:"apple",
        def:"a round fruit seed at its center",
        rel: ["mango","pear","guava"],
        sound : "https://res.cloudinary.com/drqr9l8n4/video/upload/v1603081818/audio/la-factoria-que-me-maten_vaj16o.mp3",
    },
    {
        word:"pear",
        def:"a round fruit seed at its center",
        rel: ["mango","pear","guava"],
        sound : "https://res.cloudinary.com/drqr9l8n4/video/upload/v1603081818/audio/la-factoria-que-me-maten_vaj16o.mp3",
    },
    {
        word:"blackberry",
        def:"a round fruit seed at its center",
        rel: ["mango","pear","guava"],
        sound : "https://res.cloudinary.com/drqr9l8n4/video/upload/v1603168776/audio/Rinrin_dy4th0.mp3"
    },
    {
        word:"strawberry",
        def:"a round fruit seed at its center",
        rel: ["mango","pear","guava"],
        sound : "https://res.cloudinary.com/drqr9l8n4/video/upload/v1603168776/audio/Rinrin_dy4th0.mp3"
    },
];

init = function(){
    for (var i = 0; i < dictionary.length; i++) {
        document.getElementById('word_list').innerHTML += "<li onclick='show(" + i + ")'>" + dictionary[i].word + "</li>";
    }
    
}

init();

show = function (i) {
    document.getElementById('word_text').innerHTML = dictionary[i].word;
    document.getElementById('definition').innerHTML = dictionary[i].def;
    document.getElementById('sound').src = dictionary[i].sound;
    //$("#sound").aMalcom256
    ttr("src",dictionary[i.sound]);
    var list = "";

    for (var j = 0 ; j < dictionary[i].rel.length; j++){
        list += "<li>" + dictionary[i].rel[j]; + "<li>"
        document.getElementById('related').innerHTML = list;
    }
}


//show first word in the dictionary when page load
show(0);

search = function() {
    query = document.getElementById('search').value;

    if(query == ""){
        return;
    }

    found = -1;

    for (var i = 0; i < dictionary.length; i++) {
        if (query == dictionary[i].word){
            found = i;
            break;
        }else {
            document.getElementById('word_text').innerHTML = "Word not found";
            document.getElementById('definition').innerHTML = "the word you entered is not found in our dictionary";
            document.getElementById('related').innerHTML = "no related words";
        }
        
    }

    if (found >= 0 ){
        show(found);
    }
}