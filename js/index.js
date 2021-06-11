document.querySelector("body").innerHTML = `
    <header title='show the background color in Hexadecimal code'>
        <h1>Background Color: <span>#000000</span></h1>
    </header>

    <main>
        <button title='Click to flip the color'>
            Flip Color
        </button>
    </main>
`;

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let colorCode = "ABCDEF123456789";
  let pattern = "#";
  for (let counter = 0; counter < 6; counter++) {
    pattern += colorCode[Math.floor(Math.random() * colorCode.length)];
  }

  document.querySelector('header span').textContent = pattern;
  document.querySelector('body').style.backgroundColor = pattern;
  document.querySelector('header span').style.color = pattern;
});
