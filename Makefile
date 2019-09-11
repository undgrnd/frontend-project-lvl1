install: ;@echo "Install"; \
	  npm install

start: ;@echo "Start"; \
    npx babel-node src/bin/brain-games.js

publish: ;@echo "Publish"; \
	  npm publish --dry-run
