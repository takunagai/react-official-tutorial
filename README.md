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
  - useStateフックで、状態変数を宣言できる。初期状態を取り、現在の状態とそれを更新できる状態セッター関数の2つの値を返します
* レンダリングしてコミット
  - コンポーネントを画面表示する前に、Reactでレンダリングする必要がある
  - ３ステップ
    * レンダリングをトリガーする（ダイナーの注文をキッチンに配信する） 
    * コンポーネントのレンダリング（キッチンから注文を取得）
    * DOMへのコミット（テーブルに順序を付ける）
  - スナップショットとしての状態
    * 通常のJavaScript変数とは異なり、Reactの状態はスナップショットのように動作する。これを設定しても、既存の状態変数は変更されませんが、代わりに再レンダリングがトリガーされます。

```js
console.log(count);  // 0
setCount(count + 1); // Request a re-render with 1
console.log(count);  // Still 0!
```

* 一連の状態変化のキューイング (App7.js, Counter.js)
  - スナップショット：状態を設定すると、新しい再レンダリングが要求されるが、すでに実行されているコードでは変更されない ★★TODO: 良くわからない
  - 状態を設定するときにアップデータ関数を渡すことで修正できる
* 状態のオブジェクトの更新
  - Stateは、オブジェクトを含むあらゆる種類のJavaScript値を保持できる
  - ただし、React状態で保持しているオブジェクトや配列を直接変更するのはNG
  - オブジェクトや配列を更新する場合は、新しいものを作成し、そのコピーを使用するように状態を更新する必要がある
  - 通常、... Spread構文で、変更するオブジェクトと配列をコピーする
  - ネストされたオブジェクトの更新 (App7.js, Form2.jsx)
    - コード内のオブジェクトのコピー、状態管理ライブラリ Immerでコードをスッキリ書ける `npm - install immer use-immer`
      - useImmer 関数、useState 同様のタプルを返す
      - 関数をアップデーターに渡す場合、プロデューサーが終了して変更が不変になり、次の状態になるまで、ドラフト引数を自由に変更できる
  - 状態での配列の更新
    - stateに配列も格納できる。JavaScript の可変オブジェクトの一種であり、読み取り専用として扱う必要がある。オブジェクトと同様、state 
      に格納された配列を更新したい場合は、新しい配列を作成し（または既存の配列をコピーし）、新しい配列を使用するようにstateを設定する必要がある

## Responding to Events イベントへの対応

JSX にイベントハンドラーを追加 (クリック、ホバー、フォーム入力へのフォーカスなどの独自関数)
以下を学ぶ

1. イベントハンドラーを作成するさまざまな方法
2. 親コンポーネントからイベント処理ロジックを渡す方法
3. イベントがどのように伝播し、どのように停止するか

* イベントハンドラーの追加 (App8.jsx, Toolbar.jsx)
  - 関数を定義 → その関数を props として JSX タグに渡す。
  - 通常、コンポーネント内で定義する
  - ハンドルとその後に処理されるイベントという名前を付けるのが慣例
    (`onClick={handleClick}`、`onMouseEnter={handleMouseEnter}` など)
  - イベントハンドラーをインラインで定義することもできる。短い処理に便利
  - イベントハンドラーに渡す関数は、呼び出すのではなく渡す。レンダリング時に実行でなく後で呼び出される関数を渡す。関数名に括弧付けない
* イベントハンドラーでの props の読み取り
  - イベントハンドラーはコンポーネント内で宣言されているため、コンポーネントの props にアクセスできる
* イベントハンドラーを props として渡す
  - 多くの場合、親コンポーネントで子のイベントハンドラーを指定する必要がある。例えば、Button コンポーネントを使用している場所によっては、別の機能を実行したい場合など
  - デザインシステムを使う場合、ボタンなどのコンポーネントにはスタイルが含まれているが、動作は指定されていないのが一般的。代わりに、PlayButtonやUploadButtonなどのコンポーネントでイベントハンドラーを渡す
* イベントハンドラーの props に名前を付ける
  - <button>や<div>などの組み込みコンポーネントは、onClickなどのブラウザイベント名のみをサポート。ただし、独自のコンポーネントを作成する場合は、イベントハンドラーの props に任意の名前を付けることができる
  - 慣例によりイベントハンドラーの小道具は on で始まり、その後に大文字が続く必要がある
* コンポーネントが複数のインタラクションをサポートしている場合、アプリ固有の概念に合わせてイベントハンドラーの props に名前を付けることができる (App8.jsx, Toolbar2.jsx)
  - Appコンポーネントが、onPlayMovie, onUploadImage で Toolbar2 コンポーネントが何をするかを知る必要がないことに注意
* イベントの伝播(バブリング)
  - イベントハンドラーは、コンポーネントが持つ可能性のあるすべての子からのイベントもキャッチする
  - イベントが発生した場所から始まり、ツリーを上っていく
  - React、アタッチした JSX タグでのみ機能する onScroll を除き、すべてのイベントは伝播する
  - `e.stopPropagation()` で、イベントの伝播を停止できる (App8.jsx, Toolbar3.jsx)
    - イベントハンドラーは、唯一の引数としてイベントオブジェクトを受け取る(慣例で e)。このオブジェクトでイベントに関する情報を読み取れ、伝播を停止することもできる
    - React では、親コンポーネントに到達しないようにする
* イベント伝播の代わりにハンドラーを渡す
* デフォルトの動作の防止
  - 一部のブラウザイベントには、デフォルトの動作が関連付けられている(フォームとボタン、リンク他)
* Try out some challenges 1 - ボタンクリックで背景色を変更(App8.jsx, LightSwitch.jsx)
* Try out some challenges 2 - イベントの伝播の停止

```jsx
export default function ColorSwitch({ onChangeColor }) {
  return (
    <button onClick={e => {
      e.stopPropagation()
      onChangeColor()
    }}>
      Change color
    </button>
  )
}

```

## State: A Component's Memory - 状態：コンポーネントのメモリ

* 多くの場合、コンポーネントはインタラクションの結果として画面の内容を変更する必要がある (例：フォーム入力→入力フィールド更新、次へをクリック→表示される画像が変更)
  - → コンポーネントは、現在の入力値、現在の画像などを記憶する必要がある
  - Reactでは、この種のコンポーネント固有のメモリを「状態(state)と呼ぶ

