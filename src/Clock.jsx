/**
 * 時計コンポーネント
 */
export default function Clock({ color = "orange", time }) {
  return (
    <h1 style={{ color: color }}>
      時間：{time}
    </h1>
  );
}
