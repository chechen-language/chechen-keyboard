#!/usr/bin/env bash

xkb_path="/usr/share/X11/xkb"

if [[ ! -d ${xkb_path} ]] ; then
    echo "Directory ${xkb_path} is not there, aborting. Check you xkeyboard-config installation."
    exit
fi

cp symbols/ce ${xkb_path}/symbols/

sed -i -e '/^.*<\/layoutList>/ {r rules/evdev.xml' -e 'N}' ${xkb_path}/rules/evdev.xml
sed -i -e '/^.*<\/layoutList>/ {r rules/evdev.xml' -e 'N}' ${xkb_path}/rules/base.xml


sed -i -e '/^.*custom/ {r rules/evdev.lst' -e 'N}' ${xkb_path}/rules/evdev.lst
sed -i -e '/^.*custom/ {r rules/evdev.lst' -e 'N}' ${xkb_path}/rules/base.lst