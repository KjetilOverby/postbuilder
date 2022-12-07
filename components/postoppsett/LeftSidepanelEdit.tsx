import React from 'react'


const LeftSidepanelEdit = () => {
return (
<>
<div className='sidepanel-container'>

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
    @-webkit-keyframes fadeInLeft { 0% { opacity: 0; -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0); } 100% { opacity: 1; -webkit-transform: none; transform: none; } }

`}
</style>
</>
)
}

export default LeftSidepanelEdit