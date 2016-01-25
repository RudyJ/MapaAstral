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

function insereOpcoesdeSignos() {
	$.each(signos, function(chave, valor) {
		$('<option>').attr('value', valor).text(valor).appendTo($('.seletor-signo'));
	});
}

function montaAspectos() {
	$.each(aspectos, function(chave, valor) {
		$('<option>').attr('value', valor).text(valor).appendTo($('.seletor-aspecto '));
	});
}

function preencheLinha(signos) {
 	var i = 0;
 	$('.signo').each(function() {
 		$(this).text(signos[i]);
 		i++;
 	});
}

function montaTabela() {

	var tabela = $('<table>').attr('id', 'tabela-signo').addClass('table table-striped table-hover table-responsive text-center');

	var head = $('<thead>').appendTo(tabela);
	$('<th>').addClass('col-xs-2 text-center').text('Casas').appendTo(head);
	$('<th>').addClass('col-xs-4 text-center').text('Signo').appendTo(head);
	$('<th>').addClass('col-xs-6 text-center').text('Aspectos').appendTo(head);

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

function adicionaAspecto() {
	var signo = $(".seletor-signo.aspecto option:selected").val();
	var aspecto = $(".seletor-aspecto option:selected").val();

	var celula = $('#tabela-signo').find(".signo:contains(" + signo + ")").next();
	var rotulo = $('<label>').addClass('label label-default').text(aspecto);

	rotulo.appendTo(celula);
}

function getText() {
	return " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

function significadoLetra(letra) {
	return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut pa qui offi'
}

function inserePainel(local, signo, aspecto) {
	// código painel + inserir após resultado
	var titulo;
	if ( aspecto != null ) {
		titulo = aspecto + ' em ' + signo;
	}
	else {
		titulo = signo;
	}
	var painel = $('<div>').addClass('panel panel-default')
		.appendTo($('<div>').addClass('col-xs-12 col-md-6').appendTo(local));
	$('<h3>').addClass('panel-title').text(titulo)
		.appendTo($('<div>').addClass('panel-heading')
			.appendTo(painel));
	$('<div>').addClass('panel-body').text(getText())
		.appendTo(painel);
}

function getAspectos() {
	var aspectos = [];
	$('td.aspecto').each(function() {
		$(this).children().each(function() {
			aspectos.push($(this));
		});
	});
	return aspectos;
}

function incluirPainelSignos() {
	$('.signo').each(function() {
		inserePainel('#resultado-signos',$(this).text(), null);
	});
}

function incluirPainelAspectos() {
	var aspectos = [];
	$('.signo').each(function() {
		var signo = $(this).text();
		$(this).next().children().each(function() {
			aspectos.push(($(this).text()));
		});

		for (var i = 0; i < aspectos.length; i++) {
			inserePainel('#resultado-aspectos',signo, aspectos[i]);
		}
		aspectos = [];
	});
}

function incluirAnaliseNome() {
	var letras = $('#nome').val().split("");

	for ( var i = 0; i < letras.length; i++ ) {
		var linha = $('<tr>');
		$('<th>').addClass('col-xs-1').text(letras[i]).appendTo(linha);
		$('<td>').addClass('col-xs11').text(significadoLetra(letras[i])).appendTo(linha);
		linha.appendTo($('#analise-nome > tbody'));
	}
}

function geraResultado() {
	incluirPainelSignos();
	incluirPainelAspectos();
	incluirAnaliseNome();
}

function deletaAspectos() {
	$('td.aspecto').each(function() {
		$(this).children().each(function() {
			$(this).remove();
		});
	});
}

function testeAutomatizado() {

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
		deletaAspectos();
	});

	$('#adiciona-aspecto').click(adicionaAspecto);

	// TODO: remover aspecto específico
	$('label, .label.label-default').dblclick(function() {
		$(this).css('background-color','transparent');
		// $(this).remove();
	});

	$('#gera-resultado').click(geraResultado);

	$(testeAutomatizado());
});
