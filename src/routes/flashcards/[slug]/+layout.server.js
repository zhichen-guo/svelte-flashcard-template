import { error } from "@sveltejs/kit";
import { get_set } from "$lib/sets/all_sets.js";

export function load({ params }) {
    const set = get_set(params.slug);

    if (!set) error(404);
    
    return { 
        set,
        size: set.cards.length
    };
}