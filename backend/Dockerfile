#FROM openjdk:11
#VOLUME /tmp
#EXPOSE 8080
#ARG JAR_FILE=target/clon-1.0.1-SNAPSHOT.jar
#ADD ${JAR_FILE} app.jar
#ENTRYPOINT ["java","-jar","/app.jar"]*/
#copy target/dockerized

#FROM maven:3.8.2-jdk-11 AS build
#COPY . .
#RUN mvn clean package -DskipTests

#
# Package stage
#
FROM openjdk:11
COPY --from=build /target/clon-1.0.1-SNAPSHOT.jar demo.jar
# ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]