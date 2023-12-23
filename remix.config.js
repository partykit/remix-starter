/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  server: "./party/main.ts",
  serverConditions: ["partykit", "workerd", "worker", "browser"],
  serverMainFields: ["browser", "module", "main"],
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  tailwind: true,
  postcss: true,
};
