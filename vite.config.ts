import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {},

  /**
   * need to set up @testing-library/react
   *
   * - https://dev.to/pacheco/configure-vitest-with-react-testing-library-5cbb
   * - https://vitest.dev/config/#setupfiles
   * - per environment setup: https://vitest.dev/config/#environment
   * - https://vitest.dev/api/#aftereach
   * - https://testing-library.com/docs/react-testing-library/api/#cleanup
   */
});
