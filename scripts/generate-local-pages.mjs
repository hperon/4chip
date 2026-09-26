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
    nearby: ['Jardim do Mar', 'Centro', 'Rudge Ramos', 'Baeta Neves', 'Assunção', 'Nova Petrópolis', 'Paulicéia', 'Demarchi']
  },
  {
    slug: 'santo-andre', name: 'Santo André', short: 'Santo André',
    intro: 'A 4Chip atende moradores de Santo André que procuram conserto de notebook e manutenção de computador no ABC. O equipamento é analisado na unidade de São Bernardo antes da apresentação do orçamento.',
    access: 'A loja fica no Jardim do Mar, em São Bernardo, com acesso a partir de Santo André pela Avenida Pereira Barreto e pelos principais corredores do ABC.',
    nearby: ['Centro', 'Campestre', 'Jardim', 'Vila Assunção', 'Vila Pires', 'Utinga', 'Parque das Nações', 'Vila Metalúrgica']
  },
  {
    slug: 'sao-caetano-do-sul', name: 'São Caetano do Sul', short: 'São Caetano',
    intro: 'Moradores de São Caetano do Sul podem procurar a 4Chip para conserto de notebook, PC, desktop e computador gamer. A análise e o orçamento são realizados na loja de São Bernardo do Campo.',
    access: 'O atendimento acontece na Av. Índico, 196, Jardim do Mar, com acesso para quem vem de São Caetano pelas ligações municipais do ABC.',
    nearby: ['Centro', 'Santa Paula', 'Santo Antônio', 'Barcelona', 'Cerâmica', 'Nova Gerty', 'Oswaldo Cruz', 'Olímpico']
  }
];

