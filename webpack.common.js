const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/public'),
          // globOptions: {
          //   ignore: ['**/images/**'], // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
          // },
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'Kulinaria',
      short_name: 'Kulinaria',
      description: 'Aplikasi Web, katalog restoran',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#ffd369',
      crossorigin: 'use-credentials',
      orientation: 'portrait',
      start_url: '/index.html',
      inject: true,
      fingerprints: true,
      ios: true,
      includeDirectory: true,

      icons: [
        {
          src: path.resolve(__dirname, 'src/public/icon/KulinariaFavicon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          type: 'image/png',
          purpose: 'any maskable',
          destination: path.join('icons', 'ios'),
          ios: true,
        },
        {
          src: path.resolve(__dirname, 'src/public/icon/KulinariaFavicon.png'),
          size: '1024x1024',
          destination: path.join('icons', 'ios'),
          ios: 'startup',
        },
        {
          src: path.resolve(__dirname, 'src/public/icon/KulinariaFavicon.png'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
  ],
};
