// ================================================================
// 1. СБОР ДАННЫХ С ФОРМЫ И ОТПРАВКА ЗАПРОСА НА СЕРВЕР
// ================================================================
function collectFormData() {
    const form = document.getElementById('calculationForm'); //получаем объект формы
    const formData = new FormData(form);                                 //создаем объект данных в формате ключ-значение
    const data = {};                                                           //создаем пустой массив

    // Преобразуем FormData в объект
    for (let [key, value] of formData.entries()) {
        // Пропускаем пустые значения
        if (value === '' || value === null || value === undefined) continue;

        // Преобразуем числа в числовой тип
        if (key === 'diameterVessel' || key === 'pressureTube' ||
            key === 'pressureInterTube' || key === 'diameterTube' ||
            key === 'lengthTube' || key === 'numberOfMoves' ||
            key === 'numberVessel' || key === 'quantityTube' ||
            key === 'thicknessTube' || key === 'pressureTubeCalculate' ||
            key === 'pressureInterTubeCalculate' || key === 'temperatureTubeCalculate' ||
            key === 'temperatureInterTubeCalculate') {
            data[key] = parseFloat(value) || 0;
        } else {
            // текстовые данные просто записываем
            data[key] = value;
        }
    }
    return data;
}

// Функция для отправки данных на сервер
async function sendCalculationData() {
    try {
        // Показываем индикатор загрузки
        document.getElementById('loading').style.display = 'block';

        // Собираем данные из формы
        const formData = collectFormData();

        console.log('Отправляемые данные:', formData);

        // Отправляем POST-запрос
        const response = await fetch('/calculation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Получаем ответ в виде JSON
        const result = await response.json();
        console.log('Получен ответ:', result);

        return result;
    } catch (error) {
        console.error('Ошибка при отправке данных:', error);
        document.getElementById('loading').style.display = 'none';
        alert('Произошла ошибка при расчете. Пожалуйста, попробуйте снова.');
    }
}

// ================================================================
// 2. ОТОБРАЖЕНИЕ ОСНОВНОЙ СТРАНИЦЫ
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

// ================================================================
// 3. ЗАГРУЗКА ДАННЫХ
// ================================================================

async function renderPage() {
    try {
        const data = await sendCalculationData();                                             //получаем данные с сервера DataWrapper
        const container = document.getElementById('groupsContainer');    //получаем конейнер в который будем писать html
        let html = '', globalTotal = 0;                                        //создаем html и переменную globalTotal- общая масса

        data.groups.forEach((group, index) => {                                         //проходим каждую группу
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

        for (let i = 0; i < data.groups.length; i++) {                                //Проходим по всем группам (по их индексам)
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

document.getElementById('calculateBtn').addEventListener('click', renderPage);