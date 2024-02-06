# Lancer l'application

Afin de compiler l'application, il faut exécuter les commandes suivantes :

```bash
npm install
npm run build
```

# 01 - Hello World

Pour lancer l'application, il faut exécuter l'une des commandes suivantes :

```bash
node ./dist/01-hello-world/index.js
```

# 10 - Commands

Pour lancer l'application, il faut exécuter l'une des commandes suivantes :

```bash
node ./dist/10-commands/index.js
node ./dist/10-commands/index.js first
node ./dist/10-commands/index.js second
node ./dist/10-commands/index.js --help
```

# 20 - Arguments

Pour lancer l'application, il faut exécuter l'une des commandes suivantes :

```bash
node ./dist/20-arguments/index.js
node ./dist/20-arguments/index.js admin azerty
node ./dist/20-arguments/index.js admin
node ./dist/20-arguments/index.js --help
```

# 21 - Arguments variadic

Pour lancer l'application, il faut exécuter l'une des commandes suivantes :

```bash
node ./dist/21-arguments-variadic/index.js
node ./dist/21-arguments-variadic/index.js a b c d e
node ./dist/21-arguments-variadic/index.js a
node ./dist/21-arguments-variadic/index.js --help
```

# 22 - Arguments default

Pour lancer l'application, il faut exécuter l'une des commandes suivantes :

```bash
node ./dist/22-arguments-default/index.js
node ./dist/22-arguments-default/index.js nimda 654321
node ./dist/22-arguments-default/index.js nimda
node ./dist/22-arguments-default/index.js --help
```

# 23 - Arguments choices

Pour lancer l'application, il faut exécuter l'une des commandes suivantes :

```bash
node ./dist/23-arguments-choices/index.js
node ./dist/23-arguments-choices/index.js 80
node ./dist/23-arguments-choices/index.js 85
node ./dist/23-arguments-choices/index.js --help
```

# 30 - Options

Pour lancer l'application, il faut exécuter l'une des commandes suivantes :

```bash
node ./dist/30-options/index.js
node ./dist/30-options/index.js -u admin
node ./dist/30-options/index.js -u admin -p azerty
node ./dist/30-options/index.js -p azerty
node ./dist/30-options/index.js --help
```

# 31 - Options variadic

Pour lancer l'application, il faut exécuter l'une des commandes suivantes :

```bash
node ./dist/31-options-variadic/index.js
node ./dist/31-options-variadic/index.js --value a
node ./dist/31-options-variadic/index.js --value a --values b c d
node ./dist/31-options-variadic/index.js --values b c d
node ./dist/31-options-variadic/index.js --help
```
