---
sidebar_position: 4
title: Firmware
---

# Firmware Customization Guide

In this guide, we'll show you how to set up and customize the firmware for your Ergonaut One keyboard.

## Getting Started

Updating your firmware lets you personalize the Ergonaut One to your typing needs, changing keymaps and other functionalities.

### Prerequisites: GitHub Account

You'll need a GitHub account to store and edit your keyboard's firmware settings.

- Don't have one? [Sign up here](https://github.com/join).

## Creating Your Firmware Configuration

First things first, you need a copy of the Ergonaut One configuration:

![](repo_template.png)

1. Head over to the [template repository](https://github.com/ergonautkb/one-zmk-config).
2. Hit "Use this template" and name your repository "ergonaut-one-firmware".
3. Choose public visibility for your repository.

## Customize Your Keymap with the Online Editor

Use the Keymap Editor to easily configure your layout:

![](keymap_editor.png)

1. Go to the [Keymap Editor](https://nickcoutsos.github.io/keymap-editor/).
2. Log in with your GitHub account.
3. Adjust your keymap to your preference and click "Save".
4. Describe your changes briefly, click "commit", and wait for the firmware build to complete.
5. Download the compiled firmware file.

## Flashing Your Keyboard

With your newly compiled firmware:

1. Connect the left half of your keyboard to your PC.
2. Enter bootloader mode:
   - With the original firmware: Press Lower+Raise+top-left key on the left half.
   - If you already have custom firmware or none at all: Press the "Reset" button on the PCB twice.
3. Look for a new USB drive on your computer and move the `ergonaut_one_left-seeeduino_xiao_ble-zmk.uf2` file into it.

And just like that, your keyboard is up-to-date with your own custom keymap.

## Troubleshooting & Support

If you're experiencing issues during the flashing process or when using your Ergonaut One keyboard, follow these troubleshooting steps to resolve your problems.

### General Troubleshooting Steps

- Make sure you followed all the instructions correctly for entering the bootloader mode.
- Double-check the prior steps to ensure all actions were properly executed.

### Resolving Pairing Issues Between Keyboard Halves

Pairing issues between the halves of your keyboard can typically be resolved by resetting the settings on both controllers. This process involves flashing a reset firmware to each half to ensure they can pair successfully.

#### Obtaining the Reset UF2 Firmware

1. Navigate to the GitHub Actions page of your Ergonaut One firmware repository:
   - If you used our template to create your own repository, go to your forked repo's Actions page.
   - If you did not create your own repository, visit the official Ergonaut One Actions page: https://github.com/ergonautkb/one-zmk-config/actions.
2. Click on the latest successful workflow run, indicated by a green checkmark.
3. Under "Artifacts", download the `firmware` zip file.
4. Extract the zip to locate the `settings_reset-seeeduino_xiao_ble-zmk.uf2` file.

#### Flashing the Reset Firmware

1. Open the bottom case of your keyboard to access the reset button on the XIAO microcontroller, located near the USB connector.
2. For each half of the keyboard, perform the following steps separately to prevent accidental bonding:
   - Enter bootloader mode by double-pressing the reset button quickly.
   - The blue led should start blink indicating bootloader mode
   - When your computer detects the keyboard as a USB drive, drag and drop the reset UF2 file onto it.
   - **Important:** To prevent accidental bonding, immediately re-enter bootloader mode after flashing by pressing the reset button twice again. Do this before the keyboard restarts as this will ensure both halves reset their bond information.
3. After successfully flashing the reset firmware on both halves, proceed to flash the actual firmware images.

#### Flashing the Actual Firmware

1. Flash each half of the keyboard with its corresponding actual firmware file (e.g., `ergonaut_one_left-seeeduino_xiao_ble-zmk.uf2` for the left half).
2. To pair the halves together, ensure both are in close proximity to each other and reset them at the same time by pressing the reset buttons on both XIAO microcontrollers. This simultaneous reset will initiate the pairing process.

### Further Assistance

Should the problem continue or if you face other issues, our team is ready to assist you. Reach out for support or join our community for further assistance:

:::info

If you need support don't hesitate to join our community in [Telegram](https://ergonautkb.t.me/) or send us an email hi@ergonautkb.com

:::

## Resources

If you're curious about further customization, check out the [ZMK documentation](https://zmk.dev/docs).

That's it! You're all set to enjoy your Ergonaut One with the firmware customized by you.
