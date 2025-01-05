// Day 10: Event Handling

document.addEventListener('DOMContentLoaded', () => {
  // --- Activity 1: Basic Event Handling ---

  // Task 1: Click event listener
  const button = document.createElement('button');
  button.textContent = 'Click Me';
  document.body.appendChild(button);

  const paragraph = document.createElement('p');
  paragraph.textContent = 'This is a paragraph.';
  document.body.appendChild(paragraph);

  button.addEventListener('click', () => {
    paragraph.textContent = 'Text changed!';
  });

  // Task 2: Double-click event listener
  const image = document.createElement('img');
  image.src = 'https://via.placeholder.com/150'; // Placeholder image
  image.style.display = 'block';
  document.body.appendChild(image);

  image.addEventListener('dblclick', () => {
    image.style.display = image.style.display === 'none' ? 'block' : 'none';
  });

  // --- Activity 2: Mouse Events ---

  // Task 3: Mouseover event listener
  const hoverElement = document.createElement('div');
  hoverElement.textContent = 'Hover over me';
  hoverElement.style.width = '100px';
  hoverElement.style.height = '100px';
  hoverElement.style.border = '1px solid black';
  hoverElement.style.textAlign = 'center';
  hoverElement.style.lineHeight = '100px';
  document.body.appendChild(hoverElement);

  hoverElement.addEventListener('mouseover', () => {
    hoverElement.style.backgroundColor = 'lightblue';
  });

  // Task 4: Mouseout event listener
  hoverElement.addEventListener('mouseout', () => {
    hoverElement.style.backgroundColor = '';
  });

  // --- Activity 3: Keyboard Events ---

  // Task 5: Keydown event listener
  const inputField = document.createElement('input');
  inputField.type = 'text';
  document.body.appendChild(inputField);

  inputField.addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key);
  });

  // Task 6: Keyup event listener
  const keyupParagraph = document.createElement('p');
  document.body.appendChild(keyupParagraph);

  inputField.addEventListener('keyup', () => {
    keyupParagraph.textContent = 'Current value: ' + inputField.value;
  });

  // --- Activity 4: Form Events ---

  // Task 7: Submit event listener
  const form = document.createElement('form');
  document.body.appendChild(form);

  const formInput = document.createElement('input');
  formInput.type = 'text';
  formInput.name = 'name';
  form.appendChild(formInput);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(form);
    console.log('Form data:', Object.fromEntries(formData));
  });

  // Task 8: Change event listener
  const select = document.createElement('select');
  select.name = 'options';
  document.body.appendChild(select);

  const options = ['Option 1', 'Option 2', 'Option 3'];
  options.forEach((optionText) => {
    const option = document.createElement('option');
    option.value = optionText.toLowerCase().replace(' ', '-');
    option.text = optionText;
    select.appendChild(option);
  });

  const selectParagraph = document.createElement('p');
  document.body.appendChild(selectParagraph);

  select.addEventListener('change', () => {
    selectParagraph.textContent = 'Selected value: ' + select.value;
  });

  // --- Activity 5: Event Delegation ---

  // Task 9: Click event listener with delegation
  const list = document.createElement('ul');
  document.body.appendChild(list);

  const listItems = ['Item 1', 'Item 2', 'Item 3'];
  listItems.forEach((itemText) => {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
  });

  list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      console.log('Clicked item:', event.target.textContent);
    }
  });

  // Task 10: Event listener for dynamically added elements
  const addButton = document.createElement('button');
  addButton.textContent = 'Add Item';
  document.body.appendChild(addButton);

  addButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    list.appendChild(newItem);
  });

    // Ensure the script runs after the DOM is fully loaded
    if(document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        console.log("DOM fully loaded and parsed");
    }
});