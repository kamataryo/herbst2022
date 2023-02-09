const profile = {
    name: "大豆",
    age: 20,
    hobby: "スポーツ観戦",
    major: "地理学",
}
const dictionary = {
    name: "名前",
    age: "年齢",
    hobby: "趣味",
    major: "専攻",
}

const keys = Object.keys(profile)

for (const key of keys) {
    const subject = dictionary[key]
    const value = profile[key]
    console.log("私の" + subject + "は"　+ value + "です")
}
