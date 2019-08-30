install:
	npm install
brain-games:
	npx babel-node src/bin/brain-games.js
brain-even:
	npx babel-node src/bin/brain-even.js
brain-calc:
	npx babel-node src/bin/brain-calc.js
publish --dry-run:
	npm run prepublishOnly
	npm publish --dry-run
lint:
	npx eslint .