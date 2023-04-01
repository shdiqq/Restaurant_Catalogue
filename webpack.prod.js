const path = require('path');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
    new WebpackPwaManifest({
      publicPath: '.',
      filename: 'app.webmanifest',
      id: 'restaurantCatalogue-pwa-1',
      start_url: './index.html',
      name: 'Restaurant Catalogue App',
      short_name: 'Restaurant Catalogue',
      description: 'Free restaurant catalogue for you',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#838383',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/images/logo/logo.png'),
          destination: path.join('images/icon'),
          sizes: [96, 128, 144, 192, 256, 384, 512],
          purpose: 'maskable',
        },
        {
          src: path.resolve(__dirname, 'src/public/images/logo/logo.png'),
          destination: path.join('images/icon'),
          sizes: [96, 128, 144, 192, 256, 384, 512],
          purpose: 'any',
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: /https:\/\/restaurant-api.dicoding.dev/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'api-cache',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 72 * 60 * 60,
            },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
      ],
    }),
  ],
});
