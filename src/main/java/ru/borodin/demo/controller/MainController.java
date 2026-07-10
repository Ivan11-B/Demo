package ru.borodin.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.borodin.demo.model.Request;

import java.util.HashMap;
import java.util.Map;

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
    @ResponseBody
    public Map<String, Object> calculation(@RequestBody Request request) {
        double result = 0.5;
        Map<String, Object> response = new HashMap<>();
        response.put("calculatedValue", result);

        return response;
    }
}
