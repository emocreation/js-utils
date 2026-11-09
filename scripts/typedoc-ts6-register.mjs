import { createRequire } from "node:module";
import { registerHooks } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === "typescript" || specifier.startsWith("typescript/")) {
      const target =
        specifier === "typescript"
          ? "typescript6"
          : `typescript6/${specifier.slice("typescript/".length)}`;
      try {
        return {
          url: pathToFileURL(require.resolve(target)).href,
          shortCircuit: true,
        };
      } catch {
        // fall through to default resolution
      }
    }
    return nextResolve(specifier, context);
  },
});
