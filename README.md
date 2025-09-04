# Kenny Ramp — Landing (Next.js + Tailwind)

## Start
npm install --legacy-peer-deps
npm run dev

## Build
npm run build
npm start

## Deploy (Vercel)
vercel --prod --confirm --name kennyramp

### Dominio custom (kennyramp.vrabo.it)
1) In Vercel: Project > Settings > Domains > Add `kennyramp.vrabo.it`
2) Nel DNS di `vrabo.it`: CNAME `kennyramp` -> `cname.vercel-dns.com`
