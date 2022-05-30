// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const withOffline = require('next-offline');

module.exports = withPlugins(
  [withCSS, withSass, withImages, withFonts, withOffline],
  {
    webpack5: false,
    webpack(config, _options) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });
      return config;
    },

    // relative path for assets
    assetPrefix: './',

    exportPathMap() {
      return {
        '/': {page: '/'},
      };
    },
  }
);
