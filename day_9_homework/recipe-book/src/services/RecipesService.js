import {
    collection, addDoc,
    query, getDocs,
    doc, updateDoc,
    deleteDoc
} from "firebase/firestore"

import { Recipe } from "../models/Recipe"
import { db } from "../firebase/firebase"

class RecipeService {
    constructor() {
        this.collection = 'Recipes'
    }

    async AddRecipe(recipe) {
        const collectionRef = collection(db, this.collection)

        const docRef = await addDoc(collectionRef, {
            title: recipe.title,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
        })

        recipe.id = docRef.id;
    }

    async FetchRecipes() {
        const q = query(collection(db, this.collection));
        const querySnapshot = await getDocs(q);

        const recipes = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const recipe = new Recipe (
                doc.id,
                data.title,
                data.ingredients,
                data.instructions
            );
            recipes.push(recipe);
        });
        return recipes;

    }

    // async EditRecipe(recId) {
    //     const docRef = doc(db, this.collection, recId);

    //     await updateDoc(docRef, {
    //         name
    //     })
    // }

    async DeleteRecipe(recId) {
        const docRef = doc(db, this.collection, recId);
        await deleteDoc(docRef);
    }
}

const recipeService = new RecipeService();

export default recipeService;