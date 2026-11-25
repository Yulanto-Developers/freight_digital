/** @type {import('next').NextConfig} */
// const basePath = "/symposium-nextjs";
const basePath = "";
const nextConfig = {
    // build static export output
    // output: "export",
    // ensure exported pages end up as folders (helps GitHub Pages routing)
    trailingSlash: true,
    basePath: basePath || undefined,
    assetPrefix: basePath || undefined,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "j1ue33emhkt57puw.private.blob.vercel-storage.com",
                pathname: "/**",
            },
        ],
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath
    },

};

export default nextConfig;
