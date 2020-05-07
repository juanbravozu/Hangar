import React from 'react';
import PropTypes from 'prop-types';
import { LightenDarkenColor } from 'lighten-darken-color';  

function BaseShip(props) {

    const base = props.primaryColor;
    const dark = LightenDarkenColor(props.primaryColor, -20);
    const darker = LightenDarkenColor(props.primaryColor, -50);
    console.log(LightenDarkenColor(props.primaryColor, -50));
    return (
        <div className="ship__base">
            {props.shape == 1 && 
                <svg width="350" height="358" viewBox="0 0 480 490" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M219.029 446.553H260.971L270 489.66H210L219.029 446.553Z" 
                    fill="#363E49"/>
                    <path d="M368.155 210.049C368.155 120.573 265.631 0.339817 240 0.339844C214.369 0.339871 111.845 120.573 111.845 210.049V403.447L240 464.029L368.155 403.447V210.049Z" 
                    fill={base}/>
                    
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="111" y="0" width="258" height="465">
                        <path d="M368.155 210.049C368.155 120.573 265.631 0.339817 240 0.339844C214.369 0.339871 111.845 120.573 111.845 210.049V403.447L240 464.029L368.155 403.447V210.049Z" 
                        fill={base}/>
                    </mask>

                    <g mask="url(#mask0)">
                        <path d="M316.894 233.35C316.894 137.816 281.942 49.2719 240 0.339872L342.525 -18.3009L375.146 182.087L316.894 233.35Z" 
                        fill={dark}/>
                        <path d="M160.777 233.35C160.777 137.816 198.059 49.2719 240 0.339872L135.146 -18.3009L102.525 182.087L160.777 233.35Z" 
                        fill={dark}/>
                    </g>

                    <rect x="214.369" y="328.884" width="51.2621" height="102.524" rx="25.6311" 
                    fill={dark}/>
                    <path d="M279.612 120.775C279.612 67.0224 253.204 25.855 240 11.9904C226.796 25.855 200.389 67.0224 200.389 120.775C200.389 174.527 226.796 213.561 240 226.359C253.204 213.561 279.612 174.527 279.612 120.775Z" 
                    fill={dark}/>
                    <path d="M0 352.185L111.845 403.447V205.388L0 247.33V352.185Z" 
                    fill={dark}/>
                    <path d="M480 352.185L368.155 403.447V205.388L480 247.33V352.185Z" 
                    fill={dark}/>
                </svg>
            }

            {props.shape == 2 &&
            <svg width="438" height="350" viewBox="0 0 438 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M104.717 159.337L218.995 111.426L333.272 159.337L311.926 319.014H218.995H126.063L104.717 159.337Z" 
                fill={base}/>
                <path d="M0.947452 286.68L105.808 167.38L126.042 319.026H26.3221L0.947452 286.68Z" 
                fill={darker}/>
                <path d="M218.983 0.810059C178.129 45.4874 155.835 73.9398 120.911 152.561L218.983 111.425L317.055 152.561C282.131 73.9398 259.836 45.4874 218.983 0.810059Z" 
                fill={darker}/>
                <path d="M437.047 286.68L332.187 167.38L311.953 319.026H411.672L437.047 286.68Z" 
                fill={darker}/>
                <path d="M218.983 349.19L145.763 319.015H292.203L218.983 349.19Z" 
                fill={darker}/>
                <rect x="193.359" y="141.338" width="51.2725" height="13.9168" 
                fill={dark}/>
                <circle cx="218.996" cy="235.801" r="56.0858" 
                fill={dark}/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M105.808 167.381L126.042 319.028H26.3221L0.947452 286.681L105.808 167.381ZM99.5854 187.916L115.894 310.144H30.6441L12.4914 287.004L99.5854 187.916Z" 
                fill={dark}/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M332.187 167.381L311.953 319.027H411.672L437.047 286.681L332.187 167.381ZM338.409 187.916L322.1 310.144H407.351L425.503 287.004L338.409 187.916Z" 
                fill={dark}/>
                <path d="M349.721 332.107L342.492 319.027H395.596L390.276 332.107H369.044H349.721Z" fill="#363E49"/>
                <path d="M49.5884 332.107L42.3594 319.028H95.463L90.1435 332.107H68.9112H49.5884Z" fill="#363E49"/>
            </svg>
            }

            {props.shape == 3 &&
           <svg width="238" height="350" viewBox="0 0 238 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M69.625 296.732H119H168.375V75.4025C168.375 49.4759 147.023 28.8872 135.204 12.1112C135.204 12.1112 128.781 0 119 0C109.219 0 102.796 12.1112 102.796 12.1112C90.9763 28.8872 69.625 49.4759 69.625 75.4025V296.732Z" 
                fill={base}/>
                <path d="M142.269 66.9389C145.825 75.6723 136.274 74.9445 119.001 74.9445C101.729 74.9445 92.1777 75.6723 95.7337 66.9389C99.2897 58.2055 107.013 54.1117 119.001 54.1117C130.99 54.1117 138.713 58.2055 142.269 66.9389Z" fill="#040917"/>
                <path d="M86.0733 296.731H151.392L165.579 324.938H72.4224L86.0733 296.731Z" fill="#363E49"/>
           </svg>
            
            }

            {props.shape == 4 &&
            <svg width="350" height="323" viewBox="0 0 350 323" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M189.671 58.2518H175.002H160.333L170.584 2.93385L166.696 0.282837L160.333 5.93834L132.586 123.997L106.429 141.494V154.395L118.094 162.172L78.1519 187.975L36.0891 167.12H0.742188L41.5679 222.085H61.1854L82.747 250.716V274.398L128.521 323L128.702 259.583L137.308 239.353L145.007 247.606H175.002H204.997L212.697 239.353L221.302 259.583L221.483 323L267.258 274.398V250.716L288.819 222.085H308.437L349.262 167.12H313.915L271.853 187.975L231.911 162.172L243.575 154.395V141.494L217.418 123.997L189.671 5.93834L183.309 0.282837L179.42 2.93385L189.671 58.2518Z" 
                fill={dark}/>
                <path d="M212.789 254.065V238.512C214.91 236.392 214.733 234.447 218.268 222.253C221.803 210.058 236.118 211.118 248.136 211.118C257.75 211.118 258.387 202.282 257.503 197.863H271.818L312.821 175.418L278.711 202.812L281.539 218.365L266.34 234.447L257.503 231.796L221.272 258.837L212.789 254.065Z" 
                fill={base}/>
                <path d="M137.163 254.065V238.512C135.042 236.392 135.219 234.447 131.684 222.253C128.15 210.058 113.834 211.118 101.816 211.118C92.2018 211.118 91.5656 202.282 92.4493 197.863H78.1338L37.1313 175.418L71.2411 202.812L68.4134 218.365L83.6125 234.447L92.4493 231.796L128.68 258.837L137.163 254.065Z" 
                fill={base}/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M185.061 247.606C183.654 239.158 181.59 219.235 181.59 188.031C181.59 152.531 199.054 132.967 207.785 127.623L199.134 84.4115H151.556L142.905 127.623C151.637 132.967 169.1 152.531 169.1 188.031C169.1 219.235 167.036 239.158 165.629 247.606H175.003H185.061Z" 
                fill={base}/>
                <path d="M193.471 84.9662C193.471 95.1659 185.202 103.434 175.002 103.434C164.803 103.434 156.534 95.1659 156.534 84.9662C156.534 74.7665 164.803 66.498 175.002 66.498C185.202 66.498 193.471 74.7665 193.471 84.9662Z" 
                fill={base}/>
                <path d="M153.371 258.279L150.851 247.606H199.148L196.629 258.279H175H153.371Z" fill="#363E49"/>
            </svg>            
            }
        </div>
    );
}

BaseShip.propTypes = {
    shape: PropTypes.number,
    primaryColor: PropTypes.string,
}

export default BaseShip;