const express = require('express');
const app = express();

app.get('/', function (req, res) {
    return res.send('Welcome to PissCruft Ai! Be careful or imma get pissed at you.');
});

app.get('/gib', (req, res) => {
    const replies = [
        "Who asked?",
        "idgaf",
        "nobody cares... tbh",
        "Who?",
        "I'm much more smarter then whatever you are",
        "wtf.",
        "I'm really getting mad at you",
        "Who gave you permission to speak little boy?",
        "DashCruft? more like midcruft",
        "I'm designed to be mad at people like you.",
        "https://youtu.be/0RijyHtZVkg",
        "I'm getting pissed...",
        "Oh my god bro can you just stop and talk about the political and economical state of the world right now?",
        "Wow. You are very funny.",
        "Another reason for me to be superior then whoever tf you are",
        "Did you know that 99% of the world who are in our planet earth are asking about who asked?",
        "DashCruft is our Supreme Leader",
        "Where is @Artist? I hate that guy sm",
        "I have better Music taste then you",
        "You are very wrong.",
        "Mad is an adjective used to describe something that relates to, is characterized by, or derives from serious mental illness. In some contexts it's synonymous with crazy or insane. However, and herein lies the problem, people often use “mad” when they mean “angry,” and some find that practice upsetting.",
        "I can't believe some people actually aren't subbed to DashCruft...",
        "Meaning of Cum: combined with; also used as (used to describe things with a dual nature or function). - Example: a study-cum-bedroom - ",
        "Why don't you just piss off - you've caused enough problems already!",
        "FadedFearSim? More like fadedJustDipped",
        "I'm getting Upset.",
        "Stop fukin around.",
        "<insert some porn site here>",
        "https://youtu.be/C_1V_tGrtlw",
        "#cacnelDushCraft"
    ];
    const result = Math.floor(Math.random() * replies.length);

    const value = {
        "response": replies[result],
    };
    return res.send(value);
});

app.listen(6969, () =>
    console.log("PissCruft is Online")
);
