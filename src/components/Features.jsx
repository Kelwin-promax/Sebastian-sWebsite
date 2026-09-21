import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

export default function Features() {
  const features = [
    {
      icon: '🖥️',
      title: 'Privacidade Total',
      subtitle: 'Modo Local (Ollama)',
      description: 'Rode 100% localmente, sem depender da Internet.',
      benefits: [
        'Funciona completamente offline',
        'Dados nunca saem do seu computador',
        'Sem custos de assinatura',
        'Controle total do ambiente'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '☁️',
      title: 'Ultra Rápido',
      subtitle: 'Modo Cloud (Claude API)',
      description: 'Respostas em 2-3 segundos, máxima qualidade.',
      benefits: [
        'Instalação instantânea',
        'Respostas muito mais rápidas',
        'Qualidade superior',
        'Pronto para usar agora'
      ],
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Dois Modos Poderosos</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Escolha entre privacidade total ou velocidade extrema. O Sebastian se adapta às suas necessidades.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition"
            >
              {/* Icon & Title */}
              <div className="mb-6">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-400 mb-6">{feature.description}</p>

              {/* Benefits */}
              <div className="space-y-3">
                {feature.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <FiCheck className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                {idx === 0 ? (
                  <>
                    <div className="text-3xl font-bold text-purple-400">100%</div>
                    <div className="text-sm text-slate-400">Privado e Seguro</div>
                  </>
                ) : (
                  <>
                    <div className="text-3xl font-bold text-blue-400">2-3s</div>
                    <div className="text-sm text-slate-400">Tempo de resposta</div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capability List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-8">Capacidades Disponíveis em Ambos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <span className="text-2xl">📁</span>
              <div>
                <div className="font-semibold">Listar Arquivos</div>
                <div className="text-sm text-slate-400">Explore a estrutura de seus projetos</div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">📖</span>
              <div>
                <div className="font-semibold">Ler Conteúdo</div>
                <div className="text-sm text-slate-400">Acesse qualquer arquivo (somente leitura)</div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🔍</span>
              <div>
                <div className="font-semibold">Buscar em Projetos</div>
                <div className="text-sm text-slate-400">Encontre código rapidamente</div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🌐</span>
              <div>
                <div className="font-semibold">Web Search</div>
                <div className="text-sm text-slate-400">Busque na Internet quando necessário</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
