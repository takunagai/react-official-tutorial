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
* 

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
