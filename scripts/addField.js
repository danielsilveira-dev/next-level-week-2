    // Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)
// Quando clicar no botão

// Executar uma ação
function cloneField() {
// Duplicar os campos, que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // cloneNode usado para clonar tags html. // Espera true ou false
// pegar os campos: Que campos?
    const fields =  newFieldContainer.querySelectorAll('input') // querySelectorAll('input') seleciona todos os input dentro do node(elemento selecionado)
    // Para cada campo, limpar
    fields.forEach(function(field) {
        // pega o field do momento e limpa ele
        field.value = ""
    })
// Colocar na página: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
