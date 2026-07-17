package ru.borodin.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.borodin.demo.model.Nut;
import ru.borodin.demo.model.Puck;

import java.util.Optional;

@Repository
public interface NutRepository extends JpaRepository<Nut, Integer> {

    @Query("select weight from Nut where diameter = :diameter")
    Optional<Double> findWeight(@Param("diameter") int diameter);
}
