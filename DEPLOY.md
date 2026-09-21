# 🚀 Guia de Deploy - Sebastian Website

Este guia mostra como fazer deploy do website Sebastian na Vercel de forma rápida e fácil.

## 📋 Pré-requisitos

1. **Conta GitHub** - Necessária para conectar ao repositório
2. **Conta Vercel** - Crie em [vercel.com](https://vercel.com)
3. **Código no GitHub** - O repositório já está em [Sebastian-sWebsite](https://github.com/Kelwin-promax/Sebastian-sWebsite)

## ⚡ Método Rápido (Recomendado)

### 1. **Login na Vercel**
```
1. Acesse https://vercel.com
2. Clique em "Sign Up" ou "Log In"
3. Escolha "Continue with GitHub"
4. Autorize a Vercel a acessar seus repositórios
```

### 2. **Importar Projeto**
```
1. Clique em "Add New..." → "Project"
2. Procure por "Sebastian-sWebsite"
3. Clique em "Import"
```

### 3. **Configuração do Deploy**
A Vercel detectará automaticamente:
- ✅ Framework: Static Site (HTML)
- ✅ Build Command: `echo 'Static site - no build needed'`
- ✅ Output Directory: `.` (raiz)

**Configurações já estão no `vercel.json`** - Você pode clicar direto em "Deploy"!

### 4. **Deploy**
```
1. Clique em "Deploy"
2. Aguarde ~1-2 minutos
3. Pronto! Seu site está online 🎉
```

## 🔗 URL do Deploy

Após o deploy, você terá:
- **URL Automática**: `https://sebastian-website.vercel.app`
- **URL Customizada**: Configure em Settings → Domains

## 🔄 Deployments Automáticos

Depois que o primeiro deploy for feito:

✅ **Todo push para `main` faz deploy automático**
- Você faz `git push origin main`
- Vercel detecta a mudança
- Deploy é feito automaticamente
- Site atualiza em ~30 segundos

## 📁 Estrutura de Arquivos Para Deploy

```
website/
├── index.html           ← Página principal
├── package.json         ← Metadados do projeto
├── vercel.json          ← Configuração Vercel ✅
├── .vercelignore        ← Arquivos ignorados ✅
├── .gitignore           ← Para Git
├── README.md            ← Documentação
├── DEPLOY.md            ← Este arquivo
├── downloads/           ← Scripts de instalação
│   ├── install.bat
│   └── install.sh
└── src/                 ← Componentes (futuros)
    └── components/
```

## 🛠️ Troubleshooting

### Problema: "Build failed"
**Solução**: Verifique se `index.html` existe na raiz do repositório

### Problema: "Page not found"
**Solução**: A URL deve estar correta. Tente:
- `https://sebastian-website.vercel.app`
- Limpe o cache do navegador (Ctrl+Shift+Del)

### Problema: Estilos não carregam
**Solução**: Os estilos estão no `<style>` do HTML. Se não aparecer:
1. Verifique o Console (F12)
2. Limpe cache e reload (Ctrl+Shift+R)

### Problema: Material Icons não aparecem
**Solução**: Os ícones carregam do Google Fonts. Se não funcionar:
1. Verifique sua conexão com internet
2. Tente desabilitar adblock do navegador

## 📊 Monitoramento

### Analytics da Vercel
1. Acesse seu projeto na Vercel
2. Vá em "Analytics"
3. Veja estatísticas de:
   - Requests
   - Latência
   - Erros
   - Origem dos acessos

### Logs
1. Na dashboard do projeto, clique em "Deployments"
2. Selecione o deployment mais recente
3. Clique em "View Build Logs"

## 🔒 Segurança

O website já vem com headers de segurança configurados em `vercel.json`:

✅ Cache-Control (3600s)
✅ X-Content-Type-Options
✅ X-Frame-Options
✅ X-XSS-Protection

## 🎯 Otimizações Já Aplicadas

- ✅ Arquivo único (index.html com CSS inline)
- ✅ Material Icons do CDN
- ✅ Dark Mode otimizado
- ✅ CSS minificado
- ✅ Sem dependências externas desnecessárias

## 📱 Testar Responsividade

Depois que o site estiver online:

1. **Desktop**: Abra em navegador normal
2. **Mobile**: 
   - Abra em celular
   - Ou aperte F12 → Ctrl+Shift+M
3. **Tablet**: 
   - Use emulador no DevTools
   - Redimensione para 768x1024px

## 🚀 Próximos Passos

- [ ] Configurar domínio customizado
- [ ] Setup de analytics (Google Analytics)
- [ ] Adicionar SSL/TLS (Vercel faz automaticamente)
- [ ] Configurar email de notificações
- [ ] Evoluir para React (componentes em `src/`)

## 📞 Suporte

Se tiver dúvidas:
1. Consulte [docs.vercel.com](https://docs.vercel.com)
2. Verifique o repositório GitHub
3. Veja o Console (F12) para erros

---

**Status**: ✅ Pronto para deploy  
**Data**: Setembro 2026  
**Mantido por**: Kelwin-promax
