package ru.borodin.demo.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "bottoms")
@IdClass(BottomId.class)
@Data
public class Bottom {

    @Id
    @Column(name = "thickness", nullable = false)
    private int thickness;

    @Id
    @Column(name = "diameter", nullable = false)
    private int diameter;

    private double weight;

}
