package ru.borodin.demo.service;

import org.springframework.stereotype.Service;
import ru.borodin.demo.model.DataWrapper;
import ru.borodin.demo.model.Group;
import ru.borodin.demo.model.Item;
import ru.borodin.demo.model.Subgroup;

import java.util.List;

@Service
public class DataServiceImpl implements DataService {
    @Override
    public DataWrapper getData() {

        Item item = Item.builder()
                .name("деталь 1")
                .characteristic("характеристика")
                .quantity(1)
                .unitWeight(10.5)
                .totalWeight(55.6)
                .note("примечание")
                .build();
        Item item2 = Item.builder()
                .name("деталь 2")
                .characteristic("характеристика")
                .quantity(1)
                .unitWeight(10.5)
                .totalWeight(55.6)
                .note("примечание")
                .build();
        Subgroup subgroup = new Subgroup("подгруппа 1", List.of(item, item2));
        Subgroup subgroup2 = new Subgroup("подгруппа 2", List.of(item, item2));

        Group group = new Group("группа 1", "withSubgroups", List.of(subgroup, subgroup2), null);
        Group group2 = new Group("группа 2", "withSubgroups", List.of(subgroup, subgroup2), null);
        Group group3 = new Group("прочее", "simple", null, List.of(item, item2));


        DataWrapper dataWrapper = new DataWrapper(List.of(group3, group, group2, group3));


        return dataWrapper;
    }
}
