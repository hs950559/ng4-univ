ng build --prod
cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/

cd dist
live-server
