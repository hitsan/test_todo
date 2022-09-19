docker-compose build
docker-compose run --rm frontend sh -c "npm install -g create-react-app && create-react-app app --template typescript"
