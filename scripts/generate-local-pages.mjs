import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const base = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const domain = 'https://consertonotebook.com.br';
const updated = '2026-09-26';

const cities = [
  {
    slug: 'sao-bernardo-do-campo', name: 'São Bernardo do Campo', short: 'São Bernardo',
    intro: 'A loja da 4Chip fica no Jardim do Mar, em São Bernardo do Campo. Moradores da cidade podem levar notebooks, PCs e desktops diretamente para análise técnica e orçamento sem compromisso.',
    access: 'A unidade fica na Av. Índico, 196, com acesso pela região central, Avenida Kennedy, Paço Municipal e principais corredores da cidade.',
    nearby: ['Alves Dias', 'Anchieta', 'Assunção', 'Baeta Neves', 'Centro', 'Chácara Inglesa', 'Cooperativa', 'Demarchi', 'Dos Casa', 'Ferrazópolis', 'Independência', 'Jardim do Mar', 'Jordanópolis', 'Nova Petrópolis', 'Parque dos Pássaros', 'Paulicéia', 'Planalto', 'Rudge Ramos', 'Santa Terezinha', 'Taboão']
  },
  {
    slug: 'santo-andre', name: 'Santo André', short: 'Santo André',
    intro: 'A 4Chip atende moradores de Santo André que procuram conserto de notebook e manutenção de computador no ABC. O equipamento é analisado na unidade de São Bernardo antes da apresentação do orçamento.',
    access: 'A loja fica no Jardim do Mar, em São Bernardo, com acesso a partir de Santo André pela Avenida Pereira Barreto e pelos principais corredores do ABC.',
    nearby: ['Acampamento Anchieta', 'Araçaúva', 'Bangú', 'Campestre', 'Campo Grande', 'Casa Branca', 'Cata Preta', 'Centreville', 'Centro', 'Cidade São Jorge', 'Condomínio Maracanã', 'Estância Rio Grande', 'Jardim', 'Jardim Alvorada', 'Jardim Alzira Franco', 'Jardim Ana Maria', 'Jardim Bela Vista', 'Jardim Bom Pastor', 'Jardim Cipreste', 'Jardim Clube de Campo', 'Jardim Cristiane', 'Jardim das Maravilhas', 'Jardim do Estádio', 'Jardim Guarará', 'Jardim Guaripocaba', 'Jardim Ipanema', 'Jardim Irene', 'Jardim Itapoan', 'Jardim Jamaica', 'Jardim Joaquim Eugênio de Lima', 'Jardim Las Vegas', 'Jardim Marek', 'Jardim Rina', 'Jardim Santa Cristina', 'Jardim Santo Alberto', 'Jardim Santo André', 'Jardim Santo André CDHU', 'Jardim Santo Antônio', 'Jardim Stella', 'Jardim Telles de Menezes', 'Jardim Utinga', 'Jardim Vila Rica', 'Miami Riviera', 'Novo Homero Thon', 'Paraíso', 'Paranapiacaba', 'Parque América', 'Parque Capuava', 'Parque das Garças', 'Parque das Nações', 'Parque do Pedroso', 'Parque Erasmo Assunção', 'Parque Gerassi', 'Parque Jaçatuba', 'Parque João Ramalho', 'Parque Marajoara', 'Parque Novo Oratório', 'Parque Oratório', 'Parque Represa Billings II', 'Parque Represa Billings III', 'Parque Rio Grande', 'Pinheirinho', 'Pólo Petroquímico Capuava', 'Recreio da Borda do Campo', 'Rio Bonito', 'Rio Grande', 'Rio Mogi', 'Rio Pequeno', 'Santa Terezinha', 'Silveira', 'Sítio dos Teco', 'Sítio dos Vianas', 'Sítio Taquaral', 'Três Divisas', 'Utinga', 'Várzea do Tamanduateí', 'Vila Alice', 'Vila Alpina', 'Vila Alzira', 'Vila América', 'Vila Aquilino', 'Vila Assunção', 'Vila Bastos', 'Vila Camilópolis', 'Vila Curuçá', 'Vila Floresta', 'Vila Francisco Matarazzo', 'Vila Gilda', 'Vila Guaraciaba', 'Vila Guarani', 'Vila Guiomar', 'Vila Helena', 'Vila Homero Thon', 'Vila Humaitá', 'Vila João Ramalho', 'Vila Junqueira', 'Vila Linda', 'Vila Lucinda', 'Vila Lutécia', 'Vila Luzita', 'Vila Metalúrgica', 'Vila Palmares', 'Vila Pires', 'Vila Príncipe de Gales', 'Vila Progresso', 'Vila Sacadura Cabral', 'Vila Scarpelli', 'Vila Suíça', 'Vila Tibiriçá', 'Vila Valparaíso', 'Vila Vitória', 'Waisberg']
  },
  {
    slug: 'sao-caetano-do-sul', name: 'São Caetano do Sul', short: 'São Caetano',
    intro: 'Moradores de São Caetano do Sul podem procurar a 4Chip para conserto de notebook, PC, desktop e computador gamer. A análise e o orçamento são realizados na loja de São Bernardo do Campo.',
    access: 'O atendimento acontece na Av. Índico, 196, Jardim do Mar, com acesso para quem vem de São Caetano pelas ligações municipais do ABC.',
    nearby: ['Barcelona', 'Boa Vista', 'Centro', 'Cerâmica', 'Fundação', 'Jardim São Caetano', 'Mauá', 'Nova Gerty', 'Olímpico', 'Oswaldo Cruz', 'Prosperidade', 'Santa Maria', 'Santa Paula', 'Santo Antônio', 'São José']
  }
];

