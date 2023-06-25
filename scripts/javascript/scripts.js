//Utility Logic
function isEmpty(testString) {
    return (testString.trim().length === 0);
  }
  
  // Business Logic

  function vowels(string) {
    if (isEmpty(string)) {
          return 0;
        }
    const strArray = string.split(" ");
    const noVowels = strArray.map(function(string) {
     return string.replace(/[aeiou]/gi, "-");
    });
    
    return noVowels;
  }
  
  
  function handleFormSubmission(e) {
    e.preventDefault();
    const passage = document.getElementById("text-passage").value;
    // document.getElementById("total-count").innerText = vowels(passage);
    const noVowels = vowels(passage)
    document.getElementById("total-count").textContent = noVowels.join(" ");
}
  
  window.addEventListener("load", function() {
    document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
 

  });


  