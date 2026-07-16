package ru.borodin.demo.service;

import ru.borodin.demo.model.DataWrapper;
import ru.borodin.demo.model.Request;

public interface DataService {

    DataWrapper getData(Request request);
}
