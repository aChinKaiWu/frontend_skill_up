
# Development Environment

## Local Execution

Execute following command under repository top level directory

```bash
$ npm install --no-save
$ npm run watch # separate shell
```

### Behavior Confirmation

- http://localhost:9000

## Source code formatter (prettier, tslint, stylelint)

```bash
$ npm run lint
$ npm run format
```

## Front-end directory composition

```
ui/
├ public/        Only contains index.html. Put static images under /priv/static/app/
├ src/
│ ├ actions/
│ ├ App/         Overall component after login
│ ├ appConfig/   Constant such as API_PATH and routePath definition
│ ├ css/         CSS definition
│ ├ dashboard/   Components for dashboard pages are located here
│ ├ Header/      Header component
│ ├ locale/      Code and wordings for i18n
│ ├ Login/       Login page
│ ├ models/      Type definition of resource, request and response
│ ├ reducers/
│ ├ store/
│ ├ schemas/     JSON  schema for Table, Form
│ ├ utils/       Code such as http.ts utility libraries
│ └ index.tsx
└ types/
  └ module.declaration.d.ts
```
