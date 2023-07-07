package com.apple.store.clon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
public class ClonApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClonApplication.class, args);
	}

}
