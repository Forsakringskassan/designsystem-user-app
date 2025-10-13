# Designsystem User App

An example application using:

- [designsystem](https://github.com/Forsakringskassan/designsystem)
- [designsystem-user-lib](https://github.com/Forsakringskassan/designsystem-user-lib)

It is running on Github Pages: https://forsakringskassan.github.io/designsystem-user-app/

A GitHub workflow will also create a Docker image, it is published to [repository](https://github.com/Forsakringskassan/repository). It can be started with:

```sh
docker run -d \
  -p 8080:8080 \
  ghcr.io/forsakringskassan/designsystem-user-app:snapshot
```
