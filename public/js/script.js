const formulario = document.querySelector("form")
const Inome = document.querySelector('.nome')
const Itelefone = document.querySelector('.telefone')
const Igenero = document.querySelector('.genero')
const Icpf = document.querySelector('.cpf')
const ItipoSanguineo = document.querySelector('.tipoSanguineo')
const IdataDeNascimento = document.querySelector('.dataDeNascimento')

formulario.addEventListener('submit', function (event) {
  event.preventDefault()

  console.log(Inome.value)
})


