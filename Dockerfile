FROM openjdk:14

ENV ENVIRONMENT=prod

MAINTAINER Carolin Janshen <caro.janshen@gmail.com>

ADD backend-nannyway/target/nannyway.jar app.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGODB_URI -Dauth.jwt.secret=$JWT_SECRET -jar /app.jar"]
