import { Slider } from 'antd'
import type { InputNumberProps } from 'antd'
import './scss/Index.scss'
import { useState } from 'react'
import Nxy from './views/nxy.tsx'

function Page({ setProgress } : Readonly<{ setProgress: (val: number) => void }>) {
    const onchange: InputNumberProps['onChange'] = (val) => {
        setProgress(val as number)
    }
    return (<>
        <div className="win">
            <h1>滑动获得UZI跳枪课程</h1>
            <div className="slide">
                <Slider defaultValue={0} max={100} min={0} tooltip={{ formatter: null }} onChange={onchange} />
            </div>
        </div>
    </>)
}

export default function Index() {
    const [progress, setProgress] = useState(0)
    return (<>
        {progress === 100 ? <Nxy /> : <Page setProgress={setProgress} />}
    </>)
}