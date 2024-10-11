import tutorialkit from "@tutorialkit/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	integrations: [
		tutorialkit({
			components: {
				TopBar: "./src/components/CustomTopBar.astro",
			},
		}),
	],
	site: process.env.SITE_URL || "http://localhost:4321",
});
