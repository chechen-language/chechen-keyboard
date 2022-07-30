#!/usr/bin/env bash

# The directory may not exist
sudo mkdir -p "/Library/Keyboard Layouts"

# Removing the previous version
sudo rm -rf "/Library/Keyboard Layouts/Chechen Latin Keyboard.bundle"

# Install the current version
sudo cp -r "Chechen Latin Keyboard.bundle" "/Library/Keyboard Layouts/"
if [ $? -eq 0 ]; then
   echo -e "\n\033[1mKeyboard layout successfully installed. \nLog out of your current Mac user session and then log back in again. Alternatively, restart your computer.\033[0m"
else
   echo -e "\n\033[1mAn error occurred\033[0m"
fi