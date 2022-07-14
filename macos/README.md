# Chechen Latin Keyboard Layout for macOS


## Layouts
### QWERTY, US

- Default, no modifier key pressed:
![chechen-latin-layout-qwerty-set0](https://i.imgur.com/HcODjGv.png)

- With pressed `⌥` (Option)
![chechen-latin-layout-qwerty-set2](https://i.imgur.com/Ml48OxR.png)

- With pressed `⌥` (Option) and `⇧` (Shift)
![chechen-latin-layout-qwerty-set3](https://i.imgur.com/zMVq90T.png)


## Letters missed in the layout
### Ç̇ ç̇
- **Name**: Letter C with Cedilla and Dot Above - [ref1](https://fr.wikipedia.org/wiki/%C3%87%CC%87)
- **Composotion**: ç + ◌̇
- **Keys used to insert the letter**: `9` with pressed `⌥` (Option) + `.` with pressed `⌥` (Option)


## Installation
### 1.0 Downloading and install
![download-archive](https://i.imgur.com/mhFSiUk.png)

- **Download** this repository on your computer, as ZIP archive.

#### 1.1 Via script
![open-terminal](https://i.imgur.com/ifpF74J.png)

- Open the downloaded directory. Then **single-click** on the folder `macos`, **click** on `Finder` > `Services` and **select** `New Terminal at Folder`.


![execute-script](https://i.imgur.com/BJNRwco.png)

- In opened Terminal window **type**
```bash
./install.sh
```
- and **click** `Enter` on your keyboard, to execute the installation script.

#### 1.2 Manual
If you don't want to run the script, you can install the layout manually. To do this, you need to copy the `Chechen Latin Keyboard.bundle` in `/Library/Keyboard Layouts/` directory.


![manual-open-folder](https://i.imgur.com/TRwWQKr.png)

- **Go** to `macos` folder from downloaded archive.


![manual-copy-bundle](https://i.imgur.com/ycFyI0Q.png)

- **Copy** the bundle `Chechen Latin Keyboard.bundle`


![manual-go-to-layouts](https://i.imgur.com/9WKD6TB.png)
- Next, press `Cmd+Shift+G` and type `/Library/Keyboard Layouts/` to navigate to the Keyboard Layouts and **paste** the bundle here.


### 2.0 Activating The New Layout
#### 2.1 Log out & Log in
> In order for the changes to take effect, you must log out of your current Mac user session and then log back in again. Alternatively, restart your computer.

#### 2.2 Activating
To activate the layout, you will need to add it to the layouts in your Keyboard Preferences. You can do this by following the steps outlined below:


![activating-add-layout](https://i.imgur.com/lE2Hwlm.png)

- Go to `System Preferences` > `Keyboard` > `Input Sources`. Click on the `+` icon on the bottom left, then type `chechen` on the search bar and select `Chechen (Latin, QWERTY, US)` layout from the list in the sidebar.


![menubar-select-layout](https://i.imgur.com/32JVBN6.png)

- **Click** on the `Input Sources icon` on the `menubar` and **select** `Chechen` layout.


![menubar-show-keyboard](https://i.imgur.com/zz8ewy2.png)

- You can also open the onscreen keyboard, to see all the characters in the layout. Just **click** on `Show Keyboard Viewer` in `menubar`.

## To Do
Add layouts for other keyboards
- [ ] `QWERTZ (German)`  
- [ ] `AZERTY (French)` 