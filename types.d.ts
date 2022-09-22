export type CountMap = { [key: string]: number }

export type TechCounts = {
	overall: CountMap;
	byLocation: {
		[key: string]: CountMap
	};
	byCompany: {
		[key: string]: CountMap
	};
}

export type Posting = {
	slug: string;
	heading: string;
	datePosted: Date;
	url: string;
	imageUrl: string;
	imageUrl: string;
	descr: string;
	location: string;
	company: string;
}

export type PostingWithKeywords = Posting & { keywords: string[] }

export interface ApiData {
	count: number;
	postings: PostingWithKeywords[];
	techCounts: TechCounts;
}