学習すること

1. useState フックを使用して状態変数を追加する方法 
2. useState フックが返す値のペア 
3. 複数の状態変数を追加する方法 
4. State がローカルと呼ばれる理由

### 通常のローカル変数ではうまくいかない (App9.jsx, data2.js)

* 理由1: ローカル変数はレンダリング間で保持されないため
* 理由2: ローカル変数を変更しても、レンダリングはトリガーされない
* → React をトリガーしコンポーネントを新しいデータで再レンダリングするには「useState フック」を使う。useState フックは、以下を提供する
  * レンダリング間でデータを保持するための状態変数
  * 変数を更新、React をトリガーしコンポーネントを再レンダリングする状態セッター関数

* use で始まる関数はフック。React がレンダリングしている時にのみ使用できる特別な機能。さまざまなReact機能にアクセスできる
* フックは、コンポーネントのトップレベル、または独自のフックでのみ呼び出すことができる
  (条件、ループ、その他のネストされた関数内でフックを呼び出すことはできない)
* フックは関数だが、コンポーネントのニーズに関する無条件の宣言と考えると便利。コンポーネントの上部にあるReact機能を use する
* useState の仕組み
  1. コンポーネントが初レンダリングされる。index の初期値 として useState に 0 を渡したため、[0、setIndex] が返される。Reactは、0 が最新の状態値であることを記憶している 
  2. 状態を更新。ユーザーがボタンをクリックすると、setIndex（index+1）が呼び出される。 
     index は 0 なので、setIndex(1)。これにより、Reactは index が 1 になったことを記憶、別のレンダリングをトリガーする
  3. コンポーネントの2番目のレンダリング。 Reactは引き続き useState(0) を認識しますが、React は index を 1 に設定したことを記憶しているため、代わりに [1、setIndex] を返す 
  4. and so on.
* コンポーネントに複数の状態変数を与える
  - 1つのコンポーネントに、必要な数のタイプの状態変数をいくつでも含めることができる (前のギャラリーのサンプル)
  - 状態が無関係である場合は、複数の状態変数を用意するのがよい
  - 2つの状態変数を一緒に変更することが多い場合は、それらを1つにまとめたオブジェクトを保持する単一の状態変数を使うのがよい
* 状態は画面上のコンポーネントインスタンスに対してローカル
  - 同じコンポーネントを2回レンダリングすると、各コピーは完全に分離された状態。いずれかを変更しても他に影響しない
  - props とは異なり、状態はそれを宣言するコンポーネントに対して完全にプライベート。親コンポーネントからは変更不可
  - 同コンポーネント複数の状態を同期したい場合は、親コンポーネントに状態を持たせる
* 状態変数は "コンポーネントの再レンダリング間で情報を保持するためにのみ" 必要。単一のイベントハンドラー内で通常の変数が適切に機能する場合(`const msg = prompt('メッセージ')` など)は、状態変数を導入してはダメ

### Render and Commit - レンダリングとコミット

* コンポーネントを画面に表示する前に、Reactでレンダリングする必要がある
* レンダリングが常にDOM更新を生成するとは限らない
* コンポーネントが画面に表示されるまで (キッチンを例に)
  1. Trigger: レンダリングのトリガー（ゲストの注文をキッチンに届ける）
    - 1-1. 最初(アプリ起動時)のレンダリングコンポーネント
      - ルートコンポーネントとターゲットDOMノードを使用し、ReactDOM.render を呼び出すことで実行される (Image.jsx)
    - 1-2. 状態更新時の再レンダリング
      - set 関数で状態を更新することで、さらにレンダリングをトリガーできる (=トリガーされた関数コンポーネントを呼び出す)
      - コンポーネントの状態を更新すると、レンダリングが自動的にキューに入れられる(注文するレストランの客)
  2. Render: コンポーネントのレンダリング（キッチンから注文を取得）
      - レンダリングをトリガーした後、React はコンポーネントを呼び出し、画面に何を表示するかを判断する
      - 「レンダリング」とは、Reactがコンポーネントを呼び出すこと
      - 更新されたコンポーネントが他のコンポーネントを返す場合、Reactはそのコンポーネントを次にレンダリング。そのコンポーネントも何かを返す場合も同様
        (再帰的。ネストされたコンポーネントがなくなり、Reactが画面に何を表示するかを正確に認識するまで) (Gallery.jsx)
      - 注意：レンダリングは常に純粋な計算である必要がある。同じ入力、同じ出力。同じ入力が与えられた場合、コンポーネントは常に同じJSXを返す必要がある
        - そうしないと、コードベースが複雑になるにつれて、紛らわしいバグや予測できない動作が発生しかねない
        - Strict mode で開発する場合、Reactは各コンポーネントの関数を2回呼び出す。これは、不純な関数によって引き起こされるミスを表面化するのに役立つ。以下のような意図しない副作用の検出チェックを行う
          - 安全でないライフサイクルの特定
          - レガシーな文字列 ref API の使用に対する警告
          - 非推奨な findDOMNode の使用に対する警告 
          - 意図しない副作用の検出
          - レガシーなコンテクスト API の検出
          - 再マウントしても正しく描画されるかをチェック
        - React 18 の StrictMode ではコンポーネントの mount → unmount → mount を行うまた、useEffect Hock も2回実行される (将来導入されるOffscreenAPIが入ると、コンポーネントが生成されているが表示されていない状態が追加されることへの準備)
        - パフォーマンスの最適化
          - ツリー内で上位のコンポーネントが更新された場合、ネストされたすべてのコンポーネントをレンダリングするのでパフォーマンスがよくない → いくつかのオプトイン方法で解決できる(後で)
  3. Commit: DOMへのコミット（テーブルにオーダーを届ける）
    - コンポーネントをレンダリング（呼び出し）した後、React は DOM を変更する
      - 最初のレンダリング：Reactは appendChild() DOM APIを使用して、作成したすべてのDOMノードを画面に配置する
      - 再レンダリング：React は必要最小限の操作(レンダリング中に計算)を適用して、DOM を最新のレンダリング出力と一致させる。つまり、間に違いがある場合にのみ DOM ノードを変更する
  4. 締めくくり
    - ブラウザのペイントレンダリングが完了し、ReactがDOMを更新した後、ブラウザは画面を再ペイントする(ブラウザレンダリング、ここでは「ペイント」と呼ぶ)

