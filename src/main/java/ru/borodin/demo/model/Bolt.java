package ru.borodin.demo.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Bolts")
@IdClass(BoltsId.class)
@Data
public class Bolt {

    @Id
    @Column(name = "diameter", nullable = false)
    private int diameter;

    @Id
    @Column(name = "length", nullable = false)
    private int length;

    private double weight;
}
