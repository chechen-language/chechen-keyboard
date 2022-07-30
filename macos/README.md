# Chechen Latin Keyboard Layout for macOS


## Layouts
### QWERTY, US

- Default, no modifier key pressed:
<p align="center">
   <img src="https://i.imgur.com/HcODjGv.png" alt="chechen-latin-layout-qwerty-set0"/>
</p>


- With pressed `⌥` (Option)
<p align="center">
   <img src="https://i.imgur.com/Ml48OxR.png" alt="chechen-latin-layout-qwerty-set2"/>
</p>


- With pressed `⌥` (Option) and `⇧` (Shift)
<p align="center">
   <img src="https://i.imgur.com/zMVq90T.png" alt="chechen-latin-layout-qwerty-set3"/>
</p>


## Letters missed in the layout
### Ç̇ ç̇
- **Name**: Letter C with Cedilla and Dot Above - [ref1](https://fr.wikipedia.org/wiki/%C3%87%CC%87)
- **Composotion**: `ç` + `̇`
- **Unicode**: [`U+00E7`](https://www.compart.com/en/unicode/U+00E7) + [`U+0307`](https://www.compart.com/en/unicode/U+0307)
- **Keys used to insert the letter**: `9` with pressed `⌥` (Option) + `.` with pressed `⌥` (Option)


## Installation
### 1.0 Downloading and install
- **Download** this repository on your computer, as ZIP archive.
<p align="center">
   <img src="https://i.imgur.com/5DC0jtD.png" alt="download-archive"/>
</p>

#### 1.1 Via script
- **Open** the downloaded directory. Then **single-click** on the folder `macos`, **click** on `Finder` > `Services` and **select** `New Terminal at Folder`.
<p align="center">
   <img src="https://i.imgur.com/rH5Yapm.png" alt="open-terminal"/>
</p>


- In opened Terminal window **type**
```bash
./install.sh
```
- and **click** `Enter` on your keyboard, to execute the installation script.
<p align="center">
   <img src="https://i.imgur.com/BJNRwco.png" alt="execute-script"/>
</p>


#### 1.2 Manual
If you don't want to run the script, you can install the layout manually. To do this, you need to copy the `Chechen Latin Keyboard.bundle` in `/Library/Keyboard Layouts/` directory.

- **Go** to `macos` folder from downloaded archive.
<p align="center">
   <img src="https://i.imgur.com/TRwWQKr.png" alt="manual-open-folder"/>
</p>


- **Copy** the bundle `Chechen Latin Keyboard.bundle`
<p align="center">
   <img src="https://i.imgur.com/14igFIP.png" alt="manual-copy-bundle"/>
</p>


- Next, press `Cmd+Shift+G` and type `/Library/Keyboard Layouts/` to navigate to the Keyboard Layouts and **paste** the bundle here.
<p align="center">
   <img src="https://i.imgur.com/9WKD6TB.png" alt="manual-go-to-layouts"/>
</p>


### 2.0 Activating The New Layout
#### 2.1 Log out & Log in
> In order for the changes to take effect, you must log out of your current Mac user session and then log back in again. Alternatively, restart your computer.

#### 2.2 Activating
To activate the layout, you will need to add it to the layouts in your Keyboard Preferences. You can do this by following the steps outlined below:

- Go to `System Preferences` > `Keyboard` > `Input Sources`. Click on the `+` icon on the bottom left, then type `chechen` on the search bar and select `Chechen (Latin, QWERTY, US)` layout from the list in the sidebar.
<p align="center">
   <img src="https://i.imgur.com/lE2Hwlm.png" alt="activating-add-layout"/>
</p>


- **Click** on the `Input Sources icon` on the `menubar` and **select** `Chechen` layout.
<p align="center">
   <img src="https://i.imgur.com/Sq09KNL.png" alt="menubar-select-layout"/>
</p>


- You can also open the onscreen keyboard, to see all the characters in the layout. Just **click** on `Show Keyboard Viewer` in `menubar`.
<p align="center">
   <img src="https://i.imgur.com/NtR4bDa.png" alt="menubar-show-keyboard"/>
</p>


## To Do
Add layouts for other keyboards
- [ ] `QWERTZ (German)`  
- [ ] `AZERTY (French)` 