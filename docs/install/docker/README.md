# Docker Install

This version of the FlowForge platform is intended for running in the Docker Container management system. Typically suited for small/medium on premise deployments.

### Prerequisites

#### Docker Compose

FlowForge uses Docker Compose to install and manager the required components. Instructions on how to install Docker Compose on your system can be found here:

[https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

These instructions assume you are running Docker on a Linux or MacOS host system.

#### DNS

The orchestration uses an instance of Nginx to route requests to each Node-RED Project. To do this it needs each instance to have a unique hostname, to generate this the project name is prepended to a supplied domain.

To make this work you will need to configure a DNS server to map a wildcard domain entry to the IP address of the host running Docker. e.g `*.example.com`.

The FlowForge Application will be hosted on `http://forge.example.com`

**Note** When testing locally you can add entries for each project to your `/etc/hosts` file but you must use the external IP address of the host machine, not the loopback address (`127.0.0.1`).

### Installing FlowForge

#### Download

Download the latest release tar.gz from the docker-compose project:

[https://github.com/flowforge/docker-compose/releases/latest](https://github.com/flowforge/docker-compose/releases/latest)

Unpack this and cd into the created directory.	

```
tar zxf v0.x.0.tar.gz
cd docker-compose-0.x.0
```

#### Building Containers

To build the 2 required containers run `./build-containers.sh`.

This will build and tag both `flowforge/forge-docker` and `flowforge/node-red`

##### flowforge/flowforge-docker

This container holds the FlowForge App and the Docker Driver

##### flowforge/node-red

This is a basic Node-RED image with the FlowForge Launcher and the required Node-RED plugins to talk to the FlowForge Platform. This is the basis for the initial Stack.

This is the container you can customise for your deployment.

### Configuring FlowForge

Configuration details are stored in the `etc/flowforge.yml` file which is mapped into the `flowforge/forge-docker` container. You will need to edit this file to update the `domain` and `base_url` entries to match the DNS settings. Please note that once set, the `domain` and `base_url` values should not be changed as these values are used as part of the configuration stored in the database of each project. The ability to migrate `domains` is on the feature backlog.

You also need to update the `VIRTUAL_HOST` entry in the `docker-compose.yml` file to use the same domain as in the `etc/flowforge.yml` file.

For more details on the options available, see the [configuration guide](../configuration.md).

### MQTT Broker

The only configuration needed will be to edit the `VIRTUAL_HOST` line in the `flowforge-broker` section of `docker-compose.yml` to 
set the correct domain name and make the same change to the `public_url` entry in the `etc/flowforge.yml` file.

`docker-compose.yml`

```
  ...
  flowforge-broker:
    image: "iegomez/mosquitto-go-auth"
    networks:
      - flowforge
    restart: always
    ulimits:
      nofile: 2048
    environment:
      - "VIRTUAL_HOST=mqtt.example.com"
      - "VIRTUAL_PORT=1884"
    volumes:
      - "./broker/mosquitto.conf:/etc/mosquitto/mosquitto.conf"
  ...
```

`etc/flowforge.yml`

```
  ...
  broker:
    url: mqtt://forge:1883
    public_url: ws://forge.example.com
```




#### SSL (optional)
If you want to serve the forge app and projects via SSL you will need to obtain wildcard SSL certs for the domain you are using eg `*.example.com` or you can use the Letsencrypt acme-companion.

### Wilcard SSL

Create a folder in the `docker-compose-0.x.0` directory named `certs`, place your .crt and .key files in there, they should be named for the domain without the `*` eg `example.com.crt` & `example.com.key`
You  also need to create a copy of the .crt and .key files named `default.crt` & `default.key` in the same folder. This is used for serving unknown hosts.

In the `docker-compose.yml` file, 
- uncomment the line 
```
-   "443:443"
```

- Add this line to the `volumes` section of the nginx proxy 
```
- "./certs:/etc/nginx/certs"
```

If you wish to redirect all traffic to use HTTPS then add the following section to the nginx service on docker-compose.yml
```
environment:
      - "HTTPS_METHOD=redirect"
```

If you are running with the MQTT broker then you should adjust the `public_url` to start with `wss://` rather than `ws://`

### Let's Encrypt

In the `docker-compose.yml` file, uncomment the following lines
```
- "./certs:/etc/nginx/certs"
```
```
- "443:443"
```
```
  acme:
    image: nginxproxy/acme-companion
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./acme:/etc/acme.sh"
    volumes_from:
      - nginx:rw
    environment:
      - "DEFAULT_EMAIL=mail@example.com"
    depends_on:
      - "nginx"
```
If you wish to redirect all traffic to use HTTPS then add the following section to the nginx service on docker-compose.yml
```
environment:
      - "HTTPS_METHOD=redirect"
```
Then, in the `docker-compose.yml` file, edit the following lines added your domain and email address

```
- "DEFAULT_EMAIL=mail@example.com"
```
```
- "LETSENCRYPT_HOST=mqtt.example.com"
```
```
- "LETSENCRYPT_HOST=forge.example.com"
```

As with the Wilcard SSL method, if you are running with the MQTT broker then you should adjust the `public_url` to start with `wss://` rather than `ws://`

#### Running FlowForge

Once the containers have been built you can start FlowForge by running:

Using the docker compose plugin
```
docker compose -p flowforge up -d
```

Using the docker-compose command
```
docker-compose up -p flowforge up -d
```


This will also create a directory called `db` to hold the database files used to store project instance and user information.

#### Using FlowForge File Storage

FlowForge projects when running in Docker do not have direct 
access to a persistent file system to store files.

We recomend disabling the Node-RED core file nodes in the FlowForge
Template.

<img src="../images/file-node-template.png" width=500 />

Adding `10-file.js` to the list of "Excluded nodes by filename" section will ensure that the core file nodes are not loaded by the project.

FlowForge File Nodes provide a solution to this for basic read/write.
More details can be found [here](../file-storage/).

### First Run Setup

The first time you access the platform in your browser, it will take you through
creating an administrator for the platform and other configuration options.

For more information, follow [this guide](../first-run.md).
