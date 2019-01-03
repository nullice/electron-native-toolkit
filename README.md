# electron-native-toolkit
out of the box prebuild native modules for electron with common tools.

## Prebuild native modules for **Electron** `v3.0.13`
- [sqlite3](https://github.com/mapbox/node-sqlite3)
- [sharp](https://github.com/lovell/sharp)

## Features

- cross-platform prebuild for the corresponding version electron, just use.
- prune useless file, reduce the number of files by 30%.
- use upx to process dll files, reduce 50% module size.

## Usage

just copy `windows/node_modules` or `mac-os/node_modules` to your electron resources dir.

### Dowonload
[download](https://github.com/nullice/electron-native-toolkit/archive/3.0.13-a.zip)
 
### Or use npm 
```
npm i electron-native-toolkit
```

### electron-buidler
if you use `electron-bulder` you can add to the configuration:

**package.json**
```diff
...
"build": {
        "mac": {
            "extraResources": [
                {
+                   "from": "native/mac-os/node_modules",
                    "to": "node_modules"
                }
            ]
        },
       "win": {
            "extraResources": [
                {
+                   "from": "native/windows/node_modules",
                    "to": "node_modules"
                }
            ]
        }, 
 }
...

```
