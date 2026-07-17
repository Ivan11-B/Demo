package ru.borodin.demo.constant;

import lombok.Getter;

@Getter
public enum GroupConst {

    CARBON("Углеродистая и низколегированная сталь"),

    STAINLESS("Нержавеющая сталь"),

    ALLOY("Легированная сталь"),

    BRASS("Латунь"),

    COPPER_NICKEL_ALLOY("Медно-никелевый сплав");

    private final String displayName;

    GroupConst(String displayName) {
        this.displayName = displayName;
    }
}