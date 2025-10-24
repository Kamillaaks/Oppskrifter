const model = {
    app: {
        currentPage: "loginPage",
        currentUser: "admin",

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
                id: 3, name: "Enkel",
            },
            {
                id: 4, name: "Middels"
            },
            {
                id: 5, name: "Vanskelig",
            },
            {
                id: 6, name: "Rask",
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

        RecipeList: [
            {
                id: 0,
                userId: 0, /* Trengs denne egentlig? */
                title: "Greske kjøttboller",
                categoryId: [0, 3],
                timeUsedId: 4, /* Er dette rett? */
                image: "imgLink",
                recipe: "Lang tekst her",
                method: "Enda lengre tekst her", 
            },
             {
                id: 1,
                userId: 0,
                title: "Lun biffsalat",
                categoryId: [0, 5],
                timeUsedId: 11,
                image: "imgLink",
                recipe: "Lang tekst her",
                method: "Enda lengre tekst her", 
            },
             {
                id: 2,
                userId: 0,
                title: "Banh mi bowl",
                categoryId: [0, 3],
                timeUsedId: 0,
                image: "imgLink",
                recipe: "Lang tekst her",
                method: "Enda lengre tekst her", 
            },
             {
                id: 0,
                userId: 0,
                title: "Thai biffruller",
                categoryId: [0, 4],
                timeUsedId: 7,
                image: "imgLink",
                recipe: "Lang tekst her",
                method: "Enda lengre tekst her", 
            },
        ],
    }

}