package ru.borodin.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.borodin.demo.model.DataWrapper;
import ru.borodin.demo.model.Request;
import ru.borodin.demo.service.DataService;

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

    @GetMapping("/home2")
    public String home2() {
        return "r";
    }
}
