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

var data =
{
	"Áries": {
		"desc": 'Texto sobre aries',
		"Lua": 'Como é a lua em aries',
		'Mercúrio': 'Aries em ...',
		'Vênus': 'Aries em ...',
		'Marte': 'Aries em ...',
		'Júpiter': 'Aries em ...',
		'Saturno': 'Aries em ...',
		'Urano': 'Aries em ...',
		'Netuno': 'Aries em ...',
		'Plutão': 'Aries em ...',
		'Nódulo Lunar': 'Aries em ...'
	},
	"Touro": {
		"desc": 'Texto sobre touro',
		"Lua": 'Como é a lua em touro',
		'Mercúrio': 'Aries em ...',
		'Vênus': 'Aries em ...',
		'Marte': 'Aries em ...',
		'Júpiter': 'Aries em ...',
		'Saturno': 'Aries em ...',
		'Urano': 'Aries em ...',
		'Netuno': 'Aries em ...',
		'Plutão': 'Aries em ...',
		'Nódulo Lunar': 'Aries em ...'
	},
	"Gêmeos": {
		"desc": 'Texto sobre aries',
		"Lua": 'Como é a lua em aries',
		'Mercúrio': 'Aries em ...',
		'Vênus': 'Aries em ...',
		'Marte': 'Aries em ...',
		'Júpiter': 'Aries em ...',
		'Saturno': 'Aries em ...',
		'Urano': 'Aries em ...',
		'Netuno': 'Aries em ...',
		'Plutão': 'Aries em ...',
		'Nódulo Lunar': 'Aries em ...'
	},
	"Gêmeos": {
		"desc": 'Texto sobre aries',
		"Lua": 'Como é a lua em aries',
		'Mercúrio': 'Aries em ...',
		'Vênus': 'Aries em ...',
		'Marte': 'Aries em ...',
		'Júpiter': 'Aries em ...',
		'Saturno': 'Aries em ...',
		'Urano': 'Aries em ...',
		'Netuno': 'Aries em ...',
		'Plutão': 'Aries em ...',
		'Nódulo Lunar': 'Aries em ...'
	},
	"Câncer": {
		"desc": 'Texto sobre aries',
		"Lua": 'Como é a lua em aries',
		'Mercúrio': 'Aries em ...',
		'Vênus': 'Aries em ...',
		'Marte': 'Aries em ...',
		'Júpiter': 'Aries em ...',
		'Saturno': 'Aries em ...',
		'Urano': 'Aries em ...',
		'Netuno': 'Aries em ...',
		'Plutão': 'Aries em ...',
		'Nódulo Lunar': 'Aries em ...'
	},
	"Leão": {
		"desc": 'Texto sobre aries',
		"Lua": 'Como é a lua em aries',
		'Mercúrio': 'Aries em ...',
		'Vênus': 'Aries em ...',
		'Marte': 'Aries em ...',
		'Júpiter': 'Aries em ...',
		'Saturno': 'Aries em ...',
		'Urano': 'Aries em ...',
		'Netuno': 'Aries em ...',
		'Plutão': 'Aries em ...',
		'Nódulo Lunar': 'Aries em ...'
	},
	"Virgem": {
		"desc": 'Texto sobre aries',
		"Lua": 'Como é a lua em aries',
		'Mercúrio': 'Aries em ...',
		'Vênus': 'Aries em ...',
		'Marte': 'Aries em ...',
		'Júpiter': 'Aries em ...',
		'Saturno': 'Aries em ...',
		'Urano': 'Aries em ...',
		'Netuno': 'Aries em ...',
		'Plutão': 'Aries em ...',
		'Nódulo Lunar': 'Aries em ...'
	},
	"Libra": {
		"desc": 'Texto sobre aries',
		"Lua": 'Como é a lua em aries',
		'Mercúrio': 'Aries em ...',
		'Vênus': 'Aries em ...',
		'Marte': 'Aries em ...',
		'Júpiter': 'Aries em ...',
		'Saturno': 'Aries em ...',
		'Urano': 'Aries em ...',
		'Netuno': 'Aries em ...',
		'Plutão': 'Aries em ...',
		'Nódulo Lunar': 'Aries em ...'
	},
	"Escorpião": {
		"desc": 'Texto sobre aries',
		"Lua": 'Como é a lua em aries',
		'Mercúrio': 'Aries em ...',
		'Vênus': 'Aries em ...',
		'Marte': 'Aries em ...',
		'Júpiter': 'Aries em ...',
		'Saturno': 'Aries em ...',
		'Urano': 'Aries em ...',
		'Netuno': 'Aries em ...',
		'Plutão': 'Aries em ...',
		'Nódulo Lunar': 'Aries em ...'
	},
	"Sagitário": {
		"desc": 'Texto sobre aries',
		"Lua": 'Como é a lua em aries',
		'Mercúrio': 'Aries em ...',
		'Vênus': 'Aries em ...',
		'Marte': 'Aries em ...',
		'Júpiter': 'Aries em ...',
		'Saturno': 'Aries em ...',
		'Urano': 'Aries em ...',
		'Netuno': 'Aries em ...',
		'Plutão': 'Aries em ...',
		'Nódulo Lunar': 'Aries em ...'
	},
	"Capricórnio": {
		"desc": 'Texto sobre aries',
		"Lua": 'Como é a lua em aries',
		'Mercúrio': 'Aries em ...',
		'Vênus': 'Aries em ...',
		'Marte': 'Aries em ...',
		'Júpiter': 'Aries em ...',
		'Saturno': 'Aries em ...',
		'Urano': 'Aries em ...',
		'Netuno': 'Aries em ...',
		'Plutão': 'Aries em ...',
		'Nódulo Lunar': 'Aries em ...'
	},
	"Aquário": {
		"desc": 'Texto sobre aries',
		"Lua": 'Como é a lua em aries',
		'Mercúrio': 'Aries em ...',
		'Vênus': 'Aries em ...',
		'Marte': 'Aries em ...',
		'Júpiter': 'Aries em ...',
		'Saturno': 'Aries em ...',
		'Urano': 'Aries em ...',
		'Netuno': 'Aries em ...',
		'Plutão': 'Aries em ...',
		'Nódulo Lunar': 'Aries em ...'
	},
	"Peixes": {
		"desc": 'Texto sobre aries',
		"Lua": 'Como é a lua em aries',
		'Mercúrio': 'Aries em ...',
		'Vênus': 'Aries em ...',
		'Marte': 'Aries em ...',
		'Júpiter': 'Aries em ...',
		'Saturno': 'Aries em ...',
		'Urano': 'Aries em ...',
		'Netuno': 'Aries em ...',
		'Plutão': 'Aries em ...',
		'Nódulo Lunar': 'Aries em ...'
	}
}


