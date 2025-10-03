/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**',
              port: '',
              pathname: '/**',
            },
          ],
        domains: ['avantage.bold-themes.com', '*'],
      },
};

export default nextConfig;
