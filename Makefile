build: deps babel minify
deps:
		npm install
babel:
		npm run babel
minify:
		npm run minify
demo:
		node index.js
build-server:
		docker build -f docker/Dockerfile . -t open_hpi_cdn
run-server:
		docker run -it open_hpi_cdn

.PHONY: build install babel minify demo build-server run-server
