### Installation

- install [PnpM](https://pnpm.io/)
- run `pnpm install` from root
- run `pnpm dev` from root to start web app, native app and sdk package dev servers. Alternative is to run commands from apps/packages dirs. EG run `pnpm dev/build` in packages/sdk and then `pnpm dev` in one of apps.
- having React Native app up and running locally is a journey everyone has to figure out by himself. Go to Expo or React Native docs. Your aim is to have working local Android/iOS emulator. 

### What's inside and short reasoning behind selections

- [Turborepo](https://turbo.build/repo) is picked as the build system for monorepo approach. Lerna which we use for Matter monorepo was considered dead for quite some time, only recently got picked up by some company.
  - https://npmtrends.com/lerna-vs-turbo
- for web app Vite
- for mobile app Expo - considered almost a CRA like for React Native, though more an equivalent of Next.js as it's a framework, but its parts are optional.
- for form handling react-hook-form + zod. Compared to CDMS current solutions - formik is no longer developed, yup has worse TS support - zod was written in TS from the start, yup got recently rewritten.
  - https://npmtrends.com/yup-vs-zod
  - https://npmtrends.com/formik-vs-react-hook-form
- PnpM as package manager - fast, modern package manager. Unfortunately it turned out that one of the core advantages of pnpm - symlinked deps from virtual store - [is not working](https://pnpm.io/npmrc#node-linker) with React Native. Having know that from the start, I would probably go with npm workspaces.


### Apps and Packages of this monorepo

- `web`: [vite](https://vitejs.dev) ts app
- `native`: [Expo](https://expo.dev/) ts app
- `eslint-config-custom` package: web and native shared `eslint` configurations - should be shared, so far used on web only, native needs [eslint](https://docs.expo.dev/guides/using-eslint/) added  
- `sdk` package: reusable code for web and native apps, build with Vite in library mode. Right now exports all from 'sdk' entrypoint. Might make sense to have [multiple entrypoints](https://github.com/vitejs/vite/discussions/1736), eg 'sdk/utils', 'sdk/forms' 

### Shared code ideas

- forms
  - validation schema
  - default values
  - type of inputs
- theme tokens, colors
- utils
- types
- firestore queries - that would be a big one IMO, but unfortunately may not be possible. React Native can use Firebase JS SDK, but also officially recommended [React Native Firebase](https://rnfirebase.io/) . `React Native Firebase is a light-weight javascript layer connecting you to the native Firebase SDKs for both iOS and Android which aimes to mirror the offical Firebase Web SDK as closely as possible.
 Although the official Firebase JS SDK will work with React Native; it is mainly built for the web and has a limited feature-set compared to native.` To be precise, [here](https://firebase.google.com/docs/web/environments-js-sdk#other_environments) is described why can't be used from Firebase ecosystem when using JS SDK in React Native, Firestore persistence being a big one. So to sum up, if we would have to use two different libs for Firebase, then there is a small chance of sharing queries code.

### Showcase

Simple function
https://github.com/rafal-castor/monorepo-playground/assets/84379740/f43ab28a-fc29-480e-98d7-13138b2c58ae

Theme colors
https://github.com/rafal-castor/monorepo-playground/assets/84379740/4d2e58c0-52c3-4dd5-8deb-4b3c20cd8974

Form validation
https://github.com/rafal-castor/monorepo-playground/assets/84379740/7bf621d6-a8ec-4cee-9209-e5daa4864729