/* FUNCOES */

function listaSignos(signoBase) {
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
	var rotulo = $('<span>').addClass('label label-default').text(aspecto);

	rotulo.appendTo(celula);
}

function getText(signo, aspecto) {
	if ( aspecto )
		return data[signo][aspecto];
	else {
		var campo = 'desc';
		return data[signo][campo];
	}
}

function significadoLetra(letra) {
	return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut pa qui offi'
}

function inserePainel(local, signo, aspecto) {
	// código painel + inserir após resultado
	var titulo, texto;
	if ( aspecto != null ) {
		titulo = aspecto + ' em ' + signo;
		texto = getText(signo, aspecto);
	}
	else {
		titulo = signo;
		texto = getText(signo);
	}
	var painel = $('<div>').addClass('panel panel-default')
		.appendTo($('<div>').addClass('col-xs-12 col-md-6').appendTo(local));
	$('<h3>').addClass('panel-title').text(titulo)
		.appendTo($('<div>').addClass('panel-heading')
			.appendTo(painel));
	$('<div>').addClass('panel-body').text(texto)
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
		$('<td>').addClass('col-xs-11').text(significadoLetra(letras[i])).appendTo(linha);
		linha.appendTo($('#analise-nome > tbody'));
	}
}

function geraResultado() {
	$('#resultados').children().remove();

	var divSignos = $('<div>').attr('id', 'resultado-signos').appendTo('#resultados');
	var divAspectos = $('<div>').attr('id', 'resultado-aspectos').appendTo('#resultados');
	var divNome = $('<div>').attr('id', 'resultado-nome').appendTo('#resultados');

	$('<h2>').text('Signos').appendTo(divSignos);
	$('<h2>').text('Aspectos').appendTo(divAspectos);
	$('<h2>').text('Análise do Nome').appendTo(divNome);

	$('div', {
		'id':'analise-nome',
		'class':'table table-bordered table-striped table-hover'
	}).appendTo(
		$('<div>').addClass('col-xs-12')
			.appendTo($('<div>').addClass('row'))
	)

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
	$('<span>').addClass('label label-default').text("Lua").appendTo(celula);
	$('<span>').addClass('label label-default').text("Marte").appendTo(celula);
}

$(document).ready( function() {
	$(insereOpcoesdeSignos());
	$(montaTabela());
	$(montaAspectos());
	$(testeAutomatizado());

	$('form').attr('onsubmit', 'return false;'); // previne que a página seja recarregada

	$('#select').change(function() {
		$('#run').removeAttr('disabled');
	});

	$('#run').click(function() {
		var signo = $(".seletor-signo option:selected").val();
		$(preencheLinha(listaSignos(signo)));
		deletaAspectos();
		console.log('Rodar');
		$('select').removeAttr('disabled');
	});

	$('#adiciona-aspecto').click(adicionaAspecto);

	$('span.label').dblclick(function() {
		$(this).remove();
	});

	$('#gera-resultado').click(geraResultado);

});
