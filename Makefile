install:
	npm install

publish:
	npm publish

lint:
	npx eslint ./ --cache --config ./.eslintrc.yml
