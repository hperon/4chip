import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const base = fs.readFileSync(path.join(dist, 'index.html'), 'utf8').replace(
  '<a class="all-regions" href="/regioes-atendidas/">Ver todas as cidades e bairros <span aria-hidden="true">↗</span></a>',
  '<a class="all-regions" href="/regioes-atendidas/">Ver todas as cidades e bairros <span aria-hidden="true">↗</span></a><a class="all-regions" href="/servicos/">Ver serviços por equipamento, cidade e bairro <span aria-hidden="true">↗</span></a>'
);
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
    nearby: ['Bairro Jardim', 'Campestre', 'Vila Assunção', 'Vila Bastos', 'Vila Guiomar', 'Parque das Nações', 'Vila Gilda', 'Centro', 'Vila Alpina', 'Vila Pires', 'Paraíso', 'Vila Valparaíso', 'Utinga', 'Santa Maria', 'Jardim Bela Vista', 'Vila Alice', 'Jardim Alzira Franco', 'Casa Branca', 'Jardim Stella', 'Parque Jaçatuba']
  },
  {
    slug: 'sao-caetano-do-sul', name: 'São Caetano do Sul', short: 'São Caetano',
    intro: 'Moradores de São Caetano do Sul podem procurar a 4Chip para conserto de notebook, PC, desktop e computador gamer. A análise e o orçamento são realizados na loja de São Bernardo do Campo.',
    access: 'O atendimento acontece na Av. Índico, 196, Jardim do Mar, com acesso para quem vem de São Caetano pelas ligações municipais do ABC.',
    nearby: ['Barcelona', 'Boa Vista', 'Centro', 'Cerâmica', 'Fundação', 'Jardim São Caetano', 'Mauá', 'Nova Gerty', 'Olímpico', 'Oswaldo Cruz', 'Prosperidade', 'Santa Maria', 'Santa Paula', 'Santo Antônio', 'São José']
  }
];

