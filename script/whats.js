//codigo enviar msg form

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('formulario-contato');

    if (form) { // Verifica se o formulário foi encontrado
        form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio do formulário padrão
        
        // Recupera os valores do formulário
        var nome = document.getElementById('nome').value;
        var telefone = '12981199574'; // Número fixo
        var mensagem = document.getElementById('mensagem').value;
        
        // Verifica se todos os campos foram preenchidos
        if (nome && telefone && mensagem) {
            // Formata a mensagem com os valores do formulário
            // Formata a mensagem com os valores do formulário
        var textoMensagem = encodeURIComponent('Olá, me chamo ' + nome + '. Gostaria de falar sobre, ' + mensagem);
        
        // Abre o WhatsApp com os dados preenchidos
        window.open('https://wa.me/' + telefone + '?text=' + textoMensagem, '_blank');
        
        // Limpa os campos do formulário após o envio
        form.reset();
        
        return false; // Impede o envio padrão do formulário
        }});
        
        // Define o link do WhatsApp com o número fixo
        whatsappLink.href = 'https://wa.me/12982406588';
    } else {
        console.error('O formulário ou o link do WhatsApp não foram encontrados.');
    }
    });
