$(document).ready(function () {
  console.log("doc is ready");

  $("#btnGetFacts").click(function () {

    $("#coolNameFactsOutput").html('');
    
    let userName = $("#userName").val();
    console.log("user name = ", userName);
    
    $("#coolNameFactsOutput").html(generateCoolNameFacts(userName));
  });
});

function generateCoolNameFacts(userName) {
  let coolFacts = "";

  coolFacts += nameLength(userName) + " <br> ";
  coolFacts += nameStart(userName) + " <br> ";
  coolFacts += nameEnd(userName) + " <br> ";
  coolFacts += reverseName(userName) + " <br> ";
  coolFacts += getSpiritAnimal(userName) + " <br> ";
  coolFacts += removeDuplicates(userName) + " <br> ";
  coolFacts += countOccurrences(userName) + " <br> ";
  coolFacts += countUniqueLetters(userName);


  console.log("Initialized the 'coolFacts' variable: " + coolFacts);

  return coolFacts;
}

function nameLength(name) {
  return "Your name is " + name.length + " letters long!";
}

function nameStart(name) {
  return "The first letter of your name is " + name[0];
}

function nameEnd(name) {
  let lastIndex = name.length - 1;
  return "The last letter of your name is " + name[lastIndex];
}

function reverseName(name) {
  return "Your name spelled backward is " + name.split('').reverse().join('');
}

function getSpiritAnimal(x) {
  let spiritAnimal = '';

  switch (x.length) {
    case 1:
      spiritAnimal = 'Your spirit animal is a tiny hummingbird!';
      break;
    case 2:
      spiritAnimal = 'Your spirit animal is a playful kitten!';
      break;
    case 3:
      spiritAnimal = 'Your spirit animal is a curious rabbit!';
      break;
    case 4:
      spiritAnimal = 'Your spirit animal is a clever fox!';
      break;
    case 5:
      spiritAnimal = 'Your spirit animal is a majestic eagle!';
      break;
    case 6:
      spiritAnimal = 'Your spirit animal is a wise owl!';
      break;
    case 7:
      spiritAnimal = 'Your spirit animal is a graceful deer!';
      break;
    case 8:
      spiritAnimal = 'Your spirit animal is a friendly dolphin!';
      break;
    case 9:
      spiritAnimal = 'Your spirit animal is a strong bear!';
      break;
    case 10:
      spiritAnimal = 'Your spirit animal is a swift cheetah!';
      break;
    case 11:
      spiritAnimal = 'Your spirit animal is a mysterious wolf!';
      break;
    case 12:
      spiritAnimal = 'Your spirit animal is a regal lion!';
      break;
    case 13:
      spiritAnimal = 'Your spirit animal is a bold tiger!';
      break;
    case 14:
      spiritAnimal = 'Your spirit animal is a gentle panda!';
      break;
    case 15:
      spiritAnimal = 'Your spirit animal is a majestic giraffe!';
      break;
    case 16:
      spiritAnimal = 'Your spirit animal is a swift gazelle!';
      break;
    case 17:
      spiritAnimal = 'Your spirit animal is a wise elephant!';
      break;
    case 18:
      spiritAnimal = 'Your spirit animal is a mysterious panther!';
      break;
    case 19:
      spiritAnimal = 'Your spirit animal is a regal peacock!';
      break;
    case 20:
      spiritAnimal = 'Your spirit animal is a majestic dragon!';
      break;
    default:
      spiritAnimal = "You have a unique and mysterious spirit animal.";
      break;
  }
  return spiritAnimal;
}

function removeDuplicates(name) {
  const uniqueChars = name.toLowerCase().split('').filter((char, index, array) => array.indexOf(char) === index).join('');
  const result = uniqueChars.charAt(0).toUpperCase() + uniqueChars.slice(1);
  return `Name without duplicates: ${result}`;
}

function countOccurrences(name) {
  const charCounts = {};
  const nameLowerCase = name.toLowerCase();

  for (let char of nameLowerCase) {
    if (/[a-z]/.test(char)) {
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
  }

  const repeatingChars = Object.entries(charCounts)
    .filter(([char, count]) => count > 1)
    .map(([char, count]) => `${char}: ${count}`)
    .join(', ');

  return `Repeating letters: ${repeatingChars}`;
}

function countUniqueLetters(name) {
  const letterFrequency = {};
  const lowercaseName = name.toLowerCase();

  lowercaseName.split('').forEach(char => {
    if (/[a-z]/.test(char)) {
      letterFrequency[char] = (letterFrequency[char] || 0) + 1;
    }
  });

  const result = Object.keys(letterFrequency).map(letter => `${letter}: ${letterFrequency[letter]}`).join(', ');

  return `Letter frequencies in the name: ${result}`;
}
