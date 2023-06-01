import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config.target = 'web';
    if (config.module) {
      config.module.rules = config.module?.rules?.map((rule) => {
        if (rule !== '...' && /svg/.test(rule.test as string)) {
          // Silence the Storybook loaders for SVG files
          return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
      });
    }
    config.module?.rules?.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });
    config.module?.rules?.unshift({
      test: /\.(png|jpg|jpeg|gif)$/,
      use: 'url-loader?limit=8192&name=images/[name]-[hash].[ext]',
      exclude: /material-design-icons/,
    });
    config.module?.rules?.unshift({
      test: /\.(svg)$/,
      use: {
        loader: 'svg-react-loader',
        options: {
          query: {
            props: {
              className: 'material-design-icon',
            },
          },
        },
      },
    });
    return config;
  },
};
export default config;
