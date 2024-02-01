// List of bible verses
//console.log("%cVerse of the Day");

//print('Verse of the Day')
//Mimi nmezoea Python, I had to convert my python script to JS

const verses = [
    "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16",
    "I can do all this through him who gives me strength. - Philippians 4:13",
    "The Lord is my shepherd, I lack nothing. - Psalm 23:1",
    "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold. - Psalm 18:2",
    "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11",
    "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight. - Proverbs 3:5-6",
    "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. - Isaiah 40:31",
    "The name of the Lord is a fortified tower; the righteous run to it and are safe. - Proverbs 18:10",
    "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28",
    "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own. - Matthew 6:34",
    "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you. - Deuteronomy 31:6",
    "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world. - John 16:33",
    "The Lord is close to the brokenhearted and saves those who are crushed in spirit. - Psalm 34:18",
    "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus. - Philippians 4:6-7",
    "But seek first his kingdom and his righteousness, and all these things will be given to you as well. - Matthew 6:33",
    "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing. - Zephaniah 3:17",
    "And my God will meet all your needs according to the riches of his glory in Christ Jesus. - Philippians 4:19",
    "The Lord is good, a refuge in times of trouble. He cares for those who trust in him. - Nahum 1:7",
    "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord. - Romans 8:38-39",
    "The Lord is my light and my salvation— whom shall I fear? The Lord is the stronghold of my life— of whom shall I be afraid? - Psalm 27:1",
    "But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me. - 2 Corinthians 12:9",
    "The Lord is gracious and compassionate, slow to anger and rich in love. - Psalm 145:8",
    "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken. - Psalm 55:22",
    "He gives strength to the weary and increases the power of the weak. - Isaiah 40:29",
    "For God did not give us a spirit of timidity, but a spirit of power, of love and of self-discipline. - 2 Timothy 1:7",
    "The Lord is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him. - Psalm 28:7",

];

// Select a random verse
const randomVerse = verses[Math.floor(Math.random() * verses.length)];

// Set the text content of the h2 element to "Verse of the day"
document.querySelector("h2").textContent = "Verse of the day";

// Set the inner HTML of the div element with class "msg-content" to the random verse
document.querySelector(".msg-content").innerHTML = randomVerse;
