#!/bin/bash

if [[ ! -d ./.git ]]; then
    echo 'You must run this script from the project root.'
    exit 1
fi

cat > .git/hooks/pre-commit <<'.'
#!/bin/bash

npm run lint && npm test
.

chmod +x .git/hooks/pre-commit
