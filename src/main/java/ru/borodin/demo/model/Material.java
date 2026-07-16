package ru.borodin.demo.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "material")
@Data
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private Integer density;
}
