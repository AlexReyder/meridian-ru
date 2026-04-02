import path from 'node:path'

import { withPayload } from '@payloadcms/next/withPayload'

const s3PublicURL = process.env.S3_PUBLIC_BASE_URL
const s3URL = s3PublicURL ? new URL(s3PublicURL) : null

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@payload-config': path.resolve(process.cwd(), 'payload.config.ts'),
    }

    return config
  },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
       {
            protocol: s3URL.protocol.replace(':', ''),
            hostname: s3URL.hostname,
            port: '',
            pathname: `${s3URL.pathname.replace(/\/$/, '')}/**`,
        },
    ],
  },
}

export default withPayload(nextConfig)