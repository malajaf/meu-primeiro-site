const botao = document.getElementById("botao-detalhes");
const detalhes = document.getElementById("detalhes-servicos");
const mensagem = document.getElementById("mensagem-servico");

botao.addEventListener("click", function() {
    
    console.log("O visitante clicou no botão!");

    if (mensagem.textContent === "") {
    mensagem.textContent = "Obrigado por conhecer nossos serviços!";
} else {
    mensagem.textContent = "";
}

    if (detalhes.hidden) {
        detalhes.hidden = false;
        botao.textContent = "Ocultar detalhes";
    } else {
        detalhes.hidden = true;
        botao.textContent = "Ver detalhes dos serviços";
    }
});



const seletorServico = document.getElementById("servico");
const campoCidade = document.getElementById("cidade");
const campoNome = document.getElementById("nome");
const campoTipoMovel = document.getElementById("tipo-movel");
const botaoConsultar = document.getElementById("consultar");
const resultado = document.getElementById("resultado-orcamento");
const resumoOrcamento = document.getElementById("resumo-orcamento");
const dadosOrcamento = document.getElementById("dados-orcamento");

botaoConsultar.addEventListener("click", function() {
    const servicoEscolhido = seletorServico.value;
    const cidadeEscolhida = campoCidade.value.trim();
    const nomeEscolhido = campoNome.value.trim();
    const tipoMovelEscolhido = campoTipoMovel.value.trim();

    if (
        nomeEscolhido === "" ||
        tipoMovelEscolhido === "" ||
        cidadeEscolhida === ""
    ) {
        resultado.textContent =
            "Preencha seu nome, o tipo de móvel e sua cidade.";

        resumoOrcamento.hidden = true;
        return;
    }

    dadosOrcamento.textContent =
        `Nome: ${nomeEscolhido}\n` +
        `Serviço: ${servicoEscolhido}\n` +
        `Móvel: ${tipoMovelEscolhido}\n` +
        `Cidade: ${cidadeEscolhida}`;

    resumoOrcamento.hidden = false;

    if (
        cidadeEscolhida.toLowerCase() === "sorocaba" ||
        cidadeEscolhida.toLowerCase() === "votorantim"
    ) {
        resultado.textContent =
            `Você consultou ${servicoEscolhido} em ${cidadeEscolhida}. Entre em contato para solicitar seu orçamento!`;
    } else {
        resultado.textContent =
            `Você consultou ${servicoEscolhido} em ${cidadeEscolhida}. Consulte nossa disponibilidade para essa região.`;
    }
});

const botaoWhatsApp = document.getElementById("whatsapp-orcamento");

botaoWhatsApp.addEventListener("click", function() {
    const servicoEscolhido = seletorServico.value;
    const cidadeEscolhida = campoCidade.value.trim();
    const nomeEscolhido = campoNome.value.trim();
    const tipoMovelEscolhido = campoTipoMovel.value.trim();

    if (
    nomeEscolhido === "" ||
    tipoMovelEscolhido === "" ||
    cidadeEscolhida === ""
) {
    resultado.textContent =
        "Preencha seu nome, o tipo de móvel e sua cidade.";
    return;
}
    
    const mensagemWhatsApp =
    `Olá! Meu nome é ${nomeEscolhido}. ` +
    `Gostaria de um orçamento de ${servicoEscolhido}. ` +
    `Móvel: ${tipoMovelEscolhido}. ` +
    `Cidade: ${cidadeEscolhida}.`;
        

    const numero = "5515998368717";

    const linkWhatsApp =
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagemWhatsApp)}`;
        console.log(mensagemWhatsApp);
        console.log(linkWhatsApp);

    window.open(linkWhatsApp, "_blank");
});