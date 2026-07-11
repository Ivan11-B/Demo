package ru.borodin.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
public class Subgroup {
    private String name;

    private List<Item> items;
}
