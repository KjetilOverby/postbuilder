import React, {useContext, useEffect} from 'react'
import { ContextAppData } from '../data/context/ContextAppData';


const create = () => {
    const {
        postInfo,
        setPostInfo
      } = useContext(ContextAppData);
      
    

return (
<>
<div className='create-container'>
   <h1>{postInfo && postInfo.header}</h1>
   <p>{postInfo && postInfo._id}</p>
   {!postInfo && <p>Ingen data fra valgt post</p>}

</div>
<style jsx>{`
.create-container {
    background: var(--primary);
    min-height: 100vh;
}
h1, p {
    color: var(--primary-text)
}
`}
</style>
</>
)
}

export default create