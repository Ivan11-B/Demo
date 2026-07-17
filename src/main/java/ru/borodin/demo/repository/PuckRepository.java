package ru.borodin.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.borodin.demo.model.Puck;

import java.util.Optional;

@Repository
public interface PuckRepository extends JpaRepository<Puck, Integer> {

    @Query("select weight from Puck where diameter = :diameter")
    Optional<Double> findWeight(@Param("diameter") int diameter);
}
