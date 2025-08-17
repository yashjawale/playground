import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://yashjawale.github.io',
  base: '/playground/',
  integrations: [icon(), react(), partytown()],
	vite: {
    plugins: [tailwindcss()],
  }
});