// 1

/*

Prompt the user for a number. Write a for loop that will add all of the numbers leading up to that number,
and inclusive of that number together and log the result to the console. (ex: A user enters 5, and the output
would be the result of 1 + 2 + 3 + 4 + 5.)
Prompt: ‘Enter A Number!’ > 5 Output: 15

*/

var a = prompt("Wanna see some magic?...I mean, do you want to do some maths?");
var sum = 0;
while (Number.isInteger(a) === false) {
    var a = Number(prompt("Please enter an integer, or magic number!"));
    if (Number.isInteger(a) === true) {
        break;
    }
}
for (var i=0; i<=a; i++) {
    sum = (sum + i);
}
console.log(sum + " is " + a + " with all inclusive numbers added up consecutively!  Magic, right?!");



// 2

/*

Write a do..while loop that builds a string with multiple inputs from a user. Start by prompting the user if
they want to play. When the user answers yes, prompt the user to enter a word. After the user enters a word,
prompt the user if they would like to play again. If no, console log their word. If yes, prompt the user for
another word and add that word to the original string, then prompt if they want to play again. Continue to add
words to the string every time the user answers yes and enters a word until the user indicates that he or she
does not want to play anymore.
Prompt: ‘Do you want to play?’ > 'yes' > Prompt: ‘Enter a word.’ > 'dog' > Prompt: ‘Do you want to play again?’
> 'yes' > Prompt: ‘Enter a word.' > 'cat' > Prompt: ‘Do you want to play again?’ > 'no' Output: 'dog cat'

*/

var sentence = (" ");
do {
    var yesOrNo = prompt("Do you want to play?");
    if (yesOrNo === "no") {
        break;
    }
    while (yesOrNo != "yes" && yesOrNo != "no") {
        var yesOrNo = prompt("Do you want to play? Enter yes or no.");
        if (yesOrNo === "no") {
            break;
        }
    }
    if (yesOrNo === "yes") {
        var wordToAdd = prompt("Enter a word.");
        var sentence = (sentence + " " + wordToAdd);
    }
    else if (yesorno === "no") {
        console.log(sentence);
        break;
    }
}
while (yesorno = "yes");



// 3

/*

Write a while loop that will prompt the user if they would like to print their name. If the answer is yes,
log their name to the console then prompt them if they would like to print their name again. If yes, log their
name to the console again but this time add an exclamation point at the end of the string. Continue to add an
exclamation point for every time the user agrees to wanting to print his or her name.
Prompt: ‘Would you like to print your name?’ > 'yes' Output: 'Hello. My name is Adam' Prompt: ‘Would you like to
print this again?’ > 'yes' Output: ‘Hello. My name is Adam!' Prompt: ‘Would you like to print this again?’ >
'yes' Output: 'Hello. My name is Adam!!' Prompt: ‘Would you like to print this again?’ > 'no'

*/

     var yesorno = prompt("Would you like to print your name?");
if (yesorno != "yes") {
    console.log("Have a lovely day.");
}
if (yesorno === "yes") {
    var name = prompt("Enter your name.");
    console.log(name);
    var again = prompt("Would you like to print your name again?")
    while (again === "yes") {
        var name = (name + "!");
        console.log(name);
        var again = prompt("Would you like to print your name again?")
    }
    if (again != "yes") {
        console.log("Thanks for playing!");
    }
}



// 4

var time = prompt("What time of day is it?  morning, noon or evening?");
while (time != "morning" || time != "noon" || time != "evening") {
  var time = prompt("What time of day is it?");
  if (time === "morning" || time=== "noon" || time=== "evening") {
    break;
  }
}
if (time=== "morning") {
  console.log("Since it's morning, you should be eating breakfast. We suggest eggs and toast.");
}
else if (time === "noon") {
  console.log("Since it's noon, you should be eating lunch. We suggest a salad.");
}
else if (time === "evening") {
  console.log("Since it's evening, you should be eating dinner. We suggest chicken and rice.");
}

/*

Prompt the user for a time of day (morning, noon, or evening). Based on their input, log a string to the
console that will let the user know what they should be eating for that specific meal. Use the tables below
to guide your logic.

 */