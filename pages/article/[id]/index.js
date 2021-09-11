import React from 'react'
import {useRouter} from "next/router";


const article = (props) => {
    const router = useRouter()
    const {id} = router.query
    const {articleById} = props
    const {title, body} = articleById
    return <div>
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
}

export const getServerSideProps = async (context) => {
    const {id} = context.params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let articleById = await res.json()
    return {
        props: {
            articleById
        }
    }
}


export default article
