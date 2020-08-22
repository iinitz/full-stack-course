## Install
```yarn add @babel/core @babel/register body-parser compression cookie-parser cors dotenv express```

```yarn add --dev @babel/preset-env eslint-config-nss```

### Setup
`.babelrc`

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```

`.eslintrc`

```json
{
  "extends": "nss/node",
  "rules": {
    "no-console": 0,
    "max-len": 0,
    "no-restricted-globals": 0,
    "no-underscore-dangle": [
      "error",
      {
        "allow": ["_id"]
      }
    ]
  }
}
```