FROM php:7.3-fpm-alpine

RUN apk --update add \
&& apk add build-base curl git zip unzip vim \
&& cd /usr/bin && curl -sS https://getcomposer.org/installer | php \
&& ln -s /usr/bin/composer.phar /usr/bin/composer \
&& apk add --no-chache libxml2 libxml2-dev curl curl-dev autoconf $PHPIZE_DEPS \
&& pecl install xdebug \
&& docker-php-ext-install pdo_mysql mbstring xml curl session tokenizer json \
&& docker-php-ext-enable pdo_mysql mbstring xml curl session tokenizer json xdebug
WORKDIR /var/www/html
RUN composer create-project --prefer-dist laravel/laravel api
RUN chown -R www-data:www-data /var/www/html/api \
&& chmod 777 /var/www/html/api
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"