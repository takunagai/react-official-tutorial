# Getting Started with Create React App

## Basic (App.js)

* [Quick Start](https://beta.reactjs.org/learn) を進めていく
  * コンポーネントの基本 (ボタン、条件分岐、状態の持たせ方)
  * React Developer Tools でコンポーネントの状態やセットされた関数をチェック


## Thinking in React (App2.js)

[Thinking in React](https://beta.reactjs.org/learn/thinking-in-react)

* (ステップ0：JSON、モックアップはあるものとする)
* ステップ1：UIをコンポーネント階層に分割する
* ステップ2：Reactで静的バージョンをビルドする
* ステップ3：UI 状態の最小限であるが完全な表現を見つける
    - 状態をDRY（Do n’t Repeat Yourself）に保つことが重要な原則
    - props(関数に渡す引数のようなもの)と状態(コンポーネントのメモリのようなもの)の2種類の「モデル」データ
    - リスト内のアイテムの数を表示する場合、アイテムの数を別の状態値として保存しない。代わりに、配列の長さを読み取ること
* ステップ4：状態(State)を所有/状態の変更を担当するコンポーネントを特定
    - Reactは一方向のデータフローを使用。親→子コンポーネントに階層を下ってデータを渡す
      - どのコンポーネントがどの状態を所有する必要があるか？
      - 多くの場合、状態を直接共通の親に置くことができる
      - 状態を所有することが理にかなっているコンポーネントが見つからない場合は、状態を保持するためだけに新しいコンポーネントを作成し、共通の親コンポーネントの上の階層のどこかに追加する
      - 例では、ProductTable と SearchBar 共通の親 FilterableProductTable に決定
      - FilterableProductTable で useState() フックを使用し状態を追加する
      - ★★TODO: 続き：https://beta.reactjs.org/learn/thinking-in-react
        "In the sandbox above,"
* ステップ5：逆データフローを追加する
    - ユーザー入力に応じて状態を変更するには、逆方向に流れるデータをサポートする必要がある
    - 階層下のフォームコンポーネントは、FilterableProductTableの状態を更新する必要がある
    - 現在、チェックボックスをチェックしても無効。`value={filterText}` の状態を更新する必要がある
    - FilterableProductTableの状態を更新させるには、useState の更新用関数をSearchBarに渡す必要がある(onFilterTextChange={setFilterText})

## Describing the UI (App3.js)

* Reactは、ユーザーインターフェイス（UI）をレンダリングするためのJavaScriptライブラリ
* UI(ボタン、テキスト、画像などの小さな単位)を組み合わせ、再利用可能でネスト可能なコンポーネントにすることができる
* 最初のコンポーネント
    - コンポーネントは、マークアップを振りかけることができるJavaScript関数
    - コンポーネントは、ボタンのように小さくすることも、ページ全体のように大きくすることもできる
    - 例：3つのプロファイルコンポーネントをレンダリングするギャラリーコンポーネント
* コンポーネントを分割する (別ファイルにしimport)
* JSX (ルート１つ)
* JSX内でブレース{}内にJavaScriptコードを書ける
* props を使用して親子コンポーネントで相互に通信 (utils.js)
* 条件付きレンダリング(if, &&, ? : )
* リストのレンダリング
* コンポーネントを純粋に保つ
    - コンポーネントを厳密に純粋な関数として記述するだけで、クラス全体の不可解なバグや予測できない動作を回避できる

## Your First Component (読むだけ)

* Reactを使用すると、アプリのコンポーネント、再利用可能な UI 要素を作成できる
* Reactアプリでは、UIのすべての部分がコンポーネント
* Reactコンポーネントは通常のJavaScript関数だが、名前は大文字で始める必要がある。でないと機能しない
* ルートコンポーネントは、CodeSandbox / Create React App なら、src/App.js、Next.js なら、pages/index.jsで定義される
* Next.js などのフレームワークは、空のHTMLファイルを使用し JavaScriptでページの管理をReactに「引き継ぐ」のではなく、ReactコンポーネントからHTMLを自動生成する。これにより、JavaScriptコードが読み込まれる前にアプリがコンテンツを表示できる

```js
// Try out some challenges
function Profile() {
  return (
    <img src="https://picsum.photos/600/400.webp" alt="aaa" />
  )
}

export default function Gallery() {
  return (
    <>
      <Profile />
      <Profile />
    </>
  )
}
```

## Importing and Exporting Components コンポーネントのインポートとエクスポート (読むだけ)

* コンポーネントの魔法は、その再利用性
* ルートコンポーネントファイル
    - CodeSandbox / Create React App：App.js
    - Next.js：ページごとに異なる
* コンポーネントの移動 3つのステップ
    1. コンポーネントを配置するための新しいJSファイルを作成 (2つのコンポーネントファイルに分割)
    2. コンポーネントのファイルから、関数コンポーネントをエクスポート（default or 名前付きエクスポート）
    3. コンポーネントを使用するファイルにインポート（default or 名前付きエクスポートをインポート）
* `import Gallery from './Gallery';` と、拡張子 js を省いて書ける(ES Modules)
* default エクスポート / 名前付きエクスポート
  - 同じファイルでそれらの一方または両方を使用できる
  - ファイルには、デフォルトのエクスポートを1つしか含めることができないが、名前付きのエクスポートをいくつでも含めることができる
  - コンポーネントをどのようにエクスポートするかによって、コンポーネントをどのようにインポートする必要があるかが決まる
  - default エクスポート：`export default function Button() {}`
  - default インポート：`import Button from './button.js';`
  - ※任意の名前を付けることができる
  - 名前付き エクスポート：`export function Button() {}`
  - 名前付き インポート：`import { Button } from './button.js';`
  - ※名前付きインポートでは、名前は両側で一致する必要がある
* 1つのコンポーネントのみをエクスポートする場合はデフォルトのエクスポート、複数のコンポーネントと値をエクスポートする場合は名前付きエクスポートを使用
* `export default（）=> {}` のような名前のないコンポーネントは、デバッグが難しくなるため使わない
* ↓ Try out some challenges (コンポーネントをさらに分割する)

```js
// App.js
import Gallery from './Gallery.js';

export default function App() {
  return (
    <div>
      <Gallery />
    </div>
  );
}
```

```js
// Gallery.js
import Profile from './Profile.js'

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

```

```js
// Profile.js
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}
```

## Writing Markup with JSX (JSX でマークアップする) App4.js

* Reactコンポーネントは、構文拡張 JSX を使用してそのマークアップを表す
* ボタンのレンダリングロジックとマークアップを一緒に保つことで、編集のたびにボタンの同期が保たれる
* JSX の規約は HTML より厳しい
    - ルート要素はひとつのみ。JavaScript は関数から2つのオブジェクトを配列にラップせずに返すことはできないため
    - タグ入れたくないなら `<></>` で囲む(React flagment)
    - 空閉じタグ必要 `<img>` → `<img />`
    - 変数名にダッシュを含めたり予約後にしたりできない。キャメルケースで書く
      - stroke-width → strokeWidth, class (予約後) → className
    - 歴史的な理由から、aria-*属性とdata-*属性は、HTMLのようにダッシュ付きで記述
* [HTML to JSX コンバーター](https://transform.tools/html-to-jsx)

## 中括弧に JavaScript コード

* JSXで {} (中括弧)を使用して、JavaScript へのウィンドウを開くことができる
* `{{}}` (ダブルカーリー) で CSS や その他のオブジェクトにアクセス

## Passing Props to a Component (コンポーネント間での props の受け渡し)

* props を使うと、親コンポーネントと子コンポーネントについて個別に考えることができる
* props は、コンポーネントに対する唯一の引数
* フォールバックするデフォルト値を指定
* すべての props を子供に転送する場合、Spread 構文を使用して props 転送を簡潔に書ける

```js
// Before
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

// Spread 構文で簡潔に書ける
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```

* Passing JSX as children JSXを子として渡す (App4.js 続き)
    - children で親コンポーネントに子要素を埋め込む
* props が時間とともにどのように変化するか (後で状態管理)
* 条件付きレンダリング (App5.js)
  - ネストされた条件付きマークアップが多くコンポーネントが乱雑になる場合は、子コンポーネントを抽出してクリーンアップする
  - 論理積演算子（&&）真の時のみレンダリング
    - ※注意：&& の左側に数字を入れない(変数でも)。左側をブール値に自動変換し、レンダリングされてしまうから
  - 3項演算子で主コードがややこしくなりそうなら、前で if 文で変数をセットしとく

★★TODO: https://beta.reactjs.org/learn/passing-props-to-a-component#challenges から



- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
