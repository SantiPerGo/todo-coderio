package com.coderio.interview;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.List;

@Configuration
public class SwaggerConfiguration {
    @Bean
    public OpenAPI openAPI() {
        Server localServer = new Server();
        localServer.setDescription("local");
        localServer.setUrl("http://localhost:8080");

        OpenAPI openAPI = new OpenAPI();
        openAPI.info(new Info()
            .title("Coderio Backend API")
            .description("Documenting Spring Boot REST API with SpringDoc and OpenAPI 3")
            .version("1.0.0")
            .contact(new Contact().name("Santi PerGo").
                url("https://santipergo.github.io/PersonalWebsite/")
                .email("spergo@outlook.com")));
        openAPI.setServers(List.of(localServer));

        return openAPI;
    }
}
