
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol:'http',
                hostname:'www.localhost.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;