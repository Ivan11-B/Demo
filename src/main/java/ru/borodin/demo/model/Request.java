package ru.borodin.demo.model;

import lombok.Data;

@Data
public class Request {
    private String name;

    private String type;

    private int diameterVessel;

    private String pressureTube;

    private String pressureInterTube;

    private int diameterTube;

    private int lengthTube;

    private int numberOfMoves;

    private String numberVessel;

    private String standard;

    private int quantityTube;

    private double thicknessTube;

    private String pressureTubeCalculate;

    private String pressureInterTubeCalculate;

    private  String temperatureTubeCalculate;

    private String temperatureInterTubeCalculate;

    private String materialTube;

    private String materialTubeSpace;

    private String materialInterTubeSpace;

}
