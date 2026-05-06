const cats = []
const parent = document.getElementById('suprime')
async function fetching(){
    const res = await fetch('https://api.freeapi.app/api/v1/public/cats/cat/random')
    const data = await res.json()
    Array(data.data).forEach(element => {
            console.log(element)
            const name = element.name
            const origin = element.origin
            const description = element.description
            const image = element.image
            cats.push({name,origin,description,image})
            console.log(cats)
        });

    Loads_cat(cats[0].name,cats[0].origin,cats[0].description,cats[0].image)
    
}


function Loads_cat(name, origin, description, image) {
    const parent = document.getElementById('suprime');
    const card = document.createElement('div');
    card.classList.add('bg-white', 'rounded-2xl', 'shadow-md', 'overflow-hidden', 'hover:shadow-2xl', 'transition-all', 'duration-300', 'hover:-translate-y-2', 'border', 'border-gray-100');

    
    const img = document.createElement('img');
    img.src = image;
    img.classList.add('w-full', 'h-56', 'object-cover');

   
    const body = document.createElement('div');
    body.classList.add('p-6');

   
    const title = document.createElement('h2');
    title.classList.add('text-2xl', 'font-extrabold', 'text-gray-900', 'mb-1');
    title.textContent = name;

  
    const badge = document.createElement('span');
    badge.classList.add('inline-block', 'px-3', 'py-1', 'text-xs', 'font-semibold', 'bg-indigo-100', 'text-indigo-700', 'rounded-full', 'mb-4');
    badge.textContent = `Origin: ${origin}`;

   
    const desc = document.createElement('p');
    desc.classList.add('text-gray-600', 'text-sm', 'leading-relaxed', 'line-clamp-3'); // line-clamp keeps text height consistent
    desc.textContent = description;

    
    body.append(title, badge, desc);
    card.append(img, body);
    parent.appendChild(card);
}
 fetching()