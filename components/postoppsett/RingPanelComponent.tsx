import React from 'react'


const RingPanelComponent = ({list}) => {
return (
<>
    <p className='text-teal-100'>Små ringer</p>
<div className='ringlist-container'>
   {list.small.map((item) => {
    return (
        <div className='ringvalue-container'>
            <p className='text-teal-100'>{item}</p>
        </div>
    )
   })}
</div>
    <p className='text-teal-100'>Store ringer</p>
<div className='ringlist-container'>
   {list.big.map((item) => {
    return (
        <div className='ringvalue-container'>
            <p className='text-teal-100'>{item}</p>
        </div>
    )
   })}
</div>
    <p className='text-teal-100'>Skims</p>
<div className='ringlist-container'>
   {list.shims.map((item) => {
    return (
        <div className='ringvalue-container'>
            <p className='text-teal-100'>{item}</p>
        </div>
    )
   })}
</div>
<style jsx>{`
.ringlist-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr));
    grid-gap: 5px
}
.ringvalue-container {
    border: 1px solid blue;
    display: grid;
    place-items:center;
    width: 3rem;

}
`}
</style>
</>
)
}

export default RingPanelComponent