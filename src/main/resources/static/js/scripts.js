// ================================================================
// 1. ОТОБРАЖЕНИЕ ДАННЫХ
// ================================================================

function renderGroup(group, index) {
    const isSimple = group.type === 'simple';
    const groupNum = index + 1;
    let html = `<div class="group" id="group-${index}">
                    <div class="group-header" onclick="toggleGroup(${index})">
                        <span class="toggle-icon" id="group-icon-${index}">▼</span>
                        <h2>${groupNum}. ${group.name}</h2>
                        <span class="total-weight">Масса: <span class="value" id="group-total-${index}">0</span> кг</span>
                    </div>
                    <div class="group-body" id="group-body-${index}">`;

    html += `<table class="detail-table">
                    <thead><tr>
                        <th style="width:18%;">Наименование</th>
                        <th style="width:28%;">Характеристика</th>
                        <th style="width:10%;" class="col-qty">Кол-во</th>
                        <th style="width:13%;" class="col-unit-weight">Масса ед., кг</th>
                        <th style="width:13%;" class="col-total-weight">Общая масса, кг</th>
                        <th style="width:18%;" class="col-note">Примечание</th>
                    </tr></thead><tbody>`;

    let groupTotal = 0;

    if (isSimple) {
        const sgTotal = group.items.reduce((s, i) => s + i.totalWeight, 0);
        groupTotal = sgTotal;
        group.items.forEach(item => {
            html += `<tr><td class="col-name">${item.name}</td><td>${item.characteristic}</td>
                        <td class="col-qty">${item.quantity}</td>
                        <td class="col-unit-weight">${item.unitWeight.toFixed(2)}</td>
                        <td class="col-total-weight">${item.totalWeight.toFixed(2)}</td>
                        <td class="col-note">${item.note || ''}</td></tr>`;
        });
        html += `<tr class="subgroup-total-row"><td colspan="4"></td>
                    <td style="text-align:right;">Итого: ${sgTotal.toFixed(2)}</td><td></td></tr>`;
    } else {
        group.subgroups.forEach((subgroup, sgIdx) => {
            const sgTotal = subgroup.items.reduce((s, i) => s + i.totalWeight, 0);
            groupTotal += sgTotal;
            const subNum = `${groupNum}.${sgIdx + 1}`;
            html += `<tr class="subgroup-header-row"><td colspan="6">${subNum} ${subgroup.name}</td></tr>`;
            subgroup.items.forEach(item => {
                html += `<tr><td class="col-name">${item.name}</td><td>${item.characteristic}</td>
                            <td class="col-qty">${item.quantity}</td>
                            <td class="col-unit-weight">${item.unitWeight.toFixed(2)}</td>
                            <td class="col-total-weight">${item.totalWeight.toFixed(2)}</td>
                            <td class="col-note">${item.note || ''}</td></tr>`;
            });
            html += `<tr class="subgroup-total-row"><td colspan="4"></td>
                        <td style="text-align:right;">Итого: ${sgTotal.toFixed(2)}</td><td></td></tr>`;
        });
    }

    html += `</tbody></table></div></div>`;
    return html;
}

function toggleGroup(index) {
    const body = document.getElementById(`group-body-${index}`);
    const icon = document.getElementById(`group-icon-${index}`);
    if (body.classList.contains('collapsed')) {
        body.classList.remove('collapsed');
        icon.classList.remove('collapsed');
        icon.textContent = '▼';
    } else {
        body.classList.add('collapsed');
        icon.classList.add('collapsed');
        icon.textContent = '▶';
    }
}