const details = {
  'Alves Dias': 'bairro da região leste de São Bernardo, conectado ao corredor da Estrada dos Alvarengas',
  'Anchieta': 'região próxima à Rodovia Anchieta e aos acessos para o Centro de São Bernardo',
  'Balneária': 'bairro na região do Riacho Grande, distante da unidade do Jardim do Mar',
  'Batistini': 'bairro da região sul de São Bernardo, com acesso pela Estrada Galvão Bueno',
  'Cooperativa': 'região industrial e residencial no eixo da Avenida Humberto de Alencar Castelo Branco',
  'Dos Casa': 'bairro da região leste de São Bernardo, próximo à Estrada dos Alvarengas',
  'Dos Finco': 'região do Riacho Grande, na área próxima à Represa Billings',
  'Ferrazópolis': 'bairro próximo ao Centro e aos acessos da Via Anchieta',
  'Independência': 'bairro da região sudeste de São Bernardo, próximo aos corredores da cidade',
  'Jordanópolis': 'bairro próximo à divisa com Diadema e aos acessos da Rodovia dos Imigrantes',
  'Montanhão': 'região residencial na área leste de São Bernardo',
  'Planalto': 'bairro próximo aos corredores industriais e à Via Anchieta',
  'Rio Grande': 'região do Riacho Grande, às margens da Represa Billings',
  'Santa Terezinha': 'bairro próximo à região central e ao Paço Municipal',
  'Taboão': 'bairro na divisa com Diadema, próximo à Rodovia dos Imigrantes',
  'Jardim do Mar': 'bairro onde está localizada a unidade da 4Chip, próximo à Avenida Kennedy e ao Paço Municipal',
  'Chácara Inglesa': 'bairro residencial próximo ao Centro de São Bernardo do Campo',
  'Parque dos Pássaros': 'bairro residencial conhecido por casas amplas e ruas arborizadas',
  'Centro': 'região central com acesso aos principais corredores e ao transporte municipal',
  'Rudge Ramos': 'região próxima às ligações com São Caetano do Sul e à Via Anchieta',
  'Baeta Neves': 'bairro próximo ao Centro e ao Paço Municipal de São Bernardo',
  'Assunção': 'região conectada ao Centro de São Bernardo pela Avenida João Firmino',
  'Nova Petrópolis': 'bairro residencial próximo à região central de São Bernardo',
  'Paulicéia': 'região com acesso pela Via Anchieta e ligação com Diadema',
  'Demarchi': 'região de São Bernardo próxima à Via Anchieta e ao corredor da Avenida Maria Servidei Demarchi',
  'Campestre': 'bairro de Santo André na divisa com São Caetano do Sul',
  'Jardim': 'região de Santo André próxima ao Centro e à Avenida Dom Pedro II',
  'Vila Assunção': 'bairro de Santo André com acesso à região central',
  'Vila Pires': 'região residencial de Santo André conectada ao Centro',
  'Utinga': 'bairro de Santo André próximo às ligações com São Caetano e a capital',
  'Parque das Nações': 'região de Santo André atendida a partir da unidade de São Bernardo',
  'Vila Metalúrgica': 'bairro de Santo André próximo a Utinga e São Caetano',
  'Santa Paula': 'bairro de São Caetano próximo à Avenida Goiás',
  'Santo Antônio': 'região central de São Caetano do Sul',
  'Barcelona': 'bairro de São Caetano com ligação para Santo André',
  'Cerâmica': 'região de São Caetano próxima à Avenida Goiás',
  'Nova Gerty': 'bairro de São Caetano com acesso para São Bernardo',
  'Oswaldo Cruz': 'região residencial próxima ao Centro de São Caetano',
  'Olímpico': 'bairro de São Caetano com acesso aos corredores que levam a São Bernardo'
};

