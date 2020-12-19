npm run build
cp -R ../dist ./dist
docker build -t registry.cn-hangzhou.aliyuncs.com/jonny_docker/giligili-frontend:v0.0.1 ./
docker push registry.cn-hangzhou.aliyuncs.com/jonny_docker/giligili-frontend:v0.0.1