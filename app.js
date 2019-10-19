const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//Create a template using template string
const generateTemplate = todos => {
	const html = `
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<span>${todos}</span>
				<i class="far fa-trash-alt delete"></i>
			</li>
		`;
	list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
	e.preventDefault();
	const todo = addForm.add.value.trim();
	//check that it doesn't submit empty list and reset form input
	if (todo.length) {
		generateTemplate(todo);
		addForm.reset();
	}
});

//Delete todo
list.addEventListener('click', e => {
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
	}
});

const filterTodos = term => {
	Array.from(list.children)
		.filter(todo => !todo.textContent.toLowerCase().includes(term))
		.forEach(todo => todo.classList.add('filtered'));

	Array.from(list.children)
		.filter(todo => todo.textContent.toLowerCase().includes(term))
		.forEach(todo => todo.classList.remove('filtered'));
};

//SEARCH TODOS
// keyup event
search.addEventListener('keyup', () => {
	const term = search.value.trim().toLowerCase();
	filterTodos(term);
});
