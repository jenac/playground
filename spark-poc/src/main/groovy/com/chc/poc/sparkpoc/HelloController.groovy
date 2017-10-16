package com.chc.poc.sparkpoc

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * Created by lichen on 10/16/17.
 */
@RestController
@RequestMapping("/api")
class HelloController {

    @GetMapping("/hello")
    ResponseEntity<Map<String, String>> hello() {
        Map<String, String> value = new HashMap<>();
        value.put("Hello", "World")
        new ResponseEntity<String>(value, HttpStatus.OK)
    }
}
