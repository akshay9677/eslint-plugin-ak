# eslint-plugin-ak

Tutorial for writing plugins in eslint

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ak`:

```
$ npm install eslint-plugin-ak --save-dev
```


## Usage

Add `ak` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ak"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ak/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





