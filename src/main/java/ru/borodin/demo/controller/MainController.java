package ru.borodin.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import ru.borodin.demo.model.Request;

@Controller
public class MainController {

    @GetMapping("/home")
    public String home() {
        return "index";
    }

    @GetMapping("/result")
    public String result() {
        return "result";
    }

    @PostMapping("/calculation")
    public String calculation(@ModelAttribute Request request) {
        System.out.println(request);
        return "result";
    }
}
