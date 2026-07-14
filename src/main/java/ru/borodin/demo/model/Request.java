package ru.borodin.demo.model;

import lombok.Data;

@Data
public class Request {
    private String name;

    private String type;

    private String diameterVessel;

    private String pressureTube;

    private String pressureInterTube;

    private String diameterTube;

    private String lengthTube;

    private String numberOfMoves;

    private String numberVessel;

    private String standard;

    private String quantityTube;

    private String thicknessTube;

    private String pressureTubeCalculate;

    private String pressureInterTubeCalculate;

    private  String temperatureTubeCalculate;

    private String temperatureInterTubeCalculate;

    private String materialTube;

    private String materialTubeSpace;

    private String materialInterTubeSpace;

}
