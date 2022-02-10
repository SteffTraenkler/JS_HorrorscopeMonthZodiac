let inputTxt = document.getElementById("zodiacMonth");
let outputZ = document.getElementById("outputZodiac");

function check() {
    let textClear = inputTxt.value.toLowerCase();
    switch (textClear) {
        case 'january':
            console.log(textClear);
            outputZ.innerHTML = `<img src='assets/img/icon_capricorn.png'><br><br><h2>Capricorn</h2><br><p>Y'know the sign that's called boring and money greedy? Yep, that one</p>`;
            break;

        case 'february':
            console.log(textClear);
            outputZ.innerHTML = `<img src='assets/img/icon_aquarius.png'><br><br><h2>Aquarius</h2><br><p>You ever wanted to spend your day with an alien maniac? Well, this is your call!</p>`;
            break;

        case 'march':
            console.log(textClear);
            outputZ.innerHTML = `<img src='assets/img/icon_pisces.png'><br><br><h2>Pisces</h2><br><p>That puddle of emotional water over there? Yeah, just pisces.</p>`;
            break;

        case 'april':
            console.log(textClear);
            outputZ.innerHTML = `<img src='assets/img/icon_aries.png'><br><br><h2>Aries</h2><br><p>Want to never be allowed to have stupid ideas coz they will make you do it? Go with Aries!</p>`;
            break;

        case 'may':
            console.log(textClear);
            outputZ.innerHTML = `<img src='assets/img/icon_taurus.png'><br><br><h2>Taurus</h2><br><p>Said to be lazy, slow and a glutton. But also pretty fast and dangerous when angry</p>`;
            break;

        case 'june':
            console.log(textClear);
            outputZ.innerHTML = `<img src='assets/img/icon_gemini.png'><br><br><h2>Gemini</h2><br><p>No one likes them. They don't even like themselves. Gemini-Clown</p>`;
            break;

        case 'july':
            console.log(textClear);
            outputZ.innerHTML = `<img src='assets/img/icon_cancer.png'><br><br><h2>Cancer</h2><br><p>They pretend to be nice and emotional, but are more dangerous than any Scorpio</p>`;
            break;

        case 'august':
            console.log(textClear);
            outputZ.innerHTML = `<img src='assets/img/icon_leo.png'><br><br><h2>Leo</h2><br><p>No one is so full of themselves as a Leo. Except for Cancer maybe</p>`;
            break;

        case 'september':
            console.log(textClear);
            outputZ.innerHTML = `<img src='assets/img/icon_virgo.png'><br><br><h2>Virgo</h2><br><p>Want to get manipulated by the hidden Grima? Go with a virgo! You'll be on the throne in no time an they'll be your counselor</p>`;
            break;

        case 'october':
            console.log(textClear);
            outputZ.innerHTML = `<img src='assets/img/icon_libra.png'><br><br><h2>Libra</h2><br><p>Soft and creative and a fashion lover - at least what's said about them. And also pretty jealous lol</p>`;
            break;

        case 'november':
            console.log(textClear);
            outputZ.innerHTML = `<img src='assets/img/icon_scorpio.png'><br><br><h2>Scorpio</h2><br><p>Thinks they're edgy and revengful. Are actually just a grey, sad puddle on the side</p>`;
            break;

        case 'december':
            console.log(textClear);
            outputZ.innerHTML = `<img src='assets/img/icon_sagittarius.png'><br><br><h2>Sagittarius</h2><br><p>You want the lvl 9000 upgrade from gemini? Here ya go</p>`;
            break;

        default:
            console.log("Error");
            outputZ.innerHTML = `<p>Aawwhh~ seems like we don't know this month Q_Q</p>`;
            break;
    }
}