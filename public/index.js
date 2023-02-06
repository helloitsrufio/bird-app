const button = document.getElementById('button');


//needs to ask, 'can i have birb'

button.addEventListener('click', (req, res) => {
  fetch('/birb')
    .then(res => res.json())
    .then(data => {
      console.log(data, 'this is the data!')
        const audioElement = document.getElementById('audio');
        const name = document.getElementById('name')
        audioElement.src = data.sound;
        name.textContent = data.name
      } 
)})









  // button.addEventListener('click', () => {
//     fetch('https://xeno-canto.org/api/2/recordings?query=q:A+len:12')
//     .then(response => response.json())
//     .then(data => {
//       let sound = data.recordings
//       console.log(sound)
//       const audioElement = document.getElementById('audio');
//       audioElement.src = sound
//     })
//     .catch (error => {
//       console.error(error);
//     })
//   })