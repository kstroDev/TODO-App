const checkCompletado = () => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', tareaCompletada);
  return i
}

const tareaCompletada = (evento) => {
  const elemento = evento.target;
  elemento.classList.toggle('fas');
  elemento.classList.toggle('completeIcon');
  elemento.classList.toggle('far');
}

export default checkCompletado;