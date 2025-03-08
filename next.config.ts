//** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Permite gerar arquivos estáticos
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
  basePath: '/FullStack-Developer', // Use o nome do repositório
  assetPresfix: '/FullStack-Developer',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
