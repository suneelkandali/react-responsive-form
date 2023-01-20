import react, { useState } from 'react';
import './index.css';

const ResponsiveForm = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        
      }}
    >
      <div
        style={{
          height: '50%',
          left: '30%',
          top: '30%',
          width: '40%',
          border: '3px solid',
          borderRadius: '30px',
          display:'flex',
          
          justifyContent: 'center',
          padding: '20px'
        }}
      >
       <table style={{ width: '100%', }}>
        <tr >
          <td style={{ display: 'flex', justifyContent: 'center'}}><p>Woogle</p></td>
        </tr>
        <tr>
          <td style={{ display: 'flex', justifyContent: 'center'}}><p>Please enter the Site/page and explain why you are reporting it.</p></td>
        </tr>
        <tr style={{ padding: '30px', display: 'flex', justifyContent: 'center'}}>
          <td style={{ width: '90%',  }}>
          <label for="url">Enter the Site/Page URL to report</label><br/>
          <input style={{ width: '100%'}} type="text" id="url" placeholder="Site/Page URL" />
          </td>
        </tr>
        <tr style={{ padding: '30px', display: 'flex', justifyContent: 'center'}}>
          <td style={{ width: '90%' }}>
          <label for="justification">Explain why the Site/Page should be reported</label><br/>
          <textarea style={{ width: '100%', height: '100px'}}  id="justification"  />
          </td>
        </tr>
        <tr>
          <td style={{ display: 'flex', justifyContent: 'center'}}><button>Submit report</button></td>
        </tr>
       </table>
       
       
      </div>
    </div>
  );
};

export default ResponsiveForm;
