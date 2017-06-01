var friends=["Katie", "Anna", "Margaret", "Anna", "Ryan"];

//console.log(friends)
//console.log(friends(0))



for (var f = 0; f < friends.length; f++){
    console.log(friends[f].toUpperCase()+":")

    for (var i = 99; i > 0 ; i--) {
        var x = i-1;

      if(i >1){
        console.log(i + " lines of code in the file, " + i + " lines of code; " + friends[f] + " strikes one out, clears it all, "+ x + " lines of code in the file")
      } 
        else {
        console.log(i + " line of code in the file, " + i + " line of code; " + friends[f] + " strikes one out, clears it all, " + "no more lines of code in the file")

        }  


    }
}