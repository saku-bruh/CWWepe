# CWWepe
Basic HTTP server script for Wuthering Waves

You need to download the following:
 - Node.js (https://nodejs.org/en/download/current/) and select Windows Installer (.msi)
 - Fiddler Classic (https://telerik-fiddler.s3.amazonaws.com/fiddler/FiddlerSetup.exe)

Download node.js then go in the folder with the ```script.js``` and in the Windows Explorer bar type in ```cmd``` and type ```node``` and drag the script in the CMD window and press enter to run it. Minimize the window after this.

After you've done that go to Fiddler Classic link and install it then run it then go to the right of the screen and press on FiddlerScript and paste this script this:

```bash
import System.Windows.Forms;
import Fiddler;
import System.Text.RegularExpressions;

class Handlers
{
    static function OnBeforeRequest(oS: Session) {
        if (oS.host.Equals("overseauspider.yuanshen.com:8888")) {
            oS.oRequest.FailSession(404, "Not Found", "Not Found");
        }
        else if(oS.host.EndsWith(".yuanshen.com") || oS.host.EndsWith(".starrails.com") || oS.host.EndsWith(".hoyoverse.com") || oS.host.EndsWith(".mihoyo.com") || oS.host.EndsWith(".kurogame.com")) {
            oS.host = "localhost";
        }
    }
};
```

Then run WutheringWaves.exe
