import React from 'react'


const PostOppsettComponent = ({postInfo}:any) => {
return (
<>
<div className=''>
    <div className='grid place-items-center h-screen'>

      <div className='flex items-center'>
       <div className='flex'>
            {postInfo && postInfo.startRings.map((item:any) => {
                return (
                    <>
              <div className='outerRingContainer'>
                   <div key={item._id} className='ringcomponent fillrings'>{item.input}</div>
           </div>
                    </>
                )
            })}
            </div>
    <div className='flex relative'>
            {postInfo && postInfo.rawInput.map((item:any) => {
                return (
                    <>
              <div className='outerRingContainer'>
                <p className='absolute rawInput'>{item.input}</p>
                   <div key={item._id} className='ringcomponent rawrings'>{(item.input + 1.4).toFixed(1)}</div>
                   <p className='shims1'>{item.ring}</p>
                   <div className='sawBlade bg-slate-400'></div>
           </div>
                    </>
                )
            })}

            {/* <p className="shims1">
{Number(
  ringVal - ring - Number(shims2 != undefined && shims2)
).toFixed(1)}
</p> */}
            
            </div>
            <div className='relative'>

            <div className='sawBlade2 bg-slate-400'></div>
            </div>
            
    <div className='flex'>
            {postInfo && postInfo.endRings.map((item:any) => {
                return (
                    <>
              <div className='outerRingContainer'>
                   <div key={item._id} className='ringcomponent fillrings'>{item.input}</div>
           </div>
                    </>
                )
            })}
            </div>
      
    </div>
    </div>
</div>
<style jsx>{`
.container {
    
}
.ringcomponent {
        border: 1px solid grey;
        height: 11rem;
        width: 5rem;
        display: grid;
        place-items: center;
        border-radius: 5px;
        color: slategrey;
        font-size: 1.5rem
    }
    .fillrings {
       background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    }
    .rawrings {
        background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%);
    }
    .outerRingContainer {
        height: 11.5rem;
        width: 5.5rem;
        border: 1px solid grey;
        display: grid;
        place-items: center;
        margin-right: 5px;
        border-radius: 5px;
        box-shadow: 3px 3px 10px grey;
        position: relative
    }
    .sawBlade {
        position: absolute;
        height: 30rem;
        width: .3rem;
        left: -5px;
        border: .5px solid black
       
    }
    .sawBlade2 {
        height: 30rem;
        width: .3rem;
        position: absolute;
        left: -4px;
        top: -15rem;
        border: .5px solid black
        
        
       
    }
    .rawInput {
        top: -28px
    }
    .shims1 {
            color: black;
            position: absolute;
            bottom: -25px;
            left: 50%;
            transform: translateX(-50%);
          }
`}
</style>
</>
)
}


export default PostOppsettComponent