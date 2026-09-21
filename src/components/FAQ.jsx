import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: 'Qual a diferença entre modo Local e Cloud?',
      a: 'Modo Local (Ollama) roda tudo no seu computador - é privado mas mais lento (~100s). Modo Cloud (Claude) usa a API do Claude - é muito rápido (~2-3s) mas requer Internet e custa créditos.'
    },
    {
      q: 'Preciso de API Key?',
      a: 'Apenas se escolher modo Cloud. Você pode obter uma gratuitamente em https://console.anthropic.com/keys. Modo Local não requer API Key.'
    },
    {
      q: 'Funciona offline?',
      a: 'Sim, totalmente! Se escolher modo Local (Ollama). Modo Cloud requer Internet para cada requisição.'
    },
    {
      q: 'Quanto custa?',
      a: 'Modo Local: Gratuito. Modo Cloud: Você paga apenas por uso (geralmente centavos por pergunta). Confira preços em anthropic.com'
    },
    {
      q: 'Posso mudar de modo depois?',
      a: 'Sim! Execute python sebastian.py --setup para reconfigurar a qualquer momento.'
    },
    {
      q: 'É seguro?',
      a: 'Modo Local: 100% seguro, dados no seu computador. Modo Cloud: Claude é de uma empresa confiável, mas dados são enviados pela Internet.'
    },
    {
      q: 'Qual modo devo escolher?',
      a: 'Comece com Cloud se quer usar agora. Se privacidade é crítica, escolha Local. Você pode testar ambos!'
    },
    {
      q: 'Precisa de GPU?',
      a: 'Não. Sebastian funciona 100% em CPU. Mais RAM é melhor (8GB+ recomendado para Local).'
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-gradient-to-b from-transparent to-blue-950/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-slate-400">Esclareça suas dúvidas</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition"
              >
                <span className="text-left font-semibold text-lg">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown size={20} className="text-slate-400" />
                </motion.div>
              </button>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: openIdx === idx ? 1 : 0,
                  height: openIdx === idx ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
                className="border-t border-slate-700 overflow-hidden"
              >
                <div className="px-6 py-4 text-slate-400">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400">Ainda tem dúvidas?</p>
          <a href="https://github.com" className="text-blue-400 hover:text-blue-300 font-semibold">
            Abra uma issue no GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
