---
sidebar_position: 2
title: Подготовка к сборке
---

# Подготовка к сборке Ergonaut One

Это руководство поможет вам подготовить все необходимые инструменты и материалы для успешной сборки Ergonaut One.

## Печатная плата

![PCB](/img/pcb.jpg)
Печатная плата это главный компонент Ergonaut One.

#### Инструменты:

Вам скорее всего понадобится:
* Паяльник;
* Припой;
* Флюс;
* Пинцет;
* Изопропиловый спирт или иной растворитель подходящий для отмывки платы;
* Ватные палочки или иной подходящий материал для очистки платы.

#### Производство печатной платы

Если вы достаточно смелый и умелый, вы можете произвести печатную плату самостоятельно. Однако, я рекомендую взять Gerber архив [тут](https://github.com/ergonautkb/one/tree/main/gerbers/pcb) и заказать печатные платы у любого доступного производителя печатных плат. Например:
* [JLCPCB](https://jlcpcb.com/);
* [PCBWay](https://www.pcbway.com/).

Вы вольны выбирать любые характеристики для производства вашей печатной платы, однако, стоит помнить - все корпуса спроектированы с расчетом на печатную плату с толщиной 1.6мм. Вам будет необходимо две печатные платы для одного набора.

#### Материалы

| Name                                                    | Qty | Links                                                                                     |
|---------------------------------------------------------|-----|-------------------------------------------------------------------------------------------|
| Seeeduino XIAO nRF52840 Module                          | 2   | [Aliexpress](https://aliexpress.com/item/1005004459618789.html)                           |
| MSK-12C02 SPDT Switch                                   | 2   | [Aliexpress](https://aliexpress.com/item/4000685483225.html)                              |
| 1N5819 SOD-123 Diode                                    | 42  | [Aliexpress](https://aliexpress.com/item/1005003194674618.html?sku_id=12000024602962923)  |
| Gateron KS-27 Hot Swap Socket                           | 42  | [Aliexpress](https://aliexpress.com/item/1005004128409069.html)                           |
| Li-Po Battery 601730 With Protection                    | 2   | Source locally                                                                            |
| **[OPTIONAL]** JST SH1.0 Horizontal 2 Pin PCB Connector | 2   | [Aliexpress](https://aliexpress.com/item/1005005682408443.html?&sku_id=12000033998015849) |

## Корпус

Корпус также является важной частью Ergonaut One, так как он предоставляет электрическую изоляцию и надежное пространство для монтажа свитчей и внутренних компонентов.

Вы можете использовать любой из трех предоставленных вариантов корпуса:

* Для производства на 3D принтере:
  * [Tilted Case](#3d-printed-tilted-case) (Рекомендуем) (Самый легкий в печати)
  * [Standard Case](#3d-printed-standard-case)
* [FR4 Sandwich Case](#fr4-sandwich-case)

### Общая информация для корпусов, производимых на 3D принтере

#### Необходимые инструменты:

* FDM 3D принтер или друг с принтером;
* **[ONLY FOR STANDARD CASE]** Скальпель или другой режущий инструмент для удаления встроенных поддержек;
* **[OPTIONAL]** Инструмент для снятия заусенцев.

#### Материалы

Вам понадобятся некоторые дополнительные материалы для сборки корпуса:

| Name                          | Qty | Links                                                                                    |
|-------------------------------|-----|------------------------------------------------------------------------------------------|
| M2 8mm Flat Countersunk Screw | 8   | [Aliexpress](https://aliexpress.com/item/32975242274.html?sku_id=66696774380)            |
| M2 Hex Nut                    | 8   | [Aliexpress](https://aliexpress.com/item/1005003994209489.html?sku_id=12000027676602569) |
| Silicone Feet Pads 8mmx2.5mm  | 8   | [Aliexpress](https://aliexpress.com/item/32750517847.html)                               |

#### Печать

Возьми модели [тут](https://github.com/ergonautkb/one/tree/main/cases/3d). Печатай с следующими настройками:

* Layer height: 0.2mm;
* Extrusion width: 0.4mm;
* No support structures.

**Примечание: Standard Case может требовать генерацию структур поддержки, если ваш принтерн не обладает достаточным охлаждением детали.**

Выбери свой желанный вариант корпуса (Standard или Tilted) и напечатай 4 детали:
* Левую Top;
* Правую Top (модель должна быть отзеркалена по оси X в слайсере);
* Левую Bottom;
* Правую Bottom (модель должна быть отзеркалена по оси X в слайсере).

### 3D Printed Tilted Case

| Front                                              | Back                                              |
|----------------------------------------------------|---------------------------------------------------|
| ![3D Printed Tilted Case Front](/img/tilted_1.jpg) | ![3D Printed Tilted Case Back](/img/tilted_2.jpg) |

| Bottom part placement                                    | Top part placement                                       |
|----------------------------------------------------------|----------------------------------------------------------|
| ![3D Printed Tilted Case Bot](/img/tilted_bot_print.jpg) | ![3D Printed Tilted Case Top](/img/tilted_top_print.jpg) |

### 3D Printed Standard Case

| Front                                                  | Back                                                  |
|--------------------------------------------------------|-------------------------------------------------------|
| ![3D Printed Standard Case Front](/img/standard_1.jpg) | ![3D Printed Standard Case Back](/img/standard_2.jpg) |

**Примечание: эта модель содержит встроенные поддержки, улучшающие адгезию к столу. Они должны быть удалены после печати.**

| Bottom part placement                                        | Top part placement                                           |
|--------------------------------------------------------------|--------------------------------------------------------------|
| ![3D Printed Standard Case Bot](/img/standard_bot_print.jpg) | ![3D Printed Standard Case Top](/img/standard_top_print.jpg) |

**Примечание: После печати не забудьте удалить встроенные поддержки с Top моделей. Изображение ниже для справки:**

![3D Printed Standard Case Supports](/img/standard_top_supports.jpg)

### FR4 Sandwich Case

Скоро...
