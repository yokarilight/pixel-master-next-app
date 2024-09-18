/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // required to make Konva & react-konva work
    config.externals = [...config.externals, { canvas: 'canvas' }];

    return config;
  },
};

export default nextConfig;
