install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test -s

test-coverage:
	npm test -- --coverage --coverageProvider=v8
