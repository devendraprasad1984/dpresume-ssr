import {config} from "../../configs/config";


const HomeDemo = () => {
    const demoPageContent = () => {
        let res = config.localdata.HOME_DEMO
        let {links, youtube} = res
        let printLinks = () => links.map((x,i) => {
            let num = Math.floor(Math.random() * config.colors.length)
            let color = config.colors[num] || 'white'
            return <a key={'link-demo'+i} className="white pcenter mcard" target="_blank" href="${x.href}">
                <span style={{color: color}} className="center">{x.name}</span>
            </a>
        })

        let printYouTubeVideos = () => youtube.map((x,i) => {
            let vtag = <span key={'link-video-demo'+i}>
                <h2>{x.name}</h2>
                <iframe width="100%" height="80%" src={x.src} frameBorder="0" allowFullScreen="allowfullscreen"/>
                </span>
            return vtag
        })

        return <div className='margin-ud'>
            <h1>Demo Examples</h1>
            <div className="flexbox cards">{printLinks()}</div>
            <br/><br/>
            <h1>few Video Demo</h1>
            <div className="flexbox-video video-cards">{printYouTubeVideos()}</div>
        </div>
    }

    return <div>{demoPageContent()}</div>
}
export default HomeDemo