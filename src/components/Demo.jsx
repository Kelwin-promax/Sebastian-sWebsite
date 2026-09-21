import React from 'react';
import { motion } from 'framer-motion';

export default function Demo() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Veja em Ação</h2>
          <p className="text-xl text-slate-400">Exemplo real de uso do Sebastian</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="ml-4 text-xs text-slate-400">terminal</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm space-y-2 bg-gradient-to-b from-slate-900 to-slate-950">
            <div className="text-slate-400">
              $ <span className="text-white">python sebastian.py</span>
            </div>

            <div className="mt-4 text-slate-300">
              <div className="text-blue-400">====================================================================</div>
              <div className="text-blue-400">  SEBASTIAN — assistente de terminal (somente leitura)</div>
              <div className="text-blue-400">====================================================================</div>
              <div>  Backend     : ☁️  Claude API (Anthropic)</div>
              <div>  Ferramentas : list_files, read_file, search_in_files, web_search</div>
              <div>  Digite 'sair' para encerrar.</div>
              <div className="text-blue-400">====================================================================</div>
            </div>

            <div className="mt-6">
              <div>
                Voce: <span className="text-green-400">Crie uma todolist para novo projeto Python</span>
              </div>
            </div>

            <div className="mt-4 text-slate-400">⏳ Processando...</div>

            <div className="mt-4 text-slate-300">
              <div className="text-yellow-400">Sebastian:</div>
              <div className="mt-2">Aqui está uma todolist para preparação de projeto Python:</div>
              <div className="mt-3">
                <div><strong>Configuração Inicial</strong></div>
                <div>- [ ] Criar ambiente virtual (venv)</div>
                <div>- [ ] Instalar dependências (pip install -r requirements.txt)</div>
                <div>- [ ] Configurar .env com variáveis</div>
              </div>
              <div className="mt-2">
                <div><strong>Estrutura de Pastas</strong></div>
                <div>- [ ] Criar src/ para código principal</div>
                <div>- [ ] Criar tests/ para testes</div>
                <div>- [ ] Criar docs/ para documentação</div>
              </div>
              <div className="mt-2">... (mais itens)</div>
            </div>

            <div className="mt-4 text-green-400">[2.35s]</div>

            <div className="mt-4">
              Voce: <span className="text-green-400">sair</span>
            </div>

            <div className="mt-2 text-slate-400">Ate mais.</div>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-slate-400"
        >
          <p>✨ Resposta completa em 2.35 segundos (modo Cloud)</p>
          <p className="text-sm mt-2">No modo Local, levaria ~100 segundos mas seria 100% privado</p>
        </motion.div>
      </div>
    </section>
  );
}
