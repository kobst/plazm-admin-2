import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components'

const StyledPopup = styled(Popup)`
    height: 40px;
    width: 40px;
    border: 1px solid;
    font-size: 16px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
`;

const PopUpContent = styled.div`
border: 1px solid;
font-size: 16px;
background: rgb(255, 255, 255);
box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
font-family: 'IBM Plex Sans', sans-serif;
border-radius: 6px;
`

const PopUpActions = styled.div`
border: 1px solid;
font-size: 16px;
background: rgb(255, 255, 255);
box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
font-family: 'IBM Plex Sans', sans-serif;
border-radius: 6px;
`

const MissingInfoPopUp = ({missingInfo, showMissingInfo, setShowMissingInfo}) => (
    <StyledPopup
    open={showMissingInfo}
    modal
    nested
  >
    {close => (
      <div className="modal">
        {/* <div className="content">
          {missingInfo} is missing
        </div> */}
        <PopUpContent>
        {missingInfo} is missing
        </PopUpContent>
        <div className="actions">
        <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              setShowMissingInfo(false)
              close();
            }}
          >
            Ok
          </button>

        </div>
      </div>
    )}
  </StyledPopup>
);

export default MissingInfoPopUp