const slugify = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const crumbs = (city, area) => `<nav class="breadcrumbs wrap" aria-label="Navegação estrutural"><a href="/">Início</a><span>›</span><a href="/regioes-atendidas/">Regiões atendidas</a><span>›</span>${area ? `<a href="/${city.slug}/">${city.name}</a><span>›</span><span aria-current="page">${area}</span>` : `<span aria-current="page">${city.name}</span>`}</nav>`;

function localSection(city, area) {
  const place = area ? `${area}, ${city.name}` : city.name;
  const context = area ? `${area} é ${details[area] || `uma região de ${city.name}`}. A 4Chip atende moradores do bairro na unidade de São Bernardo do Campo.` : city.intro;
  const neighbors = city.nearby.filter(n => n !== area).slice(0, 6);
  return `<section class="section local-content" aria-labelledby="local-title"><div class="wrap local-grid"><div><p class="kicker dark"><span></span> Atendimento para ${place}</p><h2 id="local-title">Conserto e manutenção de notebook em ${place}.</h2><p>${context}</p><p>${city.access}</p><h3>O que a 4Chip avalia</h3><p>Para moradores de ${place}, a assistência recebe notebooks Windows, MacBooks, computadores desktop e PCs gamer para análise de defeitos em tela, teclado, bateria, carcaça, conectores, placa-mãe e BGA, além de Windows, formatação, software, antivírus, limpeza e upgrades.</p><h3>Como funciona o atendimento para ${area || city.short}</h3><p>O contato por WhatsApp é para informações. O equipamento deve ser levado à unidade da 4Chip no Jardim do Mar, em São Bernardo do Campo, onde ocorre a análise técnica e é preparado o orçamento sem compromisso. Não há unidade ou coleta anunciada em ${area ? `${area}, ` : ''}${city.name}.</p></div><aside><h3>Outras regiões de ${city.name}</h3><ul>${neighbors.map(n => `<li><a href="/${city.slug}/${slugify(n)}/">Conserto de notebook em ${n}</a></li>`).join('')}</ul><a class="secondary-blue" href="/${city.slug}/">Ver atendimento em ${city.name} <span aria-hidden="true">→</span></a></aside></div></section>`;
}

