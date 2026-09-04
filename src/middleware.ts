import { assertIsLocale, baseLocale, setLocale } from "@/paraglide/runtime.js";
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  setLocale(assertIsLocale(context.currentLocale ?? baseLocale));

  return next();
});
