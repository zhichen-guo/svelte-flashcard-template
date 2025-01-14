import { circle_of_fifths, circle_of_fourths } from './circle-of-fifths.js';

export const names_to_slug = [
    {
        name: "Circle of Fifths",
        slug: "circle-of-fifths"
    },
    {
        name: "Circle of Fourths",
        slug: "circle-of-fourths"
    },
    {
        name: "test list 1",
        slug: "test-list-1"
    },
    {
        name: "test list 2",
        slug: "test-list-2"
    }
]

const slugs_to_set = {
    "circle-of-fifths": circle_of_fifths,
    "circle-of-fourths": circle_of_fourths
}

export function get_set(name) {
    return slugs_to_set[name];
}