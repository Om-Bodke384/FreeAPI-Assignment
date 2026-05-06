let content_load = 0
const quotes = []
const parent = document.getElementById('parent_content')

async function Fetching(){
    const res = await fetch('https://api.freeapi.app/api/v1/public/quotes')
    const data = await res.json()
    data.data.data.forEach((element)=>{
        const author =  element.author
        const content = element.content
        const id = element.id
        const tag = element.tag
        quotes.push({id,author,content,tag})
        console.log(quotes,"om")
    })
    
    Content_loding(quotes[0].id, quotes[0].author, quotes[0].content, quotes[0].tag)

}
Fetching()


const left_button = document.getElementById('left')
const right_button = document.getElementById('right')


function Content_loding(id, author, content, tags) {
    const content_create = document.createElement('div')
    content_create.id = 'content_create_clasas'

    const content_write = document.createElement('blockquote')
    content_write.className = 'text-center'

    const content_text = document.createElement('p')
    content_text.innerHTML = `" ${content} "`
    content_text.className = 'text-lg font-semibold text-stone-800 leading-relaxed'

    const author_name = document.createElement('cite')
    author_name.innerHTML = `— ${author}`
    author_name.className = 'block mt-4 text-sm text-stone-400 not-italic'

    parent.appendChild(content_create)
    content_create.appendChild(content_write)
    content_write.appendChild(content_text)
    content_write.appendChild(author_name)

    content_load = content_load + 1
}


left_button.addEventListener('click', function () {
    const content_create = document.getElementById('content_create_clasas')
    content_create.remove()

    content_load -= 2  

    if (content_load < 0) {
        content_load = quotes.length - 1  
    }


Content_loding(quotes[content_load].id, quotes[content_load].author, quotes[content_load].content, quotes[content_load].tag)})


right_button.addEventListener('click', function () {
    const content_create = document.getElementById('content_create_clasas')
    content_create.remove()
    if (content_load > quotes.length - 1) {
        content_load = 0
        Content_loding(quotes[0].id, quotes[0].author, quotes[0].content, quotes[0].tag)
    } else {
        Content_loding(quotes[content_load].id, quotes[content_load].author, quotes[content_load].content, quotes[content_load].tag)
    }
})