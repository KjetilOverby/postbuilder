import React from 'react'
import PostOppsettComponent from '../components/postoppsett/PostOppsettComponent';


const postoppsett = ({postInfo}:any) => {
    console.log(postInfo && postInfo.header);
    
return (
<>
<div className='bg-slate-100'>
   {postInfo && postInfo.header}
   <PostOppsettComponent postInfo={postInfo} />

</div>
<style jsx>{`
.container {
   
}
`}
</style>
</>
)
}

export default postoppsett