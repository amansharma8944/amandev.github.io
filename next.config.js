const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output:'export',
   trailingSlash: true, // helpful for GH Pages
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
}