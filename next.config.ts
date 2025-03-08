//** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Permite gerar arquivos estáticos
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
  basePath: '/Marcela-Samili-Desenvolvedor', // Use o nome do repositório
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
