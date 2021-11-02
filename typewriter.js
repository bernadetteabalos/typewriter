const sentence = "hello there from lighthouse labs\n";
let delay = 0;

sentence.split('').forEach((letter) => {
  setTimeout(() => {
      process.stdout.write(letter);
  }, delay);
  delay += 50;
  
})


