import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/paraglide",
      strategy: ["url", "cookie", "baseLocale"],
      disableAsyncLocalStorage: true,
      urlPatterns: [
        {
          pattern: "/:path(.*)?",
          localized: [
            ["de", "/de/:path(.*)?"],
            ["en", "/en/:path(.*)?"],
            ["fr", "/fr/:path(.*)?"],
          ],
        },
      ],
    })
  ],
});
