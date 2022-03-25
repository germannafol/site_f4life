function removeCompotamentoForm(evento){
    //remover a resposta básica
    evento.preventDefault();
    console.log("passo 0")
}

//CONSTANTES
//3.Seleciona o PAI
const tagPai=document.querySelector('.div-resposta');

function criaMensagem(mensagem){
    //1.cria o paragrafo
    tagResposta=document.createElement('p');
    console.log("passo 1")
    //2.add a class ao paragrafo
    tagResposta.classList.add(".p-resposta");
    console.log("passo 2")
    //4.Coloca o paragrafo na tag pai
    tagPai.appendChild(tagResposta);
    //5.Modificação do texto
    textoResposta=document.createTextNode(mensagem);
}
function insereCorAlerta(mensagem){
    mensagem.classList.add("erro-formulario");
}
function insereResposta(){
    //6.Coloca o texto no paragrafo
    tagResposta.appendChild(textoResposta);
}
function validacaoCorreta(mensagem){
    mensagem.classList.remove("erro-formulario");
    tagPai.innerHTML="";
}

//Seleciona CAMPO MENSAGEM
const campoMensagem=document.getElementById("mensagem");
const campoEmail=document.getElementById("email");
const exp= new RegExp(`[A-Z]`);

botao.addEventListener('click', event=> {
    removeCompotamentoForm(event);
    if (campoMensagem.value==""){
        criaMensagem(" ERRO NO ENVIO: Por favor, insira uma mensagem" );
        insereCorAlerta(campoMensagem);
        insereResposta();
    }else{
        validacaoCorreta(campoMensagem);

        //Validação campo email em Branco
        if(campoEmail.value==""){
            criaMensagem(" ERRO NO ENVIO: Endereço de email inválido ")
            insereCorAlerta(campoEmail);
            insereResposta();
        }else{
            validacaoCorreta(campoEmail);
            
            //Validação campo email não preenchido corretamente
            if(campoEmail.value.indexOf("@") == -1 || campoEmail.value.indexOf(".")== -1 || campoEmail.value.indexOf(".") - campoEmail.value.indexOf("@") == 1 || campoEmail.value.indexOf("@")-1>32 || ((campoEmail.value.indexOf(".") - campoEmail.value.indexOf("@"))-1)>16 ){
                criaMensagem(" ERRO NO ENVIO: Endereço de email inválido ")
                insereCorAlerta(campoEmail);
                insereResposta();
            }else{
                validacaoCorreta(campoEmail);
                
                if(exp.test(email.value.substring(email.value.indexOf("@"),email.value.indexOf(".")))){
                    criaMensagem(" ERRO NO ENVIO: Endereço de email inválido ")
                    insereCorAlerta(campoEmail);
                    insereResposta();   
                }else{
                    criaMensagem(`Obrigada pelo contato, ${email.value.substring(0,email.value.indexOf("@"))}`);
                    insereResposta();
                }

            }
        }
    }
    
})

