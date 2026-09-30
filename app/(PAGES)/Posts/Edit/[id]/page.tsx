import React from 'react'
import FormDataa from '../../_components/FormData'
import { promises } from 'node:dns'
import axios from 'axios'

const PostInfoPage = async ({ params }:{params:Promise<{id:string}>}) => {
    const { id } = await params;
    const response = await axios.get(`http://localhost:3000/api/post/${id}`)
    const postInfo = response.data
    console.log(postInfo)


  return (
    <div>
      <FormDataa postInfo={postInfo} />
    </div>
  )
}

export default PostInfoPage
