---
sidebar_position: 1
title: Small Layouts
---

# Layouts for small keyboards

Visitors of this site are probably familiar with the [Ergonaut One](https://ergonautkb.com/docs/keyboards/ergonaut-one/intro/) and with layouts for 42-key split keyboards.
While they do demand some unusual interactions (tap-holds and layers), it is easy enough to get by without breaking your brain too much.
The two outer columns allow one to place dedicated modifiers and all alpha keys in the main layer, and most keys only perform one action.

But what if we were to remove those outer columns?

![Small teaser...](/img/small_layouts/eones.jpeg)

A smaller layout introduces two main challenges:
- Not all alpha keys (letters) may fit on the main layer (especially for Cyrillic languages)
- Modifiers should ideally be accessible on every layer

## Concepts

Each layout deals with these challenges in its own way and has its own focus, but most use these two concepts:

### Home-row modifiers

The primary purpose of a smaller keyboard is to minimize wrist movement - a popular motto is "1DFH", or "one distance from home".
Ideally, the fingers should rest in a "home" position - as designated by tactile markers for index fingers on F and J.
Any other position should be reachable by a movement over no more than one key.

42-key splits tend to conform to this rule, with the pinky and the index finger making diagonal movements.
However, 36-key boards posit that the pinky, as the weakest finger, should be confined to one column.
As modifiers (Ctrl, Alt, Win, Shift) are traditionally placed on these pinky columns, such layouts needed a new solution.

The proposed idea was to eliminate movement even more - and place these modifiers on a mod-tap on the home row.
Tapping these keys would still produce a letter, but holding them would trigger the modifier action.
While this takes a fair amount of getting used to, it also spreads the load from the pinky - holding down the modifier keys -
across all the fingers.

Home-row modifiers require a fair bit of discipline - it is easy to accidentally trigger a modifier instead of a letter.
To avoid this, some firmwares only activate modifiers for letters pressed on the other "hand" - the other half of a split keyboard.
It is also possible to only trigger modifiers after an idle period - useful for typing quickly.

More information on home-row mods can be found [here](https://precondition.github.io/home-row-mods#what-are-home-row-mods).

### Combos

Having a letter of one's preferred alphabet on a layer can be rather annoying.
If your preferred layout does not mirror the layers and has distinct ones on each hand, it may be necessary to use both hands
just to type a letter.

Combos - key combinations that produce distinct results - are a convenient way to circumvent such limitations.
With the vertical stagger present on most split keyboards, two-key vertical combos
(pressing between the middle and top/bottom row in any given column) can be comfortable depending on the keycap profile.

Specialty profiles designed for vertical combos are usually best, but they do have to be 3D-printed:

- [Pseudoku's DES](https://github.com/pseudoku/PseudoMakeMeKeyCapProfiles)
- [KLP Lame](https://github.com/braindefender/KLP-Lame-Keycaps/)

![](/img/small_layouts/vertical_combos.jpg)

Lower, uniform or cylindrical profiles are also usually okay, just do not try this with SA.
On a taller profile with a narrow finger well the spaces between keycaps are usually larger,
and a finger can end up pushing both keycaps sideways instead of pressing them.

Another consideration is spring weighting - pressing two 70-gram switches with a single pinky is unlikely to be easy or healthy in the long run.
It is best to stick with the lightest switches possible, such as the 40-gram Nuphy Aloe.
Serious combo enthusiasts even produced 12-gram springs for Kailh Choc switches!
Sadly, those are nearly impossible to acquire now.

Combos can produce symbols, such as the letters or brackets normally placed in the pinky columns, but
they are not limited to usual key presses - a combo can trigger a modifier, a layer or a more complex behavior.
For example, on a 34-key layout pressing both thumb keys can mimic the third one - Miryoku, a layout intended
for 36 keys, uses this trick to fit on a 34-key Ferris.

## Layouts

The lower one goes in key count, the more personalized a layout usually becomes.
The following three are just good starting points with distinct approaches that should spark some ideas.

### Miryoku

One of the most well-known layouts for small keyboards is [Miryoku](https://github.com/manna-harbour/miryoku/) by Manna-Harbour.

![](/img/small_layouts/miryoku-kle-cover.png)

Miryoku has a lot of layers and epitomizes the ideology behind home-row modifiers.
One hand activates each layer (and presses the accessible modifiers), and another
presses the keys actually in that layer.

This automatically teaches the core principle of using modifiers with the opposite hand.
However, the downside is that most actions are inconvenient (if not impossible) without the use of both hands.
An interesting quirk here is that thumb keys frequently produce actual symbols inside an opposite hand layer.
Other layouts tend to relegate them to layers or modifiers.

Miryoku is also primarily intended for English, and languages with a larger alphabet
will end up having letters on a layer.
While this is possible to adapt to (the writer of the article is... *fine* with using Myrioku for Cyrillic languages),
it is a noticeable hurdle.

Other than these inconveniences, however, Miryoku is logical and easy enough to get used to.
Numbers, for example, are in the same layout as a typical numpad, and symbols are
in the same number positions, just shifted.
It is also easy to configure - flags can switch the alpha arrangement and layers with little to
no programming, while the full might of ZMK is, of course, still there.

### Keeper

If Miryoku highlighted home-row modifiers, Watchman's [Keeper](https://github.com/aroum/Keeper-layouts) aims to utilize vertical combos
to keep the layout closer to its [counterpart for larger keyboards](https://github.com/aroum/Watchman-layouts).

![](/img/small_layouts/keeper-main-layer.png)

While the author calls these chords, the concept in use here (pressing two vertically adjacent keys) is not really close
to a common definition of chording - that usually involves producing a sequence of characters on a single complex combination.
True chording requires a lot of practice and is much closer to stenography, while this is much closer to emulating additional keys.

Overall, the layout is successful in the author's stated goal - it is close to a traditional 42-key split, and
all the commonly used symbols are accessible on the main layer.
Symbol and navigation layers are also mirrored for both hands.

There can be sore spots, too - function keys are spread across two layers, and the principle behind their (and the symbols') placement 
is somewhat unintuitive.
As the author says - this layout is, first and foremost, "a source of inspiration".

Seeing as it is meant for 34 keys (two thumb keys per hand), some changes to adapt it to 36 are inevitable.
These changes will probably smooth out the weirdness.

### Callum

Both previous options heavily relied on mod-taps: different actions on a tap versus a hold.
Callum Oakley's [Callum](https://github.com/callum-oakley/qmk_firmware/tree/master/users/callum) foregoes them in an unusual choice.

![](/img/small_layouts/callum.png)

Modifiers here are still on the home row, but they are one-shot: switch to a layer, press a key and it will be active until the next alpha press.
This feature is known as ["sticky keys"](https://zmk.dev/docs/behaviors/sticky-key) in ZMK.

Mod-taps introduce uncertainty, and it can be easy to accidentally trigger a modifier instead of typing a letter at high speed.
It is important to note that ZMK has a lot of configuration options to avoid this.
The issue can also be negated by forcing opposite-hand modifiers, although those are not easy to set up.

The layout also uses various macros with the swap keys - language/window/tab swapping, etc.

The original layout is available for QMK, but a modified ZMK version can be found [here](https://github.com/dxmh/zmk-config).

QMK also has braindefender's [Wellum](https://github.com/braindefender/wellum), a 36-key version
meant for use with the Universal Layout - a Russian/English layout with the same symbol placements for both languages.

![](/img/small_layouts/wellum.jpg)

A version for ZMK is currently in development.
