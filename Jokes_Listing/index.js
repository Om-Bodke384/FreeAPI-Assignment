let content_load = 0
const quotes = []
const parent = document.getElementById('parent_content')

async function Fetching(){
    const res = await fetch('https://api.freeapi.app/api/v1/public/randomjokes')
    const data = await res.json()
    data.data.data.forEach((element)=>{
    
        const content = element.content
        const id = element.id

        quotes.push({id,content})
        console.log(quotes,"om")
    })
    
    Content_loding(quotes[0].id,  quotes[0].content)

}
Fetching()


const left_button = document.getElementById('left')
const right_button = document.getElementById('right')
function Content_loding(id,content){
    const content_create = document.createElement('div')
    content_create.id = 'content_create_clasas'
    const content_write = document.createElement('blockquote')
    const content_text = document.createElement('p')
    content_text.innerHTML = content
    content_text.style.fontSize = '25px'
    content_text.style.fontWeight = 'bold'
    content_text.style.textAlign = 'center'
    content_text.style.color = 'black'
    
    
        parent.appendChild(content_create)
        content_create.appendChild(content_write)
        content_write.appendChild(content_text)

        content_load = content_load + 1
        
}





// left_button.addEventListener('click', function () {
//     const content_create = document.getElementById('content_create_clasas')
//     content_create.remove()
//     if (content_load < 0) {
//         content_load = quotes.length
//         Content_loding(quotes[quotes.length - 1].id,  quotes[quotes.length - 1].content)
//     } else if (content_load == 0) {
//         Content_loding(quotes[0].id,  quotes[0].content)
//     } else {
//         Content_loding(quotes[content_load - 1].id,  quotes[content_load - 1].content)
//     }
// })

left_button.addEventListener('click', function () {
    const content_create = document.getElementById('content_create_clasas')
    content_create.remove()

    content_load -= 2  // -2 because Content_loding will +1, net effect = go back 1

    if (content_load < 0) {
        content_load = quotes.length - 1  // wrap to last item
    }

    Content_loding(quotes[content_load].id, quotes[content_load].content)
})
right_button.addEventListener('click', function () {
    const content_create = document.getElementById('content_create_clasas')
    content_create.remove()
    if (content_load > quotes.length - 1) {
        content_load = 0
        Content_loding(quotes[0].id,  quotes[0].content)
    } else {
        Content_loding(quotes[content_load].id,  quotes[content_load].content)
    }
})