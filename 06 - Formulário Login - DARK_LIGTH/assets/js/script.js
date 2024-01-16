const mode = document.getElementById('mode_icon');


mode.addEventListener('click', () => {

    const form = document.getElementById('login_form')
    if (mode.classList.contains('fa-moon')){ // Verifica se em mode existe o elemento com a classe fa-moon que é o simbolo da lua.
        mode.classList.remove('fa-moon'); //remove a classe fa-moon que corresponde ao icone da lua.
        mode.classList.add('fa-sun'); // Adiciona a classe fa-sun que corresponde ao icone do sol da biblioteca que usamos para icones.
        form.classList.add('dark'); // Adicionamos a classe 'dark' no na nossa tag form no html. Com isso ativa nossa configuração dark no css que já deixamos pronta.
        return
    }

    mode.classList.remove('fa-sun'); 
    mode.classList.add('fa-moon');
    form.classList.remove('dark'); // Removemos a classe 'dark' no nosso html para que as configurações para ela no html sejam desativadas e nosso formulário fique na forma padrão (light) que definimos.

})