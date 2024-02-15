$(document).ready(function () {
  console.log("doc is ready");

  $("#btnGetFacts").click(function () {
    // Clear previous output
    $("#coolNameFactsOutput").html('');
    
    // Get user input
    let userName = $("#userName").val();
    console.log("user name = ", userName);
    
    // Generate and display cool name facts
    $("#coolNameFactsOutput").html(generateCoolNameFacts(userName));
  });
});

function generateCoolNameFacts(userName) {
  let coolFacts = "";

  coolFacts += nameLength(userName) + " <br> ";
  coolFacts += nameStart(userName) + " <br> ";
  coolFacts += nameEnd(userName) + " <br> ";
  coolFacts += reverseName(userName) + " <br> ";
  coolFacts += getSpiritAnimal(userName);

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
  // Split the name into an array of characters, reverse it, and join back into a string
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
