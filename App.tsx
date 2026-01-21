
import React, { useRef } from 'react';

const ShoppingBagIcon = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
  </svg>
);

const CTAButton: React.FC<{ text: string; className?: string; onClick?: () => void; href?: string; showIcon?: boolean }> = ({ text, className = "", onClick, href, showIcon = false }) => {
  const baseClasses = `w-full md:w-auto px-6 md:px-8 py-4 text-sm md:text-base font-bold text-white rounded-xl btn-cta animate-cta uppercase tracking-wider md:tracking-widest whitespace-normal shadow-lg flex items-center justify-center text-center leading-tight transition-all duration-300 no-underline cursor-pointer ${className}`;
  
  const content = (
    <>
      {showIcon && <ShoppingBagIcon />}
      {text}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

const Section: React.FC<{ children: React.ReactNode; className?: string; bgColor?: string; id?: string }> = ({ children, className = "", bgColor = "transparent", id }) => (
  <section id={id} className={`py-10 md:py-20 px-5 ${className}`} style={{ backgroundColor: bgColor }}>
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </section>
);

const CheckIcon = () => (
  <svg className="w-6 h-6 text-[#2d5a27] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
  </svg>
);

const CrossIcon = () => (
  <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

const CheckItem: React.FC<{ text: React.ReactNode; type?: 'check' | 'cross' | 'bullet'; className?: string }> = ({ text, type = 'check', className = "" }) => {
  return (
    <div className={`flex items-start gap-4 py-2 border-b border-stone-200/40 last:border-0 ${className}`}>
      {type === 'check' ? <CheckIcon /> : type === 'cross' ? <CrossIcon /> : <span className="text-gray-400">•</span>}
      <div className="text-base md:text-lg text-stone-800 leading-tight font-medium">{text}</div>
    </div>
  );
};

const RecipeCard: React.FC<{ title: string; description: string; icon: string }> = ({ title, description, icon }) => (
  <div className="bg-white/50 p-6 rounded-2xl shadow-sm border border-stone-200">
    <h3 className="text-lg md:text-xl font-bold text-[#1b4332] mb-3 uppercase flex items-center gap-2">
      <span className="shrink-0">{icon}</span> {title}
    </h3>
    <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-normal">{description}</p>
  </div>
);

const BonusCard: React.FC<{ title: string; description: string; image: string; number: number }> = ({ title, description, image, number }) => (
  <div className="flex flex-col items-center bg-white rounded-[2.5rem] p-8 border-2 border-dashed border-[#2d5a27]/40 shadow-sm relative group hover:border-[#2d5a27] transition-colors">
    <div className="mb-6 relative">
      <img src={image} alt={title} className="w-full max-w-[180px] h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" loading="lazy" />
    </div>
    <div className="text-center">
      <h3 className="text-[#2d5a27] text-lg md:text-xl font-extrabold mb-4 uppercase leading-tight tracking-tight">
        {title}
      </h3>
      <p className="text-stone-500 text-sm md:text-base leading-relaxed font-normal">
        {description}
      </p>
    </div>
  </div>
);

const PriceBox: React.FC = () => (
  <div className="max-w-[280px] mx-auto bg-[#f0fff4]/60 border border-[#c6f6d5] rounded-2xl p-4 my-2 shadow-sm">
    <div className="flex flex-col items-center leading-tight">
      <p className="text-red-600 line-through text-sm font-bold opacity-80">De R$99,90</p>
      <p className="text-black font-extrabold text-sm uppercase mt-1">por apenas</p>
      <p className="text-[#2d5a27] text-4xl font-black">R$10,00</p>
      <p className="text-gray-500 text-[10px] leading-tight font-normal mt-2 text-center opacity-80 px-2">
        Apenas um valor simbólico para separar quem realmente quer aprender a fazer dos curiosos.
      </p>
    </div>
  </div>
);

const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const FINAL_LINK = "https://indec-digital.mycartpanda.com/checkout/203161373:1";

  return (
    <main className="antialiased overflow-x-hidden">
      {/* SESSÃO 1 – HERO */}
      <Section className="text-center pt-4 md:pt-10 pb-6 md:pb-12">
        <h1 className="text-xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 title-main uppercase px-2">
          Aprenda do <span className="highlight">ZERO</span> a Fazer Incensos Artesanais <span className="highlight">100% NATURAIS</span>, Que Queimam Até o Fim, Purificam, Energizam e Ainda Podem Gerar uma Nova <span className="highlight">FONTE DE RENDA</span>...
        </h1>
        <p className="text-sm md:text-base text-gray-500 mb-4 font-normal max-w-xl mx-auto leading-relaxed px-4">
          Tudo em casa, de forma econômica e mesmo que você nunca tenha feito antes!
        </p>
        <div className="mb-6 relative inline-block px-2">
          <img 
            src="https://i.ibb.co/jPStrNgP/Capa-Inicio.webp" 
            alt="Capa do Guia A Arte dos Incensos Artesanais" 
            className="rounded-[2rem] shadow-2xl mx-auto w-full max-w-[360px] md:max-w-[560px]"
            loading="lazy"
          />
        </div>

        <PriceBox />

        <div className="mt-4 flex justify-center">
          <CTAButton text="EU QUERO APRENDER AGORA!" onClick={scrollToOffer} />
        </div>
      </Section>

      {/* SESSÃO 2 – PARA QUEM É ESSE GUIA? */}
      <div className="px-4 md:px-0">
        <section className="max-w-3xl mx-auto bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 md:p-16 shadow-xl border border-white/50 relative z-10 -mb-16">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-8 title-red uppercase leading-snug px-2">
            <span className="inline-block mr-2 text-xl md:text-2xl align-middle">🌟</span>
            PARA QUEM É ESSE <span className="highlight whitespace-nowrap">GUIA?</span>
          </h2>
          <div className="max-w-lg mx-auto">
            <CheckItem text={<>Para quem <span className="font-bold">nunca fez</span> incensos na vida e quer <span className="font-bold">começar do zero</span>.</>} />
            <CheckItem text={<>Para quem <span className="font-bold">já tentou</span>, mas <span className="font-bold">não acertou</span> a fórmula, a <span className="font-bold">queima</span> ou os <span className="font-bold">materiais</span>.</>} />
            <CheckItem text={<>Para quem quer <span className="font-bold">produzir pra vender</span> e ter uma <span className="font-bold">renda extra</span> ou até mesmo <span className="font-bold">viver disso</span>.</>} />
            <CheckItem text={<>Para quem quer <span className="font-bold">incensos naturais</span>, artesanais, terapêuticos, com <span className="font-bold">cheiro agradável</span> e energia limpa.</>} />
          </div>
        </section>
      </div>

      {/* SESSÃO 3 – A VERDADE */}
      <Section className="pt-28 md:pt-40 px-4">
        <div className="bg-red-50 border border-red-100 p-8 md:p-12 rounded-[2.5rem]">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 title-red uppercase text-center"><span className="highlight">🚫 A VERDADE</span> É:</h2>
          <p className="text-base md:text-lg mb-8 text-gray-700 font-normal leading-relaxed text-center">
            Se você está tentando fazer incenso sem um direcionamento claro e profissional, apostando no achismo...
          </p>
          <div className="space-y-2 mb-10 max-w-lg mx-auto text-left">
            <CheckItem type="cross" text={<>Vai continuar <span className="font-bold">queimando só na ponta</span>.</>} />
            <CheckItem type="cross" text={<>Vai <span className="font-bold">gastar material</span> à toa.</>} />
            <CheckItem type="cross" text={<>Vai se <span className="font-bold">frustrar</span> com <span className="font-bold">cheiro ruim</span>, <span className="font-bold">fumaça pesada</span> ou incenso que <span className="font-bold">não acende direito</span>.</>} />
          </div>
          
          <div className="mb-10 max-w-lg mx-auto flex items-start justify-start gap-3">
            <span className="text-xl shrink-0">👉</span>
            <p className="text-sm md:text-base font-bold text-green-800 uppercase leading-relaxed text-left">
              Aqui você aprende de forma DIRETA, PRÁTICA, 100% testada e validada!
            </p>
          </div>

          <div className="text-center flex justify-center">
            <CTAButton text="QUERO APRENDER AGORA" onClick={scrollToOffer} />
          </div>
        </div>
      </Section>

      {/* SESSÃO 4 – VANTAGENS */}
      <Section className="text-center">
        <img 
          src="https://i.ibb.co/pBV8WBLr/Incensos.webp" 
          alt="Incensos em produção" 
          className="rounded-3xl shadow-lg mb-10 w-full max-w-xl mx-auto"
          loading="lazy"
        />
        <h2 className="text-2xl md:text-3xl font-bold mb-6 title-red uppercase"><span className="highlight">VANTAGENS</span> EM FAZER SEUS PRÓPRIOS INCENSOS NATURAIS.</h2>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
          Imagine criar, com suas próprias mãos, incensos que queimam perfeitamente, que não apenas perfumam… mas purificam, acalmam, energizam e transformam qualquer ambiente em um verdadeiro refúgio de paz, equilíbrio e boas vibrações!
        </p>
      </Section>

      {/* SESSÃO 5 – RECEITAS DO GUIA (COMPLETA) */}
      <Section bgColor="#fcfaf6" className="border-y border-stone-200">
        <p className="text-lg md:text-xl text-center mb-12 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          No guia <span className="font-bold text-stone-900">A ARTE DOS INCENSOS ARTESANAIS</span>, você vai aprender de forma fácil a criar mais de 20 tipos de incensos naturais, incluindo:
        </p>
        
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <RecipeCard icon="🌿" title="Incenso da Serenidade de Lavanda" description="Perfeito para relaxar, aliviar estresse e induzir noites de sono tranquilas e profundas." />
          <RecipeCard icon="🍋" title="Incenso Revitalizante de Limão e Eucalipto" description="Renova as energias, limpa ambientes pesados e traz disposição instantânea." />
          <RecipeCard icon="🧘‍♀️" title="Incenso de Paz Interior de Sândalo e Vetiver" description="Eleva sua vibração, acalma a mente e auxilia em práticas de meditação, yoga e autoconhecimento." />
          <RecipeCard icon="🔥" title="Incenso de Energia e Foco de Laranja e Alecrim" description="Ativa sua produtividade, afasta o cansaço mental e traz clareza para suas atividades do dia." />
          <RecipeCard icon="🌸" title="Incenso Floral de Rosa e Jasmim" description="Desperta amor próprio, harmonia e atrai boas energias emocionais e afetivas." />
          <RecipeCard icon="😌" title="Cones de Relaxamento de Camomila" description="Para quem precisa de calma, leveza e equilíbrio após dias estressantes." />
          <RecipeCard icon="⚖️" title="Cones de Equilíbrio de Sândalo e Patchouli" description="Restaura o equilíbrio emocional e energético, deixando o ambiente mais leve e harmonioso." />
          <RecipeCard icon="🛡️" title="Cones de Proteção de Mirra e Alecrim" description="Limpeza energética poderosa! Afastamento de inveja, más vibrações, estagnação e energias negativas." />
        </div>

        <p className="text-base md:text-xl text-center text-gray-600 italic leading-relaxed mb-10 px-4 max-w-3xl mx-auto">
          E muito mais… Fórmulas, técnicas, segredos e combinações ancestrais para você dominar a arte dos incensos naturais, seja para uso pessoal ou para criar uma renda altamente lucrativa!
        </p>

        <div className="text-center flex justify-center">
          <CTAButton text="QUERO LIBERAR AGORA" onClick={scrollToOffer} />
        </div>
      </Section>

      {/* SESSÃO 6 – DEPOIMENTOS */}
      <Section className="text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-10 px-4 leading-tight title-red uppercase">
          Junte-se a mais de <span className="highlight">1.387 PESSOAS</span> que já descobriram o poder dos incensos naturais e estão transformando seus ambientes e suas vidas!
        </h2>
        
        <div className="relative group max-w-5xl mx-auto">
          {/* Botão Esquerdo */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full shadow-lg arrow-btn flex items-center justify-center -ml-2 md:-ml-5"
          >
            <svg className="w-6 h-6 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carrossel */}
          <div 
            ref={scrollRef}
            className="carousel-container flex overflow-x-auto gap-5 py-6 px-2 mb-8 snap-x snap-mandatory"
          >
            {[
              { id: 'tTytHwBv', name: 'Depo-1' },
              { id: 'sJNdQYLh', name: 'Depo-3' },
              { id: 'gF9n98z4', name: 'Depo-2' },
              { id: 'LdCgdcHb', name: 'Depo-4' },
              { id: 'nsg2xwjC', name: 'Depo-6' },
              { id: '9Q2vbXb', name: 'Depo-5' }
            ].map((item, i) => (
              <div key={i} className="min-w-[85%] md:min-w-[320px] snap-center">
                <img 
                  src={`https://i.ibb.co/${item.id}/${item.name}.webp`} 
                  alt="Depoimento de aluno" 
                  className="rounded-2xl shadow-xl border-4 border-white w-full animate-hint"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Botão Direito */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full shadow-lg arrow-btn flex items-center justify-center -mr-2 md:-mr-5"
          >
            <svg className="w-6 h-6 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="max-w-xl mx-auto mb-10">
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-normal">
            Este método foi desenvolvido com base em práticas ancestrais, aromaterapia e conhecimentos artesanais, adaptados para você fazer em casa, de forma simples e sem equipamentos caros.
          </p>
        </div>

        <div className="flex justify-center">
          <CTAButton text="EU TAMBÉM QUERO APRENDER" onClick={scrollToOffer} />
        </div>
      </Section>

      {/* SESSÃO 7 – AQUI ESTÁ UM POUCO DO QUE VOCÊ TERÁ ACESSO */}
      <Section bgColor="#ffffff" className="shadow-sm overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 title-red uppercase leading-tight px-4">
          AQUI ESTÁ UM POUCO DO QUE VOCÊ TERÁ <span className="highlight">ACESSO</span> <br/>
          <span className="text-gray-400 font-normal text-lg md:text-xl mt-2 block lowercase italic">(adquirindo apenas hoje)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2">
          {/* Item 1 */}
          <div className="flex flex-col bg-stone-50 rounded-[2rem] border border-stone-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            <div className="w-full flex justify-center bg-stone-100 p-2">
              <img 
                src="https://i.ibb.co/GvTTgbSD/Passos-1.webp" 
                alt="Materiais e Preparo" 
                className="w-full h-auto rounded-xl object-contain group-hover:scale-[1.02] transition-transform duration-500" 
                loading="lazy" 
              />
            </div>
            <div className="p-8 flex-grow flex items-center justify-center text-center">
              <p className="text-base md:text-lg text-stone-700 leading-relaxed font-medium">
                Aprenda quais materiais usar, como preparar seus ingredientes e ativar sua intenção, a base para criar incensos potentes e seguros.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col bg-stone-50 rounded-[2rem] border border-stone-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            <div className="w-full flex justify-center bg-stone-100 p-2">
              <img 
                src="https://i.ibb.co/5XZ22RBn/Passos-2.webp" 
                alt="Receitas" 
                className="w-full h-auto rounded-xl object-contain group-hover:scale-[1.02] transition-transform duration-500" 
                loading="lazy" 
              />
            </div>
            <div className="p-8 flex-grow flex items-center justify-center text-center">
              <p className="text-base md:text-lg text-stone-700 leading-relaxed font-medium">
                Descubra mais de 20 receitas de incensos e cones energéticos para atrair paz, prosperidade, proteção e equilíbrio ao seu ambiente.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col bg-stone-50 rounded-[2rem] border border-stone-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            <div className="w-full flex justify-center bg-stone-100 p-2">
              <img 
                src="https://i.ibb.co/zH2nGn12/Passos-3.webp" 
                alt="Ervas e Resinas" 
                className="w-full h-auto rounded-xl object-contain group-hover:scale-[1.02] transition-transform duration-500" 
                loading="lazy" 
              />
            </div>
            <div className="p-8 flex-grow flex items-center justify-center text-center">
              <p className="text-base md:text-lg text-stone-700 leading-relaxed font-medium">
                Explore os poderes das ervas, resinas e especiarias, e aprenda a combinar aromas que transformam energia e elevam a vibração.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 flex justify-center">
          <CTAButton text="QUERO COMEÇAR AGORA" onClick={scrollToOffer} />
        </div>
      </Section>

      {/* SESSÃO 8 – TUDO O QUE VOCÊ VAI APRENDER */}
      <Section className="px-4 py-6 md:py-10">
        <div className="max-w-3xl mx-auto bg-stone-100/50 rounded-[3rem] p-8 md:p-12 border border-stone-200 shadow-inner">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 title-red uppercase leading-tight">
            TUDO O QUE VOCÊ VAI <span className="highlight">APRENDER</span>
          </h2>
          <div className="grid grid-cols-1 max-w-2xl mx-auto">
            <CheckItem text={<>+20 Receitas <span className="highlight font-bold">Exclusivas</span></>} />
            <CheckItem text={<>Modo de <span className="highlight font-bold">Preparo</span> Detalhado</>} />
            <CheckItem text={<><span className="highlight font-bold">Lista</span> de Ingredientes Naturais</>} />
            <CheckItem text={<><span className="highlight font-bold">Combinações</span> de Aromas e Funções</>} />
            <CheckItem text={<><span className="highlight font-bold">Técnicas</span> de Mistura e Modelagem</>} />
            <CheckItem text={<>Fórmulas Prontas e <span className="highlight font-bold">Segredos</span> de Alquimia</>} />
            <CheckItem text={<>Acesso <span className="highlight font-bold">Vitalício</span> e <span className="highlight font-bold">Atualizações</span></>} />
          </div>
        </div>
      </Section>

      {/* SESSÃO 9 – BÔNUS */}
      <Section bgColor="#ffffff">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-16 px-4 title-red uppercase leading-tight">
          E PRA TORNAR SUA JORNADA AINDA MAIS ESPECIAL… VOCÊ VAI RECEBER <span className="highlight">3 PRESENTES</span> EXCLUSIVOS:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BonusCard 
            number={1}
            image="https://i.ibb.co/99Tz4bg1/B-nus-1.webp"
            title="GUIA FORNECEDORES DE MATERIAIS"
            description="Uma lista completa e atualizada com os melhores fornecedores para você encontrar ervas, resinas, pós naturais, óleos, materiais e muito mais com facilidade."
          />
          <BonusCard 
            number={2}
            image="https://i.ibb.co/prs3LcjT/B-nus-2.webp"
            title="COMO VIVER DA VENDA DE INCENSOS ARTESANAIS"
            description="Um mini guia direto, prático e poderoso onde te mostro exatamente como você pode transformar essa arte em um negócio lucrativo, trabalhando de casa."
          />
          <BonusCard 
            number={3}
            image="https://i.ibb.co/cXNhDY5g/B-nus-3.webp"
            title="COMO FAZER PORTA INCENSOS EM CASA"
            description="Além dos seus incensos, aprenda também a criar porta incensos lindos, funcionais e artesanais, usando materiais simples e acessíveis."
          />
        </div>
      </Section>

      {/* SESSÃO 10 – OFERTA */}
      <Section className="text-center" id="offer-section">
        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border-2 border-stone-100 relative max-w-2xl mx-auto">
          <p className="text-lg md:text-xl font-bold text-gray-700 mb-8 px-4 title-red uppercase">
            Garanta o guia <span className="highlight uppercase">A ARTE DOS INCENSOS ARTESANAIS</span> <span className="font-black text-red-700">+3 SUPER BÔNUS</span> por um valor nunca antes visto...
          </p>
          
          <div className="mb-8">
            <span className="text-gray-400 font-bold uppercase tracking-widest block text-xs mb-2">POR APENAS:</span>
            <div className="flex items-center justify-center gap-1">
              <span className="text-3xl font-bold text-[#2d5a27]">R$</span>
              <span className="text-7xl md:text-8xl font-black text-[#2d5a27]">10,00</span>
            </div>
          </div>

          <div className="mb-10">
            <img 
              src="https://i.ibb.co/xPtgsNv/Mockup-Pre-o.webp" 
              alt="Mockup Oferta" 
              className="mx-auto w-full max-w-[320px]"
              loading="lazy"
            />
          </div>

          <div className="max-w-xs mx-auto space-y-1 text-left mb-10">
            <CheckItem text={<span className="font-bold">Guia A Arte dos Incensos Artesanais</span>} className="py-2.5" />
            <CheckItem text={<span className="font-bold">+3 Super Bônus</span>} className="py-2.5" />
            <CheckItem text={<span className="font-bold">Acesso Vitalício</span>} className="py-2.5" />
          </div>

          <p className="text-base md:text-lg font-bold mb-8 title-main uppercase leading-tight">Comece sua jornada na arte dos incensos naturais agora!</p>
          <div className="flex justify-center">
            <CTAButton text="QUERO COMPRAR AGORA" href={FINAL_LINK} className="md:px-12" showIcon={true} />
          </div>
        </div>
      </Section>

      {/* SESSÃO 11 – POR QUE ESTÁ TÃO BARATO? */}
      <Section className="pt-16 pb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 title-red uppercase">✨ POR QUE ESTÁ TÃO <span className="highlight">BARATO</span>?</h2>
        <div className="space-y-6 text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          <p>Porque meu objetivo é compartilhar esse conhecimento com o maior número de pessoas possível.</p>
          <p>O valor simbólico de R$10,00 serve pra dois propósitos:</p>
          <div className="space-y-2">
            <CheckItem text="Manter este projeto e o site no ar, funcionando e acessível para todos." />
            <CheckItem text="Separar quem realmente valoriza esse conteúdo e quer aprender de verdade dos curiosos." />
          </div>
          <p className="font-medium">É uma troca justa, consciente e feita de coração.</p>
          <p className="font-bold text-gray-900 border-l-4 border-red-800 pl-4 py-1">Sem pegadinhas, sem letras miúdas.</p>
          <p>Apenas o desejo genuíno de espalhar essa arte.</p>
        </div>
      </Section>

      {/* SESSÃO 12 – DÚVIDAS */}
      <Section bgColor="#ffffff" className="rounded-t-[3rem] shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 title-red uppercase"><span className="highlight">DÚVIDAS</span> FREQUENTES</h2>
        <div className="space-y-8 max-w-2xl mx-auto">
          <div>
            <h3 className="text-base md:text-lg font-bold title-red mb-3 uppercase">COMO IREI RECEBER O MEU ACESSO AO GUIA?</h3>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">O seu acesso ao guia será enviado imediatamente para o seu e-mail após a aprovação do seu pagamento, podendo começar imediatamente a fazer os seus incensos artesanais.</p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold title-red mb-3 uppercase">É APENAS UM ÚNICO PAGAMENTO?</h3>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Sim, você paga apenas uma vez e tem acesso vitalício a todo o conteúdo e as futuras atualizações.</p>
          </div>
        </div>
      </Section>

      {/* SESSÃO 13 – GARANTIA + CTA FINAL */}
      <Section className="text-center pt-20 pb-24">
        <p className="text-xl md:text-2xl font-bold text-center mb-10 title-red uppercase tracking-tighter">Aproveite Esta <span className="highlight">OPORTUNIDADE</span>!</p>
        <img 
          src="https://i.ibb.co/pv6zQcGj/Garantia.webp" 
          alt="Garantia" 
          className="mx-auto mb-10 w-40 md:w-56"
          loading="lazy"
        />
        <div className="mb-10">
          <p className="text-lg font-bold mb-4 text-gray-600 uppercase">Clique no botão abaixo e garanta agora o seu acesso com</p>
          <p className="text-5xl md:text-7xl font-black text-red-600 tracking-tighter uppercase">90% DE <span className="text-red-800">DESCONTO</span></p>
        </div>
        <p className="text-sm md:text-base text-gray-500 mb-12 italic max-w-2xl mx-auto leading-relaxed px-4">
          ✨ Permita-se viver a experência de criar seus próprios incensos artesanais e transformar sua energia, sua casa e sua vida com esse conhecimento único!
        </p>
        <div className="flex justify-center">
          <CTAButton text="QUERO COMPRAR AGORA" href={FINAL_LINK} showIcon={true} />
        </div>
      </Section>

      {/* RODAPÉ */}
      <footer className="py-12 bg-stone-100 text-center text-stone-400 border-t border-stone-200">
        <div className="flex flex-wrap justify-center gap-6 mb-4 font-bold uppercase text-[10px] tracking-[0.2em]">
          <a href="#" className="hover:text-red-800 transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-red-800 transition-colors">Termos de uso</a>
        </div>
        <p className="text-[10px] opacity-60">© {new Date().getFullYear()} A ARTE DOS INCENSOS ARTESANAIS. TODOS OS DIREITOS RESERVADOS.</p>
      </footer>
    </main>
  );
};

export default App;
