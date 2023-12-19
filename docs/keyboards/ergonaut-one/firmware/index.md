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

If you encounter issues during the flashing process:

- Make sure you followed all the steps for entering the bootloader mode correctly.
- Revisit the prior steps to ensure all instructions were executed properly.
- Contact us for assistance if you cannot resolve the issue.

:::info

If you need support don't hesitate to join our community in [Telegram](https://ergonautkb.t.me/)

:::

## Resources

If you're curious about further customization, check out the [ZMK documentation](https://zmk.dev/docs).

That's it! You're all set to enjoy your Ergonaut One with the firmware customized by you.
