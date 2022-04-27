import Avatar from './Avatar'
import Clock from './Clock'

function Card({ children }) {
  return(
    <div className="card">
      {children}
    </div>
  )
}

/**
 * 現在時刻を取得
 * ★★TODO: setInterval で時刻が動的に変わるように
 */
const showCurrentTime = () => {
  const now = new Date()
  return `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日
    ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
}

export default function Profile () {
  return (
    <>
      <Card>
        <Avatar
          person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
          size={100}
        />
      </Card>
      <Card>
        <Avatar
          person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }}
          size={80}
        />
      </Card>
      <Card>
        <Avatar
          person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
          size={50}
        />
      </Card>
      <hr />
      <select name="" id="color-selector">
        <option value="aqua">aqua</option>
        <option value="orange" selected>orange</option>
        <option value="green">green</option>
      </select>
      <Clock
        // ★★TODO: カラーと時間が動的に変わるように
        color={document.querySelector("#color-selector").value}
        time={showCurrentTime()}
        // time={setInterval(showCurrentTime(),1000)}
      />
    </>
  )
}