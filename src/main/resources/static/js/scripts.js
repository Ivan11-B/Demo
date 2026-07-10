function getJavaData() {
    return {
        groups: [{
            name: 'Нержавеющая сталь',
            type: 'withSubgroups',
            subgroups: [{
                name: 'Труба теплообменная',
                items: [
                    {
                        name: 'Труба теплообменная 12×1.5', characteristic: '12×1.5 мм, AISI 304', quantity: 45,
                        unitWeight: 0.38, totalWeight: 17.1, note: 'бесшовная'
                    },
                    {
                        name: 'Труба теплообменная 16×2.0', characteristic: '16×2.0 мм, AISI 316', quantity: 32,
                        unitWeight: 0.69, totalWeight: 22.08, note: 'полированная'
                    },
                    {
                        name: 'Труба теплообменная 20×2.5', characteristic: '20×2.5 мм, AISI 321', quantity: 28,
                        unitWeight: 1.08, totalWeight: 30.24, note: ''
                    }
                ]
            }, {
                name: 'Листы под давлением',
                items: [
                    {
                        name: 'Лист 3×1500×3000', characteristic: '3×1500×3000 мм, 12Х18Н10Т', quantity: 6,
                        unitWeight: 106.5, totalWeight: 639.0, note: 'ГОСТ 7350'
                    },
                    {
                        name: 'Лист 5×1500×6000', characteristic: '5×1500×6000 мм, AISI 304', quantity: 4,
                        unitWeight: 354.0, totalWeight: 1416.0, note: ''
                    }
                ]
            }, {
                name: 'Трубы',
                items: [
                    {
                        name: 'Труба 57×3.5', characteristic: '57×3.5 мм, 12Х18Н10Т', quantity: 18, unitWeight: 4.62,
                        totalWeight: 83.16, note: 'электросварная'
                    },
                    {
                        name: 'Труба 89×4.0', characteristic: '89×4.0 мм, AISI 316L', quantity: 12, unitWeight: 8.38,
                        totalWeight: 100.56, note: ''
                    }
                ]
            }, {
                name: 'Листы прочие',
                items: [
                    {
                        name: 'Лист 2×1250×2500', characteristic: '2×1250×2500 мм, AISI 430', quantity: 10,
                        unitWeight: 49.5, totalWeight: 495.0, note: 'декоративный'
                    },
                    {
                        name: 'Лист 1.5×1250×2500', characteristic: '1.5×1250×2500 мм, AISI 201', quantity: 15,
                        unitWeight: 37.5, totalWeight: 562.5, note: ''
                    }
                ]
            }, {
                name: 'Поковки',
                items: [
                    {
                        name: 'Поковка Ф150×300', characteristic: 'Ф150×300 мм, 12Х18Н10Т', quantity: 8,
                        unitWeight: 41.7, totalWeight: 333.6, note: 'поковка'
                    },
                    {
                        name: 'Поковка Ф200×250', characteristic: 'Ф200×250 мм, AISI 304', quantity: 5,
                        unitWeight: 61.8, totalWeight: 309.0, note: ''
                    }
                ]
            }, {
                name: 'Круг',
                items: [
                    {
                        name: 'Круг Ф30', characteristic: 'Ф30 мм, 12Х18Н10Т', quantity: 120, unitWeight: 5.6,
                        totalWeight: 672.0, note: 'пруток'
                    },
                    {
                        name: 'Круг Ф50', characteristic: 'Ф50 мм, AISI 316', quantity: 85, unitWeight: 15.5,
                        totalWeight: 1317.5, note: ''
                    }
                ]
            }]
        }, {
            name: 'Углеродистая сталь',
            type: 'withSubgroups',
            subgroups: [{
                name: 'Труба теплообменная',
                items: [
                    {
                        name: 'Труба теплообменная 25×2.5', characteristic: '25×2.5 мм, ст20', quantity: 60,
                        unitWeight: 1.39, totalWeight: 83.4, note: 'бесшовная'
                    },
                    {
                        name: 'Труба теплообменная 32×3.0', characteristic: '32×3.0 мм, ст20', quantity: 40,
                        unitWeight: 2.15, totalWeight: 86.0, note: ''
                    },
                    {
                        name: 'Труба теплообменная 45×3.5', characteristic: '45×3.5 мм, ст20', quantity: 25,
                        unitWeight: 3.58, totalWeight: 89.5, note: 'горячекатаная'
                    }
                ]
            }, {
                name: 'Листы под давлением',
                items: [
                    {
                        name: 'Лист 10×1500×6000', characteristic: '10×1500×6000 мм, ст3', quantity: 3,
                        unitWeight: 706.5, totalWeight: 2119.5, note: 'ГОСТ 19903'
                    },
                    {
                        name: 'Лист 16×2000×6000', characteristic: '16×2000×6000 мм, 09Г2С', quantity: 2,
                        unitWeight: 1507.2, totalWeight: 3014.4, note: ''
                    }
                ]
            }, {
                name: 'Трубы',
                items: [
                    {
                        name: 'Труба 76×4.0', characteristic: '76×4.0 мм, ст20', quantity: 22, unitWeight: 7.1,
                        totalWeight: 156.2, note: 'электросварная'
                    },
                    {
                        name: 'Труба 108×5.0', characteristic: '108×5.0 мм, ст20', quantity: 15, unitWeight: 12.7,
                        totalWeight: 190.5, note: ''
                    }
                ]
            }, {
                name: 'Листы прочие',
                items: [
                    {
                        name: 'Лист 4×1500×3000', characteristic: '4×1500×3000 мм, ст3', quantity: 12,
                        unitWeight: 141.3, totalWeight: 1695.6, note: ''
                    },
                    {
                        name: 'Лист 6×1500×6000', characteristic: '6×1500×6000 мм, ст3', quantity: 8,
                        unitWeight: 423.9, totalWeight: 3391.2, note: 'горячекатаный'
                    }
                ]
            }, {
                name: 'Поковки',
                items: [
                    {
                        name: 'Поковка Ф120×200', characteristic: 'Ф120×200 мм, ст45', quantity: 10,
                        unitWeight: 17.7, totalWeight: 177.0, note: 'поковка'
                    },
                    {
                        name: 'Поковка Ф180×300', characteristic: 'Ф180×300 мм, 40Х', quantity: 6, unitWeight: 59.8,
                        totalWeight: 358.8, note: ''
                    }
                ]
            }, {
                name: 'Круг',
                items: [
                    {
                        name: 'Круг Ф20', characteristic: 'Ф20 мм, ст45', quantity: 200, unitWeight: 2.47,
                        totalWeight: 494.0, note: 'калиброванный'
                    },
                    {
                        name: 'Круг Ф40', characteristic: 'Ф40 мм, ст45', quantity: 150, unitWeight: 9.86,
                        totalWeight: 1479.0, note: ''
                    }
                ]
            }]
        }, {
            name: 'Прочие изделия',
            type: 'simple',
            items: [
                {
                    name: 'Крепёжный набор M12×60', characteristic: 'Крепёжный набор M12×60 (болт+гайка+шайба)',
                    quantity: 240, unitWeight: 0.085, totalWeight: 20.4, note: 'оцинкованный'
                },
                {
                    name: 'Прокладка паронитовая DN50', characteristic: 'Прокладка паронитовая 3 мм, DN50',
                    quantity: 80, unitWeight: 0.042, totalWeight: 3.36, note: ''
                },
                {
                    name: 'Фланец Ду100 Ру16', characteristic: 'Фланец плоский приварной Ду100, Ру16', quantity: 16,
                    unitWeight: 4.8, totalWeight: 76.8, note: 'ст20'
                },
                {
                    name: 'Отвод 90° 57×3.5', characteristic: 'Отвод 90° 57×3.5, ст20', quantity: 30, unitWeight: 0.95,
                    totalWeight: 28.5, note: 'крутоизогнутый'
                },
                {
                    name: 'Переход 89×57', characteristic: 'Переход 89×57, ст20', quantity: 12, unitWeight: 1.85,
                    totalWeight: 22.2, note: ''
                },
                {
                    name: 'Заглушка Ду150 Ру16', characteristic: 'Заглушка стальная Ду150, Ру16', quantity: 8,
                    unitWeight: 6.2, totalWeight: 49.6, note: ''
                }
            ]
        }]
    };
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
<!--                        <span class="badge">${isSimple ? 'прочие' : 'с подгруппами'}</span>-->
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

    // html += `<tr class="group-total-row"><td colspan="4"></td>
    //         <td style="text-align:right;">Итого по группе: ${groupTotal.toFixed(2)}</td><td></td></tr>`;
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

function loadDataFromJava() {
    return new Promise(resolve => setTimeout(() => resolve(getJavaData()), 400));
}

async function renderPage() {
    try {
        const data = await loadDataFromJava();
        const container = document.getElementById('groupsContainer');
        let html = '', globalTotal = 0;

        data.groups.forEach((group, index) => {
            html += renderGroup(group, index);
            let groupTotal = 0;
            if (group.type === 'simple') {
                groupTotal = group.items.reduce((s, i) => s + i.totalWeight, 0);
            } else {
                group.subgroups.forEach(sg => {
                    groupTotal += sg.items.reduce((s, i) => s + i.totalWeight, 0);
                });
            }
            globalTotal += groupTotal;
            window._groupTotals = window._groupTotals || {};
            window._groupTotals[index] = groupTotal;
        });

        container.innerHTML = html;

        for (let i = 0; i < data.groups.length; i++) {
            const el = document.getElementById(`group-total-${i}`);
            if (el && window._groupTotals && window._groupTotals[i] !== undefined) {
                el.textContent = window._groupTotals[i].toFixed(2);
            }
        }

        document.getElementById('globalTotal').textContent = globalTotal.toFixed(2);
        document.getElementById('loading').style.display = 'none';
    } catch (e) {
        console.error(e);
        document.getElementById('loading').textContent = '❌ Ошибка загрузки данных из Java';
        document.getElementById('loading').style.color = '#b13a3a';
    }
}

// document.addEventListener('DOMContentLoaded', renderPage);
document.getElementById('calculateBtn').addEventListener('click', async function() {
    const form = document.getElementById('calculationForm');
    const formData = new FormData(form);
    // Если ваш контроллер принимает JSON:
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/calculation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error('Ошибка сервера');

        // Предположим, сервер возвращает JSON с результатом
        const result = await response.json();
        // Обновляем DOM – например, выводим результат в блоке
        document.getElementById('resultContainer').innerHTML =
            `<p>Результат: ${result.calculatedValue}</p>`;
        // Или можно перерисовать всю таблицу, если в ответе придут полные данные
    } catch (error) {
        console.error(error);
        // показать ошибку пользователю
    }
});