### State as a Snapshot スナップショットとしての状態

* 状態(状態変数)はスナップショットのように動作する。これを設定しても、既存の状態変数は変更されない。代わりに再レンダリングがトリガーされる
* ユーザーインターフェイスは、クリックなどのユーザー入力に応じて直接変化すると考えることができるが、React
  では、このメンタルモデルとは少し異なる動作をする。インターフェイスが入力に反応するためには、その状態を設定する必要がある
  - setHoge()で状態変数が更新されたら、その状態に基づいてレンダリング
    (サンプルは、FeedbackForm.jsx)
* レンダリングは時間内にスナップショットを取る
  - 「レンダリング」とは、Reactが関数であるコンポーネントを呼び出していることを意味する
  - その関数から返す JSX は、UI のスナップショットのようなもの。その props、イベントハンドラー、ローカル変数はすべて、レンダリング時の状態を使用して計算されたもの
  - React はこのスナップショットに一致するように画面を更新し、イベントハンドラーを接続する
  - その結果、ボタンを押すと、JSXからクリックハンドラーがトリガーされる
  - Reactがコンポーネントを再レンダリングする場合
    1. React が関数を再度呼び出します。
    2. 関数が新しい JSX スナップショットを返す
    3. Reactが、返されたスナップショットと一致するように画面を更新する
  - コンポーネントのメモリとしての状態は、関数の外で React自体に棚にあるかのように生きている
  - Reactがコンポーネントを呼び出すと、その特定のレンダリングの状態のスナップショットが提供される
  - コンポーネントは、JSX に新しい props とイベントハンドラーのセットを含むUIのスナップショットを返す。これらはすべて、そのレンダリングの状態値を使用して計算される
  - setUpdate を取得 → 状態値を更新 → 状態値のスナップショットをコンポーネントに渡す
  - (サンプル：`setNumber(number + 1)` 三連でも +1 しかされないサンプル。+1する関数を return 
    の外に書かないと正常に動作しない。状態を1に3回設定(0+1を3回)するだけ。「次のレンダリング」でのみ変更される。)
  - 状態変数の値は、イベントハンドラーのコードが非同期であっても、レンダリング内で変更されることはない
  - Reactは、1つのレンダーのイベントハンドラー内で状態値を「固定」に保つ。なので、コードの実行中に状態が変化したかどうかを心配する必要はない
  - 再レンダリングする前に最新の状態を読みたい場合、状態更新機能(後で)を使用する
  - Try out some challenges - Traffic Light

### Queueing a Series of State Updates - 一連の状態更新のキューイング

* 状態変数を設定すると、別のレンダリングがキューに入れられる
* 次のレンダリングをキューに入れる前に、値に対して複数の操作を実行したい場合「バッチ処理」を行う
* 「+3」ボタンをクリックで、setNumber（number + 1）を3回呼び出しても 1 しか増えない(上のスナップショット参照)
* React は、イベントハンドラーのすべてのコードが実行されるまで待機してから、状態の更新を処理する
* 最初の料理オーダーを行っても、ウェイターはキッチンに駆け寄らずそのまま注文を受けるような感じ
* これにより、再レンダリングをあまりトリガーせずに、複数のコンポーネントからでも複数の状態変数を更新できる
* ただしこれは、イベントハンドラーとその中のコードが完了するまで  UIが更新されないことも意味する
* この動作は「バッチ処理」といい、実行を大幅に高速化し、「半完成」レンダリングの処理を回避する
* Reactは、一般的に安全な場合にのみバッチ処理を実行する (例：最初のボタンクリックでフォームが無効になった場合、2回目のクリックでフォームが再度送信されることはない)

* 次のレンダリングの前に、同じ状態変数を複数回更新する
  - `setNumber(number + 1)` ではなく、次の状態を計算する関数を渡す `setNumber(n => n + 1)`
  - React に単に置換するのではなく「状態値を使用して何かを行う」ように指示する方法
  - 「アップデータ関数」を渡すことで、Reactはキューを通過し、最終的に更新された状態を提供する(TestCount3.jsx)
    - `setNumber(n => n + 1)`
  - 状態を置き換えた後に状態を更新するとどうなるか？(TestCount3.jsx)
    - `setNumber(number + 5)` `setNumber(n => n + 1)` で +6 になる
  - 更新後に状態を置き換えるとどうなるか？(TestCount4.jsx)
    - 上のに `setNumber(42)` を追記すると、すでにキューに入れられているものを無視して、キューに「replacewith42」を追加、42 となる
  - イベントハンドラーが完了すると、Reactは再レンダリングをトリガー。再レンダリング中にキューを処理する
    - アップデータ関数はレンダリング中に実行されるため純粋であり結果のみを返す必要がある。それらの内部から状態を設定したり、他の副作用を実行してはならない
    - Strict モードでは、Reactは各アップデーター関数を2回実行する (検証用、2番目の結果は破棄)
* アップデータ関数の引数の命名規則：『対応する状態変数の最初の1,2文字』で名前を付けるのが一般的
  - より詳細なコードが必要な場合、別の一般的な規則は、setEnabled（enabled =>！enabled）のように完全な状態変数名を繰り返すか、setEnabled（prevEnabled =>！prevEnabled）のようにプレフィックスを使用する
* まとめ
  - 状態を設定しても、既存のレンダリングの変数は変更されないが、新しいレンダリングが要求される
  - Reactは、イベントハンドラーの実行が終了した後、状態の更新を処理する(バッチ処理)
  - 1つのイベントでいくつかの状態を複数回更新するには、アップデーター関数を使用する(`setNumber(n => n + 1)`)
  - Try out some challenges 1 - 遅延のある処理を扱うボタン (Scoreboard.jsx)
  - Try out some challenges 2 - ドラッグでボックスを移動 (Canvas.jsx, CanvasBackground.jsx, CanvasBox.jsx)
  - Try out some challenges 3 - 2を Immer でスッキリ書く (Canvas.jsx, CanvasBackground.jsx, CanvasBox.jsx を更新)
  - 

  - ★★TODO: Try out some challenges 1 - テスト

### Updating Objects in State - 状態のオブジェクトの更新

