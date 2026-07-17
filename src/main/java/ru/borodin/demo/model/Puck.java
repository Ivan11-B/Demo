package ru.borodin.demo.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "pucks")
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Puck {

    @Id
    @EqualsAndHashCode.Include
    private int diameter;

    private double weight;
}
