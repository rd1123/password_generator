function randomNum(collection) {
  return collection[Math.floor(Math.random() * collection.length)]
}

function generate_password(user) {
  // 建立所有可能的狀況
  const word = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '1234567890',
    symbols: '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  }


  // 把狀況裝到一個陣列內
  let collection = []

  for (let item in user) {
    if (user[item] === 'on') {
      collection = collection.concat(word[item].split(''))
    }
  }
  // 排除剔除字
  // use cludes and filter to exclude
  if (user.excludeCharacters) {
    collection = collection.filter(character => !user.excludeCharacters.includes(character)
    )
  }

  // 若collection無值 直接輸出
  if (collection.length === 0) {
    return '無法獲取密碼規則'
  }

  // 亂序排列

  let allWord = ''
  for (let i = 0; i < user.length; i++) {
    allWord += randomNum(collection)
  }

  return allWord
}

module.exports = generate_password