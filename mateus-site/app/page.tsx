'use client';

const A = 'https://mateus-oliver-growth.arcane-moon-3293.chatgpt.site';

function Arrow() { return <span aria-hidden>↗</span>; }

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top">MO<sup>®</sup></a>
        <nav>
          <a href="#resultados">Resultados</a>
          <a href="#trabalhos">Trabalhos</a>
          <a href="#provas">Provas</a>
        </nav>
        <a className="nav-cta" href="https://wa.me/5579999999999" target="_blank">Vamos conversar <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Growth Marketing <i>•</i> Produto <i>•</i> Demanda</p>
          <h1>Crescimento<br/>não acontece<br/><em>por sorte.</em></h1>
          <p className="lead">Crescimento de receita e diferenciação para marcas que não querem competir por preço ou serem ignoradas.</p>
          <a className="outline-btn" href="#resultados">Ver resultados ↓</a>
        </div>
        <div className="hero-art">
          <img src={`${A}/mateus-editorial.png`} alt="Arte editorial de marketing de Mateus Oliver" />
          <div className="hero-stat"><strong>+8.233%</strong><span>receita</span></div>
        </div>
      </section>

      <section className="context" id="resultados">
        <p className="location">Rio de Janeiro · Remoto</p>
        <div className="section-head">
          <div><p className="eyebrow">Resultados que carregam contexto</p><h2>Número grande sem<br/><em>explicação</em> é só decoração.</h2></div>
          <p className="body-copy">Meu trabalho conecta o que o anúncio promete ao que produto, atendimento e operação realmente entregam.</p>
        </div>
        <div className="metrics">
          <article><strong>+8.233%</strong><h3>crescimento de receita</h3><p>Funil reconstruído do zero</p></article>
          <article><strong>69%</strong><h3>retenção B2B</h3><p>Relacionamento estruturado</p></article>
          <article><strong>+1.200%</strong><h3>tráfego orgânico</h3><p>SEO em 18 meses</p></article>
          <article><strong>−53%</strong><h3>tempo de aceite</h3><p>Produto + operação logística</p></article>
        </div>
      </section>

      <section className="case dark">
        <div className="case-kicker">CASE 01 <span>AYO · GROWTH B2B</span></div>
        <div className="case-grid">
          <div><img className="logo ayo" src={`${A}/ayo-logo.png`} alt="Ayo"/><h2>Como cheguei a <em>+8.233%</em></h2><p className="case-text">Crescimento não é um truque. É um sistema: cada ação alimenta a próxima até transformar atenção em retenção, receita e uma operação sustentável.</p></div>
          <div className="steps">
            <div><b>01</b><strong>20 canais</strong><span>On + off-line, trabalhando em sintonia</span></div>
            <div><b>02</b><strong>Comunidade privada</strong><span>Parceiros próximos e mais engajados</span></div>
            <div><b>03</b><strong>69% de retenção</strong><span>Relacionamento B2B que não termina na venda</span></div>
            <div><b>04</b><strong>Break-even</strong><span>Crescimento que sustenta a própria operação</span></div>
          </div>
        </div>
        <div className="result-band"><span>resultado</span><strong>+8.233%</strong><small>crescimento de receita</small></div>
      </section>

      <section className="path">
        <p className="eyebrow">Growth, sem complicar</p><h2>Ajude o cliente<br/><em>a chegar.</em></h2>
        <p className="body-copy">Uma venda é um caminho. Growth encontra o que está bloqueando esse caminho e tira cada pedra do lugar.</p>
        <div className="path-card">
          <div className="path-title">Pedra 1 de 4 <span>Ache quem precisa</span></div>
          <p>ICP é escolher a pessoa certa para mostrar a oferta.</p>
          <div className="journey"><span>INÍCIO</span><i>→</i><b>Público errado</b><i>→</i><b>Ninguém encontra</b><i>→</i><b>Comprar é difícil</b><i>→</i><b>Cliente vai embora</b><span>COMPRA</span></div>
          <small>0% DO CAMINHO LIVRE</small>
        </div>
      </section>

      <section className="works" id="trabalhos">
        <div className="section-head"><div><p className="eyebrow">Casos selecionados</p><h2>Estratégia que<br/><em>mexe no negócio.</em></h2></div></div>
        <div className="case-list">
          <article className="work-row"><div className="num">01</div><div><p>Growth, Produto e Operação</p><img src={`${A}/ayo-logo.png`} alt="Ayo"/><h3>+8.233% de receita</h3><span>Mais caminhos para chegar ao cliente. Mais parceiros ficando. Mais receita.</span></div></article>
          <article className="work-row"><div className="num">02</div><div><p>Produto, Growth e B2B</p><img src={`${A}/nano-vendas-logo.png`} alt="Nano Vendas"/><h3>Nano Vendas</h3><strong>500 usuários pagantes</strong><span>Produto simples, público certo e 500 clientes pagantes sem anúncios.</span></div></article>
          <article className="work-row"><div className="num">03</div><div><p>Aquisição de aplicativo</p><h3>Google Ads + ICP</h3><strong>+5.000 downloads</strong><span>Mostrei o aplicativo para o público certo. Resultado: mais de 5 mil downloads por R$0,15 cada.</span></div></article>
          <article className="work-row"><div className="num">04</div><div><p>Franquias, GEO e presença local</p><img src={`${A}/frutos-de-goias.png`} alt="Frutos de Goiás"/><h3>Frutos de Goiás</h3><strong>+43% de faturamento</strong><span>Ajudei cada loja a aparecer para pessoas próximas no Google. O faturamento cresceu 43%.</span></div></article>
        </div>
        <div className="nano-feature"><img src={`${A}/nano-vendas-logo.png`} alt="Nano Vendas"/><span>Nano Vendas · Produto B2B</span><strong>Aquisição orgânica 500 usuários pagantes</strong><p>Produto e crescimento construídos na mesma operação.</p><ul><li>Backlog 100% orientado por dados</li><li>Marketing segmentado por ICP</li><li>Hipóteses validadas com IA generativa e Claude Code</li><li>Arquitetura preparada para escala e segurança</li></ul></div>
      </section>

      <section className="proof" id="provas">
        <p className="eyebrow">Prova visual</p><h2>Estratégia também<br/><em>precisa sair da tela.</em></h2><p className="body-copy">Campanhas, marcas e ativos reais que mostram como o trabalho foi aplicado em aquisição, posicionamento e crescimento.</p>
        <img className="wide-image" src={`${A}/ayo-mural.png`} alt="Campanha de mídia exterior da Ayo em Aracaju"/>
        <div className="proof-caption"><span>Mídia exterior · Aracaju</span><h3>Uma campanha que virou parte da cidade.</h3><p>Branding e aquisição trabalhando juntos: presença física, mídia digital e cupons rastreáveis conectados em uma estratégia on-line e off-line.</p><div><b>20</b> canais simultâneos &nbsp; <b>1.224</b> usos de cupons &nbsp; On + Off aquisição integrada</div></div>
        <img className="hibino" src={`${A}/case-hibino.png`} alt="Gráfico do crescimento de faturamento da Hibino Sushi com anúncios"/>
        <div className="hibino-copy"><span>🔥🔥</span><div><b>R$2.500</b> ➜ <b>R$10.000</b> <em>+300%</em></div><p>Growth local</p><h3>Hibino Sushi</h3><p>Os anúncios ajudaram o faturamento mensal a ficar 4 vezes maior.</p></div>
      </section>

      <section className="brands"><p className="eyebrow">Marcas atendidas</p><h2>Experiência em<br/><em>diferentes mercados.</em></h2><p className="body-copy">De negócios locais a aplicativos e operações B2B. O método muda conforme o problema. O foco em resultado permanece.</p><img src={`${A}/marcas-atendidas.png`} alt="Seleção de marcas atendidas por Mateus Oliver"/></section>

      <footer><p className="eyebrow">Tem um problema de crescimento?</p><h2>Vamos encontrar onde<br/><em>a receita trava.</em></h2><div className="footer-links"><a href="https://wa.me/5579999999999" target="_blank">Falar no WhatsApp <Arrow /></a><a href="https://www.linkedin.com" target="_blank">LinkedIn <Arrow /></a><a href="mailto:contato@mateusoliver.com">E-mail <Arrow /></a></div><p className="copyright">Mateus Oliver Marketing | Growth | Produto © 2026</p></footer>
    </main>
  );
}
