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
* リストのレンダリング (App6.js)
  - map()
  - filter() で条件を設定し抽出できる
  - キーでリストアイテムを整理
    - map() 呼び出し内の直接のJSX要素はキーが必要
    - 指定なしの場合、配列のインデックスキーを使用するが、バグにつながるので指定すること
    - その場でキーを生成しない。キー一致が失われ、遅くなりユーザー入力も失う。データに基づいた安定したIDを使用すること
    - コンポーネントにIDが必要な場合は、それを別の props として渡すこと `<Profile key = {id} userId ={id}/>`
    - キーは、各コンポーネントがどの配列アイテムに対応するかをReactに伝え、後でそれらを一致させることができるようにする。配列アイテムの移動(並び替え)、挿入、削除する場合に重要
    - キーはその場で生成するのではなく、データに含める必要がある
    - リストアイテムごとに複数のDOMノードを表示したい場合、`<></>` 構文ではキーを渡せないため、div で括るか <Fragment> 構文を使用する必要がある

```jsx
import { Fragment } from 'react'

// ...

const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
)
```

* キーの入手先
  - データベース：データベースキー/ID
  - ローカルで生成されたデータ：アイテム作成時のインクリメントカウンター or crypto.randomUUID() or uuid
* キーのルール
  - キーは兄弟間で一意である必要がある。異なる配列のJSXノードなら同じキーでも問題ない
  - キーを変更してはいけない
* Reactにキーが必要な理由：兄弟間でアイテムを一意に識別できるようにするため
* Try out some challenges 2 (ネストされたリストのループ処理)

```jsx
export default function RecipeList() {
  return (
    <article>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>{ingredient}</li>
            )}
          </ul>
        </div>
      )}
    </article>
  )
}
```

* Try out some challenges 3 (リストアイテムコンポーネントの抽出)
  (↑ をコンポーネントで分割)

```jsx
/**
 * 配列からレシピのリストを作成
 * @ref{ @link https://beta.reactjs.org/learn/rendering-lists#challenges }
 */
import { recipes } from './data.js'

export function Recipe({ id, name, ingredients }) {
  return (
    <div className="recipe">
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>{ingredient}</li>
        )}
      </ul>
    </div>
  )
}

export default function RecipeList() {
  return (
    <article className="recipe-wrapper">
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe key={recipe.id} {...recipe} /> // キー、スプレッド構文で
      )}
    </article>
  )
}
```

* Try out some challenges 4 (リストの行間に区切り線を付ける)

```jsx
/**
 * 行間に区切り線を付ける
 * @ref{ @link https://beta.reactjs.org/learn/rendering-lists#challenges }
 */
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, i) =>
        <Fragment key={i}>
          {i > 0 && <hr />} {/* 1つめは上に区切り線付けない */}
          <p>{line}</p>
        </Fragment>
      )}
    </article>
  )
}

```

## Keeping Components Pure (コンポーネントを純粋に保つ)

* 純粋な関数は計算のみを実行、それ以上は実行しない。クラス全体の不可解なバグや予測できない動作を回避できる
* Reactは、作成する全てのコンポーネントが純粋関数であると想定
  - 自分の責務のみ気にする。呼び出される前に存在していたオブジェクトや変数は変更されない
  - 同じ入力が与えられた場合、純粋関数は常に同じ JSX を返す必要がある
  - コンポーネントが必ず特定の順序でレンダリングされることを期待するべきではない
  - 各コンポーネントは「自分で考える」だけ。レンダリング中に他のコンポーネントと調整したり、他のコンポーネントに依存したりしないようにする必要がある
