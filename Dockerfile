FROM php:8.2-apache

# Apache 用 mod_rewrite を有効にする（オプション）
RUN a2enmod rewrite

# composer が必要なら以下を追加
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# アプリケーションのコードをコピー
COPY . /var/www/html/

# 必要ならパーミッション調整
RUN chown -R www-data:www-data /var/www/html
