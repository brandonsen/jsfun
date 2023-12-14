function showAlert() {
    alert("Hello, world!");
  }

  function biggerText() {
    
    var textArea = document.getElementById("textInput");
    textArea.style.fontSize = "24pt";
  }

  function applyStyles() {
    var textArea = document.getElementById("textInput");
    
    if (document.getElementById("fancyRadio").checked) {
      // Set styles for "FancyShmancy"
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else {
      // Reset styles for "BoringBetty"
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black"; // Reset to default color
      textArea.style.textDecoration = "none"; // Remove underline
    }
  }

  function removeStyles() {
    var textArea = document.getElementById("textInput");
    
    // Reset styles for "BoringBetty"
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black"; // Reset to default color
    textArea.style.textDecoration = "none"; // Remove underline
  }

  function mooifyText() {
    var textArea = document.getElementById("textInput");
    var textValue = textArea.value;
    
    // Uppercase the text
    textArea.value = textValue.toUpperCase();
  
    // Add "-Moo" to the last word of each sentence
    textArea.value = textArea.value.split('. ').map(function(sentence) {
      var words = sentence.split(' ');
      words[words.length - 1] += '-Moo';
      return words.join(' ');
    }).join('. ');
  }

  
function mooText() {
    var textArea = document.getElementById("textInput");
    var textValue = textArea.value;
    
    // Uppercase the text
    textArea.value = textValue.toUpperCase();
  
    // Add "-Moo" to the last word of each sentence
    textArea.value = textArea.value.split('. ').map(function(sentence) {
      var words = sentence.split(' ');
      words[words.length - 1] += '-Moo';
      return words.join(' ');
    }).join('. ');
  }