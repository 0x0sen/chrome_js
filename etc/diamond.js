function diamond_input() {
  var number = document.getElementById("number").value;
  var error_print = function() {
    document.getElementById("result").innerHTML = "奇数を入力してください.";
  };

  if (isNaN(number) ) {
    error_print();
    return;
  }
  if ( Math.floor(number) != number ) {
    error_print();
    return;
  }
  if ( number % 2 == 0) {
    error_print();
    return;
  }

  diamond_print(number);
}

function toHalfWidth(str) {
  
  var result = "";
  for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c == 0x3000) {
          result += String.fromCharCode(0x0020);
      } else if (c >= 0xFF01 && c <= 0xFF5E) {
          result += String.fromCharCode(c - 0xFEE0);
      } else {
          result += str.charAt(i);
      }
  }
  return result;
}

function clear_diamond() {
  document.getElementById("result").innerHTML = "";
}

document.getElementById("number").addEventListener("blur", function() {
  this.value = toHalfWidth(this.value);
});


function diamond_print(number) {
  var diamond = null;
  var diamondSize = parseInt(number);
  diamond = "■".repeat(diamondSize+2) + "<br>";

  for (var i = 1; i <= diamondSize; i++) {
    var spaceCount = Math.abs(diamondSize / 2 - i + 0.5);
    var starCount = diamondSize - spaceCount * 2;

    if (diamond === null) diamond = " ";
    diamond += "■";


    for (var j = 1; j <= spaceCount; j++) {
      diamond += "&nbsp;&nbsp&nbsp;";
    }

    for (var k = 1; k <= starCount; k++) {
      diamond += "★";
      //  diamond += "&nbsp*";
    }

    for (var l = 1; l <= spaceCount; l++) {
      diamond += "&nbsp;&nbsp;&nbsp;"; 
    }
        if (diamond == diamondSize ) diamond = " ";
    diamond += "■<br>";
  }

  diamond += "■".repeat(diamondSize+2) + "<br>";
  document.getElementById("result").innerHTML = diamond;
}













