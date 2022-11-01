let quotes = [
    `"We cannot solve problems with the kind of thinking we employed when we came up with them." — Albert Einstein`,
    `"Learn as if you will live forever, live like you will die tomorrow." — Mahatma Gandhi`,
    `"If you are working on something that you really care about, you dont have to be pushed. The vision pulls you." — Steve Jobs`,
    `"Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness." — Oprah Winfrey`,
    `"People say nothing is impossible, but I do nothing every day." — Winnie the Pooh`,
    `"Inspiration does exist, but it must find you working." — Pablo Picasso`,
    `"I have not failed. I've just found 10,000 ways that won't work." — Thomas A. Edison`,
    `"You carry the passport to your own happiness." —Diane von Furstenberg`,
    `"We can see through others only when we can see through ourselves." - Bruce Lee`,
    `"The battles that count aren't the ones for gold medals. The struggles within yourself—the invisible, inevitable battles inside all of us—that's where it's at." —Jesse Owens`,
    `"Opportunity is missed by most people because it is dressed in overalls and looks like work." - Thomas Edison`,
    `"If you hear a voice within you, say, 'You cannot paint,' then by all means, paint, and that voice will be silenced." - Vincent Van Gogh`,
    `"I play to win, whether during practice or a real game." - Michael Jordan`,
    `"Do or do not. There is no try." - Yoda`,
    `"I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion." - Muhammad Ali`,
    `"It gets easier. Every day it gets a little easier. But you gotta do it every day; that's the hard part." - Bojack Horseman`,
    `"Strive not to be a success, but rather to be of value." - Albert Einstein`,
    `"Work hard in silence, let your success be the noise." - Frank Ocean`,
    `"Work hard, be kind, and amazing things will happen." - Conan O'Brien`,
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `${quotes[Math.floor(Math.random() * quotes.length)]}`;
      document.querySelector('#quote2').textContent = `${quotes[Math.floor(Math.random() * quotes.length)]}`;
      document.querySelector('#quote3').textContent = `${quotes[Math.floor(Math.random() * quotes.length)]}`;
      document.querySelector('#quote4').textContent = `${quotes[Math.floor(Math.random() * quotes.length)]}`;
      document.querySelector('#bottom').textContent = `${quotes[Math.floor(Math.random() * quotes.length)]}`;

    };
    randomQuote();
 
   
  document.querySelector('#main-title').textContent = 'Motivational Quote Generator'
  
  document.querySelector('body').style.backgroundColor = '#202020'
  
   
  document.querySelectorAll('.special-title').forEach((item) => {
    item.style.fontSize = '2rem'
  })
  


  document.querySelector('#quote-title').addEventListener('click', (evt) => {
    randomQuote()
  })
  
  
  });