//** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export', // Permite gerar arquivos estáticos
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
  basePath: isProd ? '/FullStack-Developer' : '', // Use o nome do repositório
  assetPrefix: isProd ? '/FullStack-Developer' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
