package ru.borodin.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.borodin.demo.model.Material;

@Repository
public interface MaterialRepository extends JpaRepository<Material,Integer> {

    Material findMaterialByName(String name);
}
