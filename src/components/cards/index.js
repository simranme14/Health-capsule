// import { fontSize } from "@mui/system";
// import React from "react";
// import './index.css';
// const Card = ({ setOpen,id, background, innerbg, bordercolor, mainText, secondaryText, time, notifcation }) => {
//     return <div className="cards" style={{
//         textAlign: 'center',
//         position: 'relative',
//         width: '202px',
//         height: 100,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginLeft: '70px',
//         marginBottom: '50px',
//         border: '1px',
//         maxwidth: 'calc(100% / 4)',
//         textalign: 'center',
//         borderRadius: '25px 0 0 0',
//         zIndex: '0',
//         }}
//         onClick={() => setOpen(id)}
//     >
//         <div className="card-inner" style={{ width: '100%', height: '80%', backgroundColor: background, borderTopLeftRadius: '25px', border: `${bordercolor} 1px solid`, secondaryText:'15px' }}>
//             <p style={{ color: 'black', height: '50px' ,fontWeight:'600'}}>{mainText}
//                 <br />
//                 <span style={{ color: 'black' ,fontSize:'10px' }}>{secondaryText}</span>
//             </p>
//             <div style={{
//                 width: 20,
//                 height: 20,
//                 position: 'absolute',
//                 top: -5,
//                 right: -5,
//                 borderRadius: "100%",
//                 padding: 2,
//                 color: 'white',
//                 border: '1px solid black',
//                 zindex: 1,
//                 backgroundColor: 'blue'
//             }}>
//                 {notifcation}
//             </div>
//             <div style={{ textAlign: 'center', color: 'white', width: '100%', backgroundColor: innerbg }}>Due in {time} hours</div>
       
//         </div>
        
//     </div>
// }
// export default Card
import { red } from "@mui/material/colors";
import React from "react";
import './index.css';
const Card = ({ setOpen,id, background, innerbg, bordercolor, mainText, secondaryText, time, notifcation }) => {
    return <div className="cards" style={{
        textAlign: 'center',
        position: 'relative',
        width: '202px',
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '60px',
        marginBottom: '50px',
        border: '1px',
        maxwidth: 'calc(100% / 4)',
        textalign: 'center',
        borderRadius: '25px 0 0 0',
        zIndex: '0',
    }}
        onClick={() => setOpen(id)}
    >
        <div className="card-inner" style={{ width: '100%', height: '80%', backgroundColor: background, borderTopLeftRadius: '25px', border: `${bordercolor} 1px solid` }}>
            <p style={{ color: 'black', height: '50px' }}>{mainText}
                <br />
                <span style={{ color: 'black',fontSize:'10px'  }}>{secondaryText}</span>
            </p>
            <div style={{
                width: 20,
                height: 20,
                position: 'absolute',
                top: -5,
                right: -5,
                borderRadius: "100%",
                padding: 2,
                color: 'white',
                border: '1px solid black',
                zindex: 1,
                backgroundColor: 'blue'
            }}>
                {notifcation}
            </div>
            <div style={{ textAlign: 'center', width: '100%', backgroundColor: innerbg}}>.</div> 
            {/* Due in {time} hours */}
        </div>
    </div>
}
export default Card