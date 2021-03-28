import postcss from "rollup-plugin-postcss";
import typescript from '@rollup/plugin-typescript';

export default {
	input: "./src/index.tsx",
	output: {
		file: "./src/output.tsx",
		format: "esm",
	},
	plugins: [
		typescript(),
		postcss({
			config: {
				path: "./postcss.config.js",
			},
			extensions: [".css"],
			minimize: true,
			inject: {
				insertAt: "top",
			},
		}),
	],
	external: ["react", "react-dom", "@headlessui/react", "formik", "react-number-format"],
}