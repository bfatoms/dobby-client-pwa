import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports, getPascalCaseRouteName } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import VueDevTools from 'vite-plugin-vue-devtools'
import Layouts from 'vite-plugin-vue-layouts'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 11911,
  },
  plugins: [
    // Docs: https://github.com/posva/unplugin-vue-router
    // ℹ️ This plugin should be placed before vue plugin
    VueRouter({
      getRouteName: routeNode => {
        // Convert pascal case to kebab case
        return getPascalCaseRouteName(routeNode)
          .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
          .toLowerCase()
      },
      beforeWriteFiles: root => {
        root.insert('/apps/email/:filter', '/src/pages/apps/email/index.vue')
        root.insert('/apps/email/:label', '/src/pages/apps/email/index.vue')
      },
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'swiper-container' || tag === 'swiper-slide',
        },
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: [ "**/*.{js,css,html,pdf,png,svg}" ],
        maximumFileSizeToCacheInBytes: 50000000,
        cleanupOutdatedCaches: true,
      },
      manifest: {
        name: "Dobby",
        short_name: "dobby",
        description: "Dobby is Free!!",
        display: "standalone",
        icons: [
          {
            "src": "/images/windows11/SmallTile.scale-100.png",
            "sizes": "71x71"
          },
          {
            "src": "/images/windows11/SmallTile.scale-125.png",
            "sizes": "89x89"
          },
          {
            "src": "/images/windows11/SmallTile.scale-150.png",
            "sizes": "107x107"
          },
          {
            "src": "/images/windows11/SmallTile.scale-200.png",
            "sizes": "142x142"
          },
          {
            "src": "/images/windows11/SmallTile.scale-400.png",
            "sizes": "284x284"
          },
          {
            "src": "/images/windows11/Square150x150Logo.scale-100.png",
            "sizes": "150x150"
          },
          {
            "src": "/images/windows11/Square150x150Logo.scale-125.png",
            "sizes": "188x188"
          },
          {
            "src": "/images/windows11/Square150x150Logo.scale-150.png",
            "sizes": "225x225"
          },
          {
            "src": "/images/windows11/Square150x150Logo.scale-200.png",
            "sizes": "300x300"
          },
          {
            "src": "/images/windows11/Square150x150Logo.scale-400.png",
            "sizes": "600x600"
          },
          {
            "src": "/images/windows11/Wide310x150Logo.scale-100.png",
            "sizes": "310x150"
          },
          {
            "src": "/images/windows11/Wide310x150Logo.scale-125.png",
            "sizes": "388x188"
          },
          {
            "src": "/images/windows11/Wide310x150Logo.scale-150.png",
            "sizes": "465x225"
          },
          {
            "src": "/images/windows11/Wide310x150Logo.scale-200.png",
            "sizes": "620x300"
          },
          {
            "src": "/images/windows11/Wide310x150Logo.scale-400.png",
            "sizes": "1240x600"
          },
          {
            "src": "/images/windows11/LargeTile.scale-100.png",
            "sizes": "310x310"
          },
          {
            "src": "/images/windows11/LargeTile.scale-125.png",
            "sizes": "388x388"
          },
          {
            "src": "/images/windows11/LargeTile.scale-150.png",
            "sizes": "465x465"
          },
          {
            "src": "/images/windows11/LargeTile.scale-200.png",
            "sizes": "620x620"
          },
          {
            "src": "/images/windows11/LargeTile.scale-400.png",
            "sizes": "1240x1240"
          },
          {
            "src": "/images/windows11/Square44x44Logo.scale-100.png",
            "sizes": "44x44"
          },
          {
            "src": "/images/windows11/Square44x44Logo.scale-125.png",
            "sizes": "55x55"
          },
          {
            "src": "/images/windows11/Square44x44Logo.scale-150.png",
            "sizes": "66x66"
          },
          {
            "src": "/images/windows11/Square44x44Logo.scale-200.png",
            "sizes": "88x88"
          },
          {
            "src": "/images/windows11/Square44x44Logo.scale-400.png",
            "sizes": "176x176"
          },
          {
            "src": "/images/windows11/StoreLogo.scale-100.png",
            "sizes": "50x50"
          },
          {
            "src": "/images/windows11/StoreLogo.scale-125.png",
            "sizes": "63x63"
          },
          {
            "src": "/images/windows11/StoreLogo.scale-150.png",
            "sizes": "75x75"
          },
          {
            "src": "/images/windows11/StoreLogo.scale-200.png",
            "sizes": "100x100"
          },
          {
            "src": "/images/windows11/StoreLogo.scale-400.png",
            "sizes": "200x200"
          },
          {
            "src": "/images/windows11/SplashScreen.scale-100.png",
            "sizes": "620x300"
          },
          {
            "src": "/images/windows11/SplashScreen.scale-125.png",
            "sizes": "775x375"
          },
          {
            "src": "/images/windows11/SplashScreen.scale-150.png",
            "sizes": "930x450"
          },
          {
            "src": "/images/windows11/SplashScreen.scale-200.png",
            "sizes": "1240x600"
          },
          {
            "src": "/images/windows11/SplashScreen.scale-400.png",
            "sizes": "2480x1200"
          },
          {
            "src": "/images/windows11/Square44x44Logo.targetsize-16.png",
            "sizes": "16x16"
          },
          {
            "src": "/images/windows11/Square44x44Logo.targetsize-20.png",
            "sizes": "20x20"
          },
          {
            "src": "/images/windows11/Square44x44Logo.targetsize-24.png",
            "sizes": "24x24"
          },
          {
            "src": "/images/windows11/Square44x44Logo.targetsize-30.png",
            "sizes": "30x30"
          },
          {
            "src": "/images/windows11/Square44x44Logo.targetsize-32.png",
            "sizes": "32x32"
          },
          {
            "src": "/images/windows11/Square44x44Logo.targetsize-36.png",
            "sizes": "36x36"
          },
          {
            "src": "/images/windows11/Square44x44Logo.targetsize-40.png",
            "sizes": "40x40"
          },
          {
            "src": "/images/windows11/Square44x44Logo.targetsize-44.png",
            "sizes": "44x44"
          },
          {
            "src": "/images/windows11/Square44x44Logo.targetsize-48.png",
            "sizes": "48x48"
          },
          {
            "src": "/images/windows11/Square44x44Logo.targetsize-60.png",
            "sizes": "60x60"
          },
          {
            "src": "/images/windows11/Square44x44Logo.targetsize-64.png",
            "sizes": "64x64"
          },
          {
            "src": "/images/windows11/Square44x44Logo.targetsize-72.png",
            "sizes": "72x72"
          },
          {
            "src": "/images/windows11/Square44x44Logo.targetsize-80.png",
            "sizes": "80x80"
          },
          {
            "src": "/images/windows11/Square44x44Logo.targetsize-96.png",
            "sizes": "96x96"
          },
          {
            "src": "/images/windows11/Square44x44Logo.targetsize-256.png",
            "sizes": "256x256"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
            "sizes": "16x16"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
            "sizes": "20x20"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
            "sizes": "24x24"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
            "sizes": "30x30"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
            "sizes": "32x32"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
            "sizes": "36x36"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
            "sizes": "40x40"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
            "sizes": "44x44"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
            "sizes": "48x48"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
            "sizes": "60x60"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
            "sizes": "64x64"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
            "sizes": "72x72"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
            "sizes": "80x80"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
            "sizes": "96x96"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
            "sizes": "256x256"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
            "sizes": "16x16"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
            "sizes": "20x20"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
            "sizes": "24x24"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
            "sizes": "30x30"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
            "sizes": "32x32"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
            "sizes": "36x36"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
            "sizes": "40x40"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
            "sizes": "44x44"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
            "sizes": "48x48"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
            "sizes": "60x60"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
            "sizes": "64x64"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
            "sizes": "72x72"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
            "sizes": "80x80"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
            "sizes": "96x96"
          },
          {
            "src": "/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
            "sizes": "256x256"
          },
          {
            "src": "/images/android/android-launchericon-512-512.png",
            "sizes": "512x512"
          },
          {
            "src": "/images/android/android-launchericon-192-192.png",
            "sizes": "192x192"
          },
          {
            "src": "/images/android/android-launchericon-144-144.png",
            "sizes": "144x144"
          },
          {
            "src": "/images/android/android-launchericon-96-96.png",
            "sizes": "96x96"
          },
          {
            "src": "/images/android/android-launchericon-72-72.png",
            "sizes": "72x72"
          },
          {
            "src": "/images/android/android-launchericon-48-48.png",
            "sizes": "48x48"
          },
          {
            "src": "/images/ios/16.png",
            "sizes": "16x16"
          },
          {
            "src": "/images/ios/20.png",
            "sizes": "20x20"
          },
          {
            "src": "/images/ios/29.png",
            "sizes": "29x29"
          },
          {
            "src": "/images/ios/32.png",
            "sizes": "32x32"
          },
          {
            "src": "/images/ios/40.png",
            "sizes": "40x40"
          },
          {
            "src": "/images/ios/50.png",
            "sizes": "50x50"
          },
          {
            "src": "/images/ios/57.png",
            "sizes": "57x57"
          },
          {
            "src": "/images/ios/58.png",
            "sizes": "58x58"
          },
          {
            "src": "/images/ios/60.png",
            "sizes": "60x60"
          },
          {
            "src": "/images/ios/64.png",
            "sizes": "64x64"
          },
          {
            "src": "/images/ios/72.png",
            "sizes": "72x72"
          },
          {
            "src": "/images/ios/76.png",
            "sizes": "76x76"
          },
          {
            "src": "/images/ios/80.png",
            "sizes": "80x80"
          },
          {
            "src": "/images/ios/87.png",
            "sizes": "87x87"
          },
          {
            "src": "/images/ios/100.png",
            "sizes": "100x100"
          },
          {
            "src": "/images/ios/114.png",
            "sizes": "114x114"
          },
          {
            "src": "/images/ios/120.png",
            "sizes": "120x120"
          },
          {
            "src": "/images/ios/128.png",
            "sizes": "128x128"
          },
          {
            "src": "/images/ios/144.png",
            "sizes": "144x144"
          },
          {
            "src": "/images/ios/152.png",
            "sizes": "152x152"
          },
          {
            "src": "/images/ios/167.png",
            "sizes": "167x167"
          },
          {
            "src": "/images/ios/180.png",
            "sizes": "180x180"
          },
          {
            "src": "/images/ios/192.png",
            "sizes": "192x192"
          },
          {
            "src": "/images/ios/256.png",
            "sizes": "256x256"
          },
          {
            "src": "/images/ios/512.png",
            "sizes": "512x512"
          },
          {
            "src": "/images/ios/1024.png",
            "sizes": "1024x1024"
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    }),
    VueDevTools(),
    vueJsx(),

    // Docs: https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
    vuetify({
      styles: {
        configFile: 'src/assets/styles/variables/_vuetify.scss',
      },
    }),

    // Docs: https://github.com/johncampionjr/vite-plugin-vue-layouts#vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: './src/layouts/',
    }),

    // Docs: https://github.com/antfu/unplugin-vue-components#unplugin-vue-components
    Components({
      dirs: ['src/@core/components', 'src/views/demos', 'src/components'],
      dts: true,
      resolvers: [
        componentName => {
          // Auto import `VueApexCharts`
          if (componentName === 'VueApexCharts')
            return { name: 'default', from: 'vue3-apexcharts', as: 'VueApexCharts' }
        },
      ],
    }),

    // Docs: https://github.com/antfu/unplugin-auto-import#unplugin-auto-import
    AutoImport({
      imports: ['vue', VueRouterAutoImports, '@vueuse/core', '@vueuse/math', 'vue-i18n', 'pinia'],
      dirs: [
        './src/@core/utils',
        './src/@core/composable/',
        './src/composables/',
        './src/utils/',
        './src/plugins/*/composables/*',
      ],
      vueTemplate: true,

      // ℹ️ Disabled to avoid confusion & accidental usage
      ignore: ['useCookies', 'useStorage'],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
      },
    }),

    // Docs: https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n#intlifyunplugin-vue-i18n
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: [
        fileURLToPath(new URL('./src/plugins/i18n/locales/**', import.meta.url)),
      ],
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@themeConfig': fileURLToPath(new URL('./themeConfig.js', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/@layouts', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images/', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/assets/styles/', import.meta.url)),
      '@configured-variables': fileURLToPath(new URL('./src/assets/styles/variables/_template.scss', import.meta.url)),
      'apexcharts': fileURLToPath(new URL('node_modules/apexcharts-clevision', import.meta.url)),
      '@db': fileURLToPath(new URL('./src/plugins/fake-api/handlers/', import.meta.url)),
      '@api-utils': fileURLToPath(new URL('./src/plugins/fake-api/utils/', import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: [
      './src/**/*.vue',
    ],
  },
})
