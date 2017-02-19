#!/bin/bash

if [[ ! -d ./.git ]]; then
    echo 'You must run this script from the project root.'
    exit 1
fi

cat > .git/hooks/pre-commit <<'.'
#!/bin/bash

./node_modules/.bin/jest && ./node_modules/.bin/eslint $(find src -name '*.js')
.

chmod +x .git/hooks/pre-commit
