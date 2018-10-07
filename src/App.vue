<template>
  <div id="app">
    <header>
      <span>{{ title }}</span>
    </header>
    <main>
      <img src="./assets/logo.png" :alt="title">
      <h1>{{ message }}</h1>
      <router-view message="router-viewよりこんにちは"></router-view>
      <Hello message="componentよりこんにちは"></Hello>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Hello from './components/Hello.vue' // Helloをimport

//コンポーネントの設定
@Component({
  name: 'app',
  // Helloをcomponentといて定義
  components: {
    Hello
  }
})

//クラス
export default class App extends Vue {
  // 変数 private は書いても書かなくてもよい
  private title = 'My PWA page'
  private message = ''

  // コンストラクタのようなもの。一番最初に呼ばれるところ。
  mounted () {
    // ログ出力 Chromeブラウザの console で確認できる。
    console.log('mounted App')
    // 関数呼び出し
    this.showMsg('Hello, Vue.js and Typescript')
  }
  // 関数
  showMsg (msg: string) {
    this.message = msg
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
