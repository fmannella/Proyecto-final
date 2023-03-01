const toggleMode = document.querySelector("#toggle-mode");

toggleMode.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});


$(".yellow-circle").circleProgress({
  value: 0.75,
  size: 200,
  fill: {
        color: "#ffeb3b"
        },
   animation: {
      duration: 3000
    }
  });


const card = document.querySelector('.card');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
  card.classList.toggle('is-flipped');
});

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;

  if (!name || !email || !message) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }

  // enviar formulario a un servidor o mostrar mensaje de agradecimiento
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

