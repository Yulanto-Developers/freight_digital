/** @type {import('next').NextConfig} */
const basePath = "";

const nextConfig = {
	trailingSlash: true,
	basePath: basePath || undefined,
	assetPrefix: basePath || undefined,
	images: {
		unoptimized: true,
	},
	env: {
		NEXT_PUBLIC_BASE_PATH: basePath,
	},
};

export default nextConfig;