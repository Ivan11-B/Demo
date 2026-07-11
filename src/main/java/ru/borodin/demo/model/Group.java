package ru.borodin.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class Group {
    private String name;

    private String type;

    private List<Subgroup> subgroups;

    private List<Item> items;
}
