---
sidebar_position: 2
title: Build Preparations
---

# Ergonaut One Build Preparations

This guide will help you prepare all the necessary tools and materials for a successful Ergonaut One build.

## PCB

![PCB](/img/one_pcb.jpg)
PCB is the core component of Ergonaut One.

#### Tools:

You'd probably need:

* Soldering iron;
* Solder wire;
* Flux;
* Tweezers;
* Isopropyl Alcohol or other suitable solvent for PCB cleaning;
* Cotton Q-tips or other suitable material for PCB cleaning.

#### PCB Manufacturing

If you are brave enough, you can manufacture PCB yourself.
But my suggestion would be to grab a Gerber archive [here](https://github.com/ergonautkb/one/tree/main/gerbers/pcb) and order PCBs from any capable PCB manufacturer, like:
* [JLCPCB](https://jlcpcb.com/);
* [PCBWay](https://www.pcbway.com/).

You are free to choose any desirable PCB specification but keep in mind that all cases are modeled with 1.6mm PCB thickness in mind.
You'd need two PCBs for one kit.

#### BOM

| Name                                                    | Qty | Links                                                                                     |
| ------------------------------------------------------- | --- | ----------------------------------------------------------------------------------------- |
| Seeeduino XIAO nRF52840 Module                          | 2   | [Aliexpress](https://aliexpress.com/item/1005004459618789.html)                           |
| MSK-12C02 SPDT Switch                                   | 2   | [Aliexpress](https://aliexpress.com/item/4000685483225.html)                              |
| 1N5819 SOD-123 Diode                                    | 42  | [Aliexpress](https://aliexpress.com/item/1005003194674618.html?sku_id=12000024602962923)  |
| Gateron KS-27 Hot Swap Socket                           | 42  | [Aliexpress](https://aliexpress.com/item/1005004128409069.html)                           |
| Li-Po Battery 601730 With Protection                    | 2   | Source locally                                                                            |
| **[OPTIONAL]** JST SH1.0 Horizontal 2 Pin PCB Connector | 2   | [Aliexpress](https://aliexpress.com/item/1005005682408443.html?&sku_id=12000033998015849) |

## Case

The case is also an essential part of Ergonaut One since it provides proper electrical insulation from the environment and provides reliable mounting plates for the switches.

You can choose to use one of three provided variants of the case:

* 3D Printed:
  * [Modern Case](#3d-printed-modern-case) (Recommended) (The easiest to print)
  * [Classic Case](#3d-printed-classic-case)
* [FR4 Sandwich Case](#fr4-sandwich-case)

### Common information for 3D printed cases

#### Tools:

You'd probably need:

* FDM 3D Printer or a friend with a printer;
* **[ONLY FOR CLASSIC CASE]** Scalpel or some other cutting tool to remove included supports;
* **[OPTIONAL]** Deburring tool.

#### BOM

You'd need some additional hardware to assemble your case:

| Name                          | Qty | Links                                                                                    |
| ----------------------------- | --- | ---------------------------------------------------------------------------------------- |
| M2 8mm Flat Countersunk Screw | 8   | [Aliexpress](https://aliexpress.com/item/32975242274.html?sku_id=66696774380)            |
| M2 Hex Nut                    | 8   | [Aliexpress](https://aliexpress.com/item/1005003994209489.html?sku_id=12000027676602569) |
| Silicone Feet Pads 8mmx2.5mm  | 8   | [Aliexpress](https://aliexpress.com/item/32750517847.html)                               |

#### Printing

Grab models [here](https://github.com/ergonautkb/one/tree/main/cases/3d). Print with the following settings:

* Layer height: 0.2mm;
* Extrusion width: 0.4mm;
* No support structures.

**Note: Classic Case might require support structures if your printer either has no part cooling or bad part cooling.**

Choose your desired case variant (Classic or Modern) and print four parts:
* Left Top;
* Right Top (model should be mirrored by X axis in slicer);
* Left Bottom;
* Right Bottom (model should be mirrored by X axis in slicer).

### 3D Printed Modern Case

| Front                                                  | Back                                                  |
| ------------------------------------------------------ | ----------------------------------------------------- |
| ![3D Printed Modern Case Front](/img/one_modern_1.jpg) | ![3D Printed Modern Case Back](/img/one_modern_2.jpg) |

| Bottom part placement                                        | Top part placement                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![3D Printed Modern Case Bot](/img/one_modern_bot_print.jpg) | ![3D Printed Modern Case Top](/img/one_modern_top_print.jpg) |

### 3D Printed Classic Case

| Front                                                    | Back                                                    |
| -------------------------------------------------------- | ------------------------------------------------------- |
| ![3D Printed Classic Case Front](/img/one_classic_1.jpg) | ![3D Printed Classic Case Back](/img/one_classic_2.jpg) |

**Note: this model contains included bed adhesion-improving supports, which should be removed after print.**

| Bottom part placement                                          | Top part placement                                             |
| -------------------------------------------------------------- | -------------------------------------------------------------- |
| ![3D Printed Classic Case Bot](/img/one_classic_bot_print.jpg) | ![3D Printed Classic Case Top](/img/one_classic_top_print.jpg) |

**Note: After the print don't forget to remove included supports from the top parts. The image below for a reference:**

![3D Printed Classic Case Supports](/img/one_classic_top_supports.jpg)

### FR4 Sandwich Case

Coming soon...
