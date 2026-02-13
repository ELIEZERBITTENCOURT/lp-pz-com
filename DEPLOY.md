# Guia de Deploy - Pazzini Comunicacion

## Preparação Pré-Deploy

### 1. Checklist de Configuração

Antes de fazer o deploy, certifique-se de:

- [ ] Atualizar o número do WhatsApp em `Contact.jsx` (no .env)
- [ ] Configurar o e-mail correto (no .env)
- [ ] Revisar todos os textos e conteúdos
- [ ] Testar formulário de contato (utilizado no projeto Web3Forms - https://web3forms.com,)
- [ ] Testar responsividade em diferentes dispositivos
- [ ] Verificar todos os links

## Deploy na Vercel (Recomendado)

### Passo 1: Preparar o Projeto

```bash
npm run build
```

### Passo 2: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Passo 3: Fazer Login

```bash
vercel login
```

### Passo 4: Deploy

```bash
vercel
```

Siga as instruções no terminal:
- Project name: pazzini-comunicacion
- Directory: ./
- Build command: npm run build
- Output directory: dist

### Passo 5: Deploy para Produção

```bash
vercel --prod
```

---

## Deploy na Netlify

### Método 1: Via Interface (Mais Fácil)

1. Acesse [netlify.com](https://netlify.com)
2. Faça login ou crie uma conta
3. Clique em "Add new site" > "Deploy manually"
4. Execute `npm run build` localmente
5. Arraste a pasta `dist` para o Netlify

### Método 2: Via Git

1. Faça push do projeto para GitHub
2. No Netlify: "Add new site" > "Import from Git"
3. Selecione o repositório
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Clique em "Deploy site"

---

## Deploy no GitHub Pages

### Passo 1: Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

### Passo 2: Atualizar package.json

Adicione:

```json
{
  "homepage": "https://seuusuario.github.io/lp-pz-com",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Passo 3: Atualizar vite.config.js

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/lp-pz-com/', // Nome do repositório
  build: {
    outDir: 'dist'
  }
});
```

### Passo 4: Deploy

```bash
npm run deploy
```

---

## Configuração de Domínio Personalizado

### Na Vercel

1. Vá em Settings > Domains
2. Adicione seu domínio
3. Configure os DNS conforme instruções

### Na Netlify

1. Vá em Domain settings
2. Add custom domain
3. Configure os DNS

### DNS Providers Recomendados

- Cloudflare (gratuito, com CDN)
- Google Domains
- GoDaddy
- Registro.br

---

## Analytics e Monitoramento

### Google Analytics 4

1. Crie uma propriedade em [analytics.google.com](https://analytics.google.com)
2. Copie o Measurement ID
3. Adicione em `index.html` antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```
---

## SSL/HTTPS

### Vercel e Netlify

- ✅ SSL automático e gratuito (Let's Encrypt)
- Não requer configuração adicional

### Cloudflare (Adicional)

1. Adicione seu site no Cloudflare
2. Configure DNS
3. Ative SSL/TLS (Full ou Full Strict)
4. Ative Auto HTTPS Rewrites

---

## Performance e Otimização

### Lighthouse Score

Execute antes do deploy:

```bash
npm run build
npm run preview
```

Abra Chrome DevTools > Lighthouse > Generate Report

**Metas:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

### Compressão

Ambos Vercel e Netlify fazem compressão automática (Gzip/Brotli)

---

## Monitoramento Pós-Deploy

### Checklist Pós-Deploy

- [ ] Testar todas as páginas/seções
- [ ] Verificar formulário de contato
- [ ] Testar WhatsApp
- [ ] Validar links de e-mail
- [ ] Testar em diferentes navegadores
- [ ] Testar em dispositivos móveis
- [ ] Verificar Google Analytics
- [ ] Verificar Search Console
- [ ] Testar velocidade (PageSpeed Insights)

### Google Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione a propriedade (URL)
3. Verifique a propriedade
4. Submeta sitemap.xml

### Uptime Monitoring (Opcional)

Ferramentas gratuitas:
- UptimeRobot
- StatusCake
- Pingdom

---

## Backup e Versionamento

### Git

```bash
git add .
git commit -m "Deploy: versão 1.0.0"
git tag v1.0.0
git push origin main --tags
```

### Backup Manual

Sempre mantenha:
- Código fonte no GitHub
- Backup local do projeto
- Documentação atualizada

---

## Troubleshooting

### Erro 404 ao recarregar página

**Solução para Netlify**: Crie `public/_redirects`:
```
/*    /index.html   200
```

**Solução para Vercel**: Crie `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
---

## Suporte

Para dúvidas sobre o deploy:

- Documentação Vercel: [vercel.com/docs](https://vercel.com/docs)
- Documentação Netlify: [docs.netlify.com](https://docs.netlify.com)
- GitHub Issues: Abra uma issue no repositório

---

## Próximos Passos

Após deploy bem-sucedido:

1. Configurar domínio personalizado
2. Adicionar Google Analytics
3. Configurar Search Console
4. Divulgar nas redes sociais
5. Monitorar conversões
6. Coletar feedback
7. Iterar e melhorar

---

**Boa sorte com o deploy!**