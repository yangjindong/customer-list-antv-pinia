import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import {
  createStyleImportPlugin,
  AndDesignVueResolve
} from 'vite-plugin-style-import'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc // 设置 `@` 指向 `src` 目录
      // '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    vue(),
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      include: path.resolve(__dirname, './src/locales/**')
    }),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      resolvers: [AntDesignVueResolver()],

      dts: path.resolve(pathSrc, 'auto-imports.d.ts')
    }),
    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          prefix: false,
          enabledCollections: ['ep']
        }),
        AntDesignVueResolver()
      ],

      dts: path.resolve(pathSrc, 'components.d.ts')
    }),
    createStyleImportPlugin({
      resolves: [AndDesignVueResolve()]
      // libs: [
      //   // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
      //   {
      //     libraryName: 'ant-design-vue',
      //     esModule: true,
      //     resolveStyle: (name) => {
      //       return `ant-design-vue/es/${name}/style/index`
      //     }
      //   }
      // ]
    }),

    Icons({
      autoInstall: true
    }),

    Inspect()
  ],
  base: './', // 设置打包路径
  server: {
    port: 8080, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:x000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // },
  }
})
