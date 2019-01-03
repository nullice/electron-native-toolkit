const fsex = require("fs-extra");
const path = require("path");

console.log("[node_modules]-[windows]" )
clean(path.join(__dirname,"../windows/node_modules/"),"win")
console.log("\n\n[node_modules]-[mac-os]" )
clean(path.join(__dirname,"../mac-os/node_modules/"))
function clean(dir, os) {

    let list
    if(os === "win")
    {
         list = [
            path.join(dir,"sqlite3","build"),
            path.join(dir,"sqlite3","deps"),
            path.join(dir,"sharp","src"),
            path.join(dir,"sharp","vendor"),
        ]
    }else
    {
         list = [
            path.join(dir,"sqlite3","build"),
            path.join(dir,"sqlite3","deps"),
            path.join(dir,"sharp","src"),
            path.join(dir,"sharp","vendor","include"),
        ]
    }




    list.forEach(x=>{
        try {
            console.info("[delete] ", x)
            fsex.removeSync(x)
        } catch (error) {
            console.error("[err] ", error)
        }
    })
}
