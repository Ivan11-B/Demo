package ru.borodin.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.borodin.demo.model.DataWrapper;
import ru.borodin.demo.model.Request;
import ru.borodin.demo.service.DataService;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class MainController {

    private final DataService dataService;

    @GetMapping("/home")
    public String home() {
        return "index";
    }

    @PostMapping("/calculation")
    @ResponseBody
    public DataWrapper calculation(@RequestBody Request request) {
        System.out.println(request);
        System.out.println("Контроллер отработал");

        return dataService.getData();
    }
}
