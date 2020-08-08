// Procurar botão - document.querySelector("#add-time")
//Quando clicar no botao - .addEventListener('click', cloneField)
//Executar uma ação
    //Duplicar os campos - ...cloneField function cloneNode
    //Coloca na pagina - 

document.querySelector("#add-time")
.addEventListener('click', cloneField)
function cloneField() {
    //console.log("cheguei aqui") - teste
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //dado booleano true or false

    //pegar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar
    fields.forEach(function(field) { //para cada linha criada
        //pegar o field do momento e limpar ele
        field.value = ""
    })
    document.querySelector('#schedule-items').appendChild(newFieldContainer)//clonando os campos dos horários
}