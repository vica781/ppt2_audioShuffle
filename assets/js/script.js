// def sound variables
// const vivaldi = document.querySelector(`audio[data-composition='vivaldi-1']`);
// vivaldi.play();

const vivaldi = document.querySelector(`audio[data-composition='vivaldi-1']`);
vivaldi.addEventListener('canplaythrough', () => {
  vivaldi.play();
});



// const compositions = [
//     ['Saint-Saens: The Dance of the Death', 'saint-saens-1'],
//     ['Franz Schubert:_Musical-moment_in-F-minor']
// ]