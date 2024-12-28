import "./InputPopup.css";
import { useContext } from 'react';
import { MyContext } from '../../context/pages'; 


function InputPopup({ sendCloseButton }) {
    //const { value, setValue } = useContext(PagesContext);
    const { page, setPage } = useContext(MyContext);

    const sendData = () => {
          sendCloseButton(false);
     };
     // const handleAnalytics = () => {
     //      setValue('analytics');  // Update the context value
     //    };

        
     return (
          <div className="popup-overlay" onClick={sendData}>
               <div className="popup-content">
                <div className='image'></div>
                <div className="popup-text">
                        <h3 className="font-bold">Results</h3>
                        <p className='text-sm'>
                            Your chicken salad lunch generated 1.2 kg CO₂e,
                            primarily due to the production and transportation of
                            chicken. 
                        </p>
                        <div className='flex justify-end gap-3'>
                            <button onClick={sendData} className="text-sm button-secondary">Close</button>
                            <button onClick={() => setPage('analytics')} className="text-sm button-primary">Analytics</button>
                        </div>
                    
                </div>
               </div>
          </div>
     );
}

export default InputPopup;
