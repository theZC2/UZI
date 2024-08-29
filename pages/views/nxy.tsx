import { useState } from "react"
import '../scss/Index.scss'

function createPage(text: string, setCurrentPage: (page: number) => void, currentPage: number) {
    return <div className="win">
        <h1>{text}</h1>
        <Button onClick={() => { setCurrentPage(currentPage + 1) }}>Yes</Button>
    </div>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Button({ onClick, children }: any) {
    return <div><button onClick={onClick} className="button">{children}</button></div>
}

const Pages = [
    ({ setCurrentPage }: { setCurrentPage: (page: number) => void, currentPage: number }) => <div className="win">
        <h1>{'你想要UZI跳枪的课程？'}</h1>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
            <Button onClick={() => { setCurrentPage(1) }}>Yes</Button>
            <Button onClick={() => { window.close() }}>No</Button>
        </div>
    </div>,
    ({ setCurrentPage, currentPage }: { setCurrentPage: (page: number) => void, currentPage: number }) => createPage("不是你配吗要我的课程", setCurrentPage, currentPage),
    ({ setCurrentPage, currentPage }: { setCurrentPage: (page: number) => void, currentPage: number }) => createPage("UZI跳枪", setCurrentPage, currentPage),
    ({ setCurrentPage, currentPage }: { setCurrentPage: (page: number) => void, currentPage: number }) => createPage("UZI跳枪已经失传了懂没懂", setCurrentPage, currentPage),
    ({ setCurrentPage, currentPage }: { setCurrentPage: (page: number) => void, currentPage: number }) => createPage("已经失传了", setCurrentPage, currentPage),
    ({ setCurrentPage, currentPage }: { setCurrentPage: (page: number) => void, currentPage: number }) => createPage("在那个2020年已经失传了", setCurrentPage, currentPage),
    () => <Button onClick={() => { window.close() }}>Close</Button>
]

export default function Nxy() {
    const [currentPage, setCurrentPage] = useState(0)
    const Page = Pages[currentPage]
    return (<>
        <Page setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>)
}