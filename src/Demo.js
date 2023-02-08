import './style.css';
import { Canvas } from '@react-three/fiber';
import Right from './Right.js';
import Custom from './Custom.js';
import Animation from './Animation.js';
import Before from './Before.js';

const Demo = (props) => {
  const values = props.values;
  const setValues = props.setValues;
  return(
    <div className="Demo">
      <header>※3Dサイトの商品プロモーション例として架空のスポーツカーを紹介しています</header>
      <ul>
        <li 
          className={ values.tabs[0] == 0 ? 'selected' : '' }
          style={{order: values.tabs[0]}}
          name={values.tabs[0]}
          onClick={() => setValues({...values, tabs: [0,1,2,3]})}
        >ライトプラン</li>
        <li 
          className={ values.tabs[1] == 0 ? 'selected' : '' }
          style={{order: values.tabs[1]}}
          name={values.tabs[1]}
          onClick={() => setValues({...values, tabs: [3,0,1,2]})}
        >カスタムプラン</li>
        <li 
          className={ values.tabs[2] == 0 ? 'selected' : '' }
          style={{order: values.tabs[2]}}
          name={String(values.tabs[2])}
          onClick={() => {alert('準備中です'); /*setValues({...values, tabs: [2,3,0,1]})*/}}
        >アニメーションプラン</li>
        <li
          className={ values.tabs[3] == 0 ? 'selected' : '' }
          style={{order: values.tabs[3]}}
          name={values.tabs[3]}
          onClick={() => {alert('準備中です'); /*setValues({...values, tabs: [1,2,3,0]})*/}}
        >従来のサイト</li>
      </ul>
      <div className="DemoContent">
        <div className="planTips">
          {
            values.tabs[0] == 0 ? <div className='tipsText'>
              3DモデルをWEBページに実装します。<br/><br/>
              
              画像や動画のような感覚でつかめる3Dモデルを実装
            </div>
            : values.tabs[1] == 0 ?  <div className='tipsText'>
            3DモデルをWEBページに実装<br/>
            ＋<br/>
            アニメーションでより多彩な表現を実装<br/>
            ＋<br/>
            色やパーツの変更が可能<br/><br/>
            
            画像や動画のような感覚でつかめる3Dモデルを実装
          </div>
            : values.tabs[2] == 0 ? 'c' 
            : values.tabs[3] == 0 ? 'd' 
            : undefined
          }
          <div className="manual">
            【 操作説明 】<br/><br/>

            <span className='icon'>
              <span role="img" aria-label="" className='iconSvg MouseLeftClick'/>
              <span className='iconText'>左クリックで360度回転</span>
            </span>

            <span className='icon'>
              <span role="img" aria-label="" className='iconSvg MouseWheel'/>
              <span className='iconText'>スクロールで拡大・縮小</span>
            </span>

            <p>画面右端のドットをクリックすることで別のページを見ることができます。</p>
          </div>
        </div>

        <Canvas className="canvas">
          <>
            {values.tabs[0] == 0 ? <Right/> 
              : values.tabs[1] == 0 ? <Custom/>
              : values.tabs[2] == 0 ? <Animation/>
              : values.tabs[3] == 0 ? <Before/>
              : undefined
            }
          </>
        </Canvas>
      </div>
    </div>
  )
}

export default Demo;