This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## ToDo: 

- [X] Landing page base for Desktop
- [X] Tailwind for style
- [ ] Responsive for mobile
- [X] Dynamic data for videos
- [ ] Hover buttons and animations
- [ ] Pagination

## Sobre o projeto: 


Primeiramente falo que está sendo minha primeira vez utilizando um framework deste tipo, também nunca usei React na minha vida. Foi um tanto quanto complicado de se acostumar como funciona, principalmente as questões de "States" porém com muita luta consegui fazer o projeto rodar, também aproveitei o momento e aprendi a utilizar o Tailwind, gostei bastante.

Organizei o codigo seguindo uma estrutura padrão de componentes, usando da pasta app nativa do next. Inicialmente pretendia aplicar um MVC mas vi que não era necessário por se tratar de uma simples landing-page. Basicamente cada componente tem sua pasta e segue uma linha padrão onde no final eles são levados para o componente Home para ser carregado. É possivel também notar que tentei utilizar do json server para fazer uma espécie de "api externa" e pegar as requisições, porém no entanto devido a minha falta de costume tive de desistir e optar por importar diretamente do json.

Para rodar o projeto basta clicar no botão azul com o nome "code", copiar o link https, abir o terminal em uma pasta desejada e digitar o seguinte comando: git clone <i>link copiado</i> e dê enter.
Após clonar o repositório abra o terminal nesta pasta que foi gerada e digite o seguinte comando: npm run dev, dê enter e terá seu projeto rodando no endereço http://localhost:3000/
