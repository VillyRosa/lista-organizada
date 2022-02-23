var txtnome = window.document.querySelector('input#name')
var txtid = window.document.querySelector('input#id')
var tabela = window.document.querySelector('table#table')
var nomes = []
var id = []
var total = 0

function cadastrar() {
    if (txtnome.value == '' || txtid.value == '') {
        window.alert('Preencha todos os campos para efetuar o cadastro!')
        if (txtid.value == '') {
            txtid.focus() 
        } else {
            txtnome.focus()
        } 
    } else {
        if (id.indexOf(txtid.value) == -1 && nomes.indexOf(txtnome.value) == -1) {
            tabela.innerHTML += `<tr><td>${txtid.value}</td><td>${txtnome.value}</td></tr>`
            nomes[total] = txtnome.value
            id[total] = txtid.value
            txtnome.value = ``
            txtnome.focus()
            total++
            txtid.value++
        } else {
            if (id.indexOf(txtid.value) != -1) {
                window.alert(`O id ${txtid.value} ja foi cadastrado!`)
            } else {
                window.alert(`O nome ${txtnome.value} ja foi cadastrado!`)
            }
        }  
    }
}

function organizar() {
    tabela.innerHTML = `<tr><th>Id</th><th>Nome</th></tr>`
    // Organinzando os Id
    for (i = 0; i < total; i++) {
        id[i] = i
    }
    // Organizando os nomes
    nomes.sort()
    // Reescrevendo a tabela
    for (i = 0; i < total; i++) {
        tabela.innerHTML += `<tr><td>${id[i]}</td><td>${nomes[i]}</td></tr>`
    }
    txtid.value = total 
    txtnome.value = ``
    window.alert(`Lista organizada com sucesso!`)
}

function editar() {
    if (id.indexOf(txtid.value) != -1) {
        var idEditor = txtid.value
        nomes[idEditor] = txtnome.value
        tabela.innerHTML = `<tr><th>Id</th><th>Nome</th></tr>`
        // Reescrevendo a tabela
        for (i = 0; i < total; i++) {
            tabela.innerHTML += `<tr><td>${id[i]}</td><td>${nomes[i]}</td></tr>`
        }
        window.alert(`Nome alterado com sucesso!`)
    } else {
        window.alert(`O id ${txtid.value} não existe!`)
        txtid.value = 0
        txtid.focus()
    }
    
}

function limpar() {
    tabela.innerHTML = `<tr><th>Id</th><th>Nome</th></tr>`
    total = 0
    txtnome.value = ``
    txtid.value = 0
    nomes = []
    id = []
    txtnome.focus()
}