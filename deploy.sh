docker build -t sayantan083/nodeapp:latest -t sayantan083/nodeapp:$SHA -f ./Dockerfile ./

docker push sayantan083/nodeapp:latest

docker push sayantan083/nodeapp:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=sayantan083/nodeapp:$SHA