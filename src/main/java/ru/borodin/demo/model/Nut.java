package ru.borodin.demo.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "nuts")
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Nut {

    @Id
    @EqualsAndHashCode.Include
    private int diameter;

    private double weight;
}
