let editBtn = document.querySelector('#edit_btn');
let editArea = document.querySelector('.edit_field');
let saveBtn = document.querySelector('#save_btn');
let cancelBtn = document.querySelector('#cancel_btn');

editBtn.addEventListener('click', function() {
  editArea.setAttribute('contenteditable',true);
  editArea.classList.toggle('edit_field_edit');
  saveBtn.disabled = false;
  editBtn.disabled = true;
  cancelBtn.disabled = false;
});

saveBtn.addEventListener('click', function() {
  editArea.setAttribute('contenteditable',false);
  editArea.classList.toggle('edit_field_edit');
  editBtn.disabled = false;
  saveBtn.disabled = true;
  cancelBtn.disabled = true;
  localStorage.setItem('localText', editArea.textContent);
});

cancelBtn.addEventListener('click', function() {
  editArea.setAttribute('contenteditable',false);
  editArea.classList.toggle('edit_field_edit');
  editBtn.disabled = false;
  saveBtn.disabled = true;
  cancelBtn.disabled = true;
  editArea.textContent = localStorage.getItem('localText');
})

window.onload = function() {
  editArea.textContent = localStorage.getItem('localText');
}