const details = {
  'sao-bernardo-do-campo': {
    'Alves Dias': 'fica na região leste da cidade, com ligação pela Estrada dos Alvarengas',
    'Anchieta': 'tem acesso aos corredores da Rodovia Anchieta e ao Centro',
    'Assunção': 'se conecta à região central pela Avenida João Firmino',
    'Baeta Neves': 'fica perto do Centro e do Paço Municipal',
    'Centro': 'concentra comércio, serviços e conexões de transporte da cidade',
    'Chácara Inglesa': 'fica na área residencial próxima ao Centro',
    'Cooperativa': 'combina áreas residenciais e industriais no eixo da Avenida Humberto de Alencar Castelo Branco',
    'Demarchi': 'se estende junto à Via Anchieta e à Avenida Maria Servidei Demarchi',
    'Dos Casa': 'fica na região leste, próxima à Estrada dos Alvarengas',
    'Ferrazópolis': 'está próximo ao Centro e aos acessos da Via Anchieta',
    'Independência': 'está na região sudeste, conectada aos principais corredores da cidade',
    'Jardim do Mar': 'é onde fica a unidade da 4Chip, próximo à Avenida Kennedy e ao Paço Municipal',
    'Jordanópolis': 'fica próximo à divisa com Diadema e aos acessos da Rodovia dos Imigrantes',
    'Nova Petrópolis': 'é uma área residencial perto da região central',
    'Parque dos Pássaros': 'é uma área residencial com ruas arborizadas e casas',
    'Paulicéia': 'tem ligação com Diadema e acesso pela Via Anchieta',
    'Planalto': 'fica perto dos corredores industriais e da Via Anchieta',
    'Rudge Ramos': 'tem ligação com São Caetano do Sul e acesso à Via Anchieta',
    'Santa Terezinha': 'fica perto da região central e do Paço Municipal',
    'Taboão': 'está na divisa com Diadema, próximo à Rodovia dos Imigrantes'
  },
  'santo-andre': {
    'Bairro Jardim': 'tem como referências a Rua das Figueiras e o Grand Plaza Shopping, na área próxima ao Centro',
    'Campestre': 'fica na divisa com São Caetano do Sul e reúne ruas residenciais e comércio local',
    'Vila Assunção': 'fica na região do Parque Central e do Shopping ABC',
    'Vila Bastos': 'é uma área residencial vizinha ao Centro de Santo André',
    'Vila Guiomar': 'fica próxima ao Bairro Jardim e à Faculdade de Medicina do ABC',
    'Parque das Nações': 'tem como referência o comércio da Avenida Vieira de Carvalho e o Parque Chácara Pignatari',
    'Vila Gilda': 'fica no entorno do Shopping ABC e da Avenida Pereira Barreto',
    'Centro': 'reúne o calçadão da Oliveira Lima, a estação da CPTM e o terminal de ônibus',
    'Vila Alpina': 'fica próxima ao Bairro Jardim e às vias de acesso à região central',
    'Vila Pires': 'tem no Clube Atlético Aramaçan e na Avenida Dom Pedro I referências conhecidas da região',
    'Paraíso': 'fica próximo à Vila Gilda e aos corredores da Avenida Pereira Barreto',
    'Vila Valparaíso': 'é uma área residencial com acesso à Via Anchieta',
    'Utinga': 'faz divisa com São Caetano e conta com estação da CPTM e comércio local',
    'Santa Maria': 'fica próximo ao Campestre e à Avenida dos Estados',
    'Jardim Bela Vista': 'fica perto da Avenida Portugal e da região central',
    'Vila Alice': 'está entre o Campestre e a Avenida Industrial',
    'Jardim Alzira Franco': 'é uma região residencial na área leste de Santo André',
    'Casa Branca': 'fica próxima ao Centro e a serviços de transporte',
    'Jardim Stella': 'fica na divisa com São Bernardo do Campo, com acesso ao corredor do trólebus',
    'Parque Jaçatuba': 'tem como referências o Parque Regional da Criança e o Esporte Clube Santo André'
  },
  'sao-caetano-do-sul': {
    'Barcelona': 'fica na ligação entre São Caetano e Santo André',
    'Boa Vista': 'é uma das regiões residenciais de São Caetano do Sul',
    'Centro': 'concentra comércio, serviços e conexões de transporte da cidade',
    'Cerâmica': 'tem como referência o ParkShopping São Caetano e a Avenida Goiás',
    'Fundação': 'fica na porção norte da cidade, próxima à divisa com São Paulo',
    'Jardim São Caetano': 'fica na área sul do município, próxima ao limite com São Bernardo',
    'Mauá': 'é uma das áreas residenciais de São Caetano do Sul',
    'Nova Gerty': 'fica na região sul e tem ligação com os bairros vizinhos do ABC',
    'Olímpico': 'tem acesso aos corredores que conectam São Caetano a São Bernardo',
    'Oswaldo Cruz': 'é uma região residencial próxima ao Centro',
    'Prosperidade': 'fica na parte norte do município, próxima à divisa com São Paulo',
    'Santa Maria': 'fica próximo ao Campestre e à divisa com Santo André',
    'Santa Paula': 'tem ligação com a Avenida Goiás e a área central',
    'Santo Antônio': 'fica próximo à região central e aos serviços municipais',
    'São José': 'fica na região sul do município, próximo às ligações com São Bernardo'
  }
};

const slugify = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const areaSlug = area => area === 'Bairro Jardim' ? 'jardim' : slugify(area);
const servicePages = [
  {slug:'conserto-notebook',name:'notebook',title:'Conserto e Manutenção de Notebook',summary:'Diagnóstico de notebook Windows e MacBook para falhas de tela, teclado, bateria, carcaça, conectores, placa, sistema e desempenho.',repairs:'troca de tela, troca de teclado e bateria, restauração de carcaça e dobradiças, reparo de placa-mãe e BGA, instalação ou formatação do Windows, instalação de aplicativos, software e antivírus, limpeza técnica e upgrades de SSD SATA ou NVMe e memória RAM em modelos compatíveis',keywords:['conserto notebook','manutenção notebook','reparo notebook']},
  {slug:'conserto-computador',name:'computador, desktop e PC',title:'Conserto de Computador, Desktop e PC',summary:'Diagnóstico e manutenção de computadores desktop e PCs para falhas de inicialização, lentidão, superaquecimento e upgrades.',repairs:'diagnóstico e troca de componentes, limpeza técnica, instalação ou formatação do Windows, instalação de aplicativos, configuração de software e antivírus, upgrade de SSD SATA ou NVMe e expansão de memória RAM conforme a compatibilidade do computador',keywords:['conserto pc','manutenção pc','conserto desktop','manutenção desktop','conserto computador','manutenção computador']},
  {slug:'conserto-macbook',name:'MacBook',title:'Conserto e Manutenção de MacBook',summary:'Análise técnica de MacBook para falhas de tela, teclado, bateria, carcaça, conectores, placa e sistema. Serviço independente, sem vínculo de assistência autorizada.',repairs:'avaliação e troca de tela, teclado e bateria, reparo de carcaça e conectores, diagnóstico de placa e BGA, instalação ou recuperação do sistema e limpeza técnica; peças e upgrades dependem do modelo e da compatibilidade',keywords:['conserto MacBook','manutenção MacBook','reparo MacBook']},
  {slug:'conserto-pc-gamer',name:'PC gamer',title:'Conserto e Manutenção de PC Gamer',summary:'Manutenção de PC gamer para falhas de hardware, superaquecimento, ruído, desligamentos, limpeza, refrigeração e upgrades.',repairs:'diagnóstico e troca de componentes, limpeza interna, revisão de refrigeração, upgrade de SSD NVMe ou SATA e memória RAM, instalação ou formatação do Windows, instalação de aplicativos, configuração de software e avaliação de desempenho',keywords:['conserto PC gamer','manutenção PC gamer','reparo computador gamer']}
];

