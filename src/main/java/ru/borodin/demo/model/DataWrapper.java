package ru.borodin.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class DataWrapper {
    private List<Group> groups;
}
