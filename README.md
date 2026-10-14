# VIVA Open Synth Brasil

Blog em português sobre software livre, síntese de voz e criação vocal digital.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Validações disponíveis:

```bash
npm run check
npm run build
```

## Publicar um artigo

Crie `src/content/blog/nome-do-artigo.md` com frontmatter e conteúdo Markdown. Use `draft: false` para publicar. Depois, faça commit e push: o workflow do GitHub executará o build e publicará a pasta `dist/` no Cloudflare Pages.

## SEO

O site gera sitemap, RSS, `robots.txt`, canonical URL, Open Graph e metadados para artigos. Depois de conectar o domínio no provedor, envie a URL do sitemap ao Google Search Console.
