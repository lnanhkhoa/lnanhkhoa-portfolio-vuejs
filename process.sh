git fetch && git reset --hard origin/master
yarn
yarn build
pm2 restart ecosystem.config.js