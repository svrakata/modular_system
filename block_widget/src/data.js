const fs = require('fs')

const blocksGenerator = (len) => {
    const blocks = []
    const titles = [
        'top', 'strange', 'weird', 'shocking', 'jesus', 'rafting', 'zamunda', 'polinomials', 'degree', 'boolean networks', 'random generator', 'kopper', 'silver', 'titanium'
    ]
    const columns = ['left', 'right']

    for (let i = 0; i < len; i++) {
        const block = {
            title: titles[Math.floor(Math.random() * titles.length)],
            column: columns[Math.floor(Math.random() * 2)],
            position: i,
            active: Math.floor(Math.random() * 2),
        }
        blocks.push(block)
    }

    return blocks
}

const pages = [
    {
        name: 'home',
        id: 34
    },
    {
        name: 'bulgaria',
        id: 45
    },
    {
        name: 'world',
        id: 77
    }
]


fs.writeFile('pages.json', JSON.stringify(pages), (err) => {
    if (err) console.log(err)
    console.log('JSON generated')
})

fs.writeFile('34.json', JSON.stringify(blocksGenerator(30)), (err) => {
    if (err) console.log(err)
    console.log('JSON generated')
})

fs.writeFile('45.json', JSON.stringify(blocksGenerator(30)), (err) => {
    if (err) console.log(err)
    console.log('JSON generated')
})

fs.writeFile('77.json', JSON.stringify(blocksGenerator(30)), (err) => {
    if (err) console.log(err)
    console.log('JSON generated')
})

module.exports = blocksGenerator

// http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/pages.json
// http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/34.json
// http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/45.json
// http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/77.json
