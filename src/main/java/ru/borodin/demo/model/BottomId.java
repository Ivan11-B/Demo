package ru.borodin.demo.model;


import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;

@Data
@Embeddable
public class BottomId implements Serializable {

    private Integer thickness;
    private Integer diameter;

}