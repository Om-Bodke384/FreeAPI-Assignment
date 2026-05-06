const container = document.getElementById('meal-container');
const updateBtn = document.getElementById('update-btn');

async function fetchRecipes() {
    // Loading State
    container.innerHTML = `<p class="col-span-full text-center py-20 animate-pulse uppercase font-black">Syncing_Data...</p>`;

    try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/meals');
        
        if (!response.ok) throw new Error('API_CONNECTION_FAILED');

        const result = await response.json();
        
        // Drilling into result.data.data
        const meals = result.data?.data || [];

        if (meals.length > 0) {
            renderUI(meals);
        } else {
            container.innerHTML = `<p class="col-span-full text-center py-20 border-2 border-dashed border-black">EMPTY_DATASET</p>`;
        }

    } catch (err) {
        console.error(err);
        container.innerHTML = `
            <div class="col-span-full border-4 border-black p-10 text-center">
                <h2 class="font-black text-2xl uppercase">Fetch_Error</h2>
                <p class="mt-2">${err.message}</p>
                <p class="mt-4 text-xs italic text-gray-500">Check console (F12) and network status.</p>
            </div>
        `;
    }
}

function renderUI(meals) {
    container.innerHTML = ''; // Clear container

    meals.forEach(meal => {
        const card = document.createElement('div');
        // No rounded corners, sharp edges for a "raw" look
        card.className = "meal-card p-6 flex flex-col justify-between";

        card.innerHTML = `
            <div>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full h-56 object-cover mb-6">
                <span class="text-[10px] font-bold bg-black text-white px-2 py-1 uppercase">${meal.strCategory}</span>
                <h2 class="text-2xl font-black uppercase leading-tight mt-4">${meal.strMeal}</h2>
                <p class="text-sm mt-2 opacity-70">${meal.strArea} Origin</p>
            </div>
            
            <div class="mt-8 flex justify-between items-center">
                <a href="${meal.strYoutube}" target="_blank" class="text-xs font-black border-b-2 border-black pb-1 hover:opacity-50 transition">
                    YOUTUBE_LINK
                </a>
                <span class="text-[10px] font-mono opacity-40">#${meal.idMeal}</span>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Initial Run
fetchRecipes();

// Button Event
updateBtn.addEventListener('click', fetchRecipes);
