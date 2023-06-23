function appendCharacter(character) {
    var result = document.getElementById("result");
    result.value += character;
  }

  function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
  }

  function deleteLastCharacter() {
    var result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
  }

  function calculateResult() {
    var result = document.getElementById("result");
    var expression = result.value;

    
    var resultWithParenthesis = eval(expression);
    result.value = resultWithParenthesis;
  }