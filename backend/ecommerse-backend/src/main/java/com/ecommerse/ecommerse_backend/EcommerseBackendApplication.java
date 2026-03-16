package com.ecommerse.ecommerse_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.ecommerse.ecommerse_backend")
public class EcommerseBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(EcommerseBackendApplication.class, args);
        System.out.println("hello world");
    }
}