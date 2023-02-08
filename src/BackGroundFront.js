import { Html } from "@react-three/drei";

const BackGroundFront = (props) => {
  return(
    <Html 
      fullscreen 
      zIndexRange={[10000000000000, 0]}
      calculatePosition={ () => [0, 0, 0] }
      className="BackGroundFront"
    >
      <div className="frontText">
        {props.num == 1 ? 
          <div className="first">
            <h1>S4 Celestial</h1>
            <div>
              FR<br/>
              V8<br/>
              300km/h
            </div>
          </div> :
        props.num == 2 ? 
        <div className="second">
          <h1>さあ跳んでいこう</h1>
          <div>
            先進的な機能を揃えつつ、走行性能・実用面の双方を<br/>
            バランスよく実現した純内燃機関スポーツカー
          </div>
        </div> :
        props.num == 3 ? 
        <div className="box left">
          <h1>シグネチャーヘッドライト</h1>
          <div>
            シャープな印象を与えるシグネチャーヘッドライトは、どのような環境でも優れた視認性を確保しつつ、S4 Celestialのアイデンティティとして確固たる存在感を放ちます。
          </div>
        </div> :
        props.num == 4 ? 
        <div className="box right">
          <h1>バックライト</h1>
          <div>
          </div>
        </div> :
        props.num == 5 ? 
        <div className="box right">
          <h1>格納式ドアハンドル</h1>
          <div>
            走行時や駐車時には自動的に格納され、乗降時にのみ出現することにより、デザイン・空力的に優れた機能を実現しました。
          </div>
        </div> :
        props.num == 6 ? 
        <div className="box left">
          <h1>ラゲッジスペース</h1>
          <div>
            走行性能だけでなく、実用面もしっかりとカバーできる大容量ラゲッジスペース。スーツケース、ゴルフバッグなど必要なものを確実に収納可能。
          </div>
        </div> :
        props.num == 7 ? 
        <div className="box left">
          <h1>アドバンスドタッチスクリーン</h1>
          <div>
            快適なモビリティライフを提供するタッチスクリーンを配置。ナビやオーディオプレイヤーだけでなく、エアコンやシートヒーター、Bluetooth、AM/FMチューナーにも対応。Apple CarPlayやAndroid Auto等を用いたスマホとの連携
          </div>
        </div> :
        props.num == 8 ? 
        <div className="box right">
          <h1>レーシングフロントシート</h1>
          <div>
            デザインと快適性を両立したスポーツシート。角度や高さ、前後位置を電動で調節可能。オプションからシートヒーターの追加が可能。
          </div>
        </div> :
        props.num == 9 ? 
        <div className="box left">
          <h1>リアシート</h1>
          <div>
            走りの追求だけでなく実用性も考慮したリアシートを採用。大人2名分のスペースを確保。フロントシートをスライドさせることで乗車が可能です。
          </div>
        </div> :
        props.num == 10 ? 
        <div className="box right">
          <h1>グローブボックス</h1>
          <div>
            大容量グローブボックスを採用。不足しがちな社内の収納スペースをカバーします。
          </div>
        </div> :
        props.num == 11 ? 
        <div className="third">
          {!props.configulater ? 
            <>
            <span>
              <h1>カスタマイズ</h1>
              <div>
                アナタだけのS4 Celestialをボディーやタイヤの交換、オプションの追加など自由自在にお試しいただけます。
              </div>
            </span>
            <button onClick={() => props.setConfigulater(!props.configulater)}>コンフィギュレーターを{props.configulater ? '停止' : '起動'}する</button>
            </>
          : 
            undefined
          }
          
        </div>
        : undefined}
      </div>
    </Html>
  )
}

export default BackGroundFront;