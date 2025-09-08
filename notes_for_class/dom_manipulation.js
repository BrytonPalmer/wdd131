// To select an HTML element from the document using the querySelector method.
// This line of code selects the first instance of an article element from the
// document and assigns the element as a reference to the variable named article.
const article = document.querySelector("article");

// To select multiple HTML elements from the document using the querySelectorAll method.
// This line of code selects all instances of paragraph (p) elements from the document
// and assigns the elements as a reference to the variable named paragraphs.
const paragraphs = document.querySelectorAll("p");

// To change the text content of the innerHTML existing element.
article.innerHTML = 'innerHTML supports <strong>HTML</strong> tags. The textContent property does not.';

// to Change the inline CSS style of an elemante. 
// this line of code changes the text-align CSS property of the selectedd element.
article.style.textAlign = 'right';

// to change an attribute of an element. 
// this code adds an attribute class to the element and gives it a value. 
article.setAttribute('class', 'active');

// to create a new HTML element.
const paragraph = document.createElement('p');

// to append an element as a child to another element.
article.appendChild(paragraph);
article.append(paragraph, 'Hello World Addition!');

// to remove an element from the document.
paragraph.remove();
article.removeChild(paragraph);
article.remove();
