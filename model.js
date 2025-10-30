const model = {
    app: {
        currentPage: "mainPage",
        currentUser: "admin",
        selectedRecipe: 0,

        page: [
            "loginPage",
            "mainPage",
            "recipePage",
            "addRecipePage",
        ],

    },
   
    input: {
        /* søkebar på toppen??? */
        login: {
            email: "",
            password: "",
        },

        mainPage: {
            search: "",
        },

        addRecipe: {
            addPicture: "",
            addCategory: "",
            addTimeUsed: "",
            addDifficulty: "",
            addTitle: "",
            addIngredients: "",
            addMethod: "",
        },
    },

    data: {
        user: {
            id: 0,
            email: "",
            password: "",
            RecipesAdded: [0, 1, 2, 3,],
        },

        category: [
            {
                id: 0, name: "Middag",
            },
            {
                id: 1, name: "Lunsj",
            },
            {
                id: 2, name: "Frokost",
            },
            {
                id: 3, name: "Dessert",
            },
            {
                id: 4, name: "Rask",
            },
            {
                id: 5, name: "Kos",
            }
        ],

        difficulty: [
            {
                id: 0, name: "Enkel",
            },
            {
                id: 1, name: "Middels"
            },
            {
                id: 2, name: "Vanskelig",
            },
        ],

        timeUsed: [
            {
                id: 0, time: "under 20 min",
            },
            {
                id: 2, time: "20 min",
            },
            {
                id: 3, time: "20-30 min",
            },
            {
                id: 4, time: "30 min",
            },
            {
                id: 5, time: "30-40 min",
            },
            {
                id: 6, time: "40 min",
            },
            {
                id: 7, time: "40-50 min",
            },
            {
                id: 8, time: "50 min",
            },
            {
                id: 9, time: "50-60 min",
            },
            {
                id: 10, time: "60 min",
            },
            {
                id: 11, time: "Over 60 min",
            },
        ],

        recipeList: [
            {
                id: 0,
                title: "Greske kjøttboller",
                categoryId: [0, 3],
                difficultyId: 3,
                timeUsedId: 4, 
                image: "mat.jpg",
                recipe: "Lang tekst her",
                method: "Enda lengre tekst her", 
            },
             {
                id: 1,
                title: "Lun biffsalat",
                categoryId: [0, 5],
                difficultyId: 3,
                timeUsedId: 11,
                image: "mat.jpg",
                recipe: "Lang tekst her",
                method: "Enda lengre tekst her", 
            },
             {
                id: 2,
                title: "Banh mi bowl",
                categoryId: [0, 3],
                difficultyId: 3,
                timeUsedId: 0,
                image: "mat.jpg",
                recipe: "Lang tekst her",
                method: "Enda lengre tekst her", 
            },
             {
                id: 3,
                title: "Thai biffruller",
                categoryId: [0, 4],
                difficultyId: 3,
                timeUsedId: 7,
                image: "mat.jpg",
                recipe: "Lang tekst her",
                method: "Enda lengre tekst her", 
            },
        ],
    }

}