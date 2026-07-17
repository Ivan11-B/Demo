package ru.borodin.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.borodin.demo.model.Bottom;

import java.util.Optional;

@Repository
public interface BottomRepository extends JpaRepository<Bottom,Integer> {

    @Query("SELECT weight from Bottom where thickness = :thickness and diameter = :diameter")
    Optional<Double> findWeight(@Param("thickness") int thickness, @Param("diameter") int diameter);
}
