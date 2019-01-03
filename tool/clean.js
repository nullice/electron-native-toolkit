const fsex = require("fs-extra");
const path = require("path");

console.log("[node_modules]-[windows]" )
clean(path.join(__dirname,"../windows/node_modules/"))
console.log("\n\n[node_modules]-[windows]" )
clean(path.join(__dirname,"../mac-os/node_modules/"))
function clean(dir) {

   
    let list = [
        path.join(dir,"sqlite3","build"),
        path.join(dir,"sqlite3","deps"),
        path.join(dir,"sharp","src"),
        path.join(dir,"sharp","vendor"),
        
    ]

    list.forEach(x=>{
        try {
            console.info("[delete] ", x)
            fsex.removeSync(x)
        } catch (error) {
            console.error("[err] ", error)
        }
    })
}
