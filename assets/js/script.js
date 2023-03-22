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
  ['Wolfgang Amadeus Mozart: Turkish March. Piano Sonata N11', 'mozart-3']
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