function schema(city, area, url, title) {
  const place = area || city.name;
  return `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@graph': [
      {'@type':'WebPage','@id':`${url}#webpage`,url,name:title,inLanguage:'pt-BR',breadcrumb:{'@id':`${url}#breadcrumb`},about:{'@id':`${domain}/#business`}},
      {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:[
        {'@type':'ListItem',position:1,name:'Início',item:`${domain}/`},
        {'@type':'ListItem',position:2,name:'Regiões atendidas',item:`${domain}/regioes-atendidas/`},
        {'@type':'ListItem',position:3,name:city.name,item:`${domain}/${city.slug}/`},
        ...(area?[{'@type':'ListItem',position:4,name:area,item:url}]:[])
      ]},
      {'@type':'Service',name:`Conserto de notebook em ${place}`,serviceType:'Conserto e manutenção de notebook, PC e computador',provider:{'@id':`${domain}/#business`},areaServed:{'@type':area?'Place':'City',name:place,containedInPlace:area?{'@type':'City',name:city.name}:undefined},url}
    ]
  })}</script>`;
}

function render(city, area = '') {
  const place = area ? `${area}, ${city.name}` : city.name;
  const folder = area ? path.join(dist, city.slug, slugify(area)) : path.join(dist, city.slug);
  const url = `${domain}/${city.slug}/${area ? `${slugify(area)}/` : ''}`;
  const title = `Conserto de Notebook em ${place} | 4Chip`;
  const description = `Conserto e manutenção de notebook, PC e computador para ${place}. Análise técnica na 4Chip em São Bernardo e orçamento sem compromisso.`;
  const indexable = !area || city.slug === 'sao-bernardo-do-campo' || ['Campestre','Jardim','Vila Assunção','Vila Pires','Utinga','Parque das Nações','Vila Metalúrgica','Centro','Santa Paula','Santo Antônio','Barcelona','Cerâmica','Nova Gerty','Oswaldo Cruz','Olímpico'].includes(area);
  let html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
  .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${description}">`)
    .replace(/<meta name="geo\.placename" content="[^"]*">/, `<meta name="geo.placename" content="${place}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${title}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${description}">`)
    .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`)
    .replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${title}">`)
    .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${description}">`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`)
    .replace(/<meta name="robots" content="[^"]*">/, `<meta name="robots" content="${indexable ? 'index,follow' : 'noindex,follow'}">`)
    .replace(/<script type="application\/ld\+json">\{"@context":"https:\/\/schema.org","@graph":.*?<\/script>/, schema(city, area, url, title))
    .replace('href="assets/4chip-logo.png"', 'href="/assets/4chip-logo.png"')
    .replaceAll('src="assets/', 'src="/assets/')
    .replace('href="styles.css"', 'href="/styles.css"')
    .replace('src="app.js"', 'src="/app.js"')
    .replace('href="#inicio" aria-label="4Chip Informática, início"', 'href="/" aria-label="4Chip Informática, início"')
    .replace('href="#inicio" aria-label="4Chip Informática, voltar ao início"', 'href="/" aria-label="4Chip Informática, voltar ao início"')
    .replace('<main id="conteudo">', `<main id="conteudo">${crumbs(city, area)}`)
    .replace('São Bernardo do Campo e região do ABC</p><h1>Conserto de notebook em <em>São Bernardo do Campo.</em></h1>', `${place} e região do ABC</p><h1>Conserto de notebook em <em>${area || city.short}.</em></h1>`)
    .replace('<em>São Bernardo.</em></h1>', '<em>São Bernardo do Campo.</em></h1>')
    .replace('Manutenção completa para notebooks, MacBooks, computadores desktop e PCs gamer: troca de tela, teclado e bateria, restauração de carcaça, reparo BGA, Windows, formatação, software e antivírus.', `Atendimento para ${place}: manutenção de notebooks, MacBooks, desktops e PCs gamer, incluindo tela, teclado, bateria, carcaça, BGA, Windows e formatação.`)
    .replace('<details><summary>Onde fica a assistência?<span aria-hidden="true">+</span></summary><p>Na Av. Índico, 196, Jardim do Mar, em São Bernardo do Campo, próximo ao centro e com acesso para clientes da região do ABC.</p></details>', `<details><summary>Onde fica a assistência para quem está em ${place}?<span aria-hidden="true">+</span></summary><p>${city.access} O atendimento técnico e o orçamento são realizados na unidade de São Bernardo do Campo.</p></details>`)
    .replace('<section class="section services" id="servicos">', `${localSection(city, area)}<section class="section services" id="servicos">`);
  fs.mkdirSync(folder, {recursive:true});
  fs.writeFileSync(path.join(folder, 'index.html'), html);
  return {url, updated, priority: area ? '0.5' : '0.9', indexable};
}

const urls = [{url:`${domain}/`,updated,priority:'1.0'},{url:`${domain}/regioes-atendidas/`,updated,priority:'0.9'}];
for (const city of cities) {
  urls.push(render(city));
  for (const area of city.nearby) urls.push(render(city, area));
}

