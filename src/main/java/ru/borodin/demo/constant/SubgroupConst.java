package ru.borodin.demo.constant;

import lombok.Getter;

@Getter
public enum SubgroupConst {

    TUBE("Труба"),

    LIST("Лист"),

    FORGING("Поковка"),

    CIRCLE("Круг"),

    HEXAGON("Шестигранник"),

    FASTENERS("Крепеж"),

    PURCHASED_ITEMS("Покупные изделия");

    private final String displayName;

    SubgroupConst(String displayName) {
        this.displayName = displayName;
    }
}
