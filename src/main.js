const full = document.querySelector("html");
const toggel_dark = document.querySelector('#toggel-dark');
const formulario = document.querySelector('#contact-form');
const mensaje = document.querySelector('#mensaje');
const boton_cerrar = document.querySelector('#boton-close');

toggel_dark.addEventListener('click', () => {
  full.classList.toggle("dark")
})

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('evento desactivado')

  const formData = new FormData(formulario);

  const response = await fetch(formulario.action, {
    method: formulario.method,
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  });

  if(response.ok){
    console.log("form enviado exitosamente");
    mensaje.classList.remove('hidden');
    formulario.reset();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

boton_cerrar.addEventListener('click', () => {
  mensaje.classList.add('hidden');
})