const details = {
  'Jardim do Mar': 'bairro onde está localizada a unidade da 4Chip, próximo à Avenida Kennedy e ao Paço Municipal',
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

for (const generatedDir of ['conserto-notebook', 'regioes-atendidas', ...cities.map(city => city.slug)]) {
  fs.rmSync(path.join(dist, generatedDir), {recursive:true, force:true});
}

const crumbs = (city, area) => `<nav class="breadcrumbs wrap" aria-label="Navegação estrutural"><a href="/">Início</a><span>›</span><a href="/regioes-atendidas/">Regiões atendidas</a><span>›</span>${area ? `<a href="/${city.slug}/">${city.name}</a><span>›</span><span aria-current="page">${area}</span>` : `<span aria-current="page">${city.name}</span>`}</nav>`;

function localSection(city, area) {
  const place = area ? `${area}, ${city.name}` : city.name;
  const context = area ? `${area} é ${details[area] || `uma região de ${city.name}`}. A 4Chip atende moradores do bairro na unidade de São Bernardo do Campo.` : city.intro;
  const neighbors = city.nearby.filter(n => n !== area).slice(0, 6);
  return `<section class="section local-content" aria-labelledby="local-title"><div class="wrap local-grid"><div><p class="kicker dark"><span></span> Atendimento para ${place}</p><h2 id="local-title">Conserto e manutenção de notebook perto de ${area || city.short}.</h2><p>${context}</p><p>${city.access}</p><p>Atendemos notebooks Windows, MacBooks, desktops e PCs gamer. Entre os serviços estão troca de tela, teclado e bateria, restauração de carcaça, reparo de placa e BGA, Windows, formatação, software, antivírus, limpeza e upgrades.</p><p>O WhatsApp serve para informações e contato. Para identificar a causa do defeito e calcular peças e mão de obra, o equipamento precisa passar por análise técnica na loja.</p></div><aside><h3>Regiões próximas atendidas</h3><ul>${neighbors.map(n => `<li><a href="/${city.slug}/${slugify(n)}/">Conserto de notebook em ${n}</a></li>`).join('')}</ul><a class="secondary-blue" href="/${city.slug}/">Ver atendimento em ${city.name} <span aria-hidden="true">→</span></a></aside></div></section>`;
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
    .replace(/<script type="application\/ld\+json">\{"@context":"https:\/\/schema.org","@graph":.*?<\/script>/, schema(city, area, url, title))
    .replace('href="assets/4chip-logo.png"', 'href="/assets/4chip-logo.png"')
    .replaceAll('src="assets/', 'src="/assets/')
    .replace('href="styles.css"', 'href="/styles.css"')
    .replace('src="app.js"', 'src="/app.js"')
    .replace('href="#inicio" aria-label="4Chip Informática, início"', 'href="/" aria-label="4Chip Informática, início"')
    .replace('href="#inicio" aria-label="4Chip Informática, voltar ao início"', 'href="/" aria-label="4Chip Informática, voltar ao início"')
    .replace('<main id="conteudo">', `<main id="conteudo">${crumbs(city, area)}`)
    .replace('São Bernardo do Campo e região do ABC</p><h1>Reparo de notebook, MacBook e <em>PC gamer.</em></h1>', `${place} e região do ABC</p><h1>Conserto de notebook em <em>${area || city.short}.</em></h1>`)
    .replace('Manutenção completa para notebooks, MacBooks, computadores desktop e PCs gamer: troca de tela, teclado e bateria, restauração de carcaça, reparo BGA, Windows, formatação, software e antivírus.', `Atendimento para ${place}: manutenção de notebooks, MacBooks, desktops e PCs gamer, incluindo tela, teclado, bateria, carcaça, BGA, Windows e formatação.`)
    .replace('<details><summary>Onde fica a assistência?<span aria-hidden="true">+</span></summary><p>Na Av. Índico, 196, Jardim do Mar, em São Bernardo do Campo, próximo ao centro e com acesso para clientes da região do ABC.</p></details>', `<details><summary>Onde fica a assistência para quem está em ${place}?<span aria-hidden="true">+</span></summary><p>${city.access} O atendimento técnico e o orçamento são realizados na unidade de São Bernardo do Campo.</p></details>`)
    .replace('<section class="section services" id="servicos">', `${localSection(city, area)}<section class="section services" id="servicos">`);
  fs.mkdirSync(folder, {recursive:true});
  fs.writeFileSync(path.join(folder, 'index.html'), html);
  return {url, updated, priority: area ? '0.7' : '0.9'};
}

const urls = [{url:`${domain}/`,updated,priority:'1.0'},{url:`${domain}/regioes-atendidas/`,updated,priority:'0.9'}];
for (const city of cities) {
  urls.push(render(city));
  for (const area of city.nearby) urls.push(render(city, area));
}

const hubCards = cities.map(city => `<article><h2><a href="/${city.slug}/">Conserto de notebook em ${city.name}</a></h2><p>${city.intro}</p><ul>${city.nearby.map(area=>`<li><a href="/${city.slug}/${slugify(area)}/">${area}</a></li>`).join('')}</ul></article>`).join('');
const hub = base
  .replace(/<title>[^<]*<\/title>/, '<title>Conserto de Notebook no ABC Paulista | Regiões atendidas</title>')
  .replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Encontre conserto e manutenção de notebook, PC e computador em São Bernardo, Santo André, São Caetano e bairros do ABC.">')
  .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${domain}/regioes-atendidas/">`)
  .replace('href="assets/4chip-logo.png"', 'href="/assets/4chip-logo.png"').replaceAll('src="assets/', 'src="/assets/').replace('href="styles.css"', 'href="/styles.css"').replace('src="app.js"', 'src="/app.js"')
  .replace('href="#inicio" aria-label="4Chip Informática, início"', 'href="/" aria-label="4Chip Informática, início"')
  .replace('<main id="conteudo">', '<main id="conteudo"><nav class="breadcrumbs wrap" aria-label="Navegação estrutural"><a href="/">Início</a><span>›</span><span aria-current="page">Regiões atendidas</span></nav>')
  .replace('São Bernardo do Campo e região do ABC</p><h1>Reparo de notebook, MacBook e <em>PC gamer.</em></h1>', 'São Bernardo, Santo André e São Caetano</p><h1>Conserto de notebook no <em>ABC Paulista.</em></h1>')
  .replace('<section class="section services" id="servicos">', `<section class="section location-hub"><div class="wrap"><p class="kicker dark"><span></span> Regiões atendidas</p><h2>Encontre sua cidade e seu bairro.</h2><div class="location-grid">${hubCards}</div></div></section><section class="section services" id="servicos">`);
fs.mkdirSync(path.join(dist,'regioes-atendidas'),{recursive:true});
fs.writeFileSync(path.join(dist,'regioes-atendidas','index.html'),hub);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(x=>`  <url><loc>${x.url}</loc><lastmod>${x.updated}</lastmod><changefreq>monthly</changefreq><priority>${x.priority}</priority></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(dist,'sitemap.xml'),sitemap);
console.log(`Generated ${urls.length} indexable URLs.`);
