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
		"Lua": 'No que diz respeito às emoções e sentimentos, você tende a ser impulsivo(a), imediatista e volúvel, expressando sua característica de forma dinâmica, sem receio de se auto-afirmar e de tomar iniciativas. Sua determinação frente ao que quer é surpreendente. Por agir sem pensar nas possíveis conseqüências de seus atos, poderá se arrepender mais tarde. De reação violenta quando se sente ameaçado(a) ou provocada, você, no entanto, acalma-se também rapidamente e logo esquece o acontecido, não alimentando rancores nem guardando raiva de ninguém. Independente, você na grande maioria das vezes faz as coisas a seu modo, sem dar ouvidos a sugestões e muito menos às interferências alheias. A tendência é você se ligar no seu ponto de vista e procurar dominar os outros no âmbito emocional.',
		'Mercúrio': 'Com uma mente ágil e objetiva, suas idéias tendem a aparecer prontamente, o que o(a) capacita a tomar decisões, principalmente nas situações de urgência ou quando o tempo para a avaliação é escasso. Ousado(a) e independente em seu pensar, você poderá contribuir com sugestões de grande originalidade, promovendo uma renovação das idéias do meio. Cuidado apenas com a impulsividade e a impaciência e com a imposição do seu ponto de vista para não atrair desentendimentos. Você sem dúvida gosta de debater idéias exercitando sua mente nas argumentações, mas deve tornar-se uma pessoa provocadora ou polemizadora, o que seria um desperdício de seus recursos mentais. À frente do movimento, você se desloca e age com presteza e disposição. Seu desejo por agitos e mudanças pode tanto indicar possibilidade de crescimento, experimentação e vivência, como também inconstância, instabilidade e volubilidade.',
		'Vênus': 'Com entusiasmo, ardor e exuberância, você em seu temperamento apaixonado é extrovertido(a), não faz reservas quando se trata de expressar afeto ou de atrair quem o(a) interessa.  Demonstrativo(a) e impetuoso(a) no amor, sua aproximação tende a ser direta, aberta, sem hesitação, o que às vezes pode ser esbarrado na agressividade ou ser interpretado como tal. Capaz de expressar livremente seu afeto, em geral é sua a iniciativa para formar os relacionamentos, sejam estes de amizade ou amor. Impetuoso(a), super apaixonado(a), você tende a competir pelo carinho do outro, exigindo numa perspectiva egocêntrica, nada menor do que toda atenção para si,  o que pode implicar em instabilidade e volubilidade, pois, se seu amor acontece no egoísmo, na possessividade, no imediatismo e, em função de tamanha demanda, não possa ser correspondido, você se desinteressa, alimentando esse fogo com outra paixão. Um amadurecimento nesse sentido é necessário. Há todo um caminho a ser percorrido do amor narcisista ao amor próprio, passando pelo amor ao outro, o que implica em reconhecer o outro em suas necessidades e direitos. Graças aos impulsos de querer as coisas a seu modo, sob o seu domínio, isto nem sempre acontece. De aparência saudável, jovial, bem cuidado(a), mesmo que não especialmente belo(a), tende a ser atraente, mantendo-se jovem qualquer que seja a idade.',
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
		"Lua": 'Você é uma pessoa amável e romântica que sabe ser gentil e atenciosa. Com fortes vínculos familiares, você gosta do conforto afetivo e material do seu lar. 	Pessoa passiva, você precisa do estímulo dos outros para iniciar projetos ou até mesmo para levantar da cama quando acorda. Paciente, seu ritmo tende a ser mais lento, porém você é capaz de enfrentar todos os percalços para ver concretizado o que quer. Pessoa tranqüila, você sabe lidar com situações instáveis ou emergenciais com muita calma, o que faz de você um referencial confiável frente às tormentas emocionais. De hábitos arraigados, dificilmente muda o comportamento.',
		'Mercúrio': 'Dotado(a) de uma mente atenta e laboriosa, suas decisões tendem a ser norteadas pelo que é prático e seguro em termos de aplicação de recursos pessoais ou financeiros. Com idéias que passam por lenta elaboração, você chega às conclusões após muito pensar. Sem pressa para formar opinião, uma vez tendo se definido, dificilmente se altera. Aliás, você é tranqüilo(a) em seus movimentos e deslocamentos, pois é melhor não correr riscos, não ultrapassar o limite de segurança, qualquer que seja a instância e, além de tudo, é importante para você curtir cada etapa, sentir prazer não só com o antes ou o depois,  mas durante todo o trajeto percorrido. Você expressa suas idéias com clareza, mas prefere fazê-lo com o auxílio de elementos concretos : um texto, um desejo, um projetor ou uma foto. Você capta melhor as informações se elas são acompanhadas do recurso visual.',
		'Vênus': 'Com expressiva capacidade amorosa, você demonstra seus afetos com serenidade e de forma espontânea. Segurança e estabilidade são fatores preponderantes para você numa relação e, nesse sentido, você tem afinidade com vínculos duradouros, pautados na confiança e lealdade. Aliás a falta de tranqüilidade no setor amoroso poderá fazer emergir sua possessividade através de intenso cíumes. Você necessita também de formar mais palavras ternas e concretas para transmitir suas emoções, tais como o carinho e o toque físico. Outra forma de transmitir seu amor e proporcionar bem estar e conforto material dos seus. Você é uma pessoa sensual e sedutora, você procura atrair as pessoas, valoriza a beleza e procura se cuidar de forma a manter-se com boa aparência. A ampliação do seu potencial amoroso possivelmente encontrará estímulo envolvendo a segurança e a autoconfiança.',
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
		"Lua": 'Impessoal, desapegado(a) e fraterno(a), seus vínculos pautam-se na camaradagem e no companheirismo, e são frutos mais do entrosamento no campo mental do que afetivo. Com tendência à predominância do intelecto sobre as emoções, pode ocorrer um certo distanciamento de forma que as atividades denotem maior presença, lucidez e praticidade frente aos fatos. Mas há o risco do racional controlar demais as emoções e, com isto, levá-lo(a) a um distanciamento capaz de desconecta-lo(a) do que realmente sente. Com grande avidez para experiências e para movimento, você anseia por constantes estímulos e em função disto poderá demonstrar ser uma pessoa agitada que às vezes dá a impressão de fazer muita coisa, mas acaba realizando pouco por perder tempo e energia com o trivial. É provável que você fale muito e de forma incessante, até para não ouvir o que diz, mas expressando-se de forma pertinente e elaborada, ao invés de aborrecer os outros, você poderá obter sucesso pessoal ou profissional, através de sua eloqüência.',
		'Mercúrio': 'Sua mente ativa, perspicaz e objetiva necessita de estímulos constantes, o que indica que você é dotado(a) de um inesgotável desejo de conhecimento,  experiência e de uma imensa curiosidade, de um grande interesse  por  novidades, e sem desejar se prender a uma idéia ou lugar, você se desloca no pensamento e no  espaço com agilidade. Com isso você percebe as diversas maneiras de se abordar um assunto e pode, inclusive, vir a ter dificuldades em decidir, em optar, não só em função da avidez por experiências que dificulta abrir mão de uma oportunidade como  também por mudanças de opinião com freqüência, por causa das várias perspectivas possíveis. Você é muito exposto(a) a tudo o que acontece, captando e registrando com intensidade, tudo simultaneamente. Seu sistema nervoso ultra estimulado é também muito sensível, pois você se  expressa verbalmente ou na escrita com clareza, boa articulação e eloqüência.',
		'Vênus': 'Bastante aberto(a) aos relacionamentos e desejando um contato fraternal com todas as pessoas, você gosta da pluralidade, da diversidade. Nesse sentido, precisa de relacionamentos que preservem a sua liberdade, para que possa dar vazão à sua curiosidade frente às pessoas. Assim, é pouco provável você aprofundar um envolvimento, graças ao número enorme de pessoas que o(a) cercam e despertam seu interesse. Tais características podem indicar baixa disposição em estabelecer vínculos permanentes, com tendência à inconstância e à volubilidade. Expressando-se com bastante entusiasmo, bom humor e leveza, você é uma pessoa hábil na conversa e espirituosa, capaz de conquistar os outros através de sua grande agilidade mental. Em geral sente-se atraído(a) por pessoas de intelecto vivo, perspicaz, até porque não se sente bem perto de quem se pauta exclusivamente ou intensamente nas emoções. Você tende a desenvolver sua capacidade afetiva no contato direto com o seu meio e através das experiências cotidianas com irmãos, colegas e tudo o que eles possam oferecer.',
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
		"Lua": 'Com emoções e sentimentos profundos, aos quais se conecta com naturalidade, você transparece segurança e acolhimento, constituindo-se num referencial estável para aqueles que convivem com você. Também está atento(a) às necessidades alheias e não nega ajuda. Aliás, é provável você já ter desempenhado, mesmo na infância, papel parental frente às pessoas desprotegidas ou imaturas. Neste sentido, você precisa tomar cuidado para não exagerar. Com forte identificação com a família, é fundamental para o seu bem estar e segurança, a harmonia no lar. Sensível à opinião alheia, o mínimo desafio ou crítica te atinge a ponto de você se fechar num silêncio introspectivo, não por fraqueza ou fragilidade, mas para poder avaliar o sentimento. O passado tende a ser um referencial marcante em sua vida, despertando sua curiosidade por assuntos que envolvam origens.',
		'Mercúrio': 'Com uma mente retentiva e assimiladora, você é dotado(a) de grande memória o que indica que uma vez tendo registrado ou aprendido algo dificilmente o esquece. Você se identifica mais com idéias há muito tempo instaladas e familiarizadas, o que revela opiniões tradicionais e conservadora. Esta tendência estende-se ao passado familiar, ancestral ou pessoal, logo, seus registros primários podem estar sendo determinantes dos conceitos expressos atualmente, o que  é indício de subjetividade. Neste sentido, cuidado com os maus hábitos no pensar, com as formas viciadas de raciocinar sobre os fatos e com as crenças arraigadas, pois isto pode implicar em preconceitos limitadores da experiência, da troca e da relação.',
		'Vênus': 'Profundamente romântico(a) e sensível, é grande sua disposição para os relacionamentos amorosos havendo empenho, seriedade e compromisso de sua parte nessa área.  Atento(a) à qualidade do afeto na relação,  quando ama é prá valer. Dado(a) a um cultivo básico das relações, você preza a harmonia procurando dar o melhor de si quando ama. Apreciando o lar, a vida doméstica,  o convívio em família, você é uma pessoa de hábitos caseiros que privilegia o espaço privado ao público. Nesse sentido, você prefere centralizar em sua casa as atividades sociais. Sua capacidade amorosa pode ser ampliada através de estímulos provenientes da família, dos filhos ou de um trabalho na esfera emocional.',
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
		"Lua": 'Com pronunciada vontade de ser notado(a), você gosta de ser o centro das atenções e freqüentemente age em função desta finalidade. Ávido(a) por carinho, cuidado e amor, quando se sente suprido(a) afetivamente diminui o impulso de chamar atenção. Expressando-se por meio das emoções e sentimentos com força e vigor, você é capaz de grande dramaticidade, o que pode ser um instrumento útil em várias circunstâncias ou um fator de descrédito. Mas de qualquer forma, apesar de eventuais exageros por ser absolutamente orgulhoso(a) e verdadeiro(a) de suas emoções, você tende a ser bastante honesto(a) e sincero(a) em relação a sentimentos. Sem fazer segredo do que sente, você fala e deixa transparecer como está internamente. Bastante fértil e criativo(a), você está capacitado(a) a realizar seus anseios, ou seja, concretizar os propósitos capazes de lhe trazer tranqüilidade e satisfação emocional.',
		'Mercúrio': 'Com uma mente brilhante e sintonizada, você é capaz de focalizar sua atenção em objetivos específicos, extraindo o máximo de informações possíveis de cada evento ou circunstância, fruto de desejo de ser uma reconhecida autoridade em seu campo de atuação. Deste  modo você tem a tendência a descartar tudo o que não é de seu interesse imediato, o que pode ser prejudicial através da restrição, ou não, se você trabalhar tal disposição. Otimista, confiante e, sem dúvida inteligente, você encontra soluções para suas dúvidas e questionamentos com facilidade, precisando apenas tomar cuidado para não reagir com orgulho e arrogância, por conta de sua mente bem dotada. Pessoa bem humorada, você se diverte com as idéias e raciocínios, exercitando sua mente com prazer nos detalhes, discussões, provocações mentais ou nos jogos de desafio mental. Gostando de expressar-se através da fala, você tem habilidade para fazê-lo de forma consciente, devido à sua veia dramática.',
		'Vênus': 'Com uma natureza ardente, afetuosa e expansiva, você se envolve com as pessoas com grande entusiasmo e paixão. Gostando de exercer seu poder de atração, a etapa da conquista tende a mobilizar toda sua potencialidade dramática. 	Ser admirado(a), apreciado(a) e valorizado(a)  confere-lhe grande excitação. Extremamente fiel e leal àqueles que conquistaram seu afeto, você dedica-se prestimosamente às pessoas amadas. Com grande amor à vida, o simples fato de existir é um grande prazer para você. A única instância capaz de bloquear o amor em sua vida é o orgulho excessivo e a presunção, correlacionados a uma esfera pessoal de poder, o que se devidamente trabalhado poderá fazer resplandecer seu impulso amoroso.',
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
		"Lua": 'Tímido(a), você possivelmente, por excesso de autocrítica, em geral não reconhece seus méritos, colocando o EU ideal muito distanciado do EU real, vivendo situações freqüentes de ansiedade. Ser útil e ajudar os outros desperta a sua auto-estima, o que, a princípio pode contribuir para diminuir essa ansiedade. Já que o emocional influencia a saúde, você poderá ser mais suscetível a doenças, o que pode resultar em quadros psicossomáticos ou mesmo de característica hipocondríaca. Mas também num outro sentido pode encaminhá-lo(a) a trabalhos na área terapêutica, na qual você pode expressar cuidados aplicando suas energias construtivamente no servir; vale dizer que você tende a ser cuidadoso(a) em tudo o que faz. Há indícios de transformações relativas à identificação com a limpeza, o asseio e a ordem, quer no sentido de aproximação ou de distanciamento, de forma a haver um equilíbrio saudável frente a tais práticas.',
		'Mercúrio': 'Com uma mente analítica, detalhista e crítica, nada escapa à sua observação, o que pode ser muito útil se aplicado construtivamente. A correção, a precisão e a exatidão são suas metas em termos de raciocínio e movimento, o que pode indicar confiabilidade e alto padrão, bem como economia de recursos. Mas também incorre no risco de ser limitado(a), caso isto se torne uma obsessão. Interessado(a) em transformações e conhecimentos especializados, você pesquisa exaustivamente os assuntos que o(a) atraem. Metódico(a) e ordenado(a), nada é complicado frente às suas etapas bem programadas. Na comunicação, sua disposição em aplicar corretamente a gramática poderá torna-lo(a) eloqüente e versado(a) em línguas, ou extremamente formal e pedante, dependendo do sentido escolhido na relação com as pessoas: a aproximação ou o distanciamento.',
		'Vênus': 'De natureza pacífica, bondosa e solícita, você gosta de prestar serviço como forma de expressar seu amor, fruto da disponibilidade de ajudar. Cuidado para não entender erroneamente que a conquista é pelo que você faz e não pelo que você é. Muito exigente no amor, seja com relação a si mesmo(a) ou aos outros, você tende a rejeitar o que não corresponde a seus critérios, sempre de altíssimo nível. Mas até para amar você precisará baixar a expectativa, não exigindo a incondicionalidade no afeto, seja frente a si mesmo(a) ou aos outros, para aceitar o amor humano. Não permita que o excesso de crítica interrompa o fluxo natural da troca pessoal e profunda em sua vida. Com forte identificação com a ordem e a limpeza, seus padrões de beleza sem dúvida envolvem o preenchimento de tais condições.',
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
		"Lua": 'Com a sua amabilidade e sua cooperação você traduz um cultivo  básico da natureza emocional, o que é fundamental para o seu  equilíbrio. Bastante sensível às atividades e reações dos outros, você precisa trabalhar isso internamente para que esta energia não implique em dependência da aprovação de terceiros, mas torne um instrumento capaz de sintonizar as necessidades alheias e expressá-las pela via artística, criativa, podendo assim obter também retorno financeiro e popularidade. Há possivelmente forte identificação com o belo e o harmonioso, o que pode traduzir-se em bom gosto e refinamento.',
		'Mercúrio': 'Dotado(a) de grande equilíbrio mental, você gosta de considerar todas as abordagens possíveis frente a uma idéia, o que indica que você é cuidadoso(a) no seu pensar e que as conclusões chegam como resultado de um processo de elaboração e ponderação, sem precipitações. Isto pode dificultar a tomada de decisão, já que seu interesse é combinar tendências opostas. Gentil, honesto(a) e diplomático(a) na comunicação, você sabe combinar a verdade com a elegância, a firmeza com a simpatia, buscando a harmonia, o entendimento e a união de propósitos, mas sem perder de vista os princípios e normas. Moderado(a), você evita pensamentos e atitudes radicais, colocando uma tonalidade afetiva e amorosa que não permite ir a extremos.',
		'Vênus': 'Com uma sintonia afinada no que se refere a padrões estéticos e sociais, você é uma pessoa que gosta de coisas mais simples, mais diretas e objetivas, que possibilitam a aproximação, o contato, a relação. Atento(a) às uniões, você busca sempre uma complementação harmônica, uma afinidade, um ponto em comum capaz de efetivar o vínculo. Cuidado apenas para não abrir mão de seus referenciais, quer em prol do encontro com o outro, quer em prol da paz no relacionamento. Exercite o amor ao outro enquanto autonomia e não enquanto fuga da solidão. Lembre-se que conflitos não significam apenas desentendimento, mas também oportunidade de crescimento. Com pronunciado bom gosto e refinamento, e embora pautado em critérios realistas e muito bem definidos de forma e proporção, o belo para você é também resultante da possibilidade de estabelecer uma conexão entre pessoas e povos.',
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
		"Lua": 'Intensamente emocional, você dificilmente fica indiferente em relação ao que sente, ainda que não deixe transparecer o que se passa em seu íntimo. Enfrentando continuamente mudanças internas, você se fortalece a cada perturbação provocada pelas emoções e sentimentos. Com grande capacidade de regeneração, você emerge dos mais difíceis processos com uma compreensão cada vez mais profunda de si mesmo(a). É com coragem e determinação que você enfrenta e supera os mais variados e complexos estados internos. Amante dos mistérios e segredos, sua curiosidade fica aguçada em relação ao que está oculto. Possessivo(a) e ciumento(a), você precisa aprender a confiar não apenas nos outros mas em si mesmo(a) para respeitar com naturalidade a autonomia alheia. Com tendência a encarar a vida e assuntos pessoais com muita seriedade, você precisa trabalhar seu extremismo entregando-se mais à alegria.',
		'Mercúrio': 'Com uma mente aguçada e profunda, você sempre busca chegar à raiz dos problemas, entusiasmando-se verdadeiramente com o processo de investigação, de pesquisa e de raciocínio. Paciente ao extremo, quando há interesse torna-se profundamente irritável quando não vê atrativos ou mistérios a solucionar. Você gosta de desvendar segredos, de saber o que se passa na cabeça das pessoas e de descobrir o que há por trás das aparências, mas evita fazer qualquer revelação a seu próprio respeito, mantendo seus projetos em segredo  e comunicando apenas o estritamente necessário para dar continuidade a seus planos. Perspicaz, você detecta a motivação das pessoas, e caso julgue necessário, aponta o que percebe sem medir palavras e sem se preocupar em não ferir sentimentos alheios. Você prefere dizer exatamente o que sente ou permanece em silêncio se não puder dizer a verdade. Às vezes, contenta-se em fazer uso de comentários irônicos ou sarcásticos. Quando emocionalmente perturbado(a), seus pensamentos ficam confusos e você perde a objetividade, sendo desaconselhável quaisquer decisões em tais momentos.',
		'Vênus': 'Com emoções muito intensas, ardentes, arrebatadoras, em geral mantidas em segredo, suas reações  quando expressas tendem a serem passionais e pautadas no exclusivismo.Com dificuldades para traduzir seu amor em palavras, você conquista através do mistério e da dissimulação de que é capaz. Por encarar com grande seriedade e dedicação a vida amorosa, sacrificando inclusive outras áreas se necessário, suas expectativas neste setor são grandes e a maior decepção pode despertar forte ressentimento, levando-o ao amor, ao ódio e impedindo uma segunda oportunidade à relação.Sem dúvida você compreende profundamente o poder transformador do amor e em cada vínculo que forma, acaba operando em si mesmo e nos outros, melhorias. Com grande idealismo e elevados padrões, sua vida amorosa tende a conter um forte romantismo, muito afinidade e entrosamento com a parceira. O único risco seria inverter o fluxo  e através de atitudes ditatoriais e manipuladoras, passar a dominar ou exercer poder e controle sobre aqueles que ama.',
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
		"Lua": 'Com uma natureza otimista, expansiva e entusiástica, você é pessoa tanto idealista quanto ativa, que procura fazer de suas atividades práticas uma expressão de sua ética; assim sendo, sua atuação e postura inspiram confiança. Identificando-se com a aventura e com as novas experiências, você tende a projetar à distância suas emoções, o que pode indicar que elas nunca estão onde você está, comprometendo, às vezes, o seu bem estar. Na verdade, isto é indício de que você busca um distanciamento do emocional para não mais reagir de forma exaltada, com excesso ou sem moderação frente ao que sente. Aliás, cuidado com as exigências emocionais exorbitantes, capazes de se tornar suas necessidades limitadas e também de fomentar sua auto-indulgência. Bastante independente, você não suporta amarras, e neste sentido, cria um vínculo que respeita sua liberdade.',
		'Mercúrio': 'Com uma inteligência ampla, lúcida e ordenada, você é uma pessoa curiosa e questionadora, que busca sempre todas as respostas. Capaz de absorver grande quantidade de informação, seu interesse volta-se, principalmente, para assuntos capazes de cobrir vastas áreas do conhecimento. Fascinado(a) pelo que está distante, idéias e conceitos diferentes não o(a) assustam, pelo contrário, você demonstra-se bastante receptivo(a) em relação ao novo e ao desconhecido, inclusive reconhecendo-os como uma oportunidade de expandir sua mente. De raciocínio mais apressado, você tende a não prestar atenção aos detalhes, o que pode comprometer sua perspectiva da verdade e gerar erros desnecessários. Nesse sentido, procure direcionar a atenção e concentrar-se no que faz, evitando assim, deixar-se divagar sobre assuntos distantes daqueles que estiver tratando. Adepto(a) da verdade e da sinceridade, você  se comunica de forma direta e franca, traduzindo com honestidade suas avaliações e percepções.',
		'Vênus': 'Com um caráter feliz, generoso e otimista, sem dúvida sua vida amorosa tende a acontecer pautada nessa vibração, trazendo-lhe satisfação e bem estar. Sincero(a) e franco(a), você não esconde as emoções. Expressando-as     com naturalidade, honestidade e transparência você conquista a confiança dos que o(a) cercam, isto porque revela em sua postura colocações que abordam a vida em meio a princípios éticos e filosóficos elevados. É de fundamental importância em seus relacionamentos a liberdade e nesse sentido, impedimentos de qualquer ordem não são aceitos. Buscando sempre ampliar sua capacidade amorosa, você quer experimentar-se sem restrições, pois sabe distinguir diferentes modos ou tipos de amor com grande respeito e fidelidade, mas nem por isso com menor intensidade ou valor. Bastante tolerante, você sabe perdoar pequenas faltas justamente por levar em consideração a personalidade como um todo. Com gosto artístico, voltado para o exuberante, para o grandioso, você possivelmente gosta de cores fortes e de formas exageradas.',
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
		"Lua": 'Com uma natureza sóbria, reservada e prudente, você aparenta austeridade e aversão ao contato com as pessoas e à vida social. Na verdade, prioriza a qualidade e não quantidade, satisfazendo-se com poucas relações sólidas, profundas e duradouras. Pouco confortável frente às emoções e sentimentos, você demonstra timidez e temor em se expor. Para não entrar em contato com os conflitos internos, você, muitas vezes, se volta totalmente para questões práticas e para a busca de segurança financeira com acentuada ambição. Mas, lembre-se de que, quanto mais você reprimir o emocional, mais triste e deprimido(a) tende a ficar. Aliás, seu sucesso e realização está na razão direta do investimento que você fizer para se estruturar e se responsabilizar por suas emoções, o que implica em reconhecer a importância, buscando descobrir quem você realmente é.',
		'Mercúrio': 'Com uma mente brilhante, disciplinada, cautelosa e prática, você é capaz de grande concentração e elaboração. Seu raciocínio é lógico, metódico e voltado para questões pragmáticas, cujos resultados possam corresponder às suas metas e ambições. Sem abstrações, você não admite fantasias e pauta-se sobretudo no real. Planejando cada etapa, você fica atento(a) às minúcias e não perde nenhum detalhe, mas também não se detêm no irrelevante, já que tem claros os objetivos. Pessoa conservadora e séria nas idéias e valores, você se identifica com a ordem estabelecida com o tradicional, com os conceitos que já se provaram válidos além dos tempos.  Cuidado apenas para não se deixar aprisionar por padrões fixos de pensamento. Circunspecto(a) e reservado(a) em termos de comunicação, você tende a expressar-se transmitindo somente o absolutamente necessário, o que pode ser por um outro lado restritivo, e se pautado em inibição e, por outro lado, indicativo de que você não é dado(a) a desperdícios e só fala quando há pertinência e utilidade. Pessoa de palavra, pode-se confiar no que foi combinado com você. De gestos concisos e precisos, você tem aptidão para atividades que exijam cuidado, atenção e meticulosidade, mas também firmeza e precisão de movimentos.',
		'Vênus': 'Reservado, prudente, contido, você sente forte tendência para o isolamento, mas, uma vez disposto a entregar-se ao amor, o faz para sempre. Amor para você é responsabilidade, compromisso, lealdade, constância, sinceridade e com isso a relação torna-se duradoura. Você atrai as pessoas pelo seu sil6encio, dignidade e serenidade e mantém a conquista através de grande acolhimento, continência e sensualidade de que é capaz nos momentos reservados de sua vida privada. Caso tenha escolhido viver na solidão através da restrição do contato você estará aperfeiçoando qualidades, principalmente relacionadas, ao amor, o que não aconteceria diante da movimentação no setor afetivo e cujos laços pessoais operariam de forma restrita. Como o tradicional exerce atração sobre você, a arte clássica e as antiguidades tendem a ser referenciais para os seus padrões de beleza.',
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
		"Lua": 'Com uma natureza amigável, afetiva e dotado de grande humanitarismo, você gosta de atividades em grupo para compartilhar emoções, sentimentos e desejos. Apesar de desejar a supremacia do mental sobre o emocional, você não reprime os sentimentos, pelo contrário, você os revela com espontaneidade. Você reivindica liberdade de expressão em todas as instâncias, inclusive em relação às emoções. Isto pode trazer  à tona seu lado arisco e grande instabilidade emocional aliada à rebeldia, o que tende a ser desconcertante no seu meio, acarretando sentimentos de inadequação.                              ',
		'Mercúrio': 'De mente aberta, revolucionária e independente, você é um ser livre, apaixonado(a) por idéias renovadoras, vanguardistas e mesmo ousadas. Com um intelecto ávido por novidades, seu interesse volta-se para assuntos capazes de exercitar seu intelecto. Detentor(a) de pontos de vista originais, você gosta das soluções inventivas, não se importando  se suas opiniões vão ou não surpreender ou mesmo chocar o meio, o que em geral, acontece. Cuidado apenas com colocações mais intempestivas ou extravagantes, cujo sentido seja apenas o de destruir e não o de modernizar. Intuitivo(a), você é capaz de chegar às respostas de forma imediata, prescindindo das etapas de raciocínio ao conectar-se com as mais elevadas freqüências do pensamento. Com uma forma de se expressar muito interessante, você gosta de se comunicar, de trocar idéias e de receber estímulos capazes de ampliar sua destreza mental e seus conhecimentos.',
		'Vênus': 'Com uma expressão emocional viva, você é dotado(a) de forte magnetismo, tornando-o(a) popular, solicitado(a) para reuniões e bem quisto(a). Neste sentido, qualquer pessoa que queira um vínculo mais sério com você não poderá ser uma pessoa ciumenta nem possessiva, muito menos tentar restringir sua liberdade. Em geral, você se liga em pessoas pouco convencionais, diferentes, com alguma excentricidade, capazes de lhe proporcionar experiências emocionais estimulantes. Para você aceitar um relacionamento duradouro, é preciso sair da rotina ou optará por uniões livres e instáveis. Quem quer que fique ao seu lado precisará compreender que você detesta rotinas e que fundamentalmente suas emoções passam por constantes alterações. Suas relações em geral não se pautam no romantismo, mas sim na compreensão, companheirismo, camaradagem e amizade. De gosto eclético, seus padrões acerca da beleza e do artístico abarcam todas as matizes, desde expressões antigas até futuristas, mas em geral tem maior apelo aquelas cujo conteúdo reflitam preocupações ou críticas sociais.',
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
		"Lua": 'Excepcionalmente sensível e com imaginação superlativa, você  prefere momentos de introspecção de fundamental importância para seu equilíbrio. Há conseqüentemente uma tendência a se deixar levar neste mundo de sonhos e fantasias, que deve ter uma contraposição no contato com a realidade de forma que você não se perca em ilusões. Distinguir o real do imaginário é um esforço necessário ao qual você precisa se dedicar, não só por não se deixar influenciar pelo seu subconsciente como também para superar a impressionabilidade e vulnerabilidade frente ao meio. Quanto mais você puder enfrentar o desafio do mundo externo, menos insatisfação sentirá, por conta do contraste entre seu idealismo elevado e a realidade, diminuindo assim a defasagem entre ambos. A via de expressão do seu emocional é a entrega, e a opção é sua entre entregar-se aos vícios, aos maus hábitos alimentares, ou por um outro lado, entregar-se à vida, com fé numa devoção à existência, à dádiva de estar encarnado(a).',
		'Mercúrio': 'Dotado(a) de uma imaginação fértil, vivida e inspirada, você pode conferir expressão artística às suas concepções elevadas, ao invés de deixar-se levar pelos sonhos, fantasias e devaneios, por evitar o esforço de vincular seu pensamento à realidade. Receptivo(a) e sintonizado(a) inconscientemente com o pensamento do meio, você absorve informações subliminares, o que por um lado pode indicar compreensão e captação do que se passa com o outro antes mesmo que seja dito. Como as emoções influenciam o pensamento, ter objetividade fica difícil, o que compromete, de certo modo, seu processo decisivo. Além disso, suas conclusões não se pautam na lógica, mas nas percepções. Com grande memória visual e uma atenção flutuante, seu aprendizado é privilegiado. Com dificuldade para comunicar suas idéias e pensamentos em função da timidez, é provável que você prefira o isolamento para o trabalho mental.',
		'Vênus': 'Com emoções delicadas, sentindo sublime disposição altruísta, sob a influência de sentimentos amorosos, você é capaz de grande desprendimento e inspiração, o que confere à sua atuação uma sabedoria ímpar. Aliás, colocando o amor acima de tudo, você é capaz de experimentar em profundidade o significado da união, precisando apenas estar atento(a) para que isto seja resultado de um encontro entre iguais, e não fruto de dependência emocional. Você é uma pessoa romântica, e não receia demonstrar afeto.  Cuidado apenas com o deslumbramento e o encantamento da paixão, pois, caso ocorra alguma decepção, a tendência é você buscar se evadir nas mais variadas formas de fuga. Amante das artes e também talentoso(a), o belo para você é toda manifestação capaz de provocar êxtase, encantamento, um arrebatamento divino.',
		'Marte': 'Aries em ...',
		'Júpiter': 'Aries em ...',
		'Saturno': 'Aries em ...',
		'Urano': 'Aries em ...',
		'Netuno': 'Aries em ...',
		'Plutão': 'Aries em ...',
		'Nódulo Lunar': 'Aries em ...'
	}
}
