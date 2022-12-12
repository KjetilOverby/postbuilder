import React from 'react'
import RingPanelComponent from './RingPanelComponent'
import ringlist from '../../data/ringList'




const LeftSidepanelEdit = ({cancel, editModeStartRings, editModeEndRings, editModeRawInput, editBlink }: any) => {
return (
<>
<div className='sidepanel-container p-5'>
    <div>
        <h1 className='text-teal-100 edit-header'>Redigering</h1>
        <div>

        <p onClick={editModeStartRings} className='text-teal-100 tab'>Utfylling foran</p>
        <p onClick={editModeEndRings} className='text-teal-100 tab'>Utfylling bak</p>
        <p onClick={editModeRawInput} className='text-teal-100 tab'>Råmål</p>
        </div>
        <hr />
    </div>
    { editBlink.startRings === 'editModeStartRings' &&
    <div>
        <RingPanelComponent list={ringlist} />
    </div>

    }
    { editBlink.endRings === 'editModeEndRings'  &&
    <div>
        <RingPanelComponent list={ringlist} />
    </div>

    }
    <div>

  <p className='text-teal-100' onClick={cancel}>AVBRYT</p>
    </div>
</div>
<style jsx>{`

    .sidepanel-container {
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100vh;
        background: black;
        width: 20rem;
        z-index: 10;
        animation: fadeInLeft .3s
    }
    .edit-header {
        margin-bottom: 1rem;
        font-weight: bold
    }
    .tab {
        margin-bottom: 1rem
    }
    .tab:hover {
        cursor: pointer
    }
    @-webkit-keyframes fadeInLeft { 0% { opacity: 0; -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0); } 100% { opacity: 1; -webkit-transform: none; transform: none; } }

`}
</style>
</>
)
}

export default LeftSidepanelEdit