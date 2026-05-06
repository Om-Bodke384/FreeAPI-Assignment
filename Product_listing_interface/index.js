
document.addEventListener('DOMContentLoaded', function() {
    const suprime = document.getElementById("suprime");
    if (!suprime) {
        console.error('Element with id "suprime" not found');
        return;
    }
    suprime.style.display = 'grid'
    suprime.style.gridTemplateColumns = 'repeat(4, 1fr)'
    suprime.style.gap = '10px'


    async function Fetching(){



    const res = await fetch('https://api.freeapi.app/api/v1/public/randomproducts')
    const data = await res.json()
    // console.log(data)
    data.data.data.forEach(element => {
        const title = element.title
        const description = element.description
        const price = element.price
        const discountPercentage = element.discountPercentage
        const rating = element.rating
        const Instock = element.stock
        const brand = element.brand
        // const category = element.category
        const thumbnail = element.thumbnail
        const images = element.images
        console.log(thumbnail)
        const outer_card = document.createElement('div')
        outer_card.className = 'outer-card'
        outer_card.style.backgroundColor = 'lightgray'
        outer_card.style.padding = '10px'
        outer_card.style.margin = '10px'
        outer_card.style.borderRadius = '5px'

        const inner_card_1 = document.createElement('div')
        inner_card_1.className = 'inner-card-1'

        const img1 = document.createElement('img')
        img1.className = 'for_image'
        img1.src = thumbnail
        img1.style.padding = '10px'
        img1.style.width = '100px'
        img1.style.height = '100px'


        const inner_card_2 = document.createElement('div')
        inner_card_2.className = 'inner-card-2'
        inner_card_2.style.padding = '10px'
        
        const inner_card_2_title = document.createElement('div')
        inner_card_2_title.className = 'inner-card-2-title'
        inner_card_2_title.textContent = `Title: ${title}`
        inner_card_2_title.style.color = 'black'
        inner_card_2_title.style.fontWeight = 'bold'
        inner_card_2.appendChild(inner_card_2_title)

        const inner_card_2_description = document.createElement('div')
        inner_card_2_description.className = 'inner-card-2-description'
        inner_card_2_description.textContent = `Description: ${description}`
        inner_card_2_description.style.color = 'black'
        inner_card_2.appendChild(inner_card_2_description)

        const inner_card_2_price = document.createElement('div')
        inner_card_2_price.className = 'inner-card-2-price'
        inner_card_2_price.textContent = `Price: $${price}`
        inner_card_2_price.style.color = 'green'
        inner_card_2_price.style.fontSize = '18px'
        inner_card_2.appendChild(inner_card_2_price)

        const inner_card_2_discountPercentage = document.createElement('div')
        inner_card_2_discountPercentage.className = 'inner-card-2-discountPercentage'
        inner_card_2_discountPercentage.textContent = `Discount: ${discountPercentage}%`
        inner_card_2_discountPercentage.style.color = 'red'
        inner_card_2.appendChild(inner_card_2_discountPercentage)

        const inner_card_2_rating = document.createElement('div')
        inner_card_2_rating.className = 'inner-card-2-rating'
        inner_card_2_rating.textContent = `Rating: ${rating}`
        inner_card_2_rating.style.color = 'orange'
        inner_card_2.appendChild(inner_card_2_rating)

        const inner_card_2_Instock = document.createElement('div')
        inner_card_2_Instock.className = 'inner-card-2-Instock'
        inner_card_2_Instock.textContent = `In Stock: ${Instock}`
        inner_card_2_Instock.style.color = 'black'
        inner_card_2.appendChild(inner_card_2_Instock)

        const inner_card_2_brand = document.createElement('div')
        inner_card_2_brand.className = 'inner-card-2-brand'
        inner_card_2_brand.textContent = `Brand: ${brand}`
        inner_card_2_brand.style.color = 'black'
        inner_card_2.appendChild(inner_card_2_brand)

        // const inner_card_2_category = document.createElement('div')
        // inner_card_2_category.className = 'inner-card-2-category'
        // inner_card_2_category.textContent = category
        // inner_card_2.appendChild(inner_card_2_category)

        // const inner_card_2_images = document.createElement('div')
        // inner_card_2_images.className = 'inner-card-2-images'
        // inner_card_2_images.textContent = images
        // inner_card_2.appendChild(inner_card_2_images)



        
        suprime.appendChild(outer_card)
        inner_card_1.appendChild(img1)
        outer_card.appendChild(inner_card_1)
        outer_card.appendChild(inner_card_2)
        
        



        
    })
}
Fetching()
});