* State は、オブジェクトを保持できる
* ただし、React状態で保持しているオブジェクトを直接変更してはダメ。新しいオブジェクトを作成し、または既存のオブジェクトのコピーを作成し、そのコピーを使用するように状態を設定する必要があ
る
* js では、オブジェクト自体の内容を変更することが可能(ミュータブル)だが、他と同じように不変であるかのように扱う必要がある → 変更でなく、置き換え
* 状態のオブジェクトは、読み取り専用として扱う
* `setHoge({オブジェクトの内容})` と親オブジェクトを作成して元と同じプロパティと値をセットでコピー。これで React が変更されたことを認識し再レンダリング(MovingDot.jsx)
* ミューテーションは、すでに状態にある既存のオブジェクトを変更する場合にのみ問題になる。作成したばかりのオブジェクトを変更することは、他のコードがまだそれを参照していないため、問題はない
  - これは「局所突然変異」と呼ばれる。レンダリング中にローカルミューテーションを実行することも可能
* スプレッド構文を使用したオブジェクトのコピー (Form4.jsx)
  - 作成する新しいオブジェクトの一部として既存のデータを含めたい場合(例：フォーム内の1つのフィールドのみを更新、他のフィールドは以前の値を保持したい場合)
  - ...spread構文は「浅い」ことに注意。1レベルの深さまでしかコピーしない(高速だが、ネストされたプロパティを更新する場合は、複数回使用する必要がある)
* 動的な名前でプロパティを指定 (単一のイベントハンドラーで処理できる)
  - 呼び出し元の name に変えたいプロパティの名前を付けておき、上書きで [] 付きで動的にプロパティを設定することで冗長なイベントハンドラーをまとめてスッキリさせることができる(Form4.jsx 改)
* ネストされたオブジェクトの更新 (Form5.jsx)
  - 全てコピーし、変えたいプロパティを含む親プロパティの更新したい子プロパティをオーバーライド
  - 補足：実際は、ネストされたオブジェクトというものはなく、2つの異なるオブジェクトが参照仕合ってネストしているように見えている
  - 状態が深くネストされている場合の対策：フラット化する。or 状態構造を変更したくない場合は、ネストされたスプレッドへのショートカット (Immer ライブラリ等)を使用することを推奨
  - Immer ライブラリを使うと、ネストがいくらあってもドットシンタックス指定でスッキリ書ける
  - メモ
    - 一般的なReact最適化戦略は、前の小道具または状態が次のものと同じである場合、作業をスキップすることに依存している
    - 状態の過去のコピーをメモリに保持し、必要に応じてそれらを再利用できるため、Undo/Redo、変更履歴表示、フォームを以前の値にリセットなどが実装しやすい
  - Try out some challenges 1 - ボタンで点数加算を Fix
  - Try out some challenges 2 - ドラッグでボックスを移動 Fix (Canvas.jsx, CanvasBackground.jsx, CanvasBox.jsx)

## Updating Arrays in State 状態の配列の更新

* React で、状態で格納する場合はオブジェクトと同じく不変として扱う必要がある
  - 新しい配列を作成(または既存の配列のコピーを作成)してから、新しい配列を使用するように状態を設定する必要がある
