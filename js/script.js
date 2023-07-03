import checkCompletado from "../components/checkCompletado.js";
import iconoBorrar from "../components/iconoBorrar.js";


  const btn = document.querySelector('[data-form-btn]');
  
  

  const crearTarea = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    const lista = document.querySelector('[data-lista]');
    const tarea = document.createElement('li')
    tarea.classList.add('card');
    input.value = '';
    const tareaContenido = document.createElement('div');
    tareaContenido.appendChild(checkCompletado());
    const tituloTarea = document.createElement('span');
    tituloTarea.classList.add('task');
    tituloTarea.innerHTML = valor;
    tareaContenido.appendChild(tituloTarea);
    tarea.appendChild(tareaContenido);
    tarea.appendChild(iconoBorrar());
    lista.appendChild(tarea);
  }

  

  btn.addEventListener('click', crearTarea);
