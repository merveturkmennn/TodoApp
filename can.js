const addForm= document.querySelector('.add');
const list= document.querySelector('.todos');
const search= document.querySelector('.search input');

const generateTemplate = todo =>{
const html=`
<li class="list-group-item d-flex justify-content-between align-items-center">
  <span> ${todo}</span>
  <i class="fas fa-trash delete"></i>
</li>
`;
list.innerHTML+= html;
}
const filterTodos= term=>{
  Array.from(list.children)
  .filter(todo=>!todo.textContent.toLowerCase().includes(term))
  .forEach(todo => todo.classList.add('filtered'));
  Array.from(list.children)
  .filter(todo=>todo.textContent.toLowerCase().includes(term))
  .forEach(todo => todo.classList.remove('filtered'));
}

addForm.addEventListener("submit",e =>{
  e.preventDefault();
  const todo=addForm.add.value.trim();
  console.log(todo)
    if(todo.length>0){
    generateTemplate(todo);
    addForm.reset();

  }
  
})
list.addEventListener('click',e=>{
if(e.target.classList.contains('delete')){
  e.target.parentElement.remove();
}
})
search.addEventListener('keyup',e=>{
  const term=search.value.trim().toLowerCase();
  filterTodos(term);
})