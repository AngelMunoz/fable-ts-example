# Fable + Typescript + Monorepos!

This is a sample project to show how to use Fable with Typescript in a monorepo.

In this monorepo we'll separate sources in the following way

- apps

  Here we'll have "consumer" code, for example angular/react/web/node apps

- libs
  Here we'll have "library" code, for example fable code that we want to share between apps, we could also have just pure typescript libraries as well but depending on your needs any code that is library-like could be here.

### How to run

first install dependencies

- `pnpm recursive install`

For the core library to be active please run

- `pnpm run watch:core`

In the case of multiple apps just run `serve:<app-name>` for example

- `pnpm run serve:angular`

full example:

```
pnpm recursive install

# terminal 1            terminal 2
pnpm run watch:core     pnpm run serve:angular
```
