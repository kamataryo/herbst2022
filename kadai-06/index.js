const fs = require('fs')
const data = fs.readFileSync('./kadai-06/data.json').toString()
let object
try {
    object = JSON.parse(data)
} catch (error) {
    console.log('不正なJSONフォーマットです')
    process.exit(1)
}

object.count = object.count + 1
object.updateAt = Date()

fs.writeFileSync(
    './kadai-06/data.json',
    JSON.stringify(object, null, 2)
    )

console.log(object)
