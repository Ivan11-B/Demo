package ru.borodin.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.borodin.demo.model.Bolt;

import java.util.Optional;

@Repository
public interface BoltsRepository extends JpaRepository<Bolt, Integer> {

    @Query("select b.weight from Bolt b where b.diameter = :diameter and b.length = :length")
    Optional<Double> findWeight(@Param("diameter") int diameter, @Param("length") int length);
}
