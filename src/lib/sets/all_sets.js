import { circle_of_fifths, circle_of_fourths } from './circle-of-fifths.js';

export const names_to_slug = [
    {
        "name": "Circle of Fifths",
        "slug": "circle-of-fiftsh"
    },
    {
        "name": "Circle of Fourths",
        "slug": "circle-of-fourths"
    }
]

const slugs_to_set = {
    "circle-of-fifths": circle_of_fifths,
    "circle-of-fourths": circle_of_fourths
}

export function get_set(name) {

}