const crumbs = (city, area) => `<nav class="breadcrumbs wrap" aria-label="Navegação estrutural"><a href="/">Início</a><span>›</span><a href="/regioes-atendidas/">Regiões atendidas</a><span>›</span>${area ? `<a href="/${city.slug}/">${city.name}</a><span>›</span><span aria-current="page">${area}</span>` : `<span aria-current="page">${city.name}</span>`}</nav>`;

function localSection(city, area) {
  const place = area ? `${area}, ${city.name}` : city.name;
  const localDetail = area ? details[city.slug]?.[area] || `faz parte da área atendida na região de ${city.name}` : '';
  const context = area ? `Em ${area}, ${city.name}, ${localDetail}. Quem procura conserto de notebook ou manutenção de computador nessa região pode falar com a 4Chip pelo WhatsApp para tirar dúvidas antes de levar o equipamento. A análise técnica e o orçamento sem compromisso são feitos na loja em São Bernardo do Campo.` : city.intro;
  const neighbors = city.nearby.filter(n => n !== area).slice(0, 6);
  return `<section class="section local-content" aria-labelledby="local-title"><div class="wrap local-grid"><div><p class="kicker dark"><span></span> Atendimento para ${place}</p><h2 id="local-title">Conserto e manutenção de notebook em ${place}.</h2><p>${context}</p><p>${city.access}</p><h3>O que a 4Chip avalia</h3><p>Se você está em ${place}, pode levar notebook Windows, MacBook, computador desktop ou PC gamer para troca de tela, teclado ou bateria, restauração de carcaça, reparo de placa-mãe e BGA, instalação ou formatação do Windows, instalação de aplicativos, software e antivírus, limpeza técnica e upgrade de SSD SATA/NVMe ou memória RAM. Upgrades dependem da compatibilidade do equipamento. A equipe verifica o aparelho na loja antes de apresentar o orçamento.</p><h3>Como funciona o atendimento para ${area || city.short}</h3><p>O WhatsApp é um canal para informações sobre o atendimento a quem está em ${area ? `${area}, ` : ''}${city.name}. Para fazer o orçamento sem compromisso, leve o equipamento à unidade da 4Chip no Jardim do Mar, em São Bernardo do Campo. Não há unidade ou coleta anunciada em ${area ? `${area}, ` : ''}${city.name}.</p></div><aside><h3>Outras regiões de ${city.name}</h3><ul>${neighbors.map(n => `<li><a href="/${city.slug}/${areaSlug(n)}/">Conserto de notebook em ${n}</a></li>`).join('')}</ul><a class="secondary-blue" href="/${city.slug}/">Ver atendimento em ${city.name} <span aria-hidden="true">→</span></a></aside></div></section>`;
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
  const folder = area ? path.join(dist, city.slug, areaSlug(area)) : path.join(dist, city.slug);
  const url = `${domain}/${city.slug}/${area ? `${areaSlug(area)}/` : ''}`;
  const title = `Conserto de Notebook em ${place} | 4Chip`;
  const description = `Conserto e manutenção de notebook, PC e computador para ${place}. Análise técnica na 4Chip em São Bernardo e orçamento sem compromisso.`;
  const indexable = !area || city.slug === 'sao-bernardo-do-campo' || city.slug === 'sao-caetano-do-sul' || (city.slug === 'santo-andre' && city.nearby.includes(area));
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

const hubCards = cities.map(city => `<article><h2><a href="/${city.slug}/">Conserto de notebook em ${city.name}</a></h2><p>${city.intro}</p><ul>${city.nearby.map(area=>`<li><a href="/${city.slug}/${areaSlug(area)}/">${area}</a></li>`).join('')}</ul></article>`).join('');
const serviceCards = servicePages.map(service => `<article><h2><a href="/${service.slug}/">${service.title} no ABC</a></h2><p>${service.summary}</p><p>Escolha a cidade e o bairro para ver informações locais do atendimento.</p></article>`);

function renderServiceLocation(service, city = null, area = '') {
  const place = area ? `${area}, ${city.name}` : city?.name || 'ABC Paulista';
  const url = `${domain}/${service.slug}/${city ? `${city.slug}/` : ''}${area ? `${areaSlug(area)}/` : ''}`;
  const title = `${service.title} ${city ? `em ${place}` : 'no ABC Paulista'} | 4Chip`;
  const description = `${service.summary} Atendimento para ${place}; análise presencial em São Bernardo do Campo e orçamento sem compromisso.`;
  const localDetail = area ? details[city.slug]?.[area] : '';
  const localIntro = area
    ? `Em ${area}, ${city.name}, ${localDetail || `na região de ${city.name}`}, você pode buscar informações sobre ${service.name}. O atendimento é feito na unidade da 4Chip em São Bernardo do Campo.`
    : city
      ? `Moradores de ${city.name} podem procurar a 4Chip para ${service.name}. ${city.intro}`
      : `A 4Chip realiza ${service.name} na unidade de São Bernardo do Campo e atende clientes das cidades do ABC Paulista.`;
  const placeLinks = city
    ? area
      ? `<h3>Outros bairros de ${city.name}</h3><ul>${city.nearby.filter(n => n !== area).slice(0, 8).map(n => `<li><a href="/${service.slug}/${city.slug}/${areaSlug(n)}/">${service.title} em ${n}</a></li>`).join('')}</ul><a class="secondary-blue" href="/${service.slug}/${city.slug}/">Ver ${service.name} em ${city.name} →</a>`
      : `<h3>Bairros de ${city.name}</h3><ul>${city.nearby.map(n => `<li><a href="/${service.slug}/${city.slug}/${areaSlug(n)}/">${service.title} em ${n}</a></li>`).join('')}</ul>`
    : `<h3>Escolha a cidade</h3><ul>${cities.map(c => `<li><a href="/${service.slug}/${c.slug}/">${service.title} em ${c.name}</a></li>`).join('')}</ul>`;
  const breadcrumb = `<nav class="breadcrumbs wrap" aria-label="Navegação estrutural"><a href="/">Início</a><span>›</span><a href="/${service.slug}/">${service.title}</a>${city ? `<span>›</span><a href="/${service.slug}/${city.slug}/">${city.name}</a>` : ''}${area ? `<span>›</span><span aria-current="page">${area}</span>` : city ? '<span aria-current="page">' + city.name + '</span>' : '<span aria-current="page">ABC Paulista</span>'}</nav>`;
  const serviceSchema = `<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':[
    {'@type':'WebPage','@id':`${url}#webpage`,url,name:title,inLanguage:'pt-BR',breadcrumb:{'@id':`${url}#breadcrumb`},about:{'@id':`${domain}/#business`}},
    {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:[
      {'@type':'ListItem',position:1,name:'Início',item:`${domain}/`},
      {'@type':'ListItem',position:2,name:service.title,item:`${domain}/${service.slug}/`},
      ...(city?[{'@type':'ListItem',position:3,name:city.name,item:`${domain}/${service.slug}/${city.slug}/`}]:[]),
      ...(area?[{'@type':'ListItem',position:4,name:area,item:url}]:[])
    ]},
    {'@type':'Service',name:`${service.title} ${city ? `em ${place}` : 'no ABC Paulista'}`,serviceType:service.title,provider:{'@id':`${domain}/#business`},areaServed:{'@type':area?'Place':city?'City':'AdministrativeArea',name:place,containedInPlace:area?{'@type':'City',name:city.name}:undefined},url}
  ]})}</script>`;
  const content = `<section class="section local-content" aria-labelledby="service-local-title"><div class="wrap local-grid"><div><p class="kicker dark"><span></span> ${service.title} ${city ? `em ${place}` : 'no ABC Paulista'}</p><h2 id="service-local-title">${service.title} ${city ? `em ${place}` : 'para clientes do ABC'}.</h2><p>${localIntro}</p><p>${service.summary}</p><h3>Serviços que podem ser realizados</h3><p>Conforme o diagnóstico e a compatibilidade do equipamento, a assistência pode fazer ${service.repairs}. A equipe avalia cada aparelho antes de indicar o serviço e apresentar o orçamento.</p><h3>Como funciona o orçamento</h3><p>O WhatsApp é usado para informações e contato. Para orçamento sem compromisso, leve o equipamento à unidade da 4Chip na Av. Índico, 196, Jardim do Mar, São Bernardo do Campo. Não há unidade nem coleta anunciada ${area ? `em ${area}, ` : city ? `em ${city.name} ` : ''}para este serviço.</p><p>A 4Chip é uma assistência técnica independente e não é autorizada por fabricantes.</p><a class="button wa-link" data-source="service-local" href="https://wa.me/5511980503850?text=${encodeURIComponent(`Olá, gostaria de informações sobre ${service.name}${city ? ` em ${place}` : ''}.`)}" target="_blank" rel="noopener">Pedir informações no WhatsApp ↗</a></div><aside>${placeLinks}<a class="secondary-blue" href="/regioes-atendidas/">Ver todas as regiões atendidas →</a></aside></div></section>`;
  let html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${description}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${title}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${description}">`)
    .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`)
    .replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${title}">`)
    .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${description}">`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`)
    .replace(/<meta name="robots" content="[^"]*">/, '<meta name="robots" content="index,follow">')
    .replace(/<script type="application\/ld\+json">\{"@context":"https:\/\/schema.org","@graph":.*?<\/script>/, serviceSchema)
    .replace('href="assets/4chip-logo.png"', 'href="/assets/4chip-logo.png"').replaceAll('src="assets/', 'src="/assets/').replace('href="styles.css"', 'href="/styles.css"').replace('src="app.js"', 'src="/app.js"')
    .replace('href="#inicio" aria-label="4Chip Informática, início"', 'href="/" aria-label="4Chip Informática, início"')
    .replace('<main id="conteudo">', `<main id="conteudo">${breadcrumb}`)
    .replace(/<p class="kicker"><span><\/span> São Bernardo do Campo e região do ABC<\/p><h1>.*?<\/h1>/, `<p class="kicker"><span></span> ${place}</p><h1>${service.title} ${city ? `em <em>${place}</em>` : 'no <em>ABC Paulista</em>'}.</h1>`)
    .replace(/<p class="hero-lead">.*?<\/p>/, `<p class="hero-lead">${service.summary} Atendimento para ${place}, com análise técnica na unidade em São Bernardo do Campo.</p>`)
    .replace('<section class="section services" id="servicos">', `${content}<section class="section services" id="servicos">`);
  const folder = path.join(dist, service.slug, ...(city ? [city.slug] : []), ...(area ? [areaSlug(area)] : []));
  fs.mkdirSync(folder,{recursive:true});
  fs.writeFileSync(path.join(folder,'index.html'),html);
  urls.push({url,updated,priority:area?'0.5':city?'0.7':'0.8'});
}

