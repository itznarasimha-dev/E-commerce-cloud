package com.ecommerse.ecommerse_backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.ecommerse.ecommerse_backend.entity.Category;
import com.ecommerse.ecommerse_backend.service.CategoryService;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin("*")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @PostMapping
    public Category createCategory(@RequestBody Category category) {

        return categoryService.createCategory(category);
    }

    @GetMapping
    public List<Category> getAllCategories() {

        return categoryService.getAllCategories();
    }

    @GetMapping("/{id}")
    public Category getCategory(@PathVariable Long id) {

        return categoryService.getCategoryById(id);
    }
}