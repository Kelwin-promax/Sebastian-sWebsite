import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-sm text-blue-300">
              🚀 v2.0 - Auto-Setup Edition
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Assistente de Terminal
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Alimentado por IA
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto"
          >
            Instale em 2 minutos. Escolha entre rodá-lo localmente (privacidade total) ou na nuvem (super rápido). Sem configuração manual.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
              <FiDownload size={20} />
              Instalar Agora
            </button>
            <button className="px-8 py-4 border border-slate-600 hover:border-slate-400 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
              Ver Documentação
              <FiArrowRight size={20} />
            </button>
          </motion.div>

          {/* Features Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 text-sm"
          >
            <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <p className="text-slate-300">Instalação em 2 minutos</p>
            </div>
            <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
              <div className="text-2xl mb-2">🔒</div>
              <p className="text-slate-300">Privacidade Total (modo local)</p>
            </div>
            <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
              <div className="text-2xl mb-2">🌐</div>
              <p className="text-slate-300">Ou super rápido (modo cloud)</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Demo Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-20 bg-slate-900 border border-slate-700 rounded-lg overflow-hidden shadow-2xl"
        >
          <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <div className="p-6 font-mono text-sm">
            <div className="text-slate-400">$ <span className="text-white">python sebastian.py</span></div>
            <div className="mt-4 text-slate-300">
              <div>Sebastian: Olá! Sou seu assistente de terminal.</div>
              <div className="mt-2">🎯 Posso ajudar com:</div>
              <div>  • Leitura de arquivos</div>
              <div>  • Busca em projetos</div>
              <div>  • Web search</div>
              <div>  • Análise de código</div>
            </div>
            <div className="mt-6 text-slate-400">Voce: <span className="text-white blink">|</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
