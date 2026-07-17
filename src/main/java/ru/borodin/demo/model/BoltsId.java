package ru.borodin.demo.model;

import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;

@Embeddable
@Data
public class BoltsId implements Serializable {
    private Integer diameter;
    private Integer length;
}
