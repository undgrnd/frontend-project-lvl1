install: ;@echo "Install"; \
	  npm install

saluteUser: ;@echo "Start"; \
    npx babel-node src/bin/brain-games.js

publish: ;@echo "Publish"; \
	  npm publish

lint: ;@echo "Lint"; \
    npx eslint .
