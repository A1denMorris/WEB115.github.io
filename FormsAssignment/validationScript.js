    // JavaScript code for form validation
	// Prevent form from submitting
  
  let inputField = document.getElementById("inputField")
  let myForm = document.getElementById("myForm")
  myForm.addEventListener("submit", function(e){
    // Retrieve the input field value
    let inputVal = inputField.value 
    if (inputVal != ''){
      // Regular expression pattern for alphanumeric input
      let inputRegex = /^[a-zA-Z0-9]*$/
      // Check if the input value matches the pattern
      if (inputRegex.test(inputVal)){
        inputField.valid = true
      }
        // Valid input: display confirmation and submit the form
        if (inputField.valid){
          alert("Information has been successfully submitted")
          myForm.submit()
        }
        // Invalid input: display error message
        else{
          alert("Please enter an alphanumeric entry")
          myForm.reset()
        }

    }  
    else{
      e.preventDefault()
    }  
  })
  
      
      