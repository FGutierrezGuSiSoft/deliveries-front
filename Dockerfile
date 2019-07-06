# build environment
FROM node:11.6.0 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json

RUN npm install --silent
RUN npm install react-scripts@1.1.5 -g --silent

ARG NODE_ENV
ENV NODE_ENV $PROD_NODE_ENV

ARG REACT_APP_USERS_SERVICE_URL
ENV REACT_APP_USERS_SERVICE_URL $REACT_APP_USERS_SERVICE_URL

ARG REACT_APP_DELIVERIES_SERVICE_URL
ENV REACT_APP_DELIVERIES_SERVICE_URL $REACT_APP_DELIVERIES_SERVICE_URL

COPY . /usr/src/app
RUN npm run build

# production environment
FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
