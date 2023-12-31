---
sidebar_position: 3
title: Инструкция по сборке
---

# Инструкция по сборке Ergonaut One

## Сборка PCB

| PCB                                 |
| ----------------------------------- |
| ![](/img/one_build_guide/pcb/0.jpg) |

Вы можете собрать плату в двух различных конфигурациях - либо с Xiao "сверху", либо "снизу". Выбирайте конфигурацию в зависимости от того, какой вариант корпуса вы хотите использовать.

### Совместимость корпусов

| Расположение Xiao | Modern Case | Classic Case | FR4 Case |
| ----------------- | ----------- | ------------ | -------- |
| Снизу             | ✅           | ❌            | ❌        |
| Сверху            | ❌           | ✅            | ✅        |

### Пайка

#### Xiao

Перед тем, как припаивать Xiao, пожалуйста, залудите пады для батареи на нижней части Xiao. Если вы добавили слишком много припоя - вы можете собрать его на жало паяльника используя немного флюса. Xiao должна лежать на плате ровно!

![](/img/one_build_guide/pcb/bat_pins.jpg)

1. Расположите Xiao на ее место
2. Припаяйте два противоположных пина для фиксации
3. Припаяйте остальные пины
4. Переверните PCB
5. Положите немного флюса в отверстия (помечены красным) и заполните их припоем (возможно вам стоит прогревать эти отверстия дольше, чем обычно)

| Left                                  | Right                                 |
| ------------------------------------- | ------------------------------------- |
| ![](/img/one_build_guide/pcb/1_l.jpg) | ![](/img/one_build_guide/pcb/1_r.jpg) |
| ![](/img/one_build_guide/pcb/2_l.jpg) | ![](/img/one_build_guide/pcb/2_r.jpg) |

#### Диоды

Если вы собираете "Xiao снизу", диоды должны быть на **ТОЙ ЖЕ** стороне что и Xiao.
Если вы собираете "Xiao сверху", диоды должны быть на **ПРОТИВОПОЛОЖНОЙ** стороне от Xiao.

Не забывайте что у диодов есть полярность.

![](/img/one_build_guide/pcb/diode.png)

| Left                                  | Right                                 |
| ------------------------------------- | ------------------------------------- |
| ![](/img/one_build_guide/pcb/3_l.jpg) | ![](/img/one_build_guide/pcb/3_r.jpg) |

#### Хотсвап сокеты

Если вы собираете "Xiao снизу", сокеты должны быть на **ТОЙ ЖЕ** стороне что и Xiao.
Если вы собираете "Xiao сверху", сокеты должны быть на **ПРОТИВОПОЛОЖНОЙ** стороне от Xiao.

| Left                                  | Right                                 |
| ------------------------------------- | ------------------------------------- |
| ![](/img/one_build_guide/pcb/4_l.jpg) | ![](/img/one_build_guide/pcb/4_r.jpg) |

#### Переключатели питания

Переключатели питания всегда на противоположной от Xiao стороне.

![](/img/one_build_guide/pcb/5.jpg)

#### Проверка пайки

Если у вас есть мультиметр, проверьте короткие замыкания:

1. Между "-" и "+";
2. Между GND и 5V на Xiao;
3. Между GND и 3V3 на Xiao.

![](/img/one_build_guide/pcb/pins.jpg)

Затем подсоедините батарею, включите питание и проверьте напряжение между GND и 3V3 - должно быть 3.3 вольта.
Если его там нет - скорее всего нужно перепаять нижние контакты контроллера.

Если мультиметра нет - продолжайте следовать инструкции дальше.

#### Аккумуляторы

Вы можете выбрать любую сторону для пайки аккумуляторов, но я предлагаю использовать сторону, на которой установлена Xiao.

Не забывайте о полярности аккумуляторов. Положительный провод (красный) должен быть подключен к "+". Отрицательный провод (черный) должен быть подключен к "-".

![](/img/one_build_guide/pcb/6.jpg)

### Очистка

Очистите вашу PCB от остатков флюса. Изопропиловый спирт с ватными палочками в этом сильно поможет.

### Залейте прошивку

Сейчас отличный момент для того, чтобы прошить вашу клавиатуру и проверить ее работоспособность.

1. Скачайте [прошивку](https://github.com/ergonautkb/one-zmk-config/releases/latest/download/ergonaut_one_firmware.zip) и распакуйте ее.
2. Повторите для каждой половины:
   1. Подключите PCB к компьютеру с помощью USB-C кабеля;
   2. Нажмите кнопку **RST** дважды - вы должны увидеть новое USB устройство;
   3. Скопируйте `ergonaut_one_left-seeeduino_xiao_ble-zmk.uf2` для левой, или `ergonaut_one_right-seeeduino_xiao_ble-zmk.uf2` для правой в новое USB устройство. По завершению устройство отключится автоматически;
3. Включите обе половины;
4. Нажмите кнопку **RST** на обеих половинах ОДНОВРЕМЕННО;
5. Попробуйте подключиться по BT к компьютеру, и удостоверьтесь в том, что клавиатура работает;
6. Выключите обе половины.

![](/img/one_build_guide/pcb/7.jpg)

### Проверка PCB

Если у вас нет мультиметра, подсоедините батарею на левой половине и включите её.
Проверьте, что она находится как устройство Bluetooth.
Если она находится только при питании от USB, но не от батареи - скорее всего нужно перепаять нижние контакты контроллера.
Если правая половина работает только при питании от USB - причина та же.

Затем по желанию можно проверить матрицу.
Подключите обе половинки к компьютеру и либо замкните каждый хотсвап-сокет пинцетом, либо вставьте и нажмите свитч.
Придерживайте сокеты при вставке свитчей!

![](/img/one_build_guide/pcb/tweezers.jpg)

Некоторые позиции в матрице - модификаторы, и сами по себе ничего делать не будут.
Их покажет [сайт для тестирования клавиатур](https://www.keyboardtester.com), но даже он не уловит нажатия, активирующие слои.

Проверку матрицы можно производить и после установки свитчей в верхний корпус, но лучше произвести её до установки нижней части корпуса.

## Сборка корпуса

Положите PCB внутрь верхней части корпуса.

![](/img/one_build_guide/case/1.jpg)

Переверните клавиатуру, и вставьте несколько свитчей, прижимая PCB к верхней части корпуса. Это зафиксирует положение PCB для дальнейшей сборки.

![](/img/one_build_guide/case/2.jpg)

Переверните клавиатуру снова, и вставьте нижнюю часть корпуса.

![](/img/one_build_guide/case/3.jpg)

Теперь вам нужно вставить гайки в нижнюю часть корпуса, и закрутить винтики с верхней части корпуса. Легче всего это сделать когда вы закручиваете винт снизу, придерживая гайку сверху.

**Примечания: пожалуйста, не перетягивайте винты!**

| Top                                  | Bottom                               |
| ------------------------------------ | ------------------------------------ |
| ![](/img/one_build_guide/case/4.jpg) | ![](/img/one_build_guide/case/5.jpg) |

Установите резиновые ножки в нижнюю часть корпуса.

![](/img/one_build_guide/case/7.jpg)

Теперь вставьте остальные переключатели.

![](/img/one_build_guide/case/6.jpg)

Установите ваши любимые кейкапы, повторите процесс для второй половины, включите, и наслаждайтесь вашей свежесобранной Ergonaut One!

![](/img/one_build_guide/case/8.jpg)
![](/img/one_build_guide/case/9.jpg)
