FROM php:8.2-apache

RUN apt-get update && apt-get install -y \
    git unzip zip curl libzip-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo pdo_mysql zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY ../../app/laravel/ /var/www/html/

RUN a2enmod rewrite
WORKDIR /var/www/html
RUN composer install || true

EXPOSE 80