const hubCards = cities.map(city => `<article><h2><a href="/${city.slug}/">Conserto de notebook em ${city.name}</a></h2><p>${city.intro}</p><ul>${city.nearby.map(area=>`<li><a href="/${city.slug}/${slugify(area)}/">${area}</a></li>`).join('')}</ul></article>`).join('');
const servicePages = [
  {slug:'conserto-computador',name:'computador, desktop e PC gamer',title:'Conserto de Computador e PC no ABC',summary:'Diagnóstico e manutenção de desktop e PC gamer: falhas de inicialização, lentidão, superaquecimento, limpeza técnica, upgrades de SSD e memória e troca de componentes.',keywords:['conserto pc','manutenção pc','conserto desktop','manutenção desktop','conserto computador','manutenção computador']},
  {slug:'conserto-macbook',name:'MacBook',title:'Conserto e Manutenção de MacBook no ABC',summary:'Análise técnica de MacBook para falhas de tela, bateria, teclado, conectores, placa e sistema. Serviço independente, sem vínculo de assistência autorizada.',keywords:['conserto MacBook','manutenção MacBook','reparo MacBook']},
  {slug:'conserto-pc-gamer',name:'PC gamer',title:'Conserto e Manutenção de PC Gamer no ABC',summary:'Manutenção de PC gamer para falhas de hardware, superaquecimento, ruído, desligamentos, limpeza, refrigeração e upgrades de componentes.',keywords:['conserto PC gamer','manutenção PC gamer','reparo computador gamer']}
];
const serviceCards = servicePages.map(service => `<article><h2><a href="/servicos/${service.slug}/">${service.title}</a></h2><p>${service.summary}</p><p>Disponível em São Bernardo, Santo André e São Caetano.</p></article>`);

const hub = base
  .replace(/<title>[^<]*<\/title>/, '<title>Conserto de Notebook no ABC Paulista | Regiões atendidas</title>')
  .replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Encontre conserto e manutenção de notebook, PC e computador em São Bernardo, Santo André, São Caetano e bairros do ABC.">')
  .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${domain}/regioes-atendidas/">`)
  .replace('href="assets/4chip-logo.png"', 'href="/assets/4chip-logo.png"').replaceAll('src="assets/', 'src="/assets/').replace('href="styles.css"', 'href="/styles.css"').replace('src="app.js"', 'src="/app.js"')
  .replace('href="#inicio" aria-label="4Chip Informática, início"', 'href="/" aria-label="4Chip Informática, início"')
  .replace('<main id="conteudo">', '<main id="conteudo"><nav class="breadcrumbs wrap" aria-label="Navegação estrutural"><a href="/">Início</a><span>›</span><span aria-current="page">Regiões atendidas</span></nav>')
  .replace('São Bernardo do Campo e região do ABC</p><h1>Conserto de notebook em <em>São Bernardo do Campo.</em></h1>', 'São Bernardo, Santo André e São Caetano</p><h1>Conserto de notebook no <em>ABC Paulista.</em></h1>')
  .replace('<section class="section services" id="servicos">', `<section class="section location-hub"><div class="wrap"><p class="kicker dark"><span></span> Regiões atendidas</p><h2>Encontre sua cidade e seu bairro.</h2><div class="location-grid">${hubCards}</div><h2>Outros tipos de conserto</h2><div class="location-grid">${serviceCards.join('')}</div></div></section><section class="section services" id="servicos">`);
fs.mkdirSync(path.join(dist,'regioes-atendidas'),{recursive:true});
fs.writeFileSync(path.join(dist,'regioes-atendidas','index.html'),hub);