async function renderPage(responseData) {
    try {

        const container = document.getElementById('groupsContainer');    //получаем конейнер в который будем писать html
        let html = '', globalTotal = 0;                                        //создаем html и переменную globalTotal- общая масса

        responseData.groups.forEach((group, index) => {                                         //проходим каждую группу
            html += renderGroup(group, index);                                                //добавляем каждый раз новый html по группам
            let groupTotal = 0;                                                       //создаем переменную groupTotal- масса группы
            if (group.type === 'simple') {                                                    // если простая группа без подгрупп ("Прочее")
                groupTotal = group.items.reduce((s, i) => s + i.totalWeight, 0);              //считаем массу items
            } else {
                group.subgroups.forEach(sg => {                                               //для остальных
                    groupTotal += sg.items.reduce((s, i) => s + i.totalWeight, 0);            //каждую подгруппу перебираем и считаем массу
                });
            }
            globalTotal += groupTotal;                                                         //обновляем Общую массу
            window._groupTotals = window._groupTotals || {};                                   //Создание глобального объекта для хранения весов групп
            window._groupTotals[index] = groupTotal;
        });

        container.innerHTML = html;                                                            //добавляем в контейнер сформированный html

        for (let i = 0; i < responseData.groups.length; i++) {                                //Проходим по всем группам (по их индексам)
            const el = document.getElementById(`group-total-${i}`);      //Поиск элемента с ID, содержащим вес группы
            if (el && window._groupTotals && window._groupTotals[i] !== undefined) {          //Проверка существования элемента и данных
                el.textContent = window._groupTotals[i].toFixed(0);                 //Обновление текстового содержимого элемента
            }
        }

        document.getElementById('globalTotal').textContent = globalTotal.toFixed(0); //Обновление общего веса на странице
        document.getElementById('loading').style.display = 'none';                              //Скрытие индикатора загрузки
    } catch (e) {
        console.error(e);
        document.getElementById('loading').textContent = '❌ Ошибка загрузки данных из Java';
        document.getElementById('loading').style.color = '#b13a3a';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ----- Элементы DOM -----
    const form = document.getElementById('calculationForm');
    const calculateBtn = document.getElementById('calculateBtn');
    const loadingDiv = document.getElementById('loading');
    const groupsContainer = document.getElementById('groupsContainer');

    // Список обязательных полей (ID)
    const requiredFieldIds = [
        'length-tube',
        // 'number-vessel',
        // 'pressure-tube-calculate',
        // 'pressure-inter-tube-calculate',
        // 'temperature-tube-calculate',
        // 'temperature-inter-tube-calculate'
    ];

    // Создаём контейнеры для сообщений об ошибках
    const errorSpans = {};
    requiredFieldIds.forEach(id => {
        const field = document.getElementById(id);
        if (!field) return;
        const errorSpan = document.createElement('span');
        errorSpan.className = 'validation-message';
        errorSpan.style.display = 'none';
        errorSpan.style.color = '#dc3545';
        errorSpan.style.fontSize = '0.8rem';
        errorSpan.style.marginTop = '0.2rem';
        field.parentNode.appendChild(errorSpan);
        errorSpans[id] = errorSpan;

        // При вводе скрываем ошибку и убираем красную рамку
        field.addEventListener('input', function () {
            field.classList.remove('error');
            errorSpan.style.display = 'none';
            errorSpan.textContent = '';
        });
    });

    // ----- Функция валидации -----
    function validateForm() {
        let isValid = true;

        requiredFieldIds.forEach(id => {
            const field = document.getElementById(id);
            const span = errorSpans[id];
            if (!field || !span) return;

            const rawValue = field.value.trim();
            let errorMsg = '';

            if (rawValue === '') {
                errorMsg = 'Обязательное поле';
            } else {
                const num = Number(rawValue);
                if (isNaN(num)) {
                    errorMsg = 'Введите число';
                } else if ((id === 'length-tube' || id === 'quantity-tube') && num <= 0) {
                    errorMsg = 'Значение должно быть больше нуля';
                }
                // Для давлений и температур допускаются любые числа, кроме NaN
            }

            if (errorMsg) {
                field.classList.add('error');
                span.textContent = errorMsg;
                span.style.display = 'block';
                isValid = false;
            } else {
                field.classList.remove('error');
                span.style.display = 'none';
                span.textContent = '';
            }
        });

        return isValid;
    }

    // ----- Сбор данных формы в объект -----
    function collectFormData() {
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            // Преобразуем числовые значения
            if (requiredFieldIds.includes(key) || key === 'number-vessel') {
                const num = parseFloat(value);
                data[key] = isNaN(num) ? null : num;
            } else {
                data[key] = value;
            }
        });
        return data;
    }


    // ----- Асинхронная отправка -----
    async function submitCalculation(payload) {
        // Замените URL на ваш реальный эндпоинт
        const url = '/calculation';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.status}`);
        }

        return await response.json();
    }

    // ----- Управление состоянием загрузки -----
    function setLoading(isLoading) {
        calculateBtn.disabled = isLoading;
        calculateBtn.innerHTML = isLoading
            ? '<span class="spinner"></span> Считаем...'
            : '<span>⚡</span> Рассчитать';
        if (isLoading) {
            loadingDiv.style.display = 'block';
            groupsContainer.innerHTML = '';
        }
    }

    // ----- Обработчик кнопки «Рассчитать» -----
    calculateBtn.addEventListener('click', async function () {
        // 1. Валидация
        if (!validateForm()) {
            // Прокрутка к первому ошибочному полю
            const firstError = document.querySelector('.error');
            if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        // 2. Сбор данных
        const payload = collectFormData();

        // Дополнительная проверка на null (на всякий случай)
        if (Object.values(payload).some(v => v === null)) {
            alert('Некоторые обязательные поля не заполнены или содержат некорректные данные.');
            return;
        }

        // 3. Отправка
        setLoading(true);
        try {
            const responseData = await submitCalculation(payload);
            await renderPage(responseData);

        } catch (error) {
            console.error('Ошибка при расчёте:', error);
            alert('Не удалось выполнить расчёт. Проверьте соединение с сервером.');
            loadingDiv.style.display = 'block';
            groupsContainer.innerHTML = '';
        } finally {
            setLoading(false);
        }
    });

});