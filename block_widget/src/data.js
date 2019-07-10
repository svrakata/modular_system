const fs = require('fs')

const titles = [
    'top', 'strange', 'weird', 'shocking', 'jesus', 'rafting', 'zamunda', 'polinomials', 'degree', 'boolean networks', 'random generator', 'kopper', 'silver', 'titanium'
]

const blocksGenerator = (len) => {
    const blocks = []

    const columns = ['left', 'right']

    for (let i = 0; i < len; i++) {
        const title = titles[Math.floor(Math.random() * titles.length)]
        const block = {
            title,
            column: columns[Math.floor(Math.random() * 2)],
            position: i,
            active: Math.floor(Math.random() * 2),
            id: titles.indexOf(title),
        }
        blocks.push(block)
    }

    return blocks
}

const blockList = titles.map((e, i) => ({ title: e, id: i }))
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
    console.log('Pages generated')
})

fs.writeFile('34.json', JSON.stringify(blocksGenerator(30)), (err) => {
    if (err) console.log(err)
    console.log('34 generated')
})

fs.writeFile('45.json', JSON.stringify(blocksGenerator(30)), (err) => {
    if (err) console.log(err)
    console.log('45 generated')
})

fs.writeFile('77.json', JSON.stringify(blocksGenerator(30)), (err) => {
    if (err) console.log(err)
    console.log('77 generated')
})

fs.writeFile('blocks.json', JSON.stringify(blockList), (err) => {
    if (err) console.log(err)
    console.log('BlockList generated')
})

module.exports = blocksGenerator

// http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/pages.json
// http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/34.json
// http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/45.json
// http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/77.json
