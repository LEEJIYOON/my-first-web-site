const quotes = [

    {
        quote: "We are all traveling through time together, every day of our lives. All we can do is do our best to relish this remarkable ride.",
        author: "About time"
    },
    {
        quote: "Have a real experience",
        author: "Birdman"
    },
    {
        quote: "Carpediem. Seize the day, boys. Make your lives extraordinary!",
        author: "Dead Poets Society"
    },
    {
        quote: "You got to put the past behine you before you can move on",
        author: "Forrest Gump"
    },
    {
        quote: "There will be a piece of you in me always, and I'm grateful for that",
        author: "Her"
    },
    {
        quote: "Raige, rage against the dying of the ligth",
        author: "Interstella"
    },
    {
        quote: "Where are we? Just wait and see",
        author: "LALALAND"
    },
    {
        quote: "Once you meet someone, you never really forget them",
        author: "Spirited Away"
    },
    {
        quote: "Sometimes it is the peopel who no one imagines anything of who do the things that no one can imagine",
        author: "Imitation Game"
    },
    {
        quote: "Love and work, work and love.That's all there is",
        author: "Intern"
    },{
        quote: "It's not your fault",
        author: "Good Will Hunting"
    },{
        quote: "There are no two words in the English Language more harmful than 'good job'",
        author: "Whiplash"
    }

]


const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const len = quotes.length;
const randomNumber = Math.floor(Math.random() * len);


const todaysQuote =quotes[randomNumber];
quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;

// css 넣기




const images = ["0.jpg", "1.jpg","2.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg"]

const chosenImage = images[randomNumber];



// goal : add <img src="img/0.jpb"/> by using JS

const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImage}`;

document.body.appendChild(bgImage);