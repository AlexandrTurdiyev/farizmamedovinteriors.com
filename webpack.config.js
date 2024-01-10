const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "development";

const devMode = mode === "development";

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    entry: {
        homePage: './src/index.js',
        aboutPage: './src/about-us.js',
        projectsPage: './src/projects.js',
        publicationsPage: './src/projects.js',
        blogPage: './src/blog.js',
        contactPage: './src/contact.js',
        naKalininaAlmaty2022articleResedentialProject: './src/articles.js',
        zhkOscarAlmaty2022ArticleResedentialProject: './src/articles.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'index.html'),
            chunks: ["homePage"],
            publicPath: '',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            filename: 'about-us.html',
            template: path.resolve(__dirname, 'src', 'about-us.html'),
            chunks: ["aboutPage"],
            publicPath: '',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            filename: 'projects.html',
            template: path.resolve(__dirname, 'src', 'projects.html'),
            chunks: ["projectsPage"],
            publicPath: '',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            filename: 'publications.html',
            template: path.resolve(__dirname, 'src', 'publications.html'),
            chunks: ["publicationsPage"],
            publicPath: '',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            template: path.resolve(__dirname, 'src', 'blog.html'),
            chunks: ["blogPage"],
            publicPath: '',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: path.resolve(__dirname, 'src', 'contact.html'),
            chunks: ["contactPage"],
            publicPath: '',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            filename: 'na-kalinina-almaty-2022.html',
            template: path.resolve(__dirname, 'src/pages/projects/residential/na-kalinina-almaty-2022/', 'na-kalinina-almaty-2022.html'),
            chunks: ["naKalininaAlmaty2022articleResedentialProject"],
            publicPath: '',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            filename: 'zhk-oscar-almaty-2022.html',
            template: path.resolve(__dirname, 'src/pages/projects/residential/zhk-oscar-almaty-2022/', 'zhk-oscar-almaty-2022.html'),
            chunks: ["zhkOscarAlmaty2022ArticleResedentialProject"],
            publicPath: '',
            inject: 'body',
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html/i,
                loader: 'html-loader'
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')]
                            }
                        }
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.ttf$/i,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][ext]"
                }
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
        ]
    }
}