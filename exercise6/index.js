/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/

const textarea = document.getElementById('text-area');
const backspaceBtn = document.getElementById('backspace');
const clearBtn = document.getElementById('clear');
const boldBtn = document.getElementById('bold');
const italicBtn = document.getElementById('italic');

backspaceBtn.addEventListener('click', () => {
  textarea.value = textarea.value.slice(0, -1);
});

clearBtn.addEventListener('click', () => {
  textarea.value = '';
});

boldBtn.addEventListener('click', () => {
  textarea.style.fontWeight = textarea.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

italicBtn.addEventListener('click', () => {
  textarea.style.fontStyle = textarea.style.fontStyle === 'italic' ? 'normal' : 'italic';
});