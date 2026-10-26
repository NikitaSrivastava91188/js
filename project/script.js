const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
      body.style.color = 'white'
    
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      body.style.color = 'black'
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
      body.style.color = 'white'
      navigation.style.color = 'white'
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
       body.style.color = 'red'
    }

      if (e.target.id === 'black') {
          const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'brown',
    'cyan',
    'magenta',
    'lime',
    'coral',
    'tomato',
    'gold',
    'violet'
  ];

      const randomColor = colors[Math.floor(Math.random() * colors.length)];
        // .toString(16)
        // .padStart(6, '0');

      body.style.backgroundColor = randomColor;
      if (randomColor == white){
         body.style.color = 'black'
      }
      else{
    body.style.color = 'white'

      }

         alert(`The selected color is: ${randomColor}`);
  // const rgb = parseInt(randomColor.slice(1), 16);
  // const r = (rgb >> 16) & 255;
  // const g = (rgb >> 8) & 255;
  // const b = rgb & 255;

  // const colorName = `RGB(${r}, ${g}, ${b})`;

  // //alert(`The selected color is: ${colorName}`);

  // const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // body.style.color = brightness > 150 ? 'black' : 'white';
  
    }
    
  });
});

  // const randomColor = '#' + Math.floor(Math.random() * 16777215)
  //   .toString(16)
  //   .padStart(6, '0');

  // body.style.backgroundColor = randomColor;

  // // Change text color based on background brightness
  // const brightness =
  //   parseInt(randomColor.slice(1, 3), 16) * 0.299 +
  //   parseInt(randomColor.slice(3, 5), 16) * 0.587 +
  //   parseInt(randomColor.slice(5, 7), 16) * 0.114;

  // body.style.color = brightness > 150 ? 'black' : 'white';