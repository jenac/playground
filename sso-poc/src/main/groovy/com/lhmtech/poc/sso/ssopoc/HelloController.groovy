package com.lhmtech.poc.sso.ssopoc

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController
import sun.misc.Request

@RestController
@RequestMapping(value = "/api")
class HelloController {

    @RequestMapping(value = "/hello", method=RequestMethod.GET)
    ResponseEntity<String> hello() {
        new ResponseEntity<String>("hello world", HttpStatus.OK)

    }
}
