// Write your code here!
// Select the main node and remove it
const main = document.querySelector('main#main');
main.remove();

// Create a new h1 node with id 'victory' and text content
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "YOUR-NAME is the champion";

// Append the new h1 node to the body of the document
document.body.appendChild(newHeader);
