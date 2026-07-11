package ru.borodin.demo.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Item {
    private String name;

    private String characteristic;

    private int quantity;

    private double unitWeight;

    private double totalWeight;

    private String note;
}
