import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiSettings, FiCheckCircle, FiZap } from 'react-icons/fi';

export default function HowItWorks() {
  const steps = [
    {
      icon: FiDownload,
      number: '1',
      title: 'Baixe e Instale',
      description: 'Clique em install.bat (Windows) ou install.sh (Linux/Mac)'
    },
    {
      icon: FiSettings,
      number: '2',
      title: 'Escolha o Modo',
      description: 'Local (privado) ou Cloud (rápido) - auto-configurado'
    },
    {
      icon: FiCheckCircle,
      number: '3',
      title: 'Configuração Automática',
      description: 'Sebastian instala e configura tudo que precisa'
    },
    {
      icon: FiZap,
      number: '4',
      title: 'Comece a Usar',
      description: 'python sebastian.py e digite seus comandos'
    }
  ];

  return (
    <section id="howit" className="py-24 px-4 bg-gradient-to-b from-transparent to-blue-950/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Como Funciona</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Instalação em 4 passos simples. Sem complicações.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
                )}

                {/* Card */}
                <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center hover:border-blue-500 transition">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white border-4 border-slate-900">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-4 mb-4 flex justify-center">
                    <Icon size={32} className="text-blue-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Alternative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-8">O que Acontece Automaticamente</h3>
          <div className="space-y-4">
            {[
              '✅ Detecta se Python está instalado',
              '✅ Instala dependências pip automaticamente',
              '✅ Oferece modo Local (Ollama) ou Cloud (Claude)',
              '✅ Baixa modelo Qwen (se escolher local)',
              '✅ Gera arquivo .env com configurações',
              '✅ Marca setup como concluído',
              '✅ Pronto para usar!'
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-slate-300"
              >
                <span className="text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
