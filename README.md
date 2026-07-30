# portfolio_personal — Hariadiny Mantovam

Site estático (HTML/CSS/JS) com suporte a i18n (PT/EN/IT).

Como rodar localmente:

1. Abra o diretório no VS Code.
2. Sirva os arquivos com uma extensão como "Live Server" ou usando Python:

```bash
python -m http.server 8000
# depois abra http://localhost:8000
```

Como adicionar/editar idiomas:

- As traduções estão em `translations.js` como `window.TRANSLATIONS`.
- Cada chave `data-i18n` no HTML mapeia para uma entrada do objeto.
- Para adicionar um idioma, crie uma nova chave (ex: `es`) e traduza as mesmas chaves.

Formulário de contato:

- O formulário foi integrado a `formsubmit.co` enviando para `hariadiny.mantovam@gmail.com`.
- Você pode alterar o `action` do formulário em `index.html` para outro serviço.

Aprimoramentos sugeridos (manualmente):

- Converter GIFs pesados para `webm`/`mp4` ou `webp` animado para melhorar performance.
- Substituir ícones duplicados usando apenas um pacote de ícones.

