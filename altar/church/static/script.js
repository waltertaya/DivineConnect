document.addEventListener('DOMContentLoaded', function () {

    console.log("Script loaded successfully.");

    function getRandomVerse() {
        var apiUrl = 'https://labs.bible.org/api/?passage=random&type=json&callback=myCallback';

        var script = document.createElement('script');
        script.src = apiUrl;

        window.myCallback = function(data) {
            console.log("myCallback executed successfully.");

            var verseInfo = data[0];
            var bookName = verseInfo.bookname;
            var chapterNumber = verseInfo.chapter;
            var verseNumber = verseInfo.verse;
            var verseText = verseInfo.text;

            var verseContainer = document.getElementById('verse-container');
            console.log("verseContainer:", verseContainer);

            if (verseContainer) {

                verseContainer.innerHTML = '<p><strong>' + bookName + ' ' + chapterNumber + ':' + verseNumber + '</strong></p>';
 
                verseContainer.innerHTML += '<p>' + verseText + '</p>';
            } else {
                console.error("Element with ID 'verse-container' not found.");
            }
        };

        document.body.appendChild(script);
    }

    getRandomVerse();
});