* ミューテーションなしでアレイを更新する
  - 配列は単なる別の種類のオブジェクト。読み取り専用として扱う必要がある(ダメ：`arr[0] ='bird'`、push/pop メソッド)
  - 代わりに、配列を更新するたびに、新しい配列を状態設定関数に渡す
  - filter() や map() などの非変異メソッドを呼び出すことにより、状態の元の配列から新しい配列を作成する
  - [使うメソッド](https://beta.reactjs.org/learn/updating-arrays-in-state#updating-arrays-without-mutation)
    - 追加：push, unshift ではなく concat, スプレッド構文
    - 削除：pop, shift, splice(配列を変更) ではなく filter, slice(配列の一部をコピー)
    - 置換：splice, arr[i] ではなく map
    - reverse, sort ではなく、初めに配列を複製
    - または、 Immer を使用することもできる
    - Reactでは、状態のオブジェクトや配列を変更したくないため、スライス（p! なし）をより頻繁に使う
  - 配列への追加 (List.jsx)
    - push() は、配列を変更してしまう。代わりに、useState のセッター関数で、既存のアイテムをスプレッド構文でコピーした上で新しいアイテムを後 push(前に加えたい場合は前に = unshift)
      追加、新しい配列を作成する
  - 配列からの削除 (List2.jsx)
    - 配列からアイテムを削除する簡単な方法は、フィルターでの除外。でも、そのアイテムを含まない新しい配列を作成する。元の配列は変更されないのでOK
  - 配列の変更 (ShapeEditor.jsx)
    - 配列の一部またはすべての項目を変更する場合は、map() で新しい配列を作成する
    - map(関数) に渡す関数は、データまたは index（あるいはその両方）に基づいて、各アイテムをどう処理するかを決定できる
  - 配列内のアイテムを置き換える (CounterList.jsx)
    - アイテムを置き換えるには、mapを使用して新しい配列を作成する
    - map 呼び出し内で、2番目の引数としてアイテムインデックスを受け取る
    - これを使用し、元のアイテム(最初の引数)を返すか他の何かを返すかを決定する
  - 配列の任意の位置への挿入 (List3.jsx)
    - 特定の位置にアイテムを挿入するには、slice()メソッドとスプレッド構文を使う
  - 配列に他の変更を加える (List4.jsx)
    - 配列を逆にしたり、並べ替えたり、map()/filter() のような非変異メソッドだけではできないことがある
    - reverse()/sort() メソッドを使うが、元配列を変更するため直接使用は不可。最初に元配列をコピーしてから変更すれば良い
    - ただし、浅いコピーのため、中の既存のアイテムの直接変更は配列が変化してしまうので NG
    - nextList[0] と list[0] は同じオブジェクトを指すので、nextList[0] を変えてはダメ
    - 変更する代わりに、変更する個々のアイテムをコピーすることで解決(次で説明)
  - 配列内のオブジェクトの更新 (BucketList2.jsx)
    - オブジェクトは実際には配列の内部に配置されていない。格納されてるのは参照値
    - なので、list[0] のようなネストされたフィールドの変更の際は注意する必要がある。別の人の artwork リストが、配列の同じ要素を指している可能性がある
    - なので、ネストされた状態を更新するときは、更新するポイントからトップレベルまでコピーを作成する必要がある
    - 作成したばかりのオブジェクトのみを変更する必要がある。なので、map() で、古いアイテムを変更せず、更新されたバージョンに置き換える
    - 新しいアイテムを挿入する場合は変更できるが、すでに状態になっているものを扱う場合は、コピーを作成する必要がある
  - Immer で簡潔な更新ロジックを作成 (BucketList3.jsx)
    - オブジェクトと同様に、ネストされた配列の変更はは繰り返し処理でみづらくなる
    - Immer で、状態を変更することなく、イベントハンドラーを非常に簡潔に保つことができる
    - Immer は裏でドラフトに加えた変更に従い、常に最初から次の状態を構築する(元の状態を変更しているのではなく、Immerが提供する特別なドラフトオブジェクトを変更する)。なので、 `artwork.
      seen=nextSeen` 
      のようなミューテーションが問題ない (push()/pop()等も可)
    - 状態オブジェクトが非常に深い場合は、フラットになるように別の方法で再構築することをオススメ
  - Try out some challenges 1 (ShoppingCart.jsx)
    - メモ：product.count++ ではダメだった → ++product.count
  - Try out some challenges 2 (ShoppingCart2.jsx)
    - 削除ボタンの実装。カウントが1のときに「–」を押すと、製品はカートから自動的に削除するように
  - Try out some challenges 3 うまくいかない例
    - (TaskApp.jsx, TaskAppAddTodo.jsx, TaskAppTaskList.jsx)
  - Try out some challenges 3 修正
    - (TaskApp.jsx, TaskAppAddTodo.jsx, TaskAppTaskList.jsx)
  - Try out some challenges 3 Immer 使う例
    - (TaskApp2.jsx, TaskAppAddTodo.jsx, TaskAppTaskList.jsx)

## Managing State - 状態の管理 (中級)

* アプリケーションが大きくなるにつれて、状態がどのように編成され、データがコンポーネント間でどのように流れるかについて、より意図的にすることが役立つ
* 冗長または重複状態は、バグの一般的な原因
* 状態を適切に構造化する方法、状態更新ロジックを保守可能に保つ方法、および離れたコンポーネント間で状態を共有する方法を学ぶ
* この章で学ぶこと
    - 状態の変化に伴う UI の変化についての考え方
    - 状態をうまく構成する方法
    - コンポーネント間で共有するために「状態を持ち上げる」方法
    - 状態を保持するかリセットするかを制御する方法
    - 複雑な状態ロジックを関数に統合する方法
    - 「プロップドリル」なしで情報を渡す方法
    - アプリの成長に合わせて状態管理を拡張する方法
* 状態の入力に応じて反応させる Reacting to input with state
  - Reactを使用すると、コードから UI を直接変更(ボタンを無効にするなど)することはない
  - 代わりに、コンポーネントのさまざまな視覚的状態に対して表示する UI を記述する
  - 初期状態、入力状態 などユーザー入力に応じて状態変化をトリガーする
  - クイズフォーム (Form6.jsx)
    - ステータス状態変数で、送信ボタンの有効/無効、成功メッセージ表示するかどうかを決定する方法
* 状態構造の選択 Choosing the state structure
  - 状態の適切な構造化で、変更やデバッグが容易なコンポーネントにできる
  - 重要なのは、State に重複や冗長さを取り除くとこと。でないとバグの原因になる(Form7)◯×
* コンポーネント間で状態を共有する
  - 2つのコンポーネントの状態を常に一緒に変更したい場合、双方から状態を削除し、最も近い共通の親に移動してから props を介してそれらに渡す = 「リフティングステートアップ」
  - 例：一度に1つのパネルのみをアクティブにする (Accordion.jsx)
* 状態の保持とリセット
  - コンポーネントの再レンダリング時、Reactは、ツリーのどの部分を保持/更新するか、どの部分を破棄/再作成するかを決定する必要がある
  - デフォルトで、React は、以前にレンダリングされたコンポーネントツリーと「一致」するツリーの部分を保持する
  - ただし、これが希望どおりでない場合がある
  - 受信者を切替えで入力をリセット(Messenger.jsx, MessengerContactList.jsx, MessengerChat.js)◯×
  - デフォルトの動作をオーバーライドし、コンポーネントに<Chat key = {email} />などの別のキーを渡すことで、コンポーネントの状態を強制的にリセットできる
  - 受信者が異なる場合、新しいデータ（および入力のような UI）を使用して最初から再作成する必要がある別のチャットコンポーネントと見なす必要があることを React に伝える
  - これで、同じコンポーネントをレンダリングした場合でも、受信者を切り替えると常に入力フィールドがリセットされる
* useReducer 状態ロジックを reducer に抽出する (TaskApp3.jsx ★★TODO:動かない)
  - 補足：useReducer は、変数を宣言時に state の更新方法をあらかじめ dispatch に設定しておける
  - 補足：useState と異なり、state を複数同時に取り扱うことが出来る
  - 補足：特定の action に基づいて reducer で state を更新
  - 補足：useState は useReducer に内部実装されている
  - 補足：`const [state, dispatch] = useReducer(reducer,'初期値')` 引数に渡す
  - 補足：Reduxで実現していたstate管理が、useContext & useReducerで実現できる
  - 補足：[React hooksを基礎から理解する (useReducer編) - Qiita](https://qiita.com/seira/items/2fbad56e84bda885c84c)
  - 補足：非依存な純粋関数であることからstateに関するロジックの単体テストが書ける。useStateはロジックがsetStateに依存してしまう(stateに依存)のでどうしてもテストコードを書けない
    - [useStateとuseReducerって実は大きな違いがある](https://zenn.dev/tis1116/articles/8b04672a0221bb)
  - reducer は state を更新するための関数、dispatch は、reducer を実行するための呼び出し関数
  - たくさんの状態更新があり、それが多くのイベントハンドラに分散しているコンポーネントは、圧倒される可能性がある
  - このような場合、コンポーネントの外部にあるすべての状態更新ロジックを reducer 関数１つに統合できる
  - イベントハンドラーは、ユーザーのアクションのみを指定するため簡潔になる
  - ファイル下部にある reducer 関数は、各アクションに応じて状態を更新する方法を指定する
* コンテキストを使用してデータを深く渡す
  - 複数の props を多数のコンポーネントに渡す場合や、多くのコンポーネントが同じ情報を必要とする場合、props を渡すのは不便
  - コンテキストを使うと、親コンポーネントは、その下のツリー内の任意のコンポーネントが、その深さに関係なく、props を明示的に通過(バケツリレー)させることなく、情報を利用できるようになる
  - 例：見出しコンポーネント：最も近いセクションにそのレベルを「尋ねる」ことによって、その見出しレベルを決定。情報提供はコンテキストを通じて行い、props は使わない (Page.jsx, PageSection.jsx, 
    PageHeading.jsx, PageLevelContext.jsx)
* reducer と context によるスケールアップ
  - reducer で、コンポーネントの状態更新ロジックを統合できる
  - context で、情報を他のコンポーネントに深く渡すことができる
  - reducer と context を組み合わせて、複雑な画面の状態を親コンポーネントが reducer で管理できる (TaskApp4.jsx, TaskApp4TasksContext.jsx, 
    TaskApp4AddTask.jsx, TaskApp4TaskList.jsx) ★★TODO: 理解できてないので理解
  - useContext の解説
    - [React useContextの使い方を確認 - DevelopersIO](https://dev.classmethod.
      jp/articles/react-i-checked-again-how-to-use-usecontext/) 明瞭なサンプルあり
    - どの階層の Component であっても、props による値の引き渡し(バケツリレー)不要で、グローバルにデータ共有できる
    - 親コンポーネントで、createContext() で Context を作成し渡したい値をセット (defaultValue 必須)
    - `<Context.Provider value=セットした値>`でラップした配下の子コンポーネント内で、useContext() で、上で設定した Context の値を呼び出せる
    - defaultValue 引数は、コンポーネントのツリー上に一致するプロバイダーがない場合にのみ使用される
    - コンポーネントツリー内で、同じ Context Provider を複数回使った場合、Context を呼び出したコンポーネントから最も近い Context Provider で指定された値が適用される
    - Context を呼び出した 子コンポーネントのどの祖先コンポーネントでも Context Provider が使われていない場合は、初めの createContext() で指定された defaultValue 
      の値が適用される
  - useContext その他メモ
    - さまざまなネストレベルの多くのコンポーネントが一部のデータにアクセスする必要がある場合に有用
      - 一部の props を多くのレベルに渡すのを避けたいだけの場合は、コンポーネントの構成の最適化(コンポーネント自体を渡したり) が useContext を使うよりも単純なソリューションであることも
    - 「親から子」という原則。createContext()でセットする状態がコンポーネントツリーの頂点になくてはならない
    - 管理している値が変化すると再レンダリングが走る。その状態を実際に使用しているコンポーネントのみが再レンダリングされる(バケツリレー途中の状態を使わないコンポーネントは再レンダリングされない)のでパフォーマンスが良い
    - 読み取りが多い、更新頻度が低い状態の管理に最適
    - context 由来の状態は、一種の外部ソースに近い性質を持つ
      - インターフェース上は、外部サーバーからデータを fetch するコンポーネントと似た振る舞い
      - デメリット：テストのしやすさにやや難がある
        - 「container コンポーネントと presentational コンポーネント」のような概念を持ち出すことである程度解決できる
    - パフォーマンスチューニングが面倒
    - コンポーネント間で共有されるステートが複雑化するとツラくなる
    - 状態管理ライブラリとの使い分けは？
      - バケツリレーの途中のコンポーネントも状態を使うなら、useState + バケツリレーが良い
        - 状態が変化した際は、バケツリレー途中の全コンポーネントが再レンダリングされてしまう
        - リファクタリングで名前や型を変更する際もツラくなる
          - ステートの種類に応じて別々の Provider を用意しなければならない
          - 色々な状態を１つの状態に突っ込む手もありますが、そうなるとパフォーマンス上の利点が無くなる(その状態を使ってるコンポーネント全てが再レンダリングされるから)
          - 多くのコンテキストを個別に管理するか、パフォーマンスの低下かどちらかを受け入れなければならない
          - コンポーネントツリーの規模が小さいなら、パフォーマンス低下は許容範囲かも
      - Reduc、Recoil、Jotai
      - キャッシュ管理も：React-query、SWR、Apollo Client (Graph QL 使うなら)、フェッチしたデータの保持には有用
      - [React ステート管理 比較考察 - uhyo/blog](https://blog.uhy.ooo/entry/2021-07-24/react-state-management/)
    - [Context – React](https://reactjs.org/docs/context.html)
* 状態付きで入力に反応する Reacting to Input with State
  - Reactは、宣言型の方法で UI を操作する
  - 宣言型プログラミングとは、UI を細かく管理するのではなく、視覚的な状態ごとに UI を記述すること
  - UI 個々を直接操作する代わりに、コンポーネントの状態を記述し、ユーザー入力に応じてそれらを切り替える
  - 学ぶこと
    - 1: 宣言型 UI プログラミングと命令型 UI プログラミングの違い
      - 命令型プログラミングでは、何が起こったかに応じて、UI を操作するための指示を作成する
      - 車で助手席に乗り、運転手にアクションを順番に伝えるのようなもの。運転手はあなたがどこに行きたいのかわかっておらず、あなたの命令に従うだけ
    - 2: コンポーネントが存在する可能性のある様々な視覚的状態を列挙する方法 
    - 3: コードから様々な視覚的状態間の変更をトリガーする方法
  - サンプル
    1. フォームに何かを入力すると「送信」ボタンが有効に
    2. 「送信」を押すとフォームとボタンの両方が無効になり、スピナーが表示
    3. ネットワークリクエスト成功でフォームが非表示、「ありがとう」のメッセージを表示
       or ネットワークリクエスト失敗でエラーメッセージを表示、フォームを再び有効に
  - 上記は命令型プログラミングでは相互作用の実装方法に直接対応
    - = 何が起こったかに応じて、UI を操作するための正確な指示を作成する必要がある
    - React でなく JS の命令型 UI プログラミングの例 (public/declarative-ui-form/)
      - http://localhost:3000/declarative-ui-form/
      - UI 操作は、孤立した例では十分に機能するが、複雑なシステム(様々なフォームで多くのページの更新)では管理が指数関数的に難しくなる
        - 新しい UI 要素やインタラクションを追加する際、既存の全コードを注意深くチェックして、バグが発生してないことを確認する必要がある
  - Reactはこの問題を解決するために作られた
    - Reactでは、UI コンポーネントを直接操作(有効化/無効化、表示/非表示)しない
    - 代わりに、表示したいものを宣言すると、React は UI を更新する方法を理解する
      - タクシーに乗り込み、行きたい場所を運転手に伝える感じ。目的地に連れて行くのは運転手の仕事、運転手は近道さえ知っているかも
  - UI について宣言的に考える
    - Reactで先ほどの UI を再実装する手順
      1. コンポーネント UI の様々な視覚的状態を特定・視覚化(モックアップ作成)
         - 空：フォームの "送信" ボタンが無効 
         - 入力：フォームの "送信" ボタンが有効 
         - 送信：フォームは完全に無効。スピナーが表示 
         - 成功：フォームの代わりに「ありがとう」のメッセージが表示 
         - エラー：入力状態と同じだが、追加のエラーメッセージが表示
         - 手順
           1. モックで分岐による状態変化を作成し、パラメータを手動打ち替えで試す(Form8.jsx)
              = ロジック接続前に UI を繰り返すことができる
      2. それらの状態変化を引き起こすものを決定
         - 2種類の入力に応じ、状態の更新をトリガー。どちらも状態変数の設定が必要
           - 人間による入力：ボタンクリック、フィールド入力、リンクのナビゲート etc. 
           - コンピューター入力：ネットワーク応答の到着、タイムアウトの完了、画像の読み込み etc.
         - 開発中のフォームでは、いくつかの異なる入力に応じて状態を変更する必要がある
           - テキスト入力の変更(人間) → テキストボックスが空かどうかに応じ、空の状態から入力状態に切り替える or 元に戻す
           - 送信ボタンをクリック(人間) → 送信状態に切り替わる 
           - 成功したネットワーク応答(コンピューター) → 成功状態に切り替え
           - 失敗したネットワーク応答(コンピューター) → 一致するエラーメッセージとともにエラー状態に切り替え
           - 処理の流れを視覚化 (実装前にバグを整理できる) [» サンプル](https://beta.reactjs.org/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fresponding_to_input_flow.dark.png&w=1920&q=75)
             1. 紙に各状態をラベル付きの円として描く
             2. 2つの状態間でそれぞれが矢印として変化するように描く
             3. この方法で多くのフローをスケッチ
      3. useState でメモリ内のコンポーネントの視覚的な状態を表す
           - "シンプルさ" が鍵。状態の各部分は「動く部分」、それをできるだけ少なくすること
           - "絶対にそこになければならない状態" から始める
             - 例：入力の回答 / 最後のエラーを保存するためのエラー(存在する場合)を保存
               - `const [answer, setAnswer] = useState('');` 以下同
               - answer, error
           - 次に、前述の視覚的状態のどれを表示するかを表す状態変数が必要になる
             - メモリ内でそれを表現する方法は複数あるため、実験する必要がある
             - 考えられる全ての視覚的状態をカバーするよう、十分な状態を追加することから始める
               - isEmpty, isTyping, isSubmitting, isSuccess, isError
               - この時点で最善でなくていい。リファクタリングしていくから
      4. 必須ではない状態変数を削除 (= 状態構造のリファクタリング)
         - 状態コンテンツの重複を避けたいので、重要なものだけを追跡
         - リファクタリングでコンポーネントを理解しやすく、重複減り、意図しない意味が回避される
         - 目標：メモリ内の状態が、ユーザーに見せたい有効な UI を表していない場合を防ぐこと
           - ダメな例：エラーメッセージを表示すると同時に入力を無効 → 修正できない
         - 状態変数が適切かチェックできるいくつかの質問
           1. この状態はパラドックスを引き起こしますか？
             - 例：isTyping と isSubmitting の両方を真にすることはできない
             - パラドックスは通常、状態が十分に制約されていないことを意味する
             - 2つのブール値の可能な組合せは4つあるが、有効な状態に対応するのは3つだけ
             - 「不可能」状態を削除するには、これらを組合せて "typing", "submitting", "success" の3つの値のいずれかである必要があるステータスにすることができる
           2. 同じ情報が、別の状態変数ですでに利用可能ですか？
             - もう1つのパラドックス：isEmpty と isTyping を同時に真にすることはできない
             - それらを別々の状態変数にすると互いに同期しなくなり、バグを引き起こすリスクに
             - isEmpty を削除し、代わりに `answer.length === 0` を確認できる
           3. 別の状態変数の逆から同じ情報を取得できますか？
             - 代わりに `error !== null` をチェックできるため、isError は不要
         - このクリーンアップの後、answer, error, status の3つ(元7)の重要な状態変数が残る
           - これらは不可欠。機能を壊さずに削除することはできない
      5. イベントハンドラーを作成・接続して状態を設定
    * まとめ
      - 元の命令例よりも長くなったが、脆弱性ははるかに低くなっている
      - すべてのインタラクションを状態の変化として表現すると、既存の状態を壊すことなく、後で新しい視覚的な状態を導入できる
      - また、インタラクション自体のロジックを変更せずに、各状態で表示する内容を変更することもできる
    * Try out some challenges 1 - 画像クリックで、画像と背景のクラスをトグル (Picture.jsx, index.css)
    * Try out some challenges 2 - 編集/表示モード切替 プロフィールエディタフォーム (EditProfile.jsx)
    * Try out some challenges 3 - 命令型ソリューションのリファクタリング ※JSで2と同等の処理を書くため省略した

## Choosing the State Structure 状態構造の選択(状態を構造化するための原則)

* ある状態を保持するコンポーネントの作成時、使用する状態変数の数とそれらのデータの形状を選択する必要がある
* 状態を適切に構造化することで、変更やデバッグが容易なコンポーネントと、常にバグの原因となるコンポーネントを区別できる
* 学ぶこと (状態を構造化するときに考慮すべきいくつかのヒント)
  1. 単一の状態変数と複数の状態変数の使い分け:グループ関連の状態
    - 適切な選択(誤りなく簡単に)を行うための指針となる原則
      1. 複数の状態変数を常に同時更新する場合は、それらを1つの状態変数(配列 or オブジェクト)にマージ
        - △ `const [x, setX] = useState(0); const [y, setY] = useState(0);`
        - ◯ `const [position, setPosition] = useState({ x: 0, y: 0 });`
        - 状態変数がオブジェクトの場合、他のフィールドを明示的にコピーせずに、その中の1つのフィールドのみを更新することはできない
        - たとえば、MovingDot.jsx では、`setPosition({x：100})` は実行不可。`setPosition({ ...position, x:100 }` と一旦全てを複製してオーバーライドする必要がある
              - サンプル：MovingDot.jsx
              - 必要な状態の異なる部分の数がわからない場合も配列かオブジェクトでグループ化する
                - 例：ユーザーがカスタムフィールドを追加できるフォームがある場合
            2. 複数の状態が互いに矛盾し「不一致」になり得る状態が構造化されている場合、間違いの余地がある(FeedbackForm2.jsx)
              - 修正前のダメなサンプル：isSending, isSent が同時に true になる可能性がある(setIsSent, setIsSending を常に一緒に呼び出す必要がある)
              - → isSending と isSent が同時に true になることはない。'typing'(初期値), 'sending', 'sent' いずれかの値をとる 1つの状態変数 status にする
                に置き換える → 修正後の良いサンプル。相互に同期しなくなる心配が必要なくなった
            3. 冗長な状態を避ける。レンダリング中にコンポーネントの props、またはその既存の状態変数から計算できる情報は、そのコンポーネントの状態に入れない
              - 冗長な状態変数の例(Form9.jsx 修正前)
              - 修正後：setFirstName, setLastName いずれかを呼び出すと、再レンダリングがトリガー、fullName が新しいデータから計算される(修正後)
            5. 状態の重複を避ける
              - 同じデータが複数の状態変数間、またはネストされたオブジェクト内で複製される場合、それらの同期を維持することは困難。可能な場合は重複を減らす
              - 重複があるよくない例(Menu.jsx)
                - selectedItem のコンテンツが、アイテムリスト内のアイテムの1つと同じオブジェクト。重複している
              - 重複があるよくない例。問題発生中(Menu.jsx)
                - テキストフォーム入力を変更しても、下部のラベルに反映されない問題
                - 理由：状態変数に重複があり、selectedItem を更新できていないため
                - 修正(重複を削除)：本質的な状態のみを維持するように。selectedId を状態に保持し、items 配列でその ID を持つアイテムを検索して selectedItem を取得するよう修正
            6. 深くネストされた状態を避ける。状態をフラットな方法で構造化する
          - データベースエンジニアがデータベース構造を「正規化」し、バグの可能性を減らすのと同様
  2. 状態を整理するときに避けるべきこと
    - ネストされたオブジェクトの状態を更新するには、オブジェクトを丸ごとコピーし、変更された部分をオーバーライドで更新する必要がある
    - 深くネストされたオブジェクトのデータ変更や削除は、非常に冗長になる
    - 状態がネストされすぎて簡単に更新できない場合は「フラット」に再構築する (=正規化)
    - 「フラット」にすることで、状態の更新を容易になる、重複の発生を防げるなどのメリットがある
    - 最適化のサンプル　ビフォーアフター。子の ID の配列を保持させ、再帰的に処理させる (PlaceTree.jsx, placeTreeData.js)
    - 削除。2つのレベルの状態を更新 (サンプル)
      - 1つめは自身、2つめは、親の childIds 配列から削除された ID を削除
    - useImmer を使い、さらに改善 (サンプル)
      - メモリ使用量の改善「テーブル」オブジェクトから削除されたアイテム（およびその子！）も削除
      - 更新ロジックをより簡潔に
    - 場合によっては、ネストされた状態の一部を子コンポーネントに移動することで、状態のネストを減らすこともできる
      - アイテムがホバーされているかどうかなど、"保存する必要のない一時的な UI 状態"に適している
    - Try out some challenges
      1. ドロップダウンメニューで時計の時間表示の色を変更 (Clock2.jsx ★★TODO: 修正)
      2. 壊れた旅行管理リスト(≒ToDoリスト)の修正 (TravelPlan.jsx)
  3. 状態構造に関する一般的な問題を修正する方法
* 番外編
  - useEffect を使い API からデータをフェッチするサンプル(FetchAPI.jsx)

## Sharing State Between Components コンポーネント間の状態共有

* 2つのコンポーネントの状態を常に一緒に変更したい場合、状態を持ち上げる
  - 双方から状態を削除し、最も近い共通の親に移動。props を介してそれらに渡す
* 例：アコーディオンコンポーネント (Accordion2.jsx)
  - 親アコーディオンコンポーネントが2つの別々のパネルをレンダリング
  - 各 Panel コンポーネントに、表示フラグのブール値 isActive 状態がある
  - それぞれ独立してるので、もう一方のパネルには影響しないのを確認
* 例：アコーディオンコンポーネント2 - 一度に1つのパネルのみが展開されるように変更
  - 2番目のパネルを展開すると最初のパネルが折りたたまれるように
    1. 子コンポーネントから状態を削除(親コンポーネントが制御)
    2. 共通の親からハードコードされたデータを渡す
    3. 共通の親に状態を追加、イベントハンドラーと一緒に渡す
      - イベントハンドラーを子に渡すことで、子が親の状態を変更できる
* 制御されたコンポーネントと制御されていないコンポーネント
  - 制御されている：ローカル状態のコンポーネント。親が影響を与えることができない
  - 制御されている：コンポーネントのローカル状態ではなく、親からの props で駆動される
* 各ステートの信頼できる唯一の情報源
  - 状態の固有の部分ごとに、それを「所有する」コンポーネントを選択する
  - コンポーネント間で共有状態を複製する代わりに、それを共通の親に持ち上げ、props で子に渡す
* Try out some challenges
  1. Synced inputs (SyncedInputs.jsx)
  2. Filtering a list (FilterableList.jsx)
    - 検索クエリに従いリストをフィルタリング
    - (例題、filterItems は実装・インポート済みのため、自分で作成する必要はない)

★★TODO: 次：https://beta.reactjs.org/learn/preserving-and-resetting-state

★★TODO: 未消化：https://beta.reactjs.org/learn/choosing-the-state-structure の Try out some challenges