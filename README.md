# Vue template

A handy dandy template with the usual configurations i use to make starting new projects a lot easier !!!

## Website

- web site link : <https://upssisomniaques.fr/>

## Config

- Frontend: `Nuxt`
- Backend: `Pocketbase`
- Deployement: `Docker compose`

- CSS Framework: `Tailwind CSS`
- Icon pack: `Feather icons`

## Installation

### Install docker

```bash
sudo curl -fsSL https://get.docker.com -o get-docker.sh
sudo chmod +x get-docker.sh
./get-docker.sh
```

### Docker as non-root user

```bash
sudo groupadd docker
sudo usermod -aG docker $USER
```

You may need to log out and log back in for this to take effect! You can type `docker ps` to check if you can run docker commands without sudo.

You can also run `newgrp docker` to activate the changes to groups insteed of logging out and back in.

### Clone the repo

```bash
git clone git@github.com:gui-websites/ndl-2022.git
cd ndl-2022
```

### Install with npm

```bash
sudo apt install npm
npm install
```

### Open the project in docker

```bash
docker-compose up -d
```

The docker is now running.

You can access it by "Attach Visual Sudio Code" in the docker extension.

A new window will open with the project in it.

### Run the project

In the docker window, open a terminal and run:

```bash
npm run dev
```