* 副作用:意図する(意図しない）結果
  - レンダリング前に存在していたオブジェクトや変数を変更すると、コンポーネントが不純になる

```jsx
// 良くない例：不純なコンポーネント
// このコンポーネントを複数回呼び出すと「異なるJSXが生成」される
// → 常に同じ JSX を返す必要がある
let guest = 0; // 既存の変数

function Cup() {
  guest = guest + 1; // Bad: このコンポーネントが既存の変数を変更している
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  )
}
```

```jsx
// 修正：代わりに、ゲストを小道具として渡すことで純粋を保てる
// JSX が返す値は、guest prop にのみ依存
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
```

* Reactは、開発中に各コンポーネントの関数を2回呼び出す「厳密モード」を提供する。これらのルールに違反するコンポーネントを見つけるのに役立つ
  - `<React.StrictMode>`でラップすると有効に
  - 純粋関数は計算するだけなので、2回呼び出しても結果は同じ。不純なら、2回呼び出しで結果が変わることがある
* ただし、レンダリング中に作成したばかりの変数やオブジェクトを変更することはまったく問題ない (= ローカルミューテーション)

```jsx
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  let cups = [];
  
  // i: コンポーネント内部でレンダリング中に作成する変数 (OK。コンポーネント外ならNG)
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}
```

* 副作用 (画面の更新、アニメーションの開始、データの変更)
  - レンダリング中ではなく、「側面」で発生するもの
  - 副作用は通常、イベントハンドラー内にある (ボタンをクリックなど)
  - イベントハンドラーはコンポーネント内で定義されていますが、レンダリング中には実行されない。なので、イベントハンドラーは純粋である必要はない
  - ? 他のすべてのオプションを使い果たして、副作用に適したイベントハンドラーが見つからない場合でも、コンポーネントでuseEffect呼び出しを使用して、返されたJSXにアタッチできます。これは、副作用が許可されたときに、レンダリング後に後で実行するようにReactに指示します。ただし、このアプローチは最後の手段となるはずです。
  - 返却するJSXでコンポーネントのロジックを表現するように努めること。「物事を変更する」必要がある場合は、通常、イベントハンドラーで変更する。最終手段として、Effectを使用
  - 可能であれば、レンダリングだけでロジックを表現すること
  - 純粋関数は常に同じ結果を返すため、キャッシュしても安全
  - データのフェッチからアニメーション、パフォーマンスに至るまで、コンポーネントを純粋に保つことで、Reactパラダイムの力を解き放つ
* Try out some challenges 1 - 壊れた時計の修正

```jsx
/**
 * h1 のCSSクラスを切り替える
 * 深夜から午前6時間までの時間帯は "night"
 * それ以外の時間帯は "day"に設定
 */
export default function Clock({ time }) {
  let hours = time.getHours() // 値変えてテスト
  let className = ''

  if (hours >= 0 && hours <= 6) {
    // document.getElementById('time').className = 'night' // 
    className = 'night'
  } else {
    className = 'day'
  }
  return (
    <h1 className={className}>
      {time.toLocaleTimeString()}
    </h1>
  )
}
```

* Try out some challenges 2 - 壊れたプロフィールを直す (クリア)
* Try out some challenges 3 - 壊れたストーリートレイを直す (わからんが、ミューテーションがローカルに保つ)


## Adding Interactivity - 双方向性の追加 (App7.js)

1. ユーザーが開始したイベントを処理する方法
2. コンポーネントに状態を含む情報を「記憶」させる方法
3. ReactがUIを2つのフェーズで更新する方法
4. 変更した直後に状態が更新されない理由
5. 複数の状態の更新をキューに入れる方法
6. 状態のオブジェクトを更新する方法
7. 状態の配列を更新する方法

* Reactでは、時間の経過とともに変化するデータを「状態」と呼ぶ
* イベントへの対応
  - JSXにイベントハンドラー(クリック、ホバー、フォーム入力へのフォーカスなど)を追加できる
  - <button>などの組み込みコンポーネントは、onClickなど組み込みブラウザイベントのみをサポート
  - 独自コンポーネントを作成し、それらのイベントハンドラーの props に任意のアプリケーション固有の名前(ハンドル名)を付けることもできる
* 状態：コンポーネントのメモリ
  - コンポーネントは、現在の入力値、現在の画像、ショッピングカートなどを「記憶」する必要がある
  - Reactでは、この種のコンポーネント固有のメモリは状態と呼ぶ
  - フックは、コンポーネントでReact機能を使用できるようにする特別な機能
  - useStateフックを使用して、コンポーネントに状態を追加できる
  - useStateフックで、状態変数を宣言できる。初期状態を取り、現在の状態とそれを更新できる状態セッター関数の2つの値を返します。

★★TODO: https://beta.reactjs.org/learn/adding-interactivity#responding-to-events から


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
