import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

export default function Comparison() {
  const comparison = [
    { aspect: 'Tempo de instalação', local: '5-10 min', cloud: '< 1 min' },
    { aspect: 'Velocidade de resposta', local: '60-100s', cloud: '2-3s' },
    { aspect: 'Qualidade', local: 'Boa', cloud: 'Excelente' },
    { aspect: 'Custo', local: 'Gratuito', cloud: 'Pago (uso)' },
    { aspect: 'Internet requerida', local: 'Não', cloud: 'Sim' },
    { aspect: 'Privacidade', local: 'Total', cloud: 'Depende' },
    { aspect: 'Offline', local: 'Sim', cloud: 'Não' },
    { aspect: 'Requisitos', local: '~8GB RAM', cloud: 'Mínimo' },
  ];

  return (
    <section id="comparison" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Comparação: Local vs Cloud</h2>
          <p className="text-xl text-slate-400">Escolha a opção que melhor se encaixa no seu caso de uso</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-900 border-b border-slate-700">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-300">Aspecto</th>
                  <th className="px-6 py-4 text-center font-semibold text-purple-400">🖥️ Local (Ollama)</th>
                  <th className="px-6 py-4 text-center font-semibold text-blue-400">☁️ Cloud (Claude)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-700/50 transition">
                    <td className="px-6 py-4 font-medium text-slate-300">{row.aspect}</td>
                    <td className="px-6 py-4 text-center text-slate-400">{row.local}</td>
                    <td className="px-6 py-4 text-center text-slate-400">{row.cloud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-purple-950/30 border border-purple-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">✅ Escolha Local Se:</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Privacidade é crítica</li>
              <li>• Trabalha offline frequentemente</li>
              <li>• Quer evitar custos</li>
              <li>• Tem bom hardware (8GB+)</li>
            </ul>
          </div>
          <div className="bg-blue-950/30 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">✅ Escolha Cloud Se:</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Quer a melhor qualidade</li>
              <li>• Precisa de respostas rápidas</li>
              <li>• Internet sempre disponível</li>
              <li>• Orçamento permite</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