for (const service of servicePages) {
  renderServiceLocation(service);
  for (const city of cities) {
    renderServiceLocation(service,city);
    for (const area of city.nearby) renderServiceLocation(service,city,area);
  }
}

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
const llmsServiceLinks = servicePages.map(service => `- [${service.title}](${domain}/${service.slug}/)\n${cities.map(city => `  - [${service.title} em ${city.name}](${domain}/${service.slug}/${city.slug}/)\n${city.nearby.map(area => `    - [${service.title} em ${area}, ${city.name}](${domain}/${service.slug}/${city.slug}/${areaSlug(area)}/)`).join('\n')}`).join('\n')}`).join('\n');
const llms = `${llmsBase}\n\n## Fonte canônica\n\n- [Página principal](${domain}/)\n- [Serviços especializados](${domain}/servicos/)\n- [Regiões atendidas](${domain}/regioes-atendidas/)\n${cities.map(city => `- [${city.name}](${domain}/${city.slug}/)`).join('\n')}\n\n## Serviços por cidade e bairro\n\n${llmsServiceLinks}\n`;
fs.writeFileSync(llmsPath,llms);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.filter(x=>x.indexable!==false).map(x=>`  <url><loc>${x.url}</loc><lastmod>${x.updated}</lastmod><changefreq>monthly</changefreq><priority>${x.priority}</priority></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(dist,'sitemap.xml'),sitemap);
fs.writeFileSync(path.join(dist,'index.html'),base);
console.log(`Generated ${urls.length} routes; ${urls.filter(x=>x.indexable!==false).length} indexable URLs.`);
