FROM maven:3.9.0-eclipse-temurin-11-alpine AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:11
COPY --from=build backend/target/clon-1.0.1-SNAPSHOT.jar clon.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "clon.jar"]