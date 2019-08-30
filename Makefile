install:
	npm install
start brain-games:
	npx babel-node src/bin/brain-games.js
start brain-even:
	npx babel-node src/bin/brain-even.js
publish --dry-run:
	npm run prepublishOnly
	npm publish --dry-run
lint:
	npx eslint .