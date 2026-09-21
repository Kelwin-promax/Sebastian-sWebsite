import React from 'react';
import { motion } from 'framer-motion';

export default function Tools() {
  const tools = [
    { icon: '📁', name: 'list_files', desc: 'Liste arquivos e pastas de seu projeto' },
    { icon: '📖', name: 'read_file', desc: 'Leia o conteúdo de qualquer arquivo' },
    { icon: '🔍', name: 'search_in_files', desc: 'Busque código em múltiplos arquivos' },
    { icon: '🌐', name: 'web_search', desc: 'Busque informações na Internet' },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-blue-950/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ferramentas Integradas</h2>
          <p className="text-xl text-slate-400">Sebastian tem 4 ferramentas poderosas à sua disposição</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{tool.icon}</span>
                <div>
                  <h3 className="text-lg font-bold mb-2 font-mono text-blue-400">{tool.name}</h3>
                  <p className="text-slate-400">{tool.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6">Casos de Uso</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-400 mb-3">💻 Desenvolvimento</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• Entender estrutura de projetos</li>
                <li>• Buscar padrões em código</li>
                <li>• Análise rápida de arquivos</li>
                <li>• Documentação automática</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-400 mb-3">📚 Pesquisa & Análise</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• Revisar documentação</li>
                <li>• Buscar informações online</li>
                <li>• Consolidar conhecimento</li>
                <li>• Comparar padrões</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
