const iconoBorrar = () => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', borrarTarea);
  return i;
}

const borrarTarea = (evento) => {
  const padre = evento.target.parentElement;
  padre.remove();
}

export default iconoBorrar;