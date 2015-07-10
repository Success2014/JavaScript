var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    var newnames = [];
    for (idx in names) {
        var name = names[idx].split(" ");
        var firstName = name[0];
        var lastName = name[1];
        //console.log(name);
        //console.log(firstName);
        //console.log(lastName);
        newnames.push(lastName + ", " + firstName);
    }
    newnames = newnames.sort();
    return newnames;
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));