# CWWepe
Basic HTTP script for Wuthering Waves

You need to download the following:
 - Node.js (https://nodejs.org/en/download/current/) and select Windows Installer (.msi)
 - Fiddler Classic (https://telerik-fiddler.s3.amazonaws.com/fiddler/FiddlerSetup.exe)

Download node.js then go in the folder with the ```script.js``` and in the Windows Explorer bar type in ```cmd``` and type ```node``` and drag the script in the CMD window. Minimize the window after this.

After you've done that go to Fiddler Classic link and install it then run it then go to the right of the screen and press on FiddlerScript and paste this script this:

```bash
import System;
import System.Windows.Forms;
import Fiddler;
import System.Text.RegularExpressions;
var list = [
    "kurogame.com", //1
    ];

class Handlers
{
    static function OnBeforeRequest(oS: Session) {
        var active = true;
        
        if(active) {
            for(var i = 0; i < 33; i++) {
                if(oS.uriContains(list[i])) {
                    oS.host = "localhost"; // This can also be replaced with another IP address.
                    break;
                }
            }
        }
    }
};
```

Then run WutheringWaves.exe
