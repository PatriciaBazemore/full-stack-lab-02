var friends=["Katie", "Anna", "Margaret", "Anna", "Ryan"];

//console.log(friends)
//console.log(friends(0))



for (var i = 0; i < friends.length; i++){
    console.log(friends[i].toUpperCase()+":");
    /*var friend="friend[i];"*/

    for (var j = 99; j > 0 ; j--) {
        var x = j-1; /* or just use j-1 in the concatination*/
           // to test- console.log(j);
      if(j >2){
        console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, "+ x + " lines of code in the file")
      } 
        else if (j ===2){
        console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + "one more line of code in the file")

        }  else {
            console.log(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file")
        }


    }
}

