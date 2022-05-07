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
  - ネストされたオブジェクトの更新 (App7, Form2)
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
      - ルートコンポーネントとターゲットDOMノードを使用し、ReactDOM.render を呼び出すことで実行される (index.js, Image.jsx)
    - 1-2. 状態更新時の再レンダリング
      - set 関数で状態を更新することで、さらにレンダリングをトリガーできる (=トリガーされた関数コンポーネントを呼び出す)
      - コンポーネントの状態を更新すると、レンダリングが自動的にキューに入れられる(注文するレストランの客)
  2. Render: コンポーネントのレンダリング（キッチンから注文を取得）
      - レンダリングをトリガーした後、React はコンポーネントを呼び出し、画面に何を表示するかを判断する
      - 「レンダリング」とは、Reactがコンポーネントを呼び出すこと
      - 更新されたコンポーネントが他のコンポーネントを返す場合、Reactはそのコンポーネントを次にレンダリング。そのコンポーネントも何かを返す場合も同様
        (再帰的。ネストされたコンポーネントがなくなり、Reactが画面に何を表示するかを正確に認識するまで) (index.js, Gallery.jsx)
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
  - 「アップデータ関数」を渡すことで、Reactはキューを通過し、最終的に更新された状態を提供する(index.js, TestCount3.jsx)
    - `setNumber(n => n + 1)`
  - 状態を置き換えた後に状態を更新するとどうなるか？(index.js, TestCount3.jsx)
    - `setNumber(number + 5)` `setNumber(n => n + 1)` で +6 になる
  - 更新後に状態を置き換えるとどうなるか？(index.js, TestCount4.jsx)
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
  - Try out some challenges 1 - 遅延のある処理を扱うボタン
  - ★★TODO: Try out some challenges 1 - テスト

### Updating Objects in State - 状態のオブジェクトの更新

* State は、オブジェクトを保持できる
* ただし、React状態で保持しているオブジェクトを直接変更してはダメ。新しいオブジェクトを作成し、または既存のオブジェクトのコピーを作成し、そのコピーを使用するように状態を設定する必要があ
る
* js では、オブジェクト自体の内容を変更することが可能(ミュータブル)だが、他と同じように不変であるかのように扱う必要がある → 変更でなく、置き換え
* 状態のオブジェクトは、読み取り専用として扱う
* `setHoge({オブジェクトの内容})` と親オブジェクトを作成して元と同じプロパティと値をセットでコピー。これで React が変更されたことを認識し再レンダリング(index.js, MovingDot.jsx)
* ミューテーションは、すでに状態にある既存のオブジェクトを変更する場合にのみ問題になる。作成したばかりのオブジェクトを変更することは、他のコードがまだそれを参照していないため、問題はない
  - これは「局所突然変異」と呼ばれる。レンダリング中にローカルミューテーションを実行することも可能
* スプレッド構文を使用したオブジェクトのコピー (index.js, Form4.jsx)
  - 作成する新しいオブジェクトの一部として既存のデータを含めたい場合(例：フォーム内の1つのフィールドのみを更新、他のフィールドは以前の値を保持したい場合)
  - ...spread構文は「浅い」ことに注意。1レベルの深さまでしかコピーしない(高速だが、ネストされたプロパティを更新する場合は、複数回使用する必要がある)
* 動的な名前でプロパティを指定 (単一のイベントハンドラーで処理できる)
  - 呼び出し元の name に変えたいプロパティの名前を付けておき、上書きで [] 付きで動的にプロパティを設定することで冗長なイベントハンドラーをまとめてスッキリさせることができる(index.js, Form4.jsx 改)
* ネストされたオブジェクトの更新 (index.js, Form5.jsx)
  - 全てコピーし、変えたいプロパティを含む親プロパティの更新したい子プロパティをオーバーライド
  - 補足：実際は、ネストされたオブジェクトというものはなく、2つの異なるオブジェクトが参照仕合ってネストしているように見えている
  - 状態が深くネストされている場合の対策：フラット化する。or 状態構造を変更したくない場合は、ネストされたスプレッドへのショートカット (Immer ライブラリ等)を使用することを推奨
  - Immer ライブラリを使うと、ネストがいくらあってもドットシンタックス指定でスッキリ書ける
  - メモ
    - 一般的なReact最適化戦略は、前の小道具または状態が次のものと同じである場合、作業をスキップすることに依存している
    - 状態の過去のコピーをメモリに保持し、必要に応じてそれらを再利用できるため、Undo/Redo、変更履歴表示、フォームを以前の値にリセットなどが実装しやすい
  - Try out some challenges 1 - ボタンで点数加算を Fix

★★TODO: https://beta.reactjs.org/learn/updating-objects-in-state#treat-state-as-read-only から


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
