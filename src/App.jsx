import React, { useState, useEffect } from 'react';
import { Camera, Send, ChevronRight, Check, Activity, Brain, ShieldCheck, Edit2, CheckCircle, Clock, Award, Heart } from 'lucide-react';

// Componente SVG do ícone do WhatsApp
const WhatsAppIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.974 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.974a8.927 8.927 0 0 0-2.627-6.353Zm-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.466 7.462Zm4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112-.149.224-.579.73-.709.88-.131.149-.261.169-.486.056-.224-.112-.953-.351-1.815-1.12-.673-.6-1.125-1.34-1.258-1.565-.134-.224-.014-.345.098-.458.101-.101.224-.263.336-.395.112-.132.149-.224.224-.374.075-.149.038-.281-.019-.393-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383-.13-.006-.28-.006-.429-.006-.149 0-.392.056-.597.28-.205.225-.784.767-.784 1.871 0 1.104.803 2.171.915 2.32.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.534.17 1.021.146 1.409.088.436-.065 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.066-.056-.094-.206-.15-.43-.263Z"
    />
  </svg>
);

const NutriAI_Landing = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para mudar o header ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // URL do Placeholder do Robô
  const robotAvatarUrl = "https://cdn-icons-png.flaticon.com/512/4712/4712038.png";

  // Número do WhatsApp formatado para link
  const whatsappNumber = "555492359488";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá Nutri!%20Gostaria%20de%20calcular%20os%20nutrientes%20da%20minha%20refeição`;

  const features = [
    {
      icon: <Camera className="w-8 h-8 text-emerald-400" />,
      title: "1. Fotografe",
      description: "Tire uma foto rápida do seu prato. Não precisa pesar nada, nem descrever ingredientes."
    },
    {
      icon: <Send className="w-8 h-8 text-emerald-400" />,
      title: "2. Envie",
      description: "Mande a foto para o nosso contato no WhatsApp, como se estivesse conversando com um amigo."
    },
    {
      icon: <Activity className="w-8 h-8 text-emerald-400" />,
      title: "3. Receba a Análise",
      description: "Em segundos, nossa IA detalha calorias, proteínas, carboidratos e gorduras."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-emerald-950" />,
      title: "Fácil Adesão",
      description: "Sem logins, sem downloads, sem formulários. Direto no seu app de mensagens favorito."
    },
    {
      icon: <Award className="w-6 h-6 text-emerald-950" />,
      title: "Precisão Científica",
      description: "Dados validados pelo departamento de agricultura dos EUA, garantindo confiança nutricional."
    },
    {
      icon: <Heart className="w-6 h-6 text-emerald-950" />,
      title: "Consciência Alimentar",
      description: "Acompanhe o que você come visualmente e melhore seus hábitos dia após dia."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30">

      {/* --- HEADER --- */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={robotAvatarUrl}
                alt="NutriAI Logo"
                className="w-10 h-10 rounded-full border-2 border-emerald-500/50 bg-slate-800 object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">Nutri<span className="text-emerald-400">AI</span></span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#funcionamento" className="hover:text-emerald-400 transition-colors">Funcionamento</a>
            <a href="#tecnologia" className="hover:text-emerald-400 transition-colors">Tecnologia</a>
            <a href="#beneficios" className="hover:text-emerald-400 transition-colors">Benefícios</a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            WhatsApp
          </a>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Hero Text */}
          <div className="space-y-8 animate-in slide-in-from-bottom-10 fade-in duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Disponível agora
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Nutricionista de Bolso, <br />
              <span className="text-emerald-400">Potencializada por IA.</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Abandone os apps complicados. Basta enviar uma foto do seu prato no WhatsApp e nossa Inteligência Artificial calcula os macros instantaneamente. Sem digitação, sem fricção.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                // MUDANÇAS AQUI:
                // 1. Adicionei 'w-full sm:w-auto' para ocupar 100% da tela no celular
                // 2. Aumentei o padding horizontal de 'px-8' para 'px-12' para ficar mais largo no PC
                className="group bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-12 py-4 rounded-xl text-lg font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-6 h-6 fill-current" />
                Iniciar no WhatsApp
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              {/* O botão "Ver Demonstração" foi removido daqui */}
            </div>
          </div>

          {/* Hero Mockup (WhatsApp Simulator) */}
          <div className="relative mx-auto md:mr-0 max-w-[350px] animate-in slide-in-from-right-10 fade-in duration-1000 delay-200">
            <div className="relative bg-slate-900 border-[8px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden h-[640px]">
              <div className="h-full bg-[#0b141a] flex flex-col relative font-sans">
                <div className="bg-[#202c33] px-3 py-2 flex items-center gap-3 shadow-md z-10">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-600">
                    <img src={robotAvatarUrl} alt="Bot Profile" className="w-full h-full object-cover bg-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-slate-100 font-medium text-sm">NutriAI</h3>
                    <p className="text-slate-400 text-[10px]">business account</p>
                  </div>
                </div>

                <div className="flex-1 p-3 space-y-2 overflow-y-auto relative scrollbar-hide">
                  <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                  <div className="flex justify-center my-3">
                    <span className="bg-[#1f2c34] text-[#8696a0] text-[10px] px-3 py-1 rounded-lg shadow-sm uppercase font-medium">Hoje</span>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-[#005c4b] rounded-lg rounded-tr-none p-1 max-w-[85%] shadow-sm">
                      {/* --- CORREÇÃO: Usamos 'aspect-square' e limitamos a largura --- */}
                      <div className="bg-slate-800 aspect-square w-full max-w-[200px] rounded mb-1 overflow-hidden relative">
                        <img
                          src="https://images.unsplash.com/photo-1604908177453-7462950a6a3b?q=80&w=600&auto=format&fit=crop"
                          // ... resto do código
                          alt="Prato Frango e Batatas"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/400x300/1e293b/ffffff?text=Prato+de+Comida";
                          }}
                        />
          
                      </div>
                      <div className="flex justify-end px-1">
                        <span className="text-[#96b8b2] text-[10px] flex items-center gap-1">21:14 <Check size={12} className="text-[#53bdeb]" /></span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-[#202c33] rounded-lg rounded-tl-none px-3 py-2 max-w-[85%] shadow-sm text-sm text-slate-200">
                      <p className="flex items-center gap-2">📸 Foto recebida!</p>
                      <div className="flex justify-end -mt-1">
                        <span className="text-[#8696a0] text-[10px]">21:14</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-[#202c33] rounded-lg rounded-tl-none px-3 py-2 max-w-[85%] shadow-sm text-sm text-slate-200">
                      <p className="flex items-center gap-2">🤖 Analisando imagem...</p>
                      <div className="flex justify-end -mt-1">
                        <span className="text-[#8696a0] text-[10px]">21:14</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start w-full">
                    <div className="bg-[#202c33] rounded-lg rounded-tl-none p-3 max-w-[90%] shadow-sm text-sm text-slate-200 w-full">
                      <p className="font-bold text-white mb-3">Identifiquei estes itens:</p>

                      <ul className="space-y-2 mb-4 text-sm text-slate-200">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>Peito de frango grelhado (~160 g)</span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>Batatas assadas (~120 g)</span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>Brócolis cozido (~60 g)</span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>Salada variada (~40 g)</span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>Azeite de oliva (~5 ml)</span>
                        </li>
                      </ul>

                      <p className="mb-2 font-medium">Os pesos estão corretos?</p>

                      <div className="flex justify-end">
                        <span className="text-[#8696a0] text-[10px]">21:15</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-2 w-full max-w-[90%]">
                    <button className="flex-1 bg-[#202c33] py-2 rounded-lg text-[#00a884] font-medium text-sm shadow-sm flex items-center justify-center gap-2 hover:bg-[#2a3942] transition-colors">
                      <Edit2 size={14} /> Editar
                    </button>
                    <button className="flex-1 bg-[#202c33] py-2 rounded-lg text-[#00a884] font-medium text-sm shadow-sm flex items-center justify-center gap-2 hover:bg-[#2a3942] transition-colors">
                      <CheckCircle size={14} /> Confirmar
                    </button>
                  </div>

                </div>

                <div className="bg-[#202c33] p-2 flex items-center gap-3 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#374248] flex items-center justify-center text-slate-400">
                    <Camera size={18} />
                  </div>
                  <div className="flex-1 bg-[#2a3942] h-9 rounded-2xl px-4 flex items-center text-slate-500 text-sm">
                    Mensagem
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center text-white">
                    <Send size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FUNCIONAMENTO --- */}
      <section id="funcionamento" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nutrição Simplificada em <span className="text-emerald-400">3 Passos</span></h2>
            <p className="text-slate-400">Eliminamos a necessidade de aplicativos pesados e cadastros intermináveis.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-all hover:bg-slate-900 group">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECNOLOGIA & DADOS --- */}
      <section id="tecnologia" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-900/20 to-slate-900 border border-emerald-500/20 rounded-3xl p-6 md:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]" />

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-bold mb-6">Precisão Científica,<br />Poder Computacional.</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Combinamos o estado da arte em Visão Computacional com a base de dados nutricional mais respeitada do mundo. O <strong>Google Gemini</strong> entende o contexto da sua refeição, enquanto a <strong>USDA FoodData Central</strong> garante que os nutrientes estejam corretos.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                    <div>
                      <strong className="block text-white">Base de Dados</strong>
                      <span className="text-sm text-slate-400">Fonte abrangente de dados sobre composição de alimentos.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Brain className="w-6 h-6 text-emerald-400 shrink-0" />
                    <div>
                      <strong className="block text-white">Reconhecimento Multimodal</strong>
                      <span className="text-sm text-slate-400">Analisa textura, cor e contexto para identificar alimentos complexos.</span>
                    </div>
                  </li>
                </ul>
              </div>


              <div className="bg-slate-950/50 rounded-2xl p-4 md:p-6 border border-slate-800 backdrop-blur-sm overflow-x-auto">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-4 min-w-[300px]">
                  <span className="text-sm font-mono text-emerald-400">WhatsAppWebHookController.java</span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                </div>

                <code className="text-xs md:text-sm font-mono text-slate-300 whitespace-pre block">
                  <span className="text-slate-400">log</span>.<span className="text-blue-400">info</span>(<span className="text-orange-300">"Imagem recebida... media_id=&#123;&#125;"</span>);<br />
                  <span className="text-slate-400">api</span>.<span className="text-blue-400">sendText</span>(from, <span className="text-orange-300">"Foto recebida!"</span>);<br />
                  <br />
                  <span className="text-purple-400">var</span> media = <span className="text-slate-400">mediaClient</span>.<span className="text-blue-400">download</span>(mediaId);<br />
                  <br />
                  <span className="text-slate-400">api</span>.<span className="text-blue-400">sendText</span>(from, <span className="text-orange-300">"🤖 Analisando imagem..."</span>);<br />
                  <br />
                  <span className="text-emerald-400">GeminiVisionClient.PlateAnalysis</span> analysis = <br />
                  <span className="pl-4 text-slate-400">analysisService</span>.<span className="text-blue-400">analyzeImage</span>(media.bytes());
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFÍCIOS --- */}
      <section id="beneficios" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que usar o <span className="text-emerald-400">NutriAI</span>?</h2>
            <p className="text-slate-400">A tecnologia aplicada para o bem-estar diário.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/30 transition-all">
                <div className="w-12 h-12 bg-emerald-400 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="container mx-auto px-6 flex flex-col items-center text-center gap-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={robotAvatarUrl}
                alt="NutriAI Logo"
                className="w-8 h-8 rounded-full border border-emerald-500/30 bg-slate-800 object-cover"
              />
              <span className="font-bold text-xl text-white">NutriAI</span>
            </div>
            <p className="text-slate-500 text-sm">
              Desenvolvido por Juliano Cesar dos Santos
            </p>
            <p className="text-slate-500 text-sm mt-1">
              Projeto de Conclusão de Curso - Ciência da Computação.
            </p>
            <p className="text-slate-500 text-sm mt-1">
              URI - Erechim • 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NutriAI_Landing;