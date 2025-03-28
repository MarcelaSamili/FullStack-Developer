//** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Permite gerar arquivos estáticos
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
  typescript: { ignoreBuildErrors: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
