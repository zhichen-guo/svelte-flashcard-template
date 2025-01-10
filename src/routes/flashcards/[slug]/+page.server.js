import { error } from "@sveltejs/kit";
import { get_set } from "$lib/sets/all_sets.js";

export function load({ params }) {
    const set = get_set(params.slug);

    if (!set) error(404);

    let flashcards = {forward: set.cards};
    if (set.formats.includes("reversed")){
        flashcards.backward = set.cards.map((card) => ({ front: card.back, back: card.front }));
    }
    
    return { flashcards };
}