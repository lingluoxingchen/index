let page = 6
let cont = [
    { id: 1, content: '没脾气系列', color: 'red' },
    { id: 2, content: '没脾气系列', color: 'green' },
    { id: 3, content: '没脾气系列', color: 'yellow' },
    { id: 4, content: '没脾气系列' },
    { id: 5, content: '没脾气系列' },
    { id: 6, content: '没脾气系列' },
    { id: 7, content: '不想搬运小车' },
    { id: 8, content: '不想搬运小车' },
    { id: 9, content: '不想搬运小车' },
    { id: 10, content: '不想搬运小车' },
    { id: 11, content: '不想搬运小车' },
    { id: 12, content: '不想搬运小车' },
    { id: 13, content: '没脾气系列' },
    { id: 14, content: '没脾气系列' },
    { id: 15, content: '没脾气系列' },
    { id: 16, content: '没脾气系列' },
    { id: 17, content: '没脾气系列' },
    { id: 18, content: '没脾气系列' },
    { id: 19, content: '不想搬运小车' },
    { id: 20, content: '不想搬运小车' },
    { id: 21, content: '不想搬运小车' },
    { id: 22, content: '不想搬运小车' },
    { id: 23, content: '不想搬运小车' },
    { id: 24, content: '不想搬运小车' }
]

function add(page) {
    let newsTitleHot = document.querySelector('.search_menu_content')
    newsTitleHot.innerHTML = ''
    let index = 0
    let lefts = document.createElement('ul')
    lefts.className = 'left'
    let right = document.createElement('ul')
    right.className = 'right'
    for (let i = page; i < page + 6; i++) {
        let item = document.createElement('ul')
        item.className = 'content_item'
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
        span1.innerHTML = cont[i].id
        span1.className = cont[i].color
        span2.innerHTML = cont[i].content
        item.appendChild(span1)
        item.appendChild(span2)
        if (index <= 3) {
            lefts.appendChild(item)
            index++
        }
        if (index > 3) {
            right.appendChild(item)
        }
    }
    news - title - hot.appendChild(left)
    news - title - hot.appendChild(right)
}
document.querySelector('#news-title-refresh').addEventListener('click', function() {
    if (page == 24) {
        page = 0
    }
    add(page)
    page = page + 6
})