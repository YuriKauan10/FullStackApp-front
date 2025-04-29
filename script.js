let msg = document.getElementById("mensagem")


fetch('http://127.0.0.1:8000/')
.then(response => response.json())
.then(data => msg.innerHTML = data.message)
.catch(error => {
    msg.innerHTML = "Erro ao acessar"
    console.error(error)
})