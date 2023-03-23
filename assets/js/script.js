// def sound variables
const compositions = [
  ['Antonio Vivaldi: The Seasons. Winter. December', 'vivaldi-1'],
  ['Antonio Vivaldi: The Seasons. Summer.Thunderstorm', 'vivaldi-2'],
  ['Aram Khachaturian: Gayane. Sabre Dance', 'khachaturian-1'],
  ['Felix Mendelssohn: A Midsummer Nights Dream. Wedding March', 'mendelssohn-1'],
  ['Johann Sebastian Bach: Suite N2. Badinerie', 'bach-1'],
  ['Johann Sebastian Bach: Toccata and Fugue', 'bach-2'],
  ['Ludwig van Beethoven: Sonata N14. Moonlight Sonata', 'beethoven-1'],
  ['Ludwig van Beethoven: Symphony N5', 'beethoven-2'],
  ['Ludwig van Beethoven: to Elise', 'beethoven-3'],
  ['Niccolò Paganini: Caprice N24', 'paganini-1'],
  ['Nikolai Rimsky-Korsakov: The Tale of Tsar Saltan. Flight of the bumblebee', 'rimsky-korsakov-1'],
  ['Pyotr Ilyich Tchaikovsky: Concerto N1', 'tchaikovsky-1'],
  ['Pyotr Ilyich Tchaikovsky: Nutcracker. Dance of the Sugar Plum Fairy', 'tchaikovsky-2'],
  ['Pyotr Ilyich Tchaikovsky: Nutcracker. Waltz of the Flowers', 'tchaikovsky-3'],
  ['Pyotr Ilyich Tchaikovsky: Swan Lake. Dance of the Little Swans', 'tchaikovsky-4'],
  ['Pyotr Ilyich Tchaikovsky: Nutcracker. The Prince and the Sugar Plum Fairy. Adagio', 'tchaikovsky-5'],
  ['Richard Wagner. Valkyrie. Flight of the Valkyries', 'wagner-1'],
  ['Wolfgang Amadeus Mozart: Little Night Serenade. Serenade N13', 'mozart-1'],
  ['Wolfgang Amadeus Mozart: Marriage of Figaro. Overture', 'mozart-2'],
  ['Wolfgang Amadeus Mozart: Turkish March. Piano Sonata N11', 'mozart-3'],
]

let button = document.querySelector("button");
button.onclick = (e) => {
  let randomChoice = Math.floor(Math.random() * compositions.length);
  let sound = document.querySelector(
    `audio[data-composition='${compositions[randomChoice][1]}']`
  );
  console.log(sound);
  sound.play();
};



// 
const question = document.querySelector(".question");
const answers = document.querySelectorAll(".answers>*");
const message = document.querySelector(".message");
const questionsData = [
  ['Antonio Vivaldi: The Seasons. Winter. December', 'vivaldi-1'],
  ['Antonio Vivaldi: The Seasons. Summer.Thunderstorm', 'vivaldi-2'],
  ['Aram Khachaturian: Gayane. Sabre Dance', 'khachaturian-1'],
  ['Felix Mendelssohn: A Midsummer Nights Dream. Wedding March', 'mendelssohn-1'],
  ['Johann Sebastian Bach: Suite N2. Badinerie', 'bach-1'],
  ['Johann Sebastian Bach: Toccata and Fugue', 'bach-2'],
  ['Ludwig van Beethoven: Sonata N14. Moonlight Sonata', 'beethoven-1'],
  ['Ludwig van Beethoven: Symphony N5', 'beethoven-2'],
  ['Ludwig van Beethoven: to Elise', 'beethoven-3'],
  ['Niccolò Paganini: Caprice N24', 'paganini-1'],
  ['Nikolai Rimsky-Korsakov: The Tale of Tsar Saltan. Flight of the bumblebee', 'rimsky-korsakov-1'],
  ['Pyotr Ilyich Tchaikovsky: Concerto N1', 'tchaikovsky-1'],
  ['Pyotr Ilyich Tchaikovsky: Nutcracker. Dance of the Sugar Plum Fairy', 'tchaikovsky-2'],
  ['Pyotr Ilyich Tchaikovsky: Nutcracker. Waltz of the Flowers', 'tchaikovsky-3'],
  ['Pyotr Ilyich Tchaikovsky: Swan Lake. Dance of the Little Swans', 'tchaikovsky-4'],
  ['Pyotr Ilyich Tchaikovsky: Nutcracker. The Prince and the Sugar Plum Fairy. Adagio', 'tchaikovsky-5'],
  ['Richard Wagner. Valkyrie. Flight of the Valkyries', 'wagner-1'],
  ['Wolfgang Amadeus Mozart: Little Night Serenade. Serenade N13', 'mozart-1'],
  ['Wolfgang Amadeus Mozart: Marriage of Figaro. Overture', 'mozart-2'],
  ['Wolfgang Amadeus Mozart: Turkish March. Piano Sonata N11', 'mozart-3'],
];

let randomQuestion = Math.floor(Math.random() * 4);

question.innerHTML = questionsData[randomQuestion][0];

for (let i = 0; i < 4; i++) {
  answers[i].innerHTML = questionsData[i][0];
  answers[i].onclick = function (e) {
    if (i === randomQuestion) {
      answers[i].classList.add("correct");
      message.innerHTML = `Woow. That's correct!`;
      message.classList.add("correct");
    } else {
      answers[i].classList.add("wrong");
      message.innerHTML = `Nooo. That's wrong!`;
      message.classList.add("wrong");
    }
    setTimeout(() => {
      let selection = i;
      if (message.classList.contains("wrong")) {
        answers[selection].classList.remove("wrong");
        message.classList.remove("wrong");
      } else {
        answers[selection].classList.remove("correct");
        message.classList.remove("correct");
      }
      message.innerHTML = "Try to guess!";
    }, 1000);
  };
}

