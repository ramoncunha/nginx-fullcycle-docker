FROM mysql:8

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=nodedb
ENV MYSQL_ROOT_USER=root

COPY ./create-table.sql /tmp

CMD [ "mysqld", "--init-file=/tmp/create-table.sql" ]