for (const service of servicePages) {
  const title = `${service.title} | 4Chip`;
  const description = `${service.summary} Atendimento em São Bernardo do Campo, Santo André e São Caetano. Orçamento sem compromisso após análise na loja.`;
  const url = `${domain}/servicos/${service.slug}/`;
  const content = `<section class="section local-content"><div class="wrap local-grid"><div><p class="kicker dark"><span></span> Assistência técnica independente</p><h2>${service.title}</h2><p>${service.summary}</p><p>A equipe atende equipamentos levados à unidade da 4Chip, na Av. Índico, 196, Jardim do Mar, São Bernardo do Campo. O WhatsApp é para informações e contato; o orçamento sem compromisso é feito após análise técnica presencial.</p><p>Atendimento para clientes de São Bernardo do Campo, Santo André e São Caetano do Sul. A 4Chip não é assistência autorizada por fabricantes.</p><h3>Serviços relacionados</h3><p>${service.keywords.join(' · ')}</p><a class="button" href="https://wa.me/5511980503850?text=${encodeURIComponent(`Olá, gostaria de informações sobre ${service.name}.`)}" target="_blank" rel="noopener">Pedir informações no WhatsApp ↗</a></div><aside><h3>Atendimento no ABC</h3><ul>${cities.map(city=>`<li><a href="/${city.slug}/">${city.name}</a></li>`).join('')}</ul><a class="secondary-blue" href="/regioes-atendidas/">Ver bairros atendidos →</a></aside></div></section>`;
  let html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${description}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${title}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${description}">`)
    .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`)
    .replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${title}">`)
    .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${description}">`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`)
    .replace('href="assets/4chip-logo.png"', 'href="/assets/4chip-logo.png"').replaceAll('src="assets/', 'src="/assets/').replace('href="styles.css"', 'href="/styles.css"').replace('src="app.js"', 'src="/app.js"')
    .replace('href="#inicio" aria-label="4Chip Informática, início"', 'href="/" aria-label="4Chip Informática, início"')
    .replace('href="#inicio" aria-label="4Chip Informática, voltar ao início"', 'href="/" aria-label="4Chip Informática, voltar ao início"')
    .replace('São Bernardo do Campo e região do ABC</p><h1>Conserto de notebook em <em>São Bernardo do Campo.</em></h1>', `São Bernardo do Campo e região do ABC</p><h1>${service.title.replace(' no ABC',' no <em>ABC</em>').replace(' de PC no ABC',' de PC no <em>ABC</em>')}.</h1>`)
    .replace('Manutenção completa para notebooks, MacBooks, computadores desktop e PCs gamer: troca de tela, teclado e bateria, restauração de carcaça, reparo BGA, Windows, formatação, software e antivírus.', service.summary)
    .replace('<section class="section services" id="servicos">', `${content}<section class="section services" id="servicos">`);
  const folder = path.join(dist,'servicos',service.slug);
  fs.mkdirSync(folder,{recursive:true});
  fs.writeFileSync(path.join(folder,'index.html'),html);
  urls.push({url,updated,priority:'0.8'});
}

const serviceHub = base
  .replace(/<title>[^<]*<\/title>/, '<title>Serviços de Conserto de Computadores | 4Chip</title>')
  .replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Conheça os serviços de conserto de computador, MacBook e PC gamer da 4Chip no ABC Paulista.">')
  .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${domain}/servicos/">`)
  .replace('href="assets/4chip-logo.png"', 'href="/assets/4chip-logo.png"').replaceAll('src="assets/', 'src="/assets/').replace('href="styles.css"', 'href="/styles.css"').replace('src="app.js"', 'src="/app.js"')
  .replace('href="#inicio" aria-label="4Chip Informática, início"', 'href="/" aria-label="4Chip Informática, início"')
  .replace('São Bernardo do Campo e região do ABC</p><h1>Conserto de notebook em <em>São Bernardo do Campo.</em></h1>', 'Serviços da 4Chip no ABC Paulista</p><h1>Conserto de computador, <em>MacBook e PC gamer.</em></h1>')
  .replace('<section class="section services" id="servicos">', `<section class="section location-hub"><div class="wrap"><p class="kicker dark"><span></span> Serviços especializados</p><h2>Encontre o serviço para seu equipamento.</h2><div class="location-grid">${serviceCards.join('')}</div></div></section><section class="section services" id="servicos">`);
fs.mkdirSync(path.join(dist,'servicos'),{recursive:true});
fs.writeFileSync(path.join(dist,'servicos','index.html'),serviceHub);
urls.push({url:`${domain}/servicos/`,updated,priority:'0.8'});

const llmsPath = path.join(dist,'llms.txt');
const llmsBase = fs.readFileSync(llmsPath,'utf8').split('## Fonte canônica')[0].trimEnd();
const llms = `${llmsBase}\n\n## Fonte canônica\n\n- [Página principal](${domain}/)\n- [Serviços especializados](${domain}/servicos/)\n- [Conserto de computador e PC](${domain}/servicos/conserto-computador/)\n- [Conserto de MacBook](${domain}/servicos/conserto-macbook/)\n- [Conserto de PC gamer](${domain}/servicos/conserto-pc-gamer/)\n- [Regiões atendidas](${domain}/regioes-atendidas/)\n${cities.map(city => `- [${city.name}](${domain}/${city.slug}/)`).join('\n')}\n`;
fs.writeFileSync(llmsPath,llms);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.filter(x=>x.indexable!==false).map(x=>`  <url><loc>${x.url}</loc><lastmod>${x.updated}</lastmod><changefreq>monthly</changefreq><priority>${x.priority}</priority></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(dist,'sitemap.xml'),sitemap);
console.log(`Generated ${urls.length} routes; ${urls.filter(x=>x.indexable!==false).length} indexable URLs.`);
