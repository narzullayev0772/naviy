# naviy.me

Personal portfolio of Alisher Narzullayev (React + MUI Joy, Create React App).

## Develop

```bash
npm ci
npm start
```

## Deploy

The site is served by GitHub Pages from
[narzullayev0772.github.io](https://github.com/narzullayev0772/narzullayev0772.github.io),
which holds the `naviy.me` CNAME. To publish:

```bash
npm run build
cp build/index.html build/404.html   # SPA fallback for GitHub Pages
```

Then copy `build/` into the root of `narzullayev0772.github.io` (keep its
`CNAME` and `.nojekyll`) and push to `main`.
