package ru.borodin.demo.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.borodin.demo.constant.GroupConst;
import ru.borodin.demo.model.*;
import ru.borodin.demo.repository.*;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DataServiceImpl implements DataService {

    private final MaterialRepository materialRepository;
    private final BottomRepository bottomRepository;
    private final PuckRepository puckRepository;
    private final BoltsRepository boltsRepository;
    private final NutRepository nutRepository;
    @Override
    public DataWrapper getData(Request request) {


        Item item = Item.builder()
                .name("Труба")
                .characteristic("характеристика")
                .quantity(7850)
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
        Item tubeTO = getTubeTO(request);
        Subgroup subgroup = new Subgroup("подгруппа 1", List.of(item, item2, tubeTO));
        Subgroup subgroup2 = new Subgroup("подгруппа 2", List.of(item, item2));

        Group group = new Group(GroupConst.CARBON.getDisplayName(), "withSubgroups", List.of(subgroup, subgroup2), null);
        Group group2 = new Group("группа 2", "withSubgroups", List.of(subgroup, subgroup2), null);
        Group group3 = new Group("прочее", "simple", null, List.of(item, item2));


        DataWrapper dataWrapper = new DataWrapper(List.of(group3, group, group2, group3));




        System.out.println(bottomRepository.findWeight(20, 1000).orElse(0.0));

        System.out.println(puckRepository.findWeight(20).orElse(0.0));

        System.out.println(boltsRepository.findWeight(20, 150).orElse(0.0));

        System.out.println(nutRepository.findWeight(20).orElse(0.0));


        return dataWrapper;
    }

    private Item getTubeTO(Request request) {
        Item tube = Item.builder()
                .name("Труба теплообменная")
                .characteristic(request.getDiameterTube() + "х" + request.getThicknessTube() + " мм")
                .build();

        if (request.getQuantityTube() != 0) {
            tube.setQuantity(request.getQuantityTube());
        } else {
            tube.setQuantity(100);
        }


        Integer density = materialRepository.findDensity(request.getMaterialTube()).orElse(7850);
        double unitWeight = (density * request.getThicknessTube() * Math.PI * (request.getDiameterTube() - request.getThicknessTube()) * request.getLengthTube()) / 1000000000;
        tube.setUnitWeight(unitWeight);

        tube.setTotalWeight(tube.getUnitWeight() * tube.getQuantity());

        return tube;
    }
}
