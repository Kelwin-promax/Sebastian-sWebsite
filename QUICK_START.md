# 🚀 Quick Start - Sebastian

Guia rápido para instalar e rodar Sebastian sem ir ao repositório do GitHub.

## ⚡ Instalação em 3 Passos

### **Windows**

```bash
# 1. Baixe o instalador
curl -O https://raw.githubusercontent.com/escort-inroad/Project-Sebas/main/install.py

# 2. Execute
python install.py

# 3. Siga as instruções na tela
```

Ou de forma mais simples:

```bash
# Tudo em um comando
python -c "import urllib.request; urllib.request.urlretrieve('https://raw.githubusercontent.com/escort-inroad/Project-Sebas/main/install.py', 'install.py'); exec(open('install.py').read())"
```

### **Linux / macOS**

```bash
# Copie e cole no terminal:
curl -sSL https://raw.githubusercontent.com/escort-inroad/Project-Sebas/main/install.sh | bash
```

Ou:

```bash
wget -O - https://raw.githubusercontent.com/escort-inroad/Project-Sebas/main/install.sh | bash
```

## 📋 O que o Instalador Faz

✅ Verifica Python 3.11+
✅ Clona o repositório (ou faz download se Git não tiver)
✅ Instala dependências (pip)
✅ Configura arquivo `.env`
✅ Oferece opção de rodar Sebastian imediatamente

## 🎯 Depois de Instalar

### Configurar APIs (Opcional)

**Para Web Search:**
1. Acesse [tavily.com](https://tavily.com)
2. Crie uma conta (grátis: 1.000 buscas/mês)
3. Copie sua API key
4. Edite `~/.env` ou `$HOME/Sebastian/.env`
5. Cole em `TAVILY_API_KEY=seu_token_aqui`

**Para Modo Cloud (Claude):**
1. Acesse [console.anthropic.com/keys](https://console.anthropic.com/keys)
2. Crie uma chave de API
3. Edite `~/.env`
4. Cole em `ANTHROPIC_API_KEY=sk-...`

### Rodar Sebastian

```bash
cd ~/Sebastian
python sebastian.py

# Se usar Python 3 explicitamente:
python3 sebastian.py
```

Depois é só digitar em linguagem natural:

```
Você: o que tem na pasta de projetos?
Você: procura "TODO" nos arquivos
Você: sair
```

## 🖥️ Você Pode Usar Também...

### Local (Privado) - Ollama
Se quer máxima privacidade:

1. Instale [Ollama](https://ollama.com)
2. Execute: `ollama pull qwen3:4b`
3. Deixe rodando
4. Rode Sebastian normalmente

### Cloud (Rápido) - Claude
Se quer máxima performance:

1. Configure `ANTHROPIC_API_KEY` no `.env`
2. Rode Sebastian
3. Automaticamente usa Claude quando Ollama não estiver disponível

## ❓ Troubleshooting

### "Python não encontrado"
- **Windows**: Instale de [python.org](https://python.org) (marque "Add to PATH")
- **Mac**: `brew install python3`
- **Linux**: `sudo apt install python3` (Debian/Ubuntu)

### "Git não encontrado"
- **Windows**: Instale de [git-scm.com](https://git-scm.com)
- **Mac**: `brew install git`
- **Linux**: `sudo apt install git`

### Erro ao instalar dependências
```bash
# Tente manualmente:
cd ~/Sebastian
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

### Sebastian não conecta ao Ollama
- Verifique se Ollama está rodando: `ollama serve`
- Se não, instale em [ollama.com](https://ollama.com)

## 📊 Verificar Instalação

```bash
# Teste se tudo está funcionando:
cd ~/Sebastian

# Teste Python
python --version

# Teste dependências
python -c "import requests, dotenv; print('✅ Dependências OK')"

# Teste executável
python sebastian.py
# Digite: qual é a data de hoje?
# (deve responder instantaneamente com cache)
```

## 🎓 Próximos Passos

1. **Explore as ferramentas**: 
   - `list_files` - listar arquivos
   - `read_file` - ler conteúdo
   - `search_in_files` - buscar texto
   - `web_search` - buscar na internet

2. **Customize o .env**:
   - Adicione sua pasta preferida em `SEBASTIAN_ALLOWED_DIR`
   - Configure as APIs que quer usar

3. **Use em Produção**:
   - Deploy no Heroku, Railway, ou sua infra
   - Adicione logs customizados
   - Integre com outras ferramentas

## 🆘 Precisa de Ajuda?

- 📖 Documentação: [README.md](README.md)
- 🐛 Issues: [GitHub Issues](https://github.com/escort-inroad/Project-Sebas/issues)
- 💬 Discussões: [GitHub Discussions](https://github.com/escort-inroad/Project-Sebas/discussions)

---

**Pronto para começar?** Execute o comando de instalação acima! 🚀
