export default {
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "nuxt2-makemake",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~/styles/global.scss",
        "~/styles/variables-css.scss",
        "~/styles/fonts.css",
        // "~/styles/media-queries.scss",
    ],
    styleResources: {
        scss: ["~/styles/media-queries.scss", "~/styles/easings.scss"],
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ["@nuxtjs/style-resources"],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend(config, ctx) {
            // Remove SVG from default Nuxt webpack rules
            const svgRule = config.module.rules.find((rule) =>
                rule.test.test(".svg")
            )
            svgRule.test = /\.(png|jpe?g|gif|webp)$/i

            // Use SVG loader for .svg files
            config.resolve.extensions.push(".svg")
            config.module.rules.push({
                test: /\.svg$/,
                oneOf: [
                    {
                        // ?raw on import will give raw SVG with no optimizations.
                        // Good if you need unaltered SVGs for animations.
                        resourceQuery: /raw/,
                        use: [
                            "babel-loader",
                            {
                                loader: "vue-svg-loader",
                                options: {
                                    svgo: false,
                                },
                            },
                        ],
                    },
                    {
                        // ?url on import will give base64 encode SVG.
                        // Good for use in CSS.
                        resourceQuery: /url/,
                        use: ["url-loader"],
                    },
                    {
                        // Default SVG loader.
                        loader: "vue-svg-loader",
                        options: {
                            svgo: {
                                plugins: [{ removeViewBox: false }],
                            },
                        },
                    },
                ],
            })
        },
    },
    html: {
        minify: {
            collapseBooleanAttributes: true,
            decodeEntities: true,
            minifyCSS: false,
            minifyJS: false,
            processConditionalComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            trimCustomFragments: true,
            useShortDoctype: true,
        },
    },
}
