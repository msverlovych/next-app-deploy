.PHONY: build-development
build-development: 
	docker compose -f docker-compose.dev.yaml build
	
.PHONY: start-development
start-development: 
	docker compose -f docker-compose.dev.yaml up -d	

.PHONY: stop-development
stop-development: 
	docker compose -f docker-compose.dev.yaml down	
	
.PHONY: build-production
build-production: 
	docker compose -f docker-compose.yaml build

.PHONY: start-production
start-production: 
	docker compose -f docker-compose.yaml up -d

.PHONY: stop-production
stop-production: 
	docker compose -f docker-compose.yaml down

.PHONY: push-production
push-production: 
	docker compose -f docker-compose.yaml push