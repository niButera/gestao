// TELA FILTROS - BOTÃO QUARTOS
function historico() {
    var botoesContainer = document.querySelector('.bloco1');
    var botoesAdicionados = document.querySelectorAll('.botao-adicional');

    if (botoesAdicionados.length === 0) {
        var botoesHTML = `
        <div class="box" id="botao-adicional">
        <div class="content">
            <h3>Quarto 01</h3>
            <h4>Informações</h4>
        </div>
        <a href="historicoinfo.html"><img src="pics/SetaBlueGo.png" id="SetaBlueGo"></a>
    </div>

    <div class="box" id="botao-adicional">
        <div class="content">
            <h3>Quarto 05</h3>
            <h4>Informações</h4>
        </div>
        <a href="historicoinfo.html"><img src="pics/SetaBlueGo.png" id="SetaBlueGo"></a>
    </div>

    <div class="box" id="botao-adicional">
        <div class="content">
            <h3>Quarto 10</h3>
            <h4>Informações</h4>
        </div>
        <a href="historicoinfo.html"><img src="pics/SetaBlueGo.png" id="SetaBlueGo"></a>
    </div>
        `;
        botoesContainer.insertAdjacentHTML('beforeend', botoesHTML);
    } else {
        botoesAdicionados.forEach(function (botao) {
            botao.remove();
        });
    }
}



