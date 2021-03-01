#!/bin/sh

# ESCAPED_GRAPHQL_HTTP=$(echo $GRAPHQL_HTTP | sed 's/\//\\\//g')

# ESCAPED_SENTRY_DSN=$(echo $SENTRY_DSN | sed 's/\//\\\//g')
# ESCAPED_SENTRY_LOG_LEVEL=$(echo $SENTRY_LOG_LEVEL | sed 's/\//\\\//g')
# ESCAPED_SENTRY_TRACES_SAMPLE_RATE=$(echo $SENTRY_TRACES_SAMPLE_RATE | sed 's/\//\\\//g')

# sed -i "s/__GRAPHQL_HTTP__/$ESCAPED_GRAPHQL_HTTP/g" /usr/share/nginx/html/js/*.js

# sed -i "s/__NODE_ENV__/$NODE_ENV/g" /usr/share/nginx/html/js/*.js
# sed -i "s/__SENTRY_DSN__/$ESCAPED_SENTRY_DSN/g" /usr/share/nginx/html/js/*.js
# sed -i "s/__SENTRY_LOG_LEVEL__/$ESCAPED_SENTRY_LOG_LEVEL/g" /usr/share/nginx/html/js/*.js
# sed -i "s/__SENTRY_TRACES_SAMPLE_RATE__/$ESCAPED_SENTRY_TRACES_SAMPLE_RATE/g" /usr/share/nginx/html/js/*.js

echo "Starting Nginx"
nginx -g 'daemon off;'