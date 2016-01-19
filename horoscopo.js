/* DADOS */
var signos = [
	'Áries',
	'Touro',
	'Gêmeos',
	'Câncer',
	'Leão',
	'Virgem',
	'Libra',
	'Escorpião',
	'Sagitário',
	'Capricórnio',
	'Aquário',
	'Peixes'
]

var aspectos = [
	'Lua',
	'Mercúrio',
	'Vênus',
	'Marte',
	'Júpiter',
	'Saturno',
	'Urano',
	'Netuno',
	'Plutão',
	'Nódulo Lunar'
]

/* FUNCOES */
function listaSignos( signoBase ) {
	while ( signos[0] != signoBase )
		signos.unshift(signos.pop());
	return signos;
}

/* jQuery */

var insereOpcoesdeSignos = function() {
	$.each(signos, function(chave, valor) {
		$('<option>').attr('value', valor).text(valor).appendTo($('.seletor-signo'));
	});
}

var montaAspectos = function() {
	$.each(aspectos, function(chave, valor) {
		$('<option>').attr('value', valor).text(valor).appendTo($('.seletor-aspecto '));
	});
}

var preencheLinha = function(signos) {
 	var i = 0;
 	$('.signo').each(function() {
 		$(this).text(signos[i]);
 		i++;
 	});
}

var montaTabela = function() {
	
	var tabela = $('<table>').attr('id', 'tabela-signo').addClass('table table-striped table-hover table-responsive');
	
	var head = $('<thead>').appendTo(tabela);
	$('<th>').text('Casas').appendTo(head);
	$('<th>').text('Signo').appendTo(head);
	$('<th>').text('Aspectos').appendTo(head);

	var body = $('<tbody>').appendTo(tabela);
	for ( var i = 0; i < 12; i++ ) {
		var linha = $('<tr>').appendTo(body);
		if ( i == 0 ) linha.addClass('info'); // refatorar
		$('<td>').text(i+1).appendTo(linha);
		$('<td>').appendTo(linha).addClass('signo');
		$('<td>').appendTo(linha).addClass('aspecto');
	}

	tabela.appendTo($('#dados'));
}

var adicionaAspecto = function() {
	var signo = $(".seletor-signo.aspecto option:selected").val();
	var aspecto = $(".seletor-aspecto option:selected").val();

	var celula = $('#tabela-signo').find(".signo:contains(" + signo + ")").next();
	var rotulo = $('<label>').addClass('label label-default').text(aspecto);

	rotulo.appendTo(celula);
}

var inserePainel = function(signo, aspecto) {
	console.log('Inserindo painel (' + signo + ':' + aspecto + ')');

	// código painel + inserir após resultado
	var painel = $('<div>').addClass('panel panel-default')
		.appendTo($('<div>').addClass('col-xs-12 col-md-6').appendTo('#resultados'));
	$('<h3>').addClass('panel-title').text(aspecto + ' em ' + signo)
		.appendTo($('<div>').addClass('panel-heading')
			.appendTo(painel));
	$('<div>').addClass('panel-body').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptate labore ab dignissimos, dolore sed accusamus. Nulla quasi illum assumenda inventore quae odit eos repellat vero? Dolores architecto assumenda minus.')
		.appendTo(painel);
}

var geraResultado = function() {
	var i = 0;
	var aspectos = [];
	$('.signo').each(function() {
		var signo = $(this).text();
		$(this).next().children().each(function() {
			aspectos.push(($(this).text()));
		});

		for (var i = aspectos.length - 1; i >= 0; i--) {
			inserePainel(signo, aspectos[i]);
		};
		aspectos = [];
	});
}

var testeAutomatizado = function() {

	// seleciona signo
	$(preencheLinha(listaSignos('Áries')));

	// insere aspectos
	var celula = $('#tabela-signo').find(".signo:contains(Touro)").next();
	$('<label>').addClass('label label-default').text("Lua").appendTo(celula);
	$('<label>').addClass('label label-default').text("Marte").appendTo(celula);
}

$(document).ready( function() {
	$(insereOpcoesdeSignos());
	$(montaTabela());
	$(montaAspectos());

	$('form').attr('onsubmit', 'return false;'); // previne que a página seja recarregada
	
	$('#run').click(function() {
		var signo = $(".seletor-signo option:selected").val();
		$(preencheLinha(listaSignos(signo)));
		$('select').removeAttr('disabled');
	});

	$('#adiciona-aspecto').click(adicionaAspecto);
	// remove aspecto
	$('.label').on('click', function() {
		$(this).animate({'fontSize':'100px', 'margin-left':'+=100'}, function() {
			// $(this).remove();
		});
	});

	$('#gera-resultado').click(geraResultado);

	// $(testeAutomatizado());
});

