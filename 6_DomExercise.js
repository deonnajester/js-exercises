// Exercise 1: Select the element with id "id2" and change the text inside it to "Here's some new text"
    document.getElementById("id2").innerText = "Here's some new text";

    // Exercise 2: Select the element with id "id1" and make the text inside it green.
    document.getElementById("id1").style.color = "green";

    // Exercise 3: Select the elements that have the class "myClass". console.log the output.
    console.log(document.getElementsByClassName("myClass"));

    // Exercise 4: Select the children of the element with id "id1". console.log the output.
    console.log(document.getElementById("id1").children);

    // Exercise 5: Select all list items on the page. console.log the output.
    console.log(document.getElementsByTagName("li"));

    // Exercise 6: Use JavaScript to find the *number* of list items on the page. console.log the output.
    console.log(document.getElementsByTagName("li").length);

    // Exercise 7: Using JavaScript, create a list item and add it to the end of the ordered list.
    let newListItem = document.createElement("li");
    newListItem.innerText = "New Animal";
    document.getElementById("ol1").appendChild(newListItem);    

    // Exercise 8: Using JavaScript, make it so that when button1 is clicked,
    // an alert pops up saying "Hi from Techtonica".
    document.getElementById("button1").addEventListener("click", function() {
      alert("Hi from Techtonica");
    });

    // Exercise 9: In your own words, write a few sentences explaining what the DOM is. Write your answer in a comment below:
    //DOM stands for Document Object Model. It is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.
    //I look at the DOM as a way to annimate a web page by making it interactive and dynamic.
    //It allows developers to manipulate the structure and content of a web page programmatically.

    // The next two exercises combine the DOM with other JavaScript you've learned. Try them for an extra challenge!

    // Exercise 10: Select the elements with the class "myClass" and update the text inside each of them to end with "!"
    // Hint: To operate on multiple elements, you can use a loop.
    let myClassElements = document.getElementsByClassName("myClass");
    for (let i = 0; i < myClassElements.length; i++) {
      myClassElements[i].innerText += "!";
    }

    // Exercise 11: Make it so when the button2 is clicked,
    // the children of the element with id "id1" each have their text replaced with a random number 1-100
    document.getElementById("button2").addEventListener("click", function() {
      let children = document.getElementById("id1").children;
      for (let i = 0; i < children.length; i++) {
        children[i].innerText = Math.floor(Math.random() * 100) + 1;
      }
    });

    // How was this exercise (easy, hard, fun, confusing)?
    //challenging and time consuming at first, but fun once you understand it.
    // What references did you use to help?
    // I used the YouTube "The Net Ninja" for information on the DOM and JavaScript.
    // Please put your answers in a comment below:
    //
// End of JavaScript file

// Commit your work to GitHub