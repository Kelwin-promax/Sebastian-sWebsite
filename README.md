# Sebastian - Website

Landing page oficial do **Sebastian**, um assistente de terminal inteligente que roda localmente com Ollama/Qwen3 ou na nuvem com Claude API.

## 🎨 Sobre o Site

Website moderno e responsivo apresentando Sebastian com:
- Layout descentralizado com design assimétrico
- Hero section com demonstração interativa do terminal
- Documentação clara das features
- Comparação entre modos local (privacidade) e cloud (performance)
- FAQ com respostas às dúvidas comuns
- Seção de download com scripts de instalação

## 📋 Seções

### 1. **Hero Section**
- Apresentação principal do produto
- Dois botões de ação: "Install Now" e "Documentation"
- Demonstração visual do terminal em uso

### 2. **Features**
- **Two Approaches**: mostra os dois modos de operação
  - **Ollama Local**: privacidade total, roda offline
  - **Claude Cloud**: máxima performance, modelo de fronteira
- Cards informativos com ícones e tags

### 3. **How It Works**
- Passo a passo da instalação (2 minutos)
- Explicação clara do fluxo de uso
- Requisitos do sistema

### 4. **Compare**
- Comparação lado-a-lado entre modos
- Tabela de features
- Trade-offs entre privacidade e performance

### 5. **FAQ**
- Perguntas frequentes respondidas
- Troubleshooting comum
- Links para documentação

### 6. **Download**
- Scripts de instalação (`.bat` para Windows, `.sh` para Linux/Mac)
- Instruções passo-a-passo
- Links diretos de download

## 🛠️ Tecnologia

- **HTML5** puro (sem frameworks)
- **CSS3** com variáveis customizáveis
- **Material Icons** para ícones
- **Responsive Design** para mobile, tablet e desktop
- **Dark Mode** por padrão

## 🎨 Design

### Paleta de Cores
```
--bg: #0a0a0a          (fundo principal - preto)
--bg-light: #121212    (fundo secundário - cinza escuro)
--text: #ffffff        (texto - branco)
--text-muted: #999999  (texto secundário - cinza)
--accent: #06b6d4      (destaque - ciano)
--border: #1a1a1a      (bordas - cinza muito escuro)
```

### Tipografia
- **Font**: Inter (weights: 400, 500, 600, 700, 800)
- **Fallbacks**: -apple-system, BlinkMacSystemFont

## 📐 Layout

- **Container Max-Width**: 1200px (seções normais), 1400px (hero)
- **Padding**: 40px horizontal
- **Gap**: 60px entre colunas de grid
- **Responsivo**: Mobile-first approach

## 📦 Estrutura de Arquivos

```
website/
├── README.md                 # Este arquivo
├── index.html               # Página principal (922 linhas)
├── package.json             # Metadados do projeto
├── downloads/               # Scripts de instalação
│   ├── install.bat
│   └── install.sh
└── src/                     # Componentes React (não usados na v1)
    └── (reservado para futuras melhorias)
```

## 🚀 Como Usar

1. **Localmente**: Abra `index.html` em seu navegador
   ```bash
   open index.html
   # ou
   firefox index.html
   ```

2. **Com servidor local**:
   ```bash
   python -m http.server 8000
   # Acesse http://localhost:8000
   ```

3. **Com Live Server (VS Code)**:
   - Instale a extensão "Live Server"
   - Clique direito no `index.html`
   - Selecione "Open with Live Server"

## 🔄 Desenvolvimento

### Modificar Cores
Edite as variáveis CSS em `:root`:
```css
:root {
    --accent: #seu-codigo-de-cor;
    /* ... outras variáveis */
}
```

### Adicionar Seções
1. Crie uma nova `<section id="seu-id">`
2. Adicione link na navegação `<a href="#seu-id">`
3. Escreva seu HTML/CSS dentro da seção

### Responsividade
O site usa `max-width` e `flex/grid` para ser responsivo automaticamente. Teste em diferentes tamanhos de viewport.

## ✨ Recursos Futuros

- [ ] Modo claro (light mode)
- [ ] Suporte a internacionalização (i18n)
- [ ] Animações mais fluidas
- [ ] Componentes React para interatividade
- [ ] Integração com API de stats/downloads
- [ ] Blog/News section
- [ ] Video tutorial integrado

## 📄 Licença

Mesmo do projeto principal Sebastian.

## 🤝 Contribuições

Para sugestões ou melhorias no website:
1. Faça um fork
2. Crie uma branch (`git checkout -b feature/sua-feature`)
3. Commit suas mudanças (`git commit -m "Descrição clara"`)
4. Push para a branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request

## 📧 Contato

Veja o repositório principal de Sebastian para mais informações.

---

**Versão**: 1.0.0  
**Última atualização**: Setembro 2026  
**Status**: Ativo e em desenvolvimento
