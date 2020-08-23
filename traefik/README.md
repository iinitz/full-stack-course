## Setup
- Install `docker` and `docker-compose`
- Create docker network name `gateway`
- Change `email` in `config/traefik.toml` to your email
- Start traefik container `docker-compose -p traefik up -d`

## Usage
- Add labels to your service in docker-compose file
```yml
    labels:
      - traefik.web.frontend.rule=Host:example.com # your domain
      - traefik.web.port=3001 # port your app running
      - traefik.docker.network=gateway
```