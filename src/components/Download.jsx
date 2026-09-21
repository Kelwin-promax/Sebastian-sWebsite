import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

export default function Download() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-blue-950/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Pronto para Começar?</h2>
          <p className="text-xl text-slate-400">Escolha seu sistema operacional</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { os: 'Windows', file: 'install.bat', icon: '🪟' },
            { os: 'Linux', file: 'install.sh', icon: '🐧' },
            { os: 'macOS', file: 'install.sh', icon: '🍎' },
          ].map((platform, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition text-center"
            >
              <div className="text-5xl mb-4">{platform.icon}</div>
              <h3 className="text-xl font-bold mb-2">{platform.os}</h3>
              <p className="text-slate-400 text-sm mb-6">
                {platform.os === 'Windows'
                  ? 'Clique duplo em install.bat'
                  : 'Execute ./install.sh'}
              </p>
              <button className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
                <FiDownload size={18} />
                Download {platform.file}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Git Alternative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Ou clone do GitHub</h3>
          <div className="bg-slate-900 rounded p-4 font-mono text-sm text-slate-300 mb-4 overflow-x-auto">
            git clone https://github.com/seuuser/sebastian.git
          </div>
          <p className="text-slate-400 text-sm">
            Logo após, execute <span className="font-mono">python sebastian.py --setup</span>
          </p>
        </motion.div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-slate-800/50 border border-slate-700 rounded-xl p-6"
        >
          <h3 className="text-lg font-bold mb-4">Requisitos Mínimos</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300">
            <div>
              <div className="font-semibold text-blue-400 mb-2">Sempre</div>
              <ul className="space-y-1">
                <li>✓ Python 3.9+</li>
                <li>✓ Internet para download inicial</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-blue-400 mb-2">Modo Local (Ollama)</div>
              <ul className="space-y-1">
                <li>✓ ~8GB de RAM disponível</li>
                <li>✓ ~3GB de espaço em disco</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
