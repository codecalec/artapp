import type { PageLoad } from './$types';

type Painting = {
    title: string;
    medium: string;
    width: number;
    height: number;
    url: URL;
}

export const load = (({ params }) => {

    let url1: URL = new URL("_include/img/work/full/The%20Durban%20July%20Cool%20Dudes.jpg", "http://jodyart.co.za/");
    let painting1: Painting = { title: "The Durban July Cool Dudes", medium: "oil", width: 150, height: 100, url: url1 };

    let url2: URL = new URL("_include/img/work/full/Cyclist1.jpg", "http://jodyart.co.za/");
    let painting2: Painting = { title: "Cyclists", medium: "oil", width: 100, height: 120, url: url2 };

    let paintings = [painting1, painting2, painting1, painting2, painting1, painting2, painting1, painting2];
    return { paintings }
}) satisfies PageLoad