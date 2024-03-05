import React from 'react'
import './styles/recommend.css'

export const recommend = () => {
    return(
        <div class="recommendPage">
            <nav class="navigationbarWrapper">
                <div class="navbarInner">
                    <div class="navLeft">
                        <img src="/src/assets/homepage/final-topright-logo.png" alt="logo" class="brand"></img>
                    </div>
                </div>
            </nav>
            <div class="recommendHeading"> RECOMMEND ROLES</div>
            
                <div class="recommendedList">
                 <div class="recommendList">
                    <div class="recommendImage">
                        <img class="featureImg" src="/src/assets/homepage/assess-skills.jpg" alt="img"></img>
                    </div>
                    <div class="recommendListname"> Janitor </div>
                 </div>
                 <div class="recommendList">
                    <div class="recommendImage">
                    <img class="featureImg" src="/src/assets/homepage/roadmap.jpg" alt="img"></img>
                    </div>
                    <div class="recommendListname"> Manager </div>
                  </div>
                  <div class="recommendList">
                    <div class="recommendImage">
                    <img class="featureImg" src="/src/assets/homepage/track-dev.jpg" alt="img"></img>
                    </div>
                    <div class="recommendListname"> Software Engineer </div>
                </div>
            </div>

            <div class="recommendButtonbar">
                <button class="recommendButton"> Select </button>
            </div>
        </div>
        
        
    )
}
export default recommend;