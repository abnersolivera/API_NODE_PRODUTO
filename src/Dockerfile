FROM mongo:latest

# Restaura o dump no banco de dados quando o container é iniciado
CMD ["mongod"]
ENTRYPOINT ["mongorestore", "--drop", "--db", "mydatabase", "/dump/mydatabase"]

# Define um ponto de montagem para os dados do MongoDB
VOLUME /data/db

# Expõe a porta 27017 do container para a máquina host
EXPOSE 27017
