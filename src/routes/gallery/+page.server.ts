import type { PageServerLoad } from './$types';
import * as fs from 'fs';

type Painting = {
	title: string;
	imageUrl: URL;
	thumbnailUrl: URL;
	width: number;
	height: number;
	medium: string;
};

export const load = (({ params }) => {
	const data: string = fs.readFileSync('./static/paintings.json', 'utf-8');
	const paintings: Painting[] = JSON.parse(data);
	return { paintings };
}) satisfies PageServerLoad;
