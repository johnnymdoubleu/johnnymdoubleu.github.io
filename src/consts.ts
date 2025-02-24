// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Website metadata
export const SITE_URL: string = "https://johnnymdoubleu.github.io";
export const SITE_TITLE: string = "Johnny MyungWon Lee";
export const SITE_DESCRIPTION: string = "Welcome to Johnny's Mansion";

// SEO metadata
export const TWITTER_CREATOR: string = "@xxx";

// Navigation
type Page = {
	title: string;
	href: string;
	children?: Page[];
};

export const PAGES: Page[] = [
	{
		title: "home",
		href: "/",
	},
	{
		title: "publication",
		href: "/publication",
	},
	{
		title: "conference",
		href: "/conference",
	},
	{
		title: "teaching",
		href: "/teaching",
	},
	// {
	// 	title: "blog",
	// 	href: "/blog",
	// },
	{
		title: "Other Activities",
		href: "/about",
	},
];

// i18n
export const DEFAULT_LOCALE = "en";
export const LOCALES = {
	en: "en", // the `defaultLocale` value must present in `locales` keys
	kr: "kr",
	// it